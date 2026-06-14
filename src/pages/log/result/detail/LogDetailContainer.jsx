import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { goToMemberProfile } from '../../../../utils/profileNavigation';
import checkCircleIcon from '../result_icon/check_circle.svg';
import heartActiveIcon from '../result_icon/heart_active.svg';
import heartInactiveIcon from '../result_icon/heart_inactive.svg';
import { S } from './LogDetailContainerStyles';

import viewIcon from '../result_icon/view_icon.svg';

const LogDetailContainer = () => {
  const { liked, likeCount, handleLike, selectedLog } = useOutletContext();
  const navigate = useNavigate();

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
        <S.AuthorInfo
          onClick={() => goToMemberProfile(navigate, selectedLog.author?.memberId)}
          style={{ cursor: 'pointer' }}
        >
          <S.AvatarWrap>
            <S.ProfileImage src={selectedLog.author.profileImg} alt="profile" onError={(e) => { e.target.onerror = null; e.target.src = '/assets/picture/default-profile.png'; }} />
          </S.AvatarWrap>
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