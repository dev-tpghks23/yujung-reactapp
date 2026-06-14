import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import S, { colorCSS } from '../../style';
import getCategoryInfo from '../../GetCategoryInfo';
import { flexCenterRow } from '../../../../styles/common';

import eye from '../../resources/eye.svg';
import callendar from '../../resources/callendar.svg';
import clock from '../../resources/clock.svg';
import defaultImage from '../../resources/default.png'
import { goToMemberProfile } from '../../../../utils/profileNavigation';

const PostHeader = ({ memberId, category, title, profile, author, views, date, timeAgo }) => {
  const { name, textColor, bgColor } = getCategoryInfo(category);
  const navigate = useNavigate();

  const handledOnErrorImg = (e) => {
    e.target.src = defaultImage;
  }

  return (
    <Wrapper>
      {/* 이부분에 추가 */}
      <CategoryBadge bgcolor={bgColor}>
        <S.Span size="h10Bold" color={textColor}>{name}</S.Span>
      </CategoryBadge>

      <S.Span2 size="h5Bold" color="faillog-black" lineclamp={2}>{title}</S.Span2>

      <BottomRow>
        <AuthorWrap onClick={() => goToMemberProfile(navigate, memberId)}>
          <PorileImg src={profile} onError={handledOnErrorImg} alt={author} />
          <S.Span size="h9Regular" color="faillog_gray9">{author}</S.Span>
        </AuthorWrap>
        <MetaWrap>
          <MetaItem>
            <img src={eye} width={16} height={12} alt="views" />
            <S.Span size="h10Bold" color="faillog_gray9">{views}</S.Span>
          </MetaItem>
          <MetaItem>
            <img src={callendar} width={16} height={16} alt="date" />
            <S.Span size="h10Bold" color="faillog_gray9">{date}</S.Span>
          </MetaItem>
          <MetaItem>
            <img src={clock} width={16} height={16} alt="time" />
            <S.Span size="h10Bold" color="faillog_gray9">{timeAgo}</S.Span>
          </MetaItem>
        </MetaWrap>
      </BottomRow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 25px;
  width: 1320px;
  padding-bottom: 11px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const CategoryBadge = styled.div`
  background-color: ${({ bgcolor }) => colorCSS[bgcolor]};
  width: 68px;
  height: 24px;
  border-radius: 15px;
  ${flexCenterRow}
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AuthorWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  &:hover span { text-decoration: underline; }
`;

const PorileImg = styled.img`
  width: 18px;
  height: 18px;
  border-radius: 50%;
`;

const MetaWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export default PostHeader;
