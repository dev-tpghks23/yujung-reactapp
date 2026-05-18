import styled from 'styled-components';

export const S = {};

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

  img {
    width: 100%;
    height: 100%;
  }
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
