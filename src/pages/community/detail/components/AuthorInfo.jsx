import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import S, { colorCSS } from '../../style';
import defaultImage from '../../resources/default.png'
import { goToMemberProfile } from '../../../../utils/profileNavigation';

const AuthorInfo = ({ memberId, profile, author, postCount, faillogCount, commentCount }) => {
  const navigate = useNavigate();

  const handledOnErrorImg = (e) => {
    e.target.src = defaultImage;
  }

  return (
    <Wrapper>
      <AuthorWrap onClick={() => goToMemberProfile(navigate, memberId)} style={{ cursor: 'pointer' }}>
        <ProfileImg src={profile} onError={handledOnErrorImg} alt={author} />
        <S.Span size="h7Bold" color="faillog-black">{author}</S.Span>
      </AuthorWrap>

      <StatWrap>
        <StatBox>
          <S.Span size="h10Bold" color="faillog_gray9">작성한 게시글 수</S.Span>
          <S.Span size="h6Bold" color="faillog-black">{postCount}</S.Span>
        </StatBox>
        <StatBox>
          <S.Span size="h10Bold" color="faillog_gray9">작성한 페일 로그 수</S.Span>
          <S.Span size="h6Bold" color="faillog-black">{faillogCount}</S.Span>
        </StatBox>
        <StatBox>
          <S.Span size="h10Bold" color="faillog_gray9">작성한 댓글 수</S.Span>
          <S.Span size="h6Bold" color="faillog-black">{commentCount}</S.Span>
        </StatBox>
      </StatWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1320px;
  padding: 46px 41px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const AuthorWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ProfileImg = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
`;

const StatWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StatBox = styled.div`
  width: 140px;
  height: 72px;
  background-color: ${colorCSS["faillog_gray1"]};
  border: 1px solid ${colorCSS["faillog_gray2"]};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 16px 6px;
  box-sizing: border-box;
`;

export default AuthorInfo;
