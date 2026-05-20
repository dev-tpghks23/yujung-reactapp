import React from 'react';
import { formatRelativeTime } from '../../../utils/relativeTime';
import S from './styles/MyFailCardItemStyles';
import likeIcon from '../../../components/resources/like.svg';
import likeFillIcon from '../../../components/resources/like-fill2.svg';

const MyFailCardItemComponent = ({ log = {}, isSelected = false, iconSrc, onClick }) => {
  if (!log) return null;

  return (
    <S.MyFailCard
      $isSelected={isSelected}
      onClick={onClick}
      $bgColor={log?.bgColor || '#F1F3FB'}
    >
      <S.MyFailContent>
        <div className="ContentGroup">
          <h4>{log?.title || "제목 없는 페일로그"}</h4>

          <div className="AuthorArea">
            {log?.profileImg && (
              <img className="ProfileIcon" src={log.profileImg} alt="profile" />
            )}
            <span>{log?.author || '나의 기록'}</span>
          </div>

          <div className="CardFooter">
            <span className="TimeText">{formatRelativeTime(log?.createdAt || log?.date) || '방금 전'}</span>

            {log?.likeCount !== undefined && (
              <div className="LikeArea">
                <img
                  src={log?.isLiked ? likeFillIcon : likeIcon}
                  alt="좋아요"
                  style={{ width: '14px', height: '14px' }}
                />
                <span>{log.likeCount}</span>
              </div>
            )}
          </div>
        </div>

        <div className="CardMainImage">
          <img src={iconSrc} alt="fail-log-illustration" />
        </div>
      </S.MyFailContent>
    </S.MyFailCard>
  );
};

export default MyFailCardItemComponent;