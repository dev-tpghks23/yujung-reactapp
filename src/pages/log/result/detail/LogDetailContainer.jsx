import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';

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
              <svg width="17" height="17" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 1.25C11.8023 1.25 12.25 1.69772 12.25 2.25C12.25 2.80228 11.8023 3.25 11.25 3.25H3.375C3.34185 3.25 3.30958 3.26269 3.28613 3.28613C3.26269 3.30958 3.25 3.34185 3.25 3.375V14.625C3.25 14.6582 3.26269 14.6904 3.28613 14.7139C3.30958 14.7373 3.34185 14.75 3.375 14.75H14.625C14.6582 14.75 14.6904 14.7373 14.7139 14.7139C14.7373 14.6904 14.75 14.6582 14.75 14.625V7.5C14.75 6.94772 15.1977 6.5 15.75 6.5C16.3023 6.5 16.75 6.94772 16.75 7.5V14.625C16.75 15.1886 16.5264 15.7294 16.1279 16.1279C15.7294 16.5264 15.1886 16.75 14.625 16.75H3.375C2.81141 16.75 2.27058 16.5264 1.87207 16.1279C1.47356 15.7294 1.25 15.1886 1.25 14.625V3.375C1.25 2.81141 1.47356 2.27059 1.87207 1.87207C2.27059 1.47356 2.81141 1.25 3.375 1.25H11.25ZM14.5615 2.04395C14.8825 1.59453 15.5066 1.49051 15.9561 1.81152C16.4055 2.13253 16.5095 2.75664 16.1885 3.20605L10.5635 11.0811C10.4039 11.3045 10.1597 11.4524 9.8877 11.4902C9.61563 11.528 9.33948 11.4528 9.125 11.2812L5.375 8.28125C4.94374 7.93624 4.87374 7.30626 5.21875 6.875C5.56376 6.44374 6.19374 6.37374 6.625 6.71875L9.5498 9.05859L14.5615 2.04395Z" fill="#00B53F"/>
              </svg>
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

      {/* Author & Actions (Like button always shown now) */}
      <S.MetaRow>
        <S.AuthorInfo>
          <S.AuthorName>{selectedLog.author.name}</S.AuthorName>
        </S.AuthorInfo>

        <S.LikeButton onClick={handleLike} $liked={liked}>
          <S.HeartIcon $liked={liked}>
            <svg width="18" height="16" viewBox="0 0 25 22" fill={liked ? "#FF4B4B" : "none"} xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.19401 0.777345C3.65026 0.777345 0.777344 3.65026 0.777344 7.19401C0.777344 13.6107 8.36068 19.444 12.444 20.8008C16.5273 19.444 24.1107 13.6107 24.1107 7.19401C24.1107 3.65026 21.2378 0.777345 17.694 0.777345C15.524 0.777345 13.6048 1.85476 12.444 3.50384C11.8522 2.66115 11.0661 1.97342 10.1523 1.49883C9.23846 1.02424 8.22374 0.776763 7.19401 0.777345Z"
                stroke="#FF4B4B"
                strokeWidth="1.55556"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </S.HeartIcon>
          <span>{likeCount}</span>
        </S.LikeButton>
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

const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 1096px;
  margin: 0 auto;
`;

S.BadgeRow = styled.div`
  display: flex;
  gap: 8px;
`;

S.Badge = styled.span`
  width: 100px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ $color }) => $color};
  background-color: ${({ $bg }) => $bg};
`;

S.TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

S.LogTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3_2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  line-height: 1.3;
  letter-spacing: -0.5px;
`;

S.Date = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  color: ${({ theme }) => theme.GRAYSCALE[5]};
  flex-shrink: 0;
  margin-left: 20px;
`;

S.MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
  border-bottom: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
`;

S.AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

S.AuthorName = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.LikeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  span {
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
  }
`;

S.HeartIcon = styled.div`
  width: 18px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.VisionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[2]};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.GRAYSCALE[1]};
`;

S.VisionLabel = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  color: ${({ theme }) => theme.GRAYSCALE[9]};
  white-space: nowrap;
`;

S.VisionValue = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.ContentBox = styled.div`
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[2]};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.PALETTE.white};
`;

S.ContentText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  line-height: 2;
  white-space: pre-line;
  letter-spacing: -0.2px;
`;

export default LogDetailContainer;