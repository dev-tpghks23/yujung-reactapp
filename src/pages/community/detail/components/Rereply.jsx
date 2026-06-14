import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import menuIcon from '../../resources/menuIcon.svg';
import S, { colorCSS, sizeCSS } from '../../style.js';
import { flexBetweenRow, flexCenterRow } from '../../../../styles/common.js';
import { useMenuContext } from './MenuContext.js';
import { useReportContext } from './ReportContext.js';
import PopupComponent from '../../../../components/commons/PopupComponent';
import defaultImage from '../../resources/default.png'
import { goToMemberProfile } from '../../../../utils/profileNavigation';

//삭제예정
const EXAMPLE = {
  isOwner: false,
  profileImg: "https://i.pravatar.cc/150?img=5",
  author: '취준마스터',
  content: '저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.저도 완전히 같았어요.환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.저도 완전히 같았어요.환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.저도 완전히 같았어요.환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.저도 완전히 같았어요.환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.저도 완전히 같았어요.환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.저도 완전히 같았어요.환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.',
  createdAt: '2분전',
};

// loginId: 로그인 유저 id, memberId: 대댓글 작성자 id, rereplyId: 대댓글 id
// profileImg: 프로필 이미지, author: 작성자, content: 내용, createdAt: 작성일
// onReplyAdded: 삭제 후 페이지 갱신 콜백
const Rereply = ({
  loginId,
  memberId,
  rereplyId,
  profileImg = EXAMPLE.profileImg,
  author = EXAMPLE.author,
  content = EXAMPLE.content,
  createdAt = EXAMPLE.createdAt,
  onReplyAdded,
}) => {
  const isOwner = loginId != null && loginId === memberId;
  const navigate = useNavigate();
  const { openMenuId, setOpenMenuId } = useMenuContext();
  const { openReport } = useReportContext();
  const menuId = useRef(`rereply-${Math.random()}`).current;
  const menuOpen = openMenuId === menuId;
  const toggleMenu = () => setOpenMenuId(menuOpen ? null : menuId);

  const [currentContent, setCurrentContent] = useState(content);
  const [currentAuthor, setCurrentAuthor] = useState(author);
  const [expanded, setExpanded] = useState(false);
  const [deletePopupOpen, setDeletePopupOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(content);

  const handleDeleteClick = () => {
    setOpenMenuId(null);
    setDeletePopupOpen(true);
  };

  const handleEditClick = () => {
    setOpenMenuId(null);
    setEditText(currentContent);
    setEditMode(true);
  };

  const handleEditCancel = () => setEditMode(false);

  const handleEditSave = async () => {
    if (!editText.trim()) return;
    const res = await fetch('http://localhost:10000/api/posts/update-rereply', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: rereplyId, rereplyContent: editText }),
    });
    if (!res.ok) return;
    const json = await res.json();
    if (!json.success) return;

    const readRes = await fetch(`http://localhost:10000/api/posts/read-rereply/${rereplyId}`);
    if (!readRes.ok) return;
    const readJson = await readRes.json();
    if (readJson.success) {
      const d = readJson.data;
      setCurrentContent(d.rereplyContent);
      setCurrentAuthor(d.memberNickname);
      setEditMode(false);
    }
  };

  const handleDeleteConfirm = async () => {
    setDeletePopupOpen(false);
    const res = await fetch(`http://localhost:10000/api/posts/delete-rereply/${rereplyId}`, {
      method: 'DELETE',
    });
    if (!res.ok) return;
    const json = await res.json();
    if (json.success) onReplyAdded?.();
  };

  const LIMIT = 230;
  const isOverflow = currentContent.length > LIMIT;
  const displayText = isOverflow && !expanded ? currentContent.slice(0, LIMIT) : currentContent;

  const handledOnErrorImg = (e) => {
    e.target.src = defaultImage;
  }

  return (
    <>
    <PopupComponent
      isOpen={deletePopupOpen}
      message="대댓글을 삭제하시겠습니까?"
      onConfirm={handleDeleteConfirm}
      onCancel={() => setDeletePopupOpen(false)}
    />
    <Wrapper>
      <TopRow>
        <ProfileGroup>
          {profileImg && <ProfileImg src={profileImg} onError={handledOnErrorImg} alt="프로필" />}
          <AuthorName onClick={() => goToMemberProfile(navigate, memberId)}>{currentAuthor}</AuthorName>
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
                  <DropdownItem onClick={handleDeleteClick}>
                    <S.Span size="h9Regular">삭제하기</S.Span>
                  </DropdownItem>
                </>
              ) : (
                <DropdownItem onClick={() => { openReport('대댓글', rereplyId, profileImg, author, content); setOpenMenuId(null); }}>
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
    </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 1236px;
  padding: 9px 11px;
  padding-bottom: 9px;
  background: ${colorCSS["faillog-sector-gray"]};
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
  border-radius: 15px;
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
  margin-top: 11px;
`

const ContentText = styled.p`
  margin: 0;
  padding-right: 160px;
  ${sizeCSS["h9Regular"]}
  color: ${colorCSS["faillog_gray9"]};
  word-break: break-all;
`

const InlineToggle = styled.span`
  ${sizeCSS["h9Regular"]}
  color: ${colorCSS["faillog_purple"]};
  cursor: pointer;
`

const EditTextArea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 10px 12px;
  background: ${colorCSS["faillog_white"]};
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

    &:hover {
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

export default Rereply;
