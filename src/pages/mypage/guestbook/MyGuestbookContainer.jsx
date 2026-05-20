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

const M = 60 * 1000;
const H = 60 * M;

const initialComments = [
  {
    id: 1,
    author: '해맑이',
    title: '정말 공감됩니다',
    content: '진짜 공감됩니다. 저도 집에서는 잘 되는데 시험장만 가면 아는 것도 막히더라고요.',
    createdAt: new Date(Date.now() - 3 * M),
    likes: 3,
    liked: false,
    replies: [
      {
        id: 11,
        author: '해맑이',
        content: '저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.',
        createdAt: new Date(Date.now() - 3 * M),
        likes: 0,
        liked: false,
      },
    ],
  },
  {
    id: 2,
    author: '페일러',
    title: '다음 줄이 언제 넘어가나 했어요',
    content: '그리고 댓글에는 글자가 여기까지 커집니다. 어디까지 커지는지 확인해본 결과 줄을 줄 줄 알았는데 너무 넓은 범위까지 갑니다.',
    createdAt: new Date(Date.now() - 10 * M),
    likes: 1,
    liked: false,
    replies: [],
  },
  {
    id: 3,
    author: '소담',
    title: '응원합니다',
    content: '항상 응원하고 있어요. 다음 번에는 더 좋은 결과가 있기를 바랍니다.',
    createdAt: new Date(Date.now() - 1 * H),
    likes: 2,
    liked: false,
    replies: [],
  },
  {
    id: 4,
    author: '나무',
    title: '다음 도전도 화이팅',
    content: '글 잘 읽었습니다. 다음 도전도 화이팅입니다!',
    createdAt: new Date(Date.now() - 2 * H),
    likes: 0,
    liked: false,
    replies: [],
  },
  {
    id: 5,
    author: '봄날',
    title: '공부하다 힘들 때 읽기 좋아요',
    content: '이런 글이 있어서 다시 마음을 다잡게 되네요. 감사합니다.',
    createdAt: new Date(Date.now() - 5 * H),
    likes: 4,
    liked: false,
    replies: [],
  },
];

const MyGuestbookContainer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { mainContent, quickMenus } = getHeroContent(pathname);
  const currentUser = useAuthStore((state) => state.user?.nickname || state.user?.name || '익명');

  const [comments, setComments] = useState(initialComments);
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
