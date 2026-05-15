import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import menuIcon from '../../resources/menuIcon.svg';
import S, { colorCSS, sizeCSS } from '../../style.js';
import { flexCenterRow } from '../../../../styles/common.js';
import { useMenuContext } from './MenuContext.js';
import { useReportContext } from './ReportContext.js';

//삭제예정
const EXAMPLE = {
  isOwner: false,
  profileImg: "https://i.pravatar.cc/150?img=5",
  author: '취준마스터',
  content: '저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.저도 완전히 같았어요.환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.저도 완전히 같았어요.환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.저도 완전히 같았어요.환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.저도 완전히 같았어요.환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.저도 완전히 같았어요.환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.저도 완전히 같았어요.환경 적응이 생각보다 훨씬 중요하더라고요.저도 완전히 같았어요.',
  createdAt: '2분전',
};

// isOwner: 본인 대댓글 여부, profileImg: 프로필 이미지, author: 작성자, content: 내용, createdAt: 작성일
const Rereply = ({
  isOwner = EXAMPLE.isOwner,
  profileImg = EXAMPLE.profileImg,
  author = EXAMPLE.author,
  content = EXAMPLE.content,
  createdAt = EXAMPLE.createdAt,
}) => {
  const { openMenuId, setOpenMenuId } = useMenuContext();
  const { openReport } = useReportContext();
  const menuId = useRef(`rereply-${Math.random()}`).current;
  const menuOpen = openMenuId === menuId;
  const toggleMenu = () => setOpenMenuId(menuOpen ? null : menuId);

  const [expanded, setExpanded] = useState(false);

  const LIMIT = 230;
  const isOverflow = content.length > LIMIT;
  const displayText = isOverflow && !expanded ? content.slice(0, LIMIT) : content;

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
                <DropdownItem onClick={() => { openReport('대댓글', undefined, profileImg, author, content); setOpenMenuId(null); }}>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1236px;
  padding: 9px 11px;
  padding-bottom: 9px;
  background: ${colorCSS["faillog_gray1"]};
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
  color: ${colorCSS["faillog-black"]};
  word-break: break-all;
`

const InlineToggle = styled.span`
  ${sizeCSS["h9Regular"]}
  color: ${colorCSS["faillog_purple"]};
  cursor: pointer;
`

export default Rereply;
