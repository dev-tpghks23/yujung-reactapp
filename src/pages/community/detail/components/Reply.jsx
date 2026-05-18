import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import likeImg from '../../resources/like.svg';
import likeFill2Img from '../../resources/like-fill2.svg';
import menuIcon from '../../resources/menuIcon.svg';

import S, { colorCSS, sizeCSS } from '../../style.js';
import { flexCenterRow } from '../../../../styles/common.js';
import Rereply from './Rereply.jsx';
import ReplySubmit from './ReplySubmit.jsx';
import { useMenuContext } from './MenuContext.js';
import { useReportContext } from './ReportContext.js';

const LIMIT = 230;

//삭제예정
const EXAMPLE = {
  isOwner: false,
  profileImg: 'https://i.pravatar.cc/150?img=3',
  createdAt: '3분 전',
  author: '해랑이',
  content: '진짜 공감됩니다. 저도 집에서는 잘 되는데 시험장만 가면 아는 것도 막히더라고요. 그리고 댓글에는 글자가 여기까지 커집니다. 어디까지 커지는지 확인해본 결과 좁을 줄 알았는데 너무 넓은 범위까지 갑니다. 다음 줄이 언제 넘어가나 했다.',
  isLiked: true,
  likeCount: 3,
  rereplyList: [
    {
      isOwner: false,
      profileImg: 'https://i.pravatar.cc/150?img=5',
      author: '취준마스터',
      content: '저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.',
      createdAt: '2분전',
    },
    {
      isOwner: true,
      profileImg: 'https://i.pravatar.cc/150?img=3',
      author: '해랑이',
      content: '맞아요. 특히 첫 시험은 긴장감 자체가 너무 낯설더라고요.',
      createdAt: '방금',
    },
  ],
};

// isOwner: 본인 댓글 여부, profileImg: 프로필 이미지, createdAt: 작성일
// author: 작성자, content: 내용, isLiked: 좋아요 여부, likeCount: 좋아요 수
// rereplyList: 대댓글 배열 (Rereply props 객체 배열)
const Reply = ({
  isOwner = EXAMPLE.isOwner,
  profileImg = EXAMPLE.profileImg,
  createdAt = EXAMPLE.createdAt,
  author = EXAMPLE.author,
  content = EXAMPLE.content,
  isLiked = EXAMPLE.isLiked,
  likeCount = EXAMPLE.likeCount,
  rereplyList = EXAMPLE.rereplyList,
}) => {
  const { openMenuId, setOpenMenuId } = useMenuContext();
  const { openReport } = useReportContext();
  const menuId = useRef(`reply-${Math.random()}`).current;
  const menuOpen = openMenuId === menuId;
  const toggleMenu = () => setOpenMenuId(menuOpen ? null : menuId);

  const [expanded, setExpanded] = useState(false);
  const [replyOpen, setReplyOpen] = useState(false);

  const isOverflow = content.length > LIMIT;
  const displayText = isOverflow && !expanded ? content.slice(0, LIMIT) : content;
  const showSection = rereplyList.length > 0 || replyOpen;

  return (
    <Wrapper>
      <TopRow>
        <ProfileGroup>
          {profileImg && <ProfileImg src={profileImg} alt="프로필" />}
          <S.Span size="h8Bold">{author}</S.Span>
          <S.Span size="h11Regular" color="faillog_gray9">{createdAt}</S.Span>
        </ProfileGroup>

        <MenuContainer>
          <MenuBtn onClick={toggleMenu}>
            <img src={menuIcon} width={20} height={20} alt="메뉴" />
          </MenuBtn>

          {menuOpen && (
            <Dropdown>
              {isOwner ? (
                <DropdownItem onClick={() => setOpenMenuId(null)}>
                  <S.Span size="h9Regular">삭제하기</S.Span>
                </DropdownItem>
              ) : (
                <DropdownItem onClick={() => { openReport('댓글', undefined, profileImg, author, content); setOpenMenuId(null); }}>
                  <S.Span size="h9Regular">신고하기</S.Span>
                </DropdownItem>
              )}
            </Dropdown>
          )}
        </MenuContainer>
      </TopRow>

      <ContentArea>
        <ContentText>
          {displayText}
          {isOverflow && !expanded && '... '}
          {isOverflow && (
            <InlineToggle onClick={() => setExpanded(prev => !prev)}>
              {expanded ? ' (접기)' : '(자세히보기)'}
            </InlineToggle>
          )}
        </ContentText>
      </ContentArea>

      <ActionRow>
        <LikeGroup>
          <img src={isLiked ? likeFill2Img : likeImg} width={16} height={16} alt="좋아요" />
          <S.Span size="h10Bold">{likeCount}</S.Span>
        </LikeGroup>
        <ReplyBtn onClick={() => setReplyOpen(prev => !prev)}>
          <S.Span size="h10Bold">답글</S.Span>
        </ReplyBtn>
      </ActionRow>

      {showSection && (
        <SectionArea>
          <Divider />
          <RereplyListArea>
            {rereplyList.map((item, i) => (
              <Rereply key={i} {...item} />
            ))}
            {replyOpen && <ReplySubmit subject={"답글"} onSubmit={() => {}} />}
          </RereplyListArea>
        </SectionArea>
      )}
    </Wrapper>
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

const ProfileImg = styled.img`
  width: 14px;
  height: 14px;
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
`

const ContentText = styled.p`
  margin: 0;
  padding-right: 170px;
  ${sizeCSS["h9Regular"]}
  color: ${colorCSS["faillog-black"]};
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

export default Reply;
