import React from 'react';
import { useOutletContext } from 'react-router-dom';
import checkCircleIcon from '../result_icon/check_circle.svg';
import heartActiveIcon from '../result_icon/heart_active.svg';
import heartInactiveIcon from '../result_icon/heart_inactive.svg';
import { S } from './LogDetailContainerStyles';

import viewIcon from '../result_icon/view_icon.svg';

const LogDetailContainer = () => {
  const { liked, likeCount, handleLike, selectedLog } = useOutletContext();

  if (!selectedLog) return null;

  return (
    <S.Container>
      {/* Badges */}
      <S.BadgeRow>
        {selectedLog.badges.map((badge, idx) => (
          <S.Badge key={idx} $color={badge.color} $bg={badge.bg}>
            {badge.label === "분석 완료" && (
              <S.CheckIcon src={checkCircleIcon} alt="check circle" />
            )}
            {badge.label}
          </S.Badge>
        ))}
      </S.BadgeRow>

      {/* Title & Date */}
      <S.TitleRow>
        <S.LogTitle>{selectedLog.title}</S.LogTitle>
        <S.Date>{selectedLog.date}</S.Date>
      </S.TitleRow>

      {/* Author & Actions */}
      <S.MetaRow>
        <S.AuthorInfo>
          <S.AuthorName>{selectedLog.author.name}</S.AuthorName>
        </S.AuthorInfo>

        <S.StatsWrapper>
          <S.StatItem>
            <img src={viewIcon} alt="views" />
            <span>{selectedLog.views}</span>
          </S.StatItem>

          <S.LikeButton onClick={handleLike}>
            <S.HeartIcon>
              <img src={liked ? heartActiveIcon : heartInactiveIcon} alt="heart" />
            </S.HeartIcon>
            <span>{likeCount}</span>
          </S.LikeButton>
        </S.StatsWrapper>
      </S.MetaRow>

      {/* Vision */}
      <S.VisionBox>
        <S.VisionLabel>이루고 싶은 비전</S.VisionLabel>
        <S.VisionValue>{selectedLog.vision}</S.VisionValue>
      </S.VisionBox>

      {/* Content */}
      <S.ContentBox>
        <S.ContentText>{selectedLog.content}</S.ContentText>
      </S.ContentBox>
    </S.Container>
  );
};

export default LogDetailContainer;