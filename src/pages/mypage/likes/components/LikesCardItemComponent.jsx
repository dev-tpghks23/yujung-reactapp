import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from '../../commons/styles/MyFailCardItemStyles';
import LS from '../styles/LikesLogStyles';
import likeIcon from '../../../../components/resources/like.svg';
import likeFillIcon from '../../../../components/resources/like-fill2.svg';
import defaultProfile from '../../../../components/resources/default-profile.svg';
import { formatRelativeTime } from '../../../../utils/relativeTime';

const LikesCardItemComponent = ({ log = {}, iconSrc, onUnlike }) => {
  const navigate = useNavigate();

  if (!log) return null;

  const handleCardClick = () => {
    navigate(`/logs/view/${log.id}`);
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    if (log?.isLiked) {
      onUnlike?.(log.id);
    }
  };

  return (
    <S.MyFailCard
      $bgColor={log?.bgColor || '#F1F3FB'}
      onClick={handleCardClick}
    >
      <LS.LikesCardContent>
        <div className="ContentGroup">
          <h4>{log?.title || '제목 없는 페일로그'}</h4>

          <div className="AuthorArea">
            <img
              className="ProfileIcon"
              src={log?.profileImg || defaultProfile}
              alt="profile"
            />
            <span>{log?.author || '나의 기록'}</span>
          </div>

          <div className="CardFooter">
            <span className="TimeText">{formatRelativeTime(log?.createdAt || log?.date) || '방금 전'}</span>
            <div className="LikeArea">
              <button onClick={handleLikeClick}>
                <img
                  src={log?.isLiked ? likeFillIcon : likeIcon}
                  alt={log?.isLiked ? '좋아요 취소' : '좋아요'}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="CardMainImage">
          <img src={iconSrc} alt="" />
        </div>
      </LS.LikesCardContent>
    </S.MyFailCard>
  );
};

export default LikesCardItemComponent;
