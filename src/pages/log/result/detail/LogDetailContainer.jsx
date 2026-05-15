import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import checkCircleIcon from '../result_icon/check_circle.svg';

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

        <S.LikeButton onClick={handleLike}>
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

S.CheckIcon = styled.img`
  width: 17px;
  height: 17px;
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

S.CheckIcon = styled.img`
  width: 17px;
  height: 17px;
`;

export default LogDetailContainer;