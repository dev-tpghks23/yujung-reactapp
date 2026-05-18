import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import like from '../../resources/like.svg'
import likeFill2 from '../../resources/like-fill2.svg'
import menuIcon from '../../resources/menuIcon.svg'

import S, { colorCSS, hoverBorder } from '../../style.js'
import { flexCenterRow } from '../../../../styles/common.js';
import { useReportContext } from './ReportContext.js';

// 게시글 상세 중앙(목록으로, 좋아요버튼, 메뉴버튼)
// isOwner: 본인 게시글 여부, likeCount: 좋아요 수, isLiked: 좋아요 선택 여부
// postId, postAuthor, postProfileImg, postContent: 신고 팝업용 게시글 정보
const Middle = ({ id, isOwner = false, likeCount = 0, isLiked = false, postId, postAuthor, postProfileImg, postContent }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { openReport } = useReportContext();

  return (
    <Wrapper>
      <ListBtn onClick={() => navigate('/community')}>
        <S.Span size="h10Bold">목록으로</S.Span>
      </ListBtn>

      <RightGroup>
        <LikeBtn>
          <LikeIcon src={isLiked ? likeFill2 : like} alt="좋아요" />
          <S.Span size="h9Bold">{likeCount}</S.Span>
        </LikeBtn>

        <MenuContainer>
          <MenuBtn onClick={() => setMenuOpen(prev => !prev)}>
            <img src={menuIcon} width={20} height={20} alt="메뉴" />
          </MenuBtn>

          {menuOpen && (
            <Dropdown>
              {isOwner ? (
                <>
                  <DropdownItem onClick={() => { openReport('게시글', postId, postProfileImg, postAuthor, postContent); setMenuOpen(false); }}>
                    <S.Span size="h7Regular">신고하기</S.Span>
                  </DropdownItem>
                  <DropdownItem onClick={() => {
                      setMenuOpen(false)
                      navigate(`/community/edit/${id}`)
                    }}>
                    <S.Span size="h7Regular">수정하기</S.Span>
                  </DropdownItem>
                  <DropdownItem onClick={() => setMenuOpen(false)}>
                    <S.Span size="h7Regular">삭제하기</S.Span>
                  </DropdownItem>
                </>
              ) : (
                <DropdownItem onClick={() => setMenuOpen(false)}>
                  <S.Span size="h7Regular">신고하기</S.Span>
                </DropdownItem>
              )}
            </Dropdown>
          )}
        </MenuContainer>
      </RightGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1270px;
  padding-top: 26px;
  padding-bottom: 31px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ListBtn = styled.button`
  width: 84px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colorCSS["faillog_gray4"]};
  border-radius: 10px;
  background: ${colorCSS["faillog_white"]};
  cursor: pointer;

  ${hoverBorder}
`

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const LikeBtn = styled.button`
  width: 100px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid ${colorCSS["faillog_gray4"]};
  border-radius: 10px;
  background: ${colorCSS["faillog_white"]};
  cursor: pointer;

  ${hoverBorder}
`

const LikeIcon = styled.img`
  width: 16px;
  height: 16px;
`

const MenuContainer = styled.div`
  position: relative;
`

const MenuBtn = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colorCSS["faillog_gray4"]};
  border-radius: 8px;
  background: ${colorCSS["faillog_white"]};
  cursor: pointer;

  ${hoverBorder}
`

const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 16px);
  width: 100px;
  background: ${colorCSS["faillog_white"]};
  border: 1px solid ${colorCSS["faillog_gray4"]};
  border-radius: 15px;
  padding: 15px 10px;
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

export default Middle;
