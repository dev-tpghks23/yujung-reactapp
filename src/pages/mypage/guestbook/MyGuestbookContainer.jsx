import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroContent } from '../heroSection/HeroData';
import HeroRotationComponent from '../heroSection/HeroRotationComponents';
import PageS from '../profile/styles/MyPageWrapper';
import S from './styles/MyGuestbookStyles';
import SearchDropdownComponent from '../../../components/commons/SearchDropdownComponent';
import useAuthStore from '../../../store/authStore';

import GuestbookInputComponent from './components/GuestbookInputComponent';
import GuestbookCommentItemComponent from './components/GuestbookCommentItemComponent';

const MyGuestbookContainer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { mainContent, quickMenus } = getHeroContent(pathname);
  const currentUser = useAuthStore((state) => state.user?.nickname || state.user?.name || '익명');

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyTextMap, setReplyTextMap] = useState({});
  const [replyOpenId, setReplyOpenId] = useState(null);
  const [searchType, setSearchType] = useState('제목+내용');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const sentinelRef = useRef(null);

  const filteredComments = useMemo(() => {
    const keyword = searchKeyword.trim().toLowerCase();
    if (!keyword) return comments;

    return comments.filter((comment) => {
      const title = comment.title.toLowerCase();
      const content = comment.content.toLowerCase();
      const author = comment.author.toLowerCase();
      const replyTexts = comment.replies.map((r) => r.content.toLowerCase()).join(' ');

      if (searchType === '제목') return title.includes(keyword);
      if (searchType === '내용') return content.includes(keyword);
      if (searchType === '제목+내용') return `${title} ${content}`.includes(keyword);
      if (searchType === '작성자') return author.includes(keyword);
      if (searchType === '댓글') return content.includes(keyword) || replyTexts.includes(keyword);
      return false;
    });
  }, [comments, searchKeyword, searchType]);

  const visibleComments = useMemo(
    () => filteredComments.slice(0, visibleCount),
    [filteredComments, visibleCount],
  );

  useEffect(() => { setVisibleCount(4); }, [searchKeyword, searchType]);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredComments.length) {
          setVisibleCount((prev) => Math.min(prev + 4, filteredComments.length));
        }
      },
      { rootMargin: '200px' },
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [filteredComments.length, visibleCount]);

  useEffect(() => {
    const handleOutsideClick = () => setActiveMenuId(null);
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleSubmit = () => {
    const trimmed = newComment.trim();
    if (!trimmed) return;
    setComments((prev) => [
      {
        id: Date.now(),
        author: currentUser,
        title: '새로운 방명록',
        content: trimmed,
        createdAt: '방금 전',
        likes: 0,
        liked: false,
        replies: [],
      },
      ...prev,
    ]);
    setNewComment('');
    setVisibleCount((prev) => prev + 1);
  };

  const handleReplyToggle = (commentId) => {
    setReplyOpenId((prev) => (prev === commentId ? null : commentId));
  };

  const handleReplyChange = (commentId, value) => {
    setReplyTextMap((prev) => ({ ...prev, [commentId]: value }));
  };

  const handleReplySubmit = (commentId) => {
    const replyText = (replyTextMap[commentId] || '').trim();
    if (!replyText) return;
    setComments((prev) =>
      prev.map((c) =>
        c.id === commentId
          ? {
              ...c,
              replies: [
                ...c.replies,
                {
                  id: Date.now(),
                  author: currentUser,
                  content: replyText,
                  createdAt: '방금 전',
                  likes: 0,
                  liked: false,
                },
              ],
            }
          : c,
      ),
    );
    setReplyTextMap((prev) => ({ ...prev, [commentId]: '' }));
    setReplyOpenId(null);
  };

  const handleToggleLike = (commentId, replyId = null) => {
    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id !== commentId) return comment;
        if (replyId == null) {
          const liked = !comment.liked;
          return { ...comment, liked, likes: comment.likes + (liked ? 1 : -1) };
        }
        return {
          ...comment,
          replies: comment.replies.map((reply) =>
            reply.id === replyId
              ? { ...reply, liked: !reply.liked, likes: reply.likes + (reply.liked ? -1 : 1) }
              : reply,
          ),
        };
      }),
    );
  };

  const handleMoreMenuToggle = (commentId, e) => {
    e.stopPropagation();
    setActiveMenuId((prev) => (prev === commentId ? null : commentId));
  };

  const handleCloseMenu = () => setActiveMenuId(null);

  const handleEditComment = (commentId, newContent) => {
    setComments((prev) =>
      prev.map((c) => c.id === commentId ? { ...c, content: newContent } : c),
    );
  };

  const handleDeleteComment = (commentId) => {
    setComments((prev) => prev.filter((c) => c.id !== commentId));
  };

  const handleEditReply = (commentId, replyId, newContent) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === commentId
          ? { ...c, replies: c.replies.map((r) => r.id === replyId ? { ...r, content: newContent } : r) }
          : c,
      ),
    );
  };

  const handleDeleteReply = (commentId, replyId) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === commentId
          ? { ...c, replies: c.replies.filter((r) => r.id !== replyId) }
          : c,
      ),
    );
  };

  return (
    <PageS.MainWrapper>
      <HeroRotationComponent mainContent={mainContent} quickMenus={quickMenus} />

      <S.GuestbookSection>
        <S.GuestbookHeader>
          <h2><span>페일로그</span> 방명록</h2>
          <p>다른 사람들이 남긴 방명록을 통해 소통해보세요.</p>
        </S.GuestbookHeader>

        <GuestbookInputComponent
          value={newComment}
          onChange={setNewComment}
          onSubmit={handleSubmit}
        />

        <S.SearchBar>
          <SearchDropdownComponent defaultValue={searchType} onChange={setSearchType} />
          <S.SmallSearchInput
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="검색어를 입력하세요."
          />
        </S.SearchBar>

        {filteredComments.length === 0 ? (
          <S.EmptyState>
            <h3>아직 작성된 방명록이 없어요.<br /><span>페일로그</span>의 커뮤니티를 이용해볼까요?</h3>
            <p>실패를 외면하지 않고 기록할 때,<br />당신의 강력한 성장 데이터가 됩니다.</p>
            <button type="button" onClick={() => navigate('/community')}>시작하기</button>
          </S.EmptyState>
        ) : (
          <S.CommentList>
            {visibleComments.map((comment) => (
              <GuestbookCommentItemComponent
                key={comment.id}
                comment={comment}
                currentUser={currentUser}
                isPageOwner={true}
                onLike={handleToggleLike}
                onReplyToggle={handleReplyToggle}
                replyOpen={replyOpenId === comment.id}
                replyText={replyTextMap[comment.id] || ''}
                onReplyChange={handleReplyChange}
                onReplySubmit={handleReplySubmit}
                activeMenuId={activeMenuId}
                onMenuToggle={handleMoreMenuToggle}
                onCloseMenu={handleCloseMenu}
                onEdit={handleEditComment}
                onDelete={handleDeleteComment}
                onEditReply={handleEditReply}
                onDeleteReply={handleDeleteReply}
              />
            ))}
            <div ref={sentinelRef} />
          </S.CommentList>
        )}
      </S.GuestbookSection>
    </PageS.MainWrapper>
  );
};

export default MyGuestbookContainer;
