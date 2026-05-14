import React from 'react';
import styled from 'styled-components';

import aiImage from '../../resources/ai_image.svg';
import S from '../../style';
import AiPost from '../../list/components/AiPost.jsx';

// aiPostList: AiPost 컴포넌트에 전달할 데이터 배열
const AiPostContainer = ({ aiPostList = [] }) => {
  return (
    <Wrapper>
      <TitleRow>
        <S.Span size="h7Bold">추천 글</S.Span>
        <img src={aiImage} alt="AI" />
      </TitleRow>

      <PostList>
        {aiPostList.map((item, i) => (
          <AiPost key={i} {...item} />
        ))}
      </PostList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1270px;
  display: flex;
  flex-direction: column;
  gap: 11px;
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  /* width: fit-content; */
`

const PostList = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
`

export default AiPostContainer;
