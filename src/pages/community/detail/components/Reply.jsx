import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import likeImg from '../../resources/like.svg';
import likeFill2Img from '../../resources/like-fill2.svg';
import menuIcon from '../../resources/menuIcon.svg';

import S, { colorCSS, sizeCSS } from '../../style.js';
import { flexBetweenRow, flexCenterRow } from '../../../../styles/common.js';
import Rereply from './Rereply.jsx';
import ReplySubmit from './ReplySubmit.jsx';
import { useMenuContext } from './MenuContext.js';
import { useReportContext } from './ReportContext.js';
import PopupComponent from '../../../../components/commons/PopupComponent';
import { goToMemberProfile } from '../../../../utils/profileNavigation';

import defaultImage from '../../resources/default.png'

const LIMIT = 230;

const formatTimeAgo = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diff < 60) return '방금';
  if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)}일 전`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)}개월 전`;
  return `${Math.floor(diff / 31536000)}년 전`;
};

// loginId: 로그인 유저 id, memberId: 댓글 작성자 id, replyId: 댓글 id
// profileImg: 프로필 이미지, createdAt: 작성일
// author: 작성자, content: 내용, isLiked: 좋아요 여부, likeCount: 좋아요 수
// rereplyList: 대댓글 배열 (Rereply props 객체 배열)
// onReplyAdded: 대댓글 등록 후 페이지 갱신 콜백
const Reply = ({
  loginId,
  memberId,
  replyId,
  profileImg,
  createdAt,
  author,
  content,
  isLiked,
  likeCount,
  rereplyList,
  onReplyAdded,
}) => {
  const isOwner = loginId != null && loginId === memberId;
  const navigate = useNavigate();
  const { openMenuId, setOpenMenuId } = useMenuContext();
  const { openReport } = useReportContext();
  const menuId = useRef(`reply-${Math.random()}`).current;
  const menuOpen = openMenuId === menuId;
  const toggleMenu = () => setOpenMenuId(menuOpen ? null : menuId);

  const [currentContent, setCurrentContent] = useState(content);
  const [currentRereplyList, setCurrentRereplyList] = useState(rereplyList);
  const [expanded, setExpanded] = useState(false);
  const [replyOpen, setReplyOpen] = useState(false);
  const [liked, setLiked] = useState(isLiked);
  const [count, setCount] = useState(likeCount);
  const [deletePopupOpen, setDeletePopupOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(content);

  //댓글 컴포넌트 데이터 갱신
  const refreshReply = async () => {
    const res = await fetch('http://localhost:10000/api/posts/read-reply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ memberId: loginId, replyId }),
    });
    if (!res.ok) return;
    const json = await res.json();
    if (!json.success) return;
    const d = json.data;
    setCurrentContent(d.replyContent);
    setCurrentRereplyList((d.replies ?? []).map((rr) => ({
      loginId,
      memberId: rr.memberId,
      rereplyId: rr.id,
      profileImg: rr.memberProfileImageUrl ?? defaultImage,
      author: rr.memberNickname,
      content: rr.rereplyContent,
      createdAt: formatTimeAgo(rr.rereplyCreatedAt),
    })));
  };

  const handleEditClick = () => {
    setOpenMenuId(null);
    setEditText(currentContent);
    setEditMode(true);
  };

  const handleEditCancel = () => setEditMode(false);

  //댓글 수정
  const handleEditSave = async () => {
    if (!editText.trim()) return;
    const res = await fetch('http://localhost:10000/api/posts/update-reply', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: replyId, replyContent: editText }),
    });
    if (!res.ok) return;
    const json = await res.json();
    if (!json.success) return;
    await refreshReply();
    setEditMode(false);
  };

  //댓글 삭제
  const handleDeleteConfirm = async () => {
    setDeletePopupOpen(false);
    const res = await fetch(`http://localhost:10000/api/posts/delete-reply/${replyId}`, {
      method: 'DELETE',
    });
    if (!res.ok) return;
    const json = await res.json();
    if (json.success) onReplyAdded?.();
  };

  const handleRereplySubmit = async (text) => {
    if (loginId === 0) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
      return;
    }
    if (!text.trim()) return;
    const res = await fetch('http://localhost:10000/api/posts/write-rereply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ replyId, memberId: loginId, rereplyContent: text }),
    });
    if (!res.ok) return;
    const json = await res.json();
    if (!json.success) return;
    await refreshReply();
    setReplyOpen(false);
  };

  const handleLike = async () => {
    if (loginId === 0) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
      return;
    }
    const url = liked
      ? 'http://localhost:10000/api/posts/cancel-like-reply'
      : 'http://localhost:10000/api/posts/like-reply';

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ memberId: loginId, replyId }),
    });

    if (!res.ok) return;
    const json = await res.json();
    if (json.success) {
      setLiked(json.data.isLiked === 1);
      setCount(json.data.likeCount);
    }
  };

  const isOverflow = currentContent.length > LIMIT;
  const displayText = isOverflow && !expanded ? currentContent.slice(0, LIMIT) : currentContent;
  const showSection = currentRereplyList.length > 0 || replyOpen;

  const handledOnErrorImg = (e) => {
    e.target.src = defaultImage;
  }

  return (
    <>
    <PopupComponent
      isOpen={deletePopupOpen}
      message="댓글을 삭제하시겠습니까?"
      onConfirm={handleDeleteConfirm}
      onCancel={() => setDeletePopupOpen(false)}
    />
    <Wrapper>
      <TopRow>
        <ProfileGroup>
          {profileImg && <ProfileImg src={profileImg} onError={handledOnErrorImg} alt="프로필" />}
          <AuthorName onClick={() => goToMemberProfile(navigate, memberId)}>{author}</AuthorName>
          <S.Span size="h10Regular" color="faillog_gray9">{createdAt}</S.Span>
        </ProfileGroup>

        <MenuContainer>
          <MenuBtn onClick={toggleMenu}>
            <img src={menuIcon} width={20} height={20} alt="메뉴" />
          </MenuBtn>

          {menuOpen && (
            <Dropdown>
              {isOwner ? (
                <>
                  <DropdownItem onClick={handleEditClick}>
                    <S.Span size="h9Regular">수정하기</S.Span>
                  </DropdownItem>
                  <DropdownItem onClick={() => { setOpenMenuId(null); setDeletePopupOpen(true); }}>
                    <S.Span size="h9Regular">삭제하기</S.Span>
                  </DropdownItem>
                </>
              ) : (
                <DropdownItem onClick={() => { openReport('댓글', replyId, profileImg, author, content); setOpenMenuId(null); }}>
                  <S.Span size="h9Regular">신고하기</S.Span>
                </DropdownItem>
              )}
            </Dropdown>
          )}
        </MenuContainer>
      </TopRow>

      <ContentArea>
        {editMode ? (
          <>
            <EditTextArea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              maxLength={500}
            />
            <EditActionRow>
              <S.Span size="h11Regular" color={editText.length >= 500 ? 'faillog-red' : 'faillog_gray8'}>
                {editText.length} / 500
              </S.Span>
              <EditBtnGroup>
                <CancelEditBtn onClick={handleEditCancel}>
                  <S.Span size="h10Bold">취소</S.Span>
                </CancelEditBtn>
                <SaveEditBtn onClick={handleEditSave}>
                  <S.Span size="h10Bold" color="faillog_white">저장</S.Span>
                </SaveEditBtn>
              </EditBtnGroup>
            </EditActionRow>
          </>
        ) : (
          <ContentText>
            {displayText}
            {isOverflow && !expanded && '... '}
            {isOverflow && (
              <InlineToggle onClick={() => setExpanded(prev => !prev)}>
                {expanded ? ' (접기)' : '(자세히보기)'}
              </InlineToggle>
            )}
          </ContentText>
        )}
      </ContentArea>

      <ActionRow>
        <LikeGroup onClick={handleLike}>
          <img src={liked ? likeFill2Img : likeImg} width={16} height={16} alt="좋아요" />
          <S.Span size="h10Bold">{count}</S.Span>
        </LikeGroup>
        <ReplyBtn onClick={() => setReplyOpen(prev => !prev)}>
          <S.Span size="h10Bold">답글</S.Span>
        </ReplyBtn>
      </ActionRow>

      {showSection && (
        <SectionArea>
          <Divider />
          <RereplyListArea>
            {currentRereplyList.map((item) => (
              <Rereply key={item.rereplyId} {...item} onReplyAdded={refreshReply} />
            ))}
            {replyOpen && <ReplySubmit subject={"답글"} onSubmit={handleRereplySubmit} />}
          </RereplyListArea>
        </SectionArea>
      )}
    </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 1268px;
  padding: 13px 15px 15px 15px;
  border: 1px solid ${colorCSS["faillog_gray3"]};
  border-radius: 15px;
  box-sizing: border-box;
`

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ProfileGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`

const AuthorName = styled.span`
  ${sizeCSS["h8Bold"]}
  color: ${colorCSS["faillog-black"]};
  cursor: pointer;
  &:hover { text-decoration: underline; }
`

const ProfileImg = styled.img`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  object-fit: cover;
`

const MenuContainer = styled.div`
  position: relative;
`

const MenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`

const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  width: 80px;
  background: ${colorCSS["faillog_white"]};
  border: 1px solid ${colorCSS["faillog_gray4"]};
  border-radius: 10px;
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 100;
`

const DropdownItem = styled.div`
  ${flexCenterRow}
  cursor: pointer;

  &:hover span {
    color: ${colorCSS["faillog_purple"]};
  }
`

const ContentArea = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`

const ContentText = styled.p`
  margin: 0;
  padding-right: 170px;
  ${sizeCSS["h9Regular"]}
  color: ${colorCSS["faillog_gray9"]};
  word-break: break-all;
`

const InlineToggle = styled.span`
  ${sizeCSS["h9Regular"]}
  color: ${colorCSS["faillog_purple"]};
  cursor: pointer;
`

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 5px;
`

const LikeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const ReplyBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`

const SectionArea = styled.div`
  margin-top: 14px;
`

const Divider = styled.div`
  width: 1236px;
  height: 1px;
  background: ${colorCSS["faillog_gray2"]};
`

const RereplyListArea = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const EditTextArea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 10px 12px;
  background: ${colorCSS["faillog_gray1"]};
  border: 1px solid ${colorCSS["faillog_gray3"]};
  border-radius: 10px;
  resize: none;
  overflow-y: auto;
  ${sizeCSS["h9Regular"]}
  color: ${colorCSS["faillog-black"]};
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${colorCSS["faillog_purple"]};
  }
`

const EditActionRow = styled.div`
  ${flexBetweenRow}
  margin-top: 8px;
`

const EditBtnGroup = styled.div`
  display: flex;
  gap: 8px;
`

const CancelEditBtn = styled.button`
  height: 32px;
  padding: 0 14px;
  background: none;
  border: 1px solid ${colorCSS["faillog_gray4"]};
  border-radius: 8px;
  cursor: pointer;
`

const SaveEditBtn = styled.button`
  height: 32px;
  padding: 0 14px;
  background: ${colorCSS["faillog_purple"]};
  border: none;
  border-radius: 8px;
  cursor: pointer;
`

export default Reply;
