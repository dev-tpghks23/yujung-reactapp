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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAiPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:10000/api/posts/aiPost/read?memberId=${memberId}&postId=${postId}`,
          { method: 'POST' }
        );
        if (!res.ok) return;
        const json = await res.json();
        if (!json.success) return;
        setAiPostList(json.data.map(p => ({
          postId: p.id,
          memberId: p.memberId,
          date: formatDate(p.postCreatedAt),
          category: p.categoryId - 1,
          title: p.postTitle,
          profile: p.memberProfileImageUrl,
          author: p.memberNickname,
          views: p.postReadCount,
          likes: p.likeCount,
          comments: p.replyCount,
        })));
      } finally {
        setLoading(false);
      }
    };
    if (postId) fetchAiPosts();
  }, [memberId, postId]);

  return (
    <Wrapper>
      <TitleRow>
        <S.Span size="h7Bold">추천 글</S.Span>
        <img src={aiImage} alt="AI" />
      </TitleRow>

      {loading ? (
        <StatusText>
          <S.Span size="h9Regular" color="faillog_gray9">로드중입니다...</S.Span>
        </StatusText>
      ) : aiPostList.length > 0 ? (
        <PostList>
          {aiPostList.map((item) => (
            <AiPost key={item.postId} {...item} />
          ))}
        </PostList>
      ) : (
        <StatusText>
          <S.Span size="h9Regular" color="faillog_gray9">추천 게시글이 없습니다.</S.Span>
        </StatusText>
      )}
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

const StatusText = styled.div`
  padding: 20px 0;
`

export default AiPostContainer;
