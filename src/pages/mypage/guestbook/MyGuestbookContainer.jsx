import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getHeroContent } from '../heroSection/HeroData';
import HeroRotationComponent from '../heroSection/HeroRotationComponents';
import PageS from '../profile/styles/MyPageWrapper';
import S from './styles/MyGuestbookStyles';
import LogSearchComponent from '../commons/LogSearchComponent';

import GuestbookInputComponent from './components/GuestbookInputComponent';
import GuestbookCommentItemComponent from './components/GuestbookCommentItemComponent';
import axiosInstance from '../../../api/axiosInstance';
import PopupComponent from '../../../components/commons/PopupComponent';
import ReportPopup from '../../community/detail/components/ReportPopup';

const mapGuestbook = (item) => ({
  id: item.id,
  ownerNickname: item.ownerNickname || '',
  author: item.writerNickname || '익명',
  authorId: item.writerMemberId,
  profileImg: item.writerProfileImageUrl || null,
  title: item.guestbookContent?.slice(0, 20) || '',
  content: item.guestbookContent || '',
  createdAt: item.guestbookCreatedAt || '',
  likes: item.likeCount || 0,
  liked: item.isLike === 1,
  replies: (item.replies || []).map((r) => ({
    id: r.id,
    author: r.writerNickname || '익명',
    authorId: r.writerMemberId,
    profileImg: r.writerProfileImageUrl || null,
    content: r.guestbookReplyContent || '',
    createdAt: r.guestbookReplyCreatedAt || '',
    likes: r.likeCount || 0,
    liked: r.isLike === 1,
    rereplies: (r.rereplies || []).map((rr) => ({
      id: rr.id,
      author: rr.writerNickname || '익명',
      authorId: rr.writerMemberId,
      profileImg: rr.writerProfileImageUrl || null,
      content: rr.guestbookRereplyContent || '',
      createdAt: rr.guestbookRereplyCreatedAt || '',
      likes: rr.likeCount || 0,
      liked: rr.isLike === 1,
    })),
  })),
});

const MyGuestbookContainer = ({ isPageOwner = true }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { handle } = useParams();
  const { mainContent, quickMenus } = getHeroContent(pathname);

  const [loggedInMemberId, setLoggedInMemberId] = useState(null);
  const [loggedInNickname, setLoggedInNickname] = useState('익명');
  const [ownerMemberId, setOwnerMemberId] = useState(null);
  const [ownerNickname, setOwnerNickname] = useState('');
  const [viewedOwnerId, setViewedOwnerId] = useState(null);

  // 남의 방명록 조회 시: handle -> memberId 변환
  useEffect(() => {
    if (isPageOwner || !handle) return;
    axiosInstance.get(`/api/members/handle/${handle}`)
      .then((res) => {
        if (res.data?.success) setViewedOwnerId(res.data.data.memberId);
      })
      .catch(console.error);
  }, [isPageOwner, handle]);

  const [authChecked, setAuthChecked] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyTextMap, setReplyTextMap] = useState({});
  const [replyOpenId, setReplyOpenId] = useState(null);
  const [searchType, setSearchType] = useState('내용');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [reportState, setReportState] = useState(null);
  const sentinelRef = useRef(null);

  const openReport = (type, reportId, profileImg, author, content) => {
    if (!loggedInMemberId) {
      setLoginPopup(true);
      return;
    }
    setReportState({ type, id: reportId, profileImg, author, content });
  };

  const closeReport = () => setReportState(null);

  // 로그인 유저 정보 + ownerMemberId 결정
  useEffect(() => {
    axiosInstance.get('/private/member/me')
      .then((res) => {
        if (res.data?.success) {
          const d = res.data.data;
          setLoggedInMemberId(d.id);
          setLoggedInNickname(d.memberNickname || '익명');
          if (isPageOwner) {
            setOwnerMemberId(d.id);
          }
        }
      })
      .catch(console.error)
      .finally(() => setAuthChecked(true));
  }, [isPageOwner]);

  // ownerMemberId가 결정되면 방명록 목록 로드
  useEffect(() => {
    const ownerId = isPageOwner ? ownerMemberId : viewedOwnerId;
    if (!ownerId) return;
    axiosInstance.get('/api/guestbook/list', { params: { ownerMemberId: ownerId } })
      .then((res) => {
        if (res.data?.success && Array.isArray(res.data.data)) {
          const mapped = res.data.data.map(mapGuestbook);
          setComments(mapped);
          if (!isPageOwner && mapped.length > 0 && mapped[0].ownerNickname) {
            setOwnerNickname(mapped[0].ownerNickname);
          }
        }
      })
      .catch(console.error);
  }, [ownerMemberId, isPageOwner, viewedOwnerId]);

  const filteredComments = useMemo(() => {
    const keyword = searchKeyword.trim().toLowerCase();
    if (!keyword) return comments;

    return comments.filter((comment) => {
      const replies = comment.replies || [];
      const rereplies = replies.flatMap((r) => r.rereplies || []);

      if (searchType === '작성자') {
        const authors = [comment.author, ...replies.map((r) => r.author), ...rereplies.map((rr) => rr.author)];
        return authors.some((a) => a.toLowerCase().includes(keyword));
      }

      // 내용 (기본값)
      const contents = [comment.content, ...replies.map((r) => r.content), ...rereplies.map((rr) => rr.content)];
      return contents.some((c) => c.toLowerCase().includes(keyword));
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
    if (authChecked && !loggedInMemberId) {
      setLoginPopup(true);
      return;
    }
    if (!loggedInMemberId) return;
    const ownerId = isPageOwner ? ownerMemberId : viewedOwnerId;
    if (!ownerId) return;

    const optimisticComment = {
      id: `temp-${Date.now()}`,
      ownerNickname: '',
      author: loggedInNickname,
      authorId: loggedInMemberId,
      profileImg: null,
      title: trimmed.slice(0, 20),
      content: trimmed,
      createdAt: new Date().toISOString(),
      likes: 0,
      liked: false,
      replies: [],
    };

    setComments((prev) => [optimisticComment, ...prev]);
    setNewComment('');
    setVisibleCount((prev) => prev + 1);

    axiosInstance.post('/api/guestbook/write', { ownerMemberId: ownerId, guestbookContent: trimmed, writerMemberId: loggedInMemberId })
      .then(() => axiosInstance.get('/api/guestbook/list', { params: { ownerMemberId: ownerId } }))
      .then((res) => {
        if (res.data?.success && Array.isArray(res.data.data))
          setComments(res.data.data.map(mapGuestbook));
      })
      .catch((err) => {
        console.error(err);
        setComments((prev) => prev.filter((c) => c.id !== optimisticComment.id));
      });
  };

  const handleReplyToggle = (commentId) => {
    setReplyOpenId((prev) => (prev === commentId ? null : commentId));
  };

  const handleReplyChange = (commentId, value) => {
    setReplyTextMap((prev) => ({ ...prev, [commentId]: value }));
  };

  const refetchList = () => {
    const ownerId = isPageOwner ? ownerMemberId : viewedOwnerId;
    if (!ownerId) return Promise.resolve();
    return axiosInstance.get('/api/guestbook/list', { params: { ownerMemberId: ownerId } })
      .then((res) => {
        if (res.data?.success && Array.isArray(res.data.data))
          setComments(res.data.data.map(mapGuestbook));
      })
      .catch(console.error);
  };

  const handleReplySubmit = (commentId) => {
    const replyText = (replyTextMap[commentId] || '').trim();
    if (!replyText || !loggedInMemberId) return;

    const optimisticReply = {
      id: `temp-${Date.now()}`,
      author: loggedInNickname,
      authorId: loggedInMemberId,
      profileImg: null,
      content: replyText,
      createdAt: new Date().toISOString(),
      likes: 0,
      liked: false,
      rereplies: [],
    };
    setComments((prev) =>
      prev.map((c) => c.id !== commentId ? c : { ...c, replies: [...c.replies, optimisticReply] })
    );
    setReplyTextMap((prev) => ({ ...prev, [commentId]: '' }));
    setReplyOpenId(null);

    axiosInstance.post('/api/guestbook/reply/write', {
      guestbookId: commentId,
      writerMemberId: loggedInMemberId,
      guestbookReplyContent: replyText,
    }).then(refetchList).catch(console.error);
  };

  const handleToggleLike = (commentId, replyId = null, rereplyId = null) => {
    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id !== commentId) return comment;
        if (replyId == null) {
          const liked = !comment.liked;
          return { ...comment, liked, likes: comment.likes + (liked ? 1 : -1) };
        }
        if (rereplyId == null) {
          return {
            ...comment,
            replies: comment.replies.map((reply) =>
              reply.id === replyId
                ? { ...reply, liked: !reply.liked, likes: reply.likes + (reply.liked ? -1 : 1) }
                : reply,
            ),
          };
        }
        return {
          ...comment,
          replies: comment.replies.map((reply) =>
            reply.id !== replyId ? reply : {
              ...reply,
              rereplies: (reply.rereplies || []).map((rereply) =>
                rereply.id === rereplyId
                  ? { ...rereply, liked: !rereply.liked, likes: rereply.likes + (rereply.liked ? -1 : 1) }
                  : rereply,
              ),
            },
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
    const comment = comments.find((c) => c.id === commentId);
    if (!comment) return;
    const ownerId = isPageOwner ? ownerMemberId : viewedOwnerId;
    axiosInstance.put('/api/guestbook/update', { id: commentId, ownerMemberId: ownerId, guestbookContent: newContent, writerMemberId: comment.authorId })
      .then(() => {
        setComments((prev) => prev.map((c) => c.id === commentId ? { ...c, content: newContent } : c));
      })
      .catch(console.error);
  };

  const handleDeleteComment = (commentId) => {
    const comment = comments.find((c) => c.id === commentId);
    if (!comment) return;
    const ownerId = isPageOwner ? ownerMemberId : viewedOwnerId;
    axiosInstance.delete('/api/guestbook/delete', { data: { id: commentId, ownerMemberId: ownerId, writerMemberId: comment.authorId } })
      .then(() => {
        setComments((prev) => prev.filter((c) => c.id !== commentId));
      })
      .catch(console.error);
  };

  const handleEditReply = (commentId, replyId, newContent) => {
    const reply = comments.find((c) => c.id === commentId)?.replies?.find((r) => r.id === replyId);
    if (!reply) return;
    axiosInstance.put('/api/guestbook/reply/update', { id: replyId, writerMemberId: reply.authorId, guestbookReplyContent: newContent })
      .then(() => {
        setComments((prev) =>
          prev.map((c) => c.id !== commentId ? c : {
            ...c, replies: c.replies.map((r) => r.id === replyId ? { ...r, content: newContent } : r),
          }),
        );
      })
      .catch(console.error);
  };

  const handleDeleteReply = (commentId, replyId) => {
    const reply = comments.find((c) => c.id === commentId)?.replies?.find((r) => r.id === replyId);
    if (!reply) return;
    axiosInstance.delete('/api/guestbook/reply/delete', { data: { id: replyId, writerMemberId: reply.authorId } })
      .then(() => {
        setComments((prev) =>
          prev.map((c) => c.id !== commentId ? c : {
            ...c, replies: c.replies.filter((r) => r.id !== replyId),
          }),
        );
      })
      .catch(console.error);
  };

  const handleRereplySubmit = (commentId, replyId, content) => {
    if (!content.trim() || !loggedInMemberId) return;

    const optimisticRereply = {
      id: `temp-${Date.now()}`,
      author: loggedInNickname,
      authorId: loggedInMemberId,
      profileImg: null,
      content: content.trim(),
      createdAt: new Date().toISOString(),
      likes: 0,
    };
    setComments((prev) =>
      prev.map((c) => c.id !== commentId ? c : {
        ...c,
        replies: c.replies.map((r) => r.id !== replyId ? r : {
          ...r, rereplies: [...(r.rereplies || []), optimisticRereply],
        }),
      })
    );

    axiosInstance.post('/api/guestbook/rereply/write', {
      guestbookReplyId: replyId,
      writerMemberId: loggedInMemberId,
      guestbookRereplyContent: content.trim(),
    }).then(refetchList).catch(console.error);
  };

  const handleEditRereply = (commentId, replyId, rereplyId, newContent) => {
    const rereply = comments
      .find((c) => c.id === commentId)?.replies
      ?.find((r) => r.id === replyId)?.rereplies
      ?.find((rr) => rr.id === rereplyId);
    if (!rereply) return;
    axiosInstance.put('/api/guestbook/rereply/update', { id: rereplyId, writerMemberId: rereply.authorId, guestbookRereplyContent: newContent })
      .then(() => {
        setComments((prev) =>
          prev.map((c) => c.id !== commentId ? c : {
            ...c,
            replies: c.replies.map((r) => r.id !== replyId ? r : {
              ...r,
              rereplies: r.rereplies.map((rr) => rr.id === rereplyId ? { ...rr, content: newContent } : rr),
            }),
          }),
        );
      })
      .catch(console.error);
  };

  const handleDeleteRereply = (commentId, replyId, rereplyId) => {
    const rereply = comments
      .find((c) => c.id === commentId)?.replies
      ?.find((r) => r.id === replyId)?.rereplies
      ?.find((rr) => rr.id === rereplyId);
    if (!rereply) return;
    axiosInstance.delete('/api/guestbook/rereply/delete', { data: { id: rereplyId, writerMemberId: rereply.authorId } })
      .then(() => {
        setComments((prev) =>
          prev.map((c) => c.id !== commentId ? c : {
            ...c,
            replies: c.replies.map((r) => r.id !== replyId ? r : {
              ...r,
              rereplies: r.rereplies.filter((rr) => rr.id !== rereplyId),
            }),
          }),
        );
      })
      .catch(console.error);
  };

  return (
    <PageS.MainWrapper>
      <PopupComponent
        isOpen={loginPopup}
        message="방명록은 로그인 된 사용자만 이용하실 수 있습니다."
        onConfirm={() => setLoginPopup(false)}
      />
      <HeroRotationComponent mainContent={mainContent} quickMenus={quickMenus} isPageOwner={isPageOwner} handle={handle} />

      <S.GuestbookSection>
        <S.GuestbookHeader>
          <h2><span>페일로그</span> 방명록</h2>
          <p>{isPageOwner ? '다른 사람들이 남긴 방명록을 통해 소통해보세요.' : `${ownerNickname || handle}님의 방명록입니다.`}</p>
        </S.GuestbookHeader>

        <GuestbookInputComponent
          value={newComment}
          onChange={setNewComment}
          onSubmit={handleSubmit}
        />

        <LogSearchComponent
          currentOption={searchType}
          onOptionChange={setSearchType}
          onSearchSubmit={setSearchKeyword}
          placeholder="방명록 검색..."
          options={['내용', '작성자']}
        />

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
                currentUser={loggedInNickname}
                isPageOwner={isPageOwner}
                onLike={handleToggleLike}
                onReplyToggle={handleReplyToggle}
                replyOpen={replyOpenId === comment.id}
                replyText={replyTextMap[comment.id] || ''}
                onReplyChange={handleReplyChange}
                onReplySubmit={handleReplySubmit}
                activeMenuId={activeMenuId}
                onMenuToggle={handleMoreMenuToggle}
                onCloseMenu={handleCloseMenu}
                currentUserId={loggedInMemberId}
                onEdit={handleEditComment}
                onDelete={handleDeleteComment}
                onEditReply={handleEditReply}
                onDeleteReply={handleDeleteReply}
                onRereplySubmit={handleRereplySubmit}
                onEditRereply={handleEditRereply}
                onDeleteRereply={handleDeleteRereply}
                onReport={openReport}
              />
            ))}
            <div ref={sentinelRef} />
          </S.CommentList>
        )}
      </S.GuestbookSection>

      {reportState && (
        <ReportPopup
          type={reportState.type}
          id={reportState.id}
          memberId={loggedInMemberId}
          profileImg={reportState.profileImg}
          author={reportState.author}
          content={reportState.content}
          onClose={closeReport}
        />
      )}
    </PageS.MainWrapper>
  );
};

export default MyGuestbookContainer;
