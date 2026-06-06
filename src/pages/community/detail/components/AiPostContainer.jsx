import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import aiImage from '../../resources/ai_image.svg';
import S from '../../style';
import AiPost from '../../list/components/AiPost.jsx';

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  return dateStr.slice(0, 10).replace(/-/g, '.');
};

const AiPostContainer = ({ memberId, postId }) => {
  const [aiPostList, setAiPostList] = useState([]);

  useEffect(() => {
    const fetchAiPosts = async () => {
      const res = await fetch(
        `http://localhost:10000/api/posts/aiPost/read?memberId=${memberId}&postId=${postId}`,
        { method: 'POST' }
      );
      if (!res.ok) return;
      const json = await res.json();
      if (!json.success) return;
      setAiPostList(json.data.map(p => ({
        postId: p.id,
        date: formatDate(p.postCreatedAt),
        category: p.categoryId - 1,
        title: p.postTitle,
        profile: p.memberProfileImageUrl,
        author: p.memberNickname,
        views: p.postReadCount,
        likes: p.likeCount,
        comments: p.replyCount,
      })));
    };
    if (postId) fetchAiPosts();
  }, [memberId, postId]);

  return (
    <Wrapper>
      <TitleRow>
        <S.Span size="h7Bold">추천 글</S.Span>
        <img src={aiImage} alt="AI" />
      </TitleRow>

      <PostList>
        {aiPostList.map((item) => (
          <AiPost key={item.postId} {...item} />
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
