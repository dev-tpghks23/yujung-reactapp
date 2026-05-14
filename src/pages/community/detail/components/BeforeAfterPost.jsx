import React from 'react';
import styled from 'styled-components';
import S, { colorCSS, sizeCSS } from '../../style';
import { Link } from 'react-router-dom';

const BeforeAfterPost = ({ prevTitle, prevId, nextTitle, nextId }) => {
  return (
    <Wrapper>
      <Row>
        <Label size="h10Regular" color="faillog_gray9">이전글</Label>
        {prevId ? (
          <PostLink to={`/community/detail/${prevId}`}>
            <S.Span2 size="h9Regular" color="faillog-black" lineclamp={1}>{prevTitle}</S.Span2>
          </PostLink>
        ) : (
          <S.Span size="h9Regular" color="faillog_gray9">이전글이 없습니다</S.Span>
        )}
      </Row>

      <Divider />

      <Row>
        <Label size="h10Regular" color="faillog_gray9">다음글</Label>
        {nextId ? (
          <PostLink to={`/community/detail/${nextId}`}>
            <S.Span2 size="h9Regular" color="faillog-black" lineclamp={1}>{nextTitle}</S.Span2>
          </PostLink>
        ) : (
          <S.Span size="h9Regular" color="faillog_gray9">다음글이 없습니다</S.Span>
        )}
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1270px;
  margin-top: 37px;
  margin-bottom: 54px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 49px;
  padding-left: 16px;
  padding-right: 190px;
`;

const Label = styled.span`
  white-space: nowrap;
  flex-shrink: 0;
  ${sizeCSS["h10-regular"]}
  color: ${colorCSS["faillog_gray9"]};
`

const PostLink = styled(Link)`
  min-width: 0;
  text-decoration: none;
  &:hover span {
    text-decoration: underline;
  }
`;

const Divider = styled.hr`
  width: 1270px;
  border: none;
  border-top: 1px solid ${colorCSS["faillog_gray2"]};
  margin: 0;
`;

export default BeforeAfterPost;
