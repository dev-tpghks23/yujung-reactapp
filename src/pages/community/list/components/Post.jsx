import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { h11Bold, h8Extrabold, h9Regular, h10Regular, h11Regular, flexCenterRow } from '../../../../styles/common';
import S, { colorCSS } from '../../style';

import eye from '../../resources/eye.svg'
import heart from '../../resources/like.svg'
import comment from '../../resources/post.svg'
import likeFill from '../../resources/like-fill2.svg'
import getCategoryInfo from '../../GetCategoryInfo';
import defaultProfile from '../../resources/default.png';
import { goToMemberProfile } from '../../../../utils/profileNavigation';

const Wrapper = styled.div`
  width: 984px;
  padding: 27px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    background-color: ${colorCSS["faillog_gray1"]};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.07);
  }
`;

const Card = styled.div`
  display: flex;
  gap: 27px;
  align-items: flex-start;
`;

const ThumbnailWrapper = styled.div`
  width: 324px;
  height: 184px;
  /* object-fit: cover; */
  border-radius: 15px 0px 15px 0px;
  /* background-color: ${colorCSS["faillog_gray9"]}; */
  overflow: hidden;
  ${flexCenterRow}
  /* flex-shrink: 0; */
`;

const Thumbnail = styled.img`
  width: 324px;
  height: auto;
  /* object-fit: cover; */
  border-radius: 15px 0px 15px 0px

  /* flex-shrink: 0; */
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
  /* height: 184px; */
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CategoryBadge = styled.div`
  /* ${h11Bold}
  color: #ffffff; */
  background-color: ${({bgcolor}) => colorCSS[bgcolor]};
  width: 64px;
  height: 26px;
  ${flexCenterRow}
  border-radius: 15px;
`;

//삭제예정
const Title = styled.h2`
  ${h8Extrabold}
  margin: 0;
  color: ${({ theme }) => theme.PALETTE?.black || '#333333'};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

//삭제예정
const Content = styled.p`
  ${h9Regular}
  margin: 0;
  flex: 1;
  color: ${({ theme }) => theme.GRAYSCALE?.[10] || '#555555'};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
  gap: 7px;
  cursor: pointer;
  &:hover span { text-decoration: underline; }
`;

const AuthorImg = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  /* object-fit: cover; */
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StatItem = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const Divider = styled.hr`
  /* padding-bottom: 27px; */
  margin: 0px;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.GRAYSCALE?.[2] || '#E6E6E6'};
`;

//게시글 리스트의 게시글 단위 컴포넌트
const Post = ({
  id,
  memberId,
  category,
  title,
  content,
  date,
  thumbnail,
  profile,
  author,
  views,
  likes,
  isLiked = false,
  comments,
  isHrHidden
}) => {

  const navigate = useNavigate();
  const {name, textColor ,bgColor} = getCategoryInfo(category)

  const handledOnErrorImg = (e) => {
    e.target.src = defaultProfile;
  }

  return (
    <div>
      <Wrapper onClick={() => navigate(`/community/detail/${id}`)}>
        <Card>
          <ThumbnailWrapper>
            <Thumbnail src={thumbnail} alt={title} />
          </ThumbnailWrapper>
          <Info>
            <TopRow>
              <CategoryBadge bgcolor={bgColor}>
                <S.Span size={"h10Bold"} color={textColor}>
                  {name}
                </S.Span>
              </CategoryBadge>
              <S.Span size={"h9Regular"} color={"faillog_gray9"}>{date}</S.Span>
            </TopRow>
            <S.Span2 size={"h7Extrabold"} color={"faillog-black"} lineclamp={1}>{title}</S.Span2>
            <S.Span2 size={"h8-regular"} color={"faillog_gray9"}>{content}</S.Span2>
            <BottomRow>
              <AuthorWrap onClick={(e) => { e.stopPropagation(); goToMemberProfile(navigate, memberId); }}>
                <AuthorImg src={profile || defaultProfile} onError={handledOnErrorImg} alt={author} />
                <S.Span size="h9Regular">{author}</S.Span>
              </AuthorWrap>
              <Stats>
                <StatItem>
                  <img src={eye} width={15} height={11}></img>
                  <S.Span size="h8Regular" color="faillog-black" isvisible={true}>{views}</S.Span>
                </StatItem>
                <StatItem>
                  <img src={isLiked ? likeFill : heart} width={17} height={17}></img>
                  <S.Span size="h8Regular" color="faillog-black" isvisible={true}>{likes}</S.Span>
                </StatItem>
                <StatItem>
                  <img src={comment} width={17} height={17}></img>
                  <S.Span size="h8Regular" color="faillog-black" isvisible={true}>{comments}</S.Span>
                </StatItem>
              </Stats>
            </BottomRow>
          </Info>
        </Card>
      </Wrapper>
      { isHrHidden || <Divider />}
    </div>
  );
};



export default Post;
