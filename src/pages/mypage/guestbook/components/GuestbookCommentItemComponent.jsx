import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import S from '../styles/MyGuestbookStyles';
import GuestbookInputComponent from './GuestbookInputComponent';
import likeIcon from '../../../../components/resources/like.svg';
import likeFillIcon from '../../../../components/resources/like-fill2.svg';
import defaultProfile from '../../../../components/resources/default-profile.svg';
import { formatRelativeTime } from '../../../../utils/relativeTime';

const ClampedText = ({ content }) => {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    setIsClamped(el.scrollHeight > el.clientHeight);
  }, [content]);

  return (
    <>
      <S.CommentText ref={textRef} $clamped={!expanded}>
        {content}
      </S.CommentText>
      {isClamped && (
        <S.SeeMoreButton type="button" onClick={() => setExpanded((prev) => !prev)}>
          {expanded ? '접기' : '자세히 보기'}
        </S.SeeMoreButton>
      )}
    </>
  );
};

const GuestbookCommentItemComponent = ({
  comment,
  currentUser,
  currentUserId,
  isPageOwner,
  onLike,
  onReplyToggle,
  replyOpen,
  replyText,
  onReplyChange,
  onReplySubmit,
  activeMenuId,
  onMenuToggle,
  onCloseMenu,
  onEdit,
  onDelete,
  onEditReply,
  onDeleteReply,
  onRereplySubmit,
  onEditRereply,
  onDeleteRereply,
}) => {
  const navigate = useNavigate();
  const isMyComment = comment.author === currentUser;

  const navigateToProfile = (authorId) => {
    if (authorId === currentUserId) navigate('/my-page/profile');
    else navigate(`/user/${authorId}/profile`);
  };

  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);

  const [editingReplyId, setEditingReplyId] = useState(null);
  const [editReplyContent, setEditReplyContent] = useState('');

  const [rereplyOpenReplyId, setRereplyOpenReplyId] = useState(null);
  const [rereplyTextMap, setRereplyTextMap] = useState({});
  const [editingRereplyId, setEditingRereplyId] = useState(null);
  const [editRereplyContent, setEditRereplyContent] = useState('');

  const handleStartEdit = () => {
    setEditContent(comment.content);
    setEditMode(true);
    onCloseMenu();
  };

  const handleSaveEdit = () => {
    if (editContent.trim()) {
      onEdit(comment.id, editContent.trim());
    }
    setEditMode(false);
  };

  const handleStartReplyEdit = (reply) => {
    setEditingReplyId(reply.id);
    setEditReplyContent(reply.content);
    onCloseMenu();
  };

  const handleSaveReplyEdit = (replyId) => {
    if (editReplyContent.trim()) {
      onEditReply(comment.id, replyId, editReplyContent.trim());
    }
    setEditingReplyId(null);
  };

  return (
    <S.CommentCard>
      <S.CommentHeader>
        <S.CommentHeaderLeft>
          <S.AuthorLink type="button" onClick={() => navigateToProfile(comment.authorId)}>
            <S.Avatar>
              <img
                src={comment.profileImg || defaultProfile}
                alt="profile"
                onError={(e) => { e.target.src = defaultProfile; }}
              />
            </S.Avatar>
            <S.CommentAuthor>{comment.author}</S.CommentAuthor>
          </S.AuthorLink>
          <S.CommentTime>{formatRelativeTime(comment.createdAt)}</S.CommentTime>
        </S.CommentHeaderLeft>

        <S.CommentMenu
          type="button"
          aria-label="옵션"
          onClick={(e) => onMenuToggle(comment.id, e)}
        >
          ···
        </S.CommentMenu>

        {activeMenuId === comment.id && (
          <S.MenuDropdown onClick={(e) => e.stopPropagation()}>
            {isMyComment ? (
              <>
                <S.MenuItem type="button" onClick={handleStartEdit}>수정하기</S.MenuItem>
                <S.MenuItem type="button" onClick={() => { onDelete(comment.id); onCloseMenu(); }}>삭제하기</S.MenuItem>
              </>
            ) : isPageOwner ? (
              <>
                <S.MenuItem type="button" onClick={onCloseMenu}>신고하기</S.MenuItem>
                <S.MenuItem type="button" onClick={() => { onDelete(comment.id); onCloseMenu(); }}>삭제하기</S.MenuItem>
              </>
            ) : (
              <S.MenuItem type="button" onClick={onCloseMenu}>신고하기</S.MenuItem>
            )}
          </S.MenuDropdown>
        )}
      </S.CommentHeader>

      {editMode ? (
        <>
          <S.EditTextarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            autoFocus
          />
          <S.EditActions>
            <S.EditCancelBtn type="button" onClick={() => setEditMode(false)}>취소</S.EditCancelBtn>
            <S.EditSaveBtn type="button" onClick={handleSaveEdit}>저장</S.EditSaveBtn>
          </S.EditActions>
        </>
      ) : (
        <>
          <ClampedText content={comment.content} />

          <S.CommentFooter>
            <S.Reaction
              liked={comment.liked}
              type="button"
              onClick={() => onLike(comment.id)}
            >
              <img
                src={comment.liked ? likeFillIcon : likeIcon}
                alt="좋아요"
              />
              <span>{comment.likes}</span>
            </S.Reaction>

            <S.ReplyAction type="button" onClick={() => onReplyToggle(comment.id)}>
              답글{comment.replies.length > 0 ? ` ${comment.replies.length}` : ''}
            </S.ReplyAction>
          </S.CommentFooter>
        </>
      )}

      {comment.replies.length > 0 && (
        <S.ReplyList>
          {comment.replies.map((reply) => {
            const isMyReply = reply.author === currentUser;
            const isEditingThisReply = editingReplyId === reply.id;

            return (
              <S.ReplyCard key={reply.id}>
                <S.CommentHeader>
                  <S.CommentHeaderLeft>
                    <S.AuthorLink type="button" onClick={() => navigateToProfile(reply.authorId)}>
                      <S.ReplyAvatar>
                        <img
                          src={reply.profileImg || defaultProfile}
                          alt="profile"
                          onError={(e) => { e.target.src = defaultProfile; }}
                        />
                      </S.ReplyAvatar>
                      <S.CommentAuthor>{reply.author}</S.CommentAuthor>
                    </S.AuthorLink>
                    <S.CommentTime>{formatRelativeTime(reply.createdAt)}</S.CommentTime>
                  </S.CommentHeaderLeft>

                  <S.CommentMenu
                    type="button"
                    aria-label="옵션"
                    onClick={(e) => onMenuToggle(`reply-${reply.id}`, e)}
                  >
                    ···
                  </S.CommentMenu>

                  {activeMenuId === `reply-${reply.id}` && (
                    <S.MenuDropdown onClick={(e) => e.stopPropagation()}>
                      {isMyReply ? (
                        <>
                          <S.MenuItem type="button" onClick={() => handleStartReplyEdit(reply)}>수정하기</S.MenuItem>
                          <S.MenuItem type="button" onClick={() => { onDeleteReply(comment.id, reply.id); onCloseMenu(); }}>삭제하기</S.MenuItem>
                        </>
                      ) : isPageOwner ? (
                        <>
                          <S.MenuItem type="button" onClick={onCloseMenu}>신고하기</S.MenuItem>
                          <S.MenuItem type="button" onClick={() => { onDeleteReply(comment.id, reply.id); onCloseMenu(); }}>삭제하기</S.MenuItem>
                        </>
                      ) : (
                        <S.MenuItem type="button" onClick={onCloseMenu}>신고하기</S.MenuItem>
                      )}
                    </S.MenuDropdown>
                  )}
                </S.CommentHeader>

                {isEditingThisReply ? (
                  <>
                    <S.EditTextarea
                      value={editReplyContent}
                      onChange={(e) => setEditReplyContent(e.target.value)}
                      autoFocus
                    />
                    <S.EditActions>
                      <S.EditCancelBtn type="button" onClick={() => setEditingReplyId(null)}>취소</S.EditCancelBtn>
                      <S.EditSaveBtn type="button" onClick={() => handleSaveReplyEdit(reply.id)}>저장</S.EditSaveBtn>
                    </S.EditActions>
                  </>
                ) : (
                  <>
                    <ClampedText content={reply.content} />
                    <S.CommentFooter>
                      <S.Reaction
                        liked={reply.liked}
                        type="button"
                        onClick={() => onLike(comment.id, reply.id)}
                      >
                        <img
                          src={reply.liked ? likeFillIcon : likeIcon}
                          alt="좋아요"
                        />
                        <span>{reply.likes}</span>
                      </S.Reaction>
                      <S.ReplyAction
                        type="button"
                        onClick={() => setRereplyOpenReplyId((prev) => prev === reply.id ? null : reply.id)}
                      >
                        답글{(reply.rereplies || []).length > 0 ? ` ${reply.rereplies.length}` : ''}
                      </S.ReplyAction>
                    </S.CommentFooter>
                  </>
                )}

                {/* 대댓글 목록 */}
                {(reply.rereplies || []).length > 0 && (
                  <S.ReplyList>
                    {reply.rereplies.map((rereply) => {
                      const isMyRereply = rereply.author === currentUser;
                      const isEditingThisRereply = editingRereplyId === rereply.id;

                      return (
                        <S.ReplyCard key={rereply.id} style={{ marginLeft: '20px' }}>
                          <S.CommentHeader>
                            <S.CommentHeaderLeft>
                              <S.AuthorLink type="button" onClick={() => navigateToProfile(rereply.authorId)}>
                                <S.ReplyAvatar>
                                  <img
                                    src={rereply.profileImg || defaultProfile}
                                    alt="profile"
                                    onError={(e) => { e.target.src = defaultProfile; }}
                                  />
                                </S.ReplyAvatar>
                                <S.CommentAuthor>{rereply.author}</S.CommentAuthor>
                              </S.AuthorLink>
                              <S.CommentTime>{formatRelativeTime(rereply.createdAt)}</S.CommentTime>
                            </S.CommentHeaderLeft>

                            <S.CommentMenu
                              type="button"
                              aria-label="옵션"
                              onClick={(e) => onMenuToggle(`rereply-${rereply.id}`, e)}
                            >
                              ···
                            </S.CommentMenu>

                            {activeMenuId === `rereply-${rereply.id}` && (
                              <S.MenuDropdown onClick={(e) => e.stopPropagation()}>
                                {isMyRereply ? (
                                  <>
                                    <S.MenuItem type="button" onClick={() => { setEditingRereplyId(rereply.id); setEditRereplyContent(rereply.content); onCloseMenu(); }}>수정하기</S.MenuItem>
                                    <S.MenuItem type="button" onClick={() => { onDeleteRereply(comment.id, reply.id, rereply.id); onCloseMenu(); }}>삭제하기</S.MenuItem>
                                  </>
                                ) : isPageOwner ? (
                                  <>
                                    <S.MenuItem type="button" onClick={onCloseMenu}>신고하기</S.MenuItem>
                                    <S.MenuItem type="button" onClick={() => { onDeleteRereply(comment.id, reply.id, rereply.id); onCloseMenu(); }}>삭제하기</S.MenuItem>
                                  </>
                                ) : (
                                  <S.MenuItem type="button" onClick={onCloseMenu}>신고하기</S.MenuItem>
                                )}
                              </S.MenuDropdown>
                            )}
                          </S.CommentHeader>

                          {isEditingThisRereply ? (
                            <>
                              <S.EditTextarea
                                value={editRereplyContent}
                                onChange={(e) => setEditRereplyContent(e.target.value)}
                                autoFocus
                              />
                              <S.EditActions>
                                <S.EditCancelBtn type="button" onClick={() => setEditingRereplyId(null)}>취소</S.EditCancelBtn>
                                <S.EditSaveBtn type="button" onClick={() => {
                                  if (editRereplyContent.trim()) onEditRereply(comment.id, reply.id, rereply.id, editRereplyContent.trim());
                                  setEditingRereplyId(null);
                                }}>저장</S.EditSaveBtn>
                              </S.EditActions>
                            </>
                          ) : (
                            <ClampedText content={rereply.content} />
                          )}
                        </S.ReplyCard>
                      );
                    })}
                  </S.ReplyList>
                )}

                {/* 대댓글 입력창 */}
                {rereplyOpenReplyId === reply.id && (
                  <S.ReplyInputWrapper>
                    <GuestbookInputComponent
                      value={rereplyTextMap[reply.id] || ''}
                      onChange={(val) => setRereplyTextMap((prev) => ({ ...prev, [reply.id]: val }))}
                      onSubmit={() => {
                        const text = (rereplyTextMap[reply.id] || '').trim();
                        if (!text) return;
                        onRereplySubmit(comment.id, reply.id, text);
                        setRereplyTextMap((prev) => ({ ...prev, [reply.id]: '' }));
                        setRereplyOpenReplyId(null);
                      }}
                      placeholder="대댓글을 남겨볼까요?"
                    />
                  </S.ReplyInputWrapper>
                )}
              </S.ReplyCard>
            );
          })}
        </S.ReplyList>
      )}

      {replyOpen && (
        <S.ReplyInputWrapper>
          <GuestbookInputComponent
            value={replyText}
            onChange={(val) => onReplyChange(comment.id, val)}
            onSubmit={() => onReplySubmit(comment.id)}
            placeholder="답글을 남겨볼까요?"
          />
        </S.ReplyInputWrapper>
      )}

    </S.CommentCard>
  );
};

export default GuestbookCommentItemComponent;
