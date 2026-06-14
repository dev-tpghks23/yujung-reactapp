import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import S, { colorCSS, boxShadow } from '../../style';
import { flexCenterRow } from '../../../../styles/common';
import getCategoryInfo from '../../GetCategoryInfo';

import eye from '../../resources/eye.svg'
import heart from '../../resources/like.svg'
import comment from '../../resources/post.svg'
import likeFill from '../../resources/like-fill2.svg'
import defaultProfile from '../../resources/default.png'
import { goToMemberProfile } from '../../../../utils/profileNavigation';

const AiPost = ({ postId, memberId, date, category, title, profile, author, views, likes, comments }) => {

  const navigate = useNavigate();
  const {name, textColor ,bgColor} = getCategoryInfo(category)

  const handledOnErrorImg = (e) => {
    e.target.src = defaultProfile;
  }

  return (
    <Card onClick={() => navigate(`/community/detail/${postId}`)}>
      <TopRow>
        <S.Span size="h10Bold" color="faillog_gray8">{date}</S.Span>
        <CategoryBadge bgcolor={bgColor}>
          <S.Span size="h11Extrabold" color={textColor}>{name}</S.Span>
        </CategoryBadge>
      </TopRow>

      <TitleWrap>
        <S.Span2 size="h9Bold" color="faillog-black" display="block">{title}</S.Span2>
      </TitleWrap>

      <BottomRow>
        <AuthorWrap onClick={(e) => { e.stopPropagation(); goToMemberProfile(navigate, memberId); }}>
          <AuthorImg src={profile || defaultProfile} onError={handledOnErrorImg} alt={author} />
          <S.Span size="h9Regular" color="faillog-black">{author}</S.Span>
        </AuthorWrap>
        <Stats>
          <StatItem>
            <img src={eye} width={12} height={8}></img>
            <S.Span size="h10Regular" color="faillog-black">{views}</S.Span>
          </StatItem>
          <StatItem>
            <img src={heart} width={12} height={12}></img>
            <S.Span size="h10Regular" color="faillog-black">{likes}</S.Span>
          </StatItem>
          <StatItem>
            <img src={comment} width={12} height={12}></img>
            <S.Span size="h10Regular" color="faillog-black">{comments}</S.Span>
          </StatItem>
        </Stats>
      </BottomRow>
    </Card>
  );
};

const Card = styled.div`
  width: 300px;
  height: 148px;
  border-radius: 15px;
  border: 1px solid ${colorCSS["faillog_gray2"]};
  background-color: #ffffff;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.09);
    border-color: ${colorCSS["faillog_purple"]};
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CategoryBadge = styled.div`
  background-color: ${({bgcolor}) => colorCSS[bgcolor]};
  padding-top: 1px;
  width: 60px;
  height: 20px;
  ${flexCenterRow}
  border-radius: 15px;
`;

const TitleWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
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

const AuthorImg = styled.img`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export default AiPost;
