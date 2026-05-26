import React from 'react';
import { formatRelativeTime } from '../../../utils/relativeTime';
import S from './styles/MyFailCardItemStyles';
import likeIcon from '../../../components/resources/like.svg';
import likeFillIcon from '../../../components/resources/like-fill2.svg';
import defaultProfile from '../../../components/resources/default-profile.svg';

const CYCLE_COLORS = ['#F1F3FB', '#F1F3FB', '#D7EEFF', '#D7E0FF'];

const MyFailCardItemComponent = ({ log = {}, isSelected = false, iconSrc, onClick, index = 0 }) => {
  if (!log) return null;

  const bgColor = log?.bgColor || CYCLE_COLORS[index % CYCLE_COLORS.length];

  return (
    <S.MyFailCard
      $isSelected={isSelected}
      onClick={onClick}
      $bgColor={bgColor}
    >
      <S.MyFailContent>
        <div className="ContentGroup">
          <h4>{log?.title || "제목 없는 페일로그"}</h4>

          <div className="AuthorArea">
            <img className="ProfileIcon" src={log?.profileImg || defaultProfile} alt="profile" />
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