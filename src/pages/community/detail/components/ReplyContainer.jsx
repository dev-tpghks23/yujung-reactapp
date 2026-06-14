import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import S, { colorCSS } from '../../style.js';
import ReplySubmit from './ReplySubmit.jsx';
import Reply from './Reply.jsx';
import { MenuContext } from './MenuContext.js';
import defaultImage from '../../resources/default.png';

const formatTimeAgo = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diff < 60) return '방금';
  if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)}일 전`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)}개월 전`;
  return `${Math.floor(diff / 31536000)}년 전`;
};

const mapReplyList = (data, loginId) =>
  (data ?? []).map((r) => ({
    loginId,
    memberId: r.memberId,
    replyId: r.id,
    profileImg: r.memberProfileImageUrl ?? defaultImage,
    createdAt: formatTimeAgo(r.replyCreatedAt),
    author: r.memberNickname,
    content: r.replyContent,
    isLiked: r.isLiked === 1,
    likeCount: r.likeCount ?? 0,
    rereplyList: (r.replies ?? []).map((rr) => ({
      loginId,
      memberId: rr.memberId,
      rereplyId: rr.id,
      profileImg: rr.memberProfileImageUrl ?? defaultImage,
      author: rr.memberNickname,
      content: rr.rereplyContent,
      createdAt: formatTimeAgo(rr.rereplyCreatedAt),
    })),
  }));

// replyList: Reply.jsx EXAMPLE 형식의 댓글 배열
// postId: 게시글 id, loginId: 로그인 유저 id
const ReplyContainer = ({ replyList = [], postId, loginId }) => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [currentReplyList, setCurrentReplyList] = useState(replyList);
  const navigate = useNavigate();

  const refreshReplyList = async () => {
    const res = await fetch('http://localhost:10000/api/posts/read-reply-list', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ memberId: loginId, postId }),
    });
    if (!res.ok) return;
    const json = await res.json();
    if (!json.success) return;
    setCurrentReplyList(mapReplyList(json.data, loginId));
  };

  const handleSubmit = async (text) => {
    if (loginId === 0) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
      return;
    }
    if (!text.trim()) return;
    const res = await fetch('http://localhost:10000/api/posts/write-reply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ postId, memberId: loginId, replyContent: text }),
    });
    if (!res.ok) return;
    const json = await res.json();
    if (json.success) await refreshReplyList();
  };

  return (
    <MenuContext.Provider value={{ openMenuId, setOpenMenuId }}>
    <Wrapper>
      <TitleRow>
        <S.Span size="h7Bold">댓글</S.Span>
        <S.Span size="h7Bold" color="faillog_purple">{currentReplyList.length}</S.Span>
      </TitleRow>

      <ReplySubmitBox>
        <ReplySubmit onSubmit={handleSubmit} />
      </ReplySubmitBox>

      {currentReplyList.length > 0 && (
        <ReplyListArea>
          {currentReplyList.map((item) => (
            <Reply key={item.replyId} {...item} onReplyAdded={refreshReplyList} />
          ))}
        </ReplyListArea>
      )}
    </Wrapper>
    </MenuContext.Provider>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 15px;
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

const ReplySubmitBox = styled.div`
  padding: 17px;
  border: 1px solid ${colorCSS["faillog_gray3"]};
  border-radius: 15px;
`

const ReplyListArea = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 11px;
`

export default ReplyContainer;
