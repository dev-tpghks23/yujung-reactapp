import styled from 'styled-components';

export const S = {};

S.Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: ${({ theme }) => theme.GRAYSCALE[1]};
`;

S.Header = styled.div`
  text-align: left;
  margin-bottom: 50px;
`;

S.Title = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.SubTitle = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.ContentWrapper = styled.div`
  width: 100%;
  max-width: 872px;
`;

S.StepInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
`;

S.ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

S.StepBadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

S.StepBadge = styled.span`
  color: ${({ theme }) => theme.PALETTE.primary.main};
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  white-space: nowrap;
`;

S.StepTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.StepDesc = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.GRAYSCALE[9]};
`;

S.PrevButton = styled.button`
  padding: 10px 28px;
  background-color: ${({ theme }) => theme.PALETTE.white};
  color: ${({ theme }) => theme.GRAYSCALE[9]};
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background-color: ${({ theme }) => theme.PALETTE.primary.main};
    color: ${({ theme }) => theme.PALETTE.white};
    border-color: ${({ theme }) => theme.PALETTE.primary.main};
  }
`;

S.FormContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[2]};

  &::before {
    content: '';
    position: absolute;
    top: 24px;
    bottom: 24px;
    left: 0px;
    width: 5px;
    background-color: ${({ theme }) => theme.PALETTE.primary.main};
    border-radius: 0 4px 4px 0;
  }
`;

S.LogHeader = styled.div`
  margin-bottom: 10px;
`;

S.LogTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

S.Badges = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

S.BadgeOrange = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 67px;
  height: 20px;
  background-color: ${({ theme }) => theme.PALETTE.fourth.light};
  color: ${({ theme }) => theme.PALETTE.fourth.main};
  border-radius: 6px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  box-sizing: border-box;
`;

const IconBase = styled.div`
  background-color: currentColor;
  -webkit-mask-image: url(${props => props.$src});
  mask-image: url(${props => props.$src});
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-size: contain;
  display: inline-block;
`;

S.WritingIcon = styled(IconBase)`
  width: 14px;
  height: 14px;
`;

S.TipIcon = styled.svg`
  width: 15px;
  height: 15px;
  color: ${({ theme }) => theme.PALETTE.fourth.main};
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.BadgeBlue = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 67px;
  height: 20px;
  background-color: ${({ theme }) => theme.PALETTE.primary.light};
  color: ${({ theme }) => theme.PALETTE.primary.main};
  border-radius: 6px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  box-sizing: border-box;
`;

S.Date = styled.span`
  color: ${({ theme }) => theme.GRAYSCALE[5]};
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
`;

S.LogTitle = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.TextArea = styled.textarea`
  width: 100%;
  min-height: 380px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
  border-radius: 12px;
  font-family: inherit;
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  line-height: 1.6;
  color: ${({ theme }) => theme.GRAYSCALE[9]};
  outline: none;
  background-color: ${({ theme }) => theme.PALETTE.white};
  resize: none;
  margin-bottom: 24px;

  &::placeholder {
    color: ${({ theme }) => theme.GRAYSCALE[5]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.PALETTE.primary.main};
  }
`;

S.TipBox = styled.div`
  width: 782px;
  min-height: 60px;
  height: auto;
  background-color: ${({ theme }) => theme.PALETTE.primary.light}; 
  padding: 12px 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  margin-bottom: 24px;
  box-sizing: border-box;
`;

S.TipTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`;

S.TipTitle = styled.span`
  color: ${({ theme }) => theme.PALETTE.primary.main};
  font-size: ${({ theme }) => theme.FONT_SIZE.h11};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  white-space: nowrap;
`;

S.TipDesc = styled.p`
  color: ${({ theme }) => theme.PALETTE.primary.main};
  font-size: ${({ theme }) => theme.FONT_SIZE.h11}; 
  line-height: 1.4;
  margin: 0;
  word-break: keep-all;
  word-wrap: break-word;
`;

S.ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

S.TempSaveButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 38px;
  background-color: ${({ theme }) => theme.PALETTE.white};
  color: ${({ theme }) => theme.PALETTE.primary.main};
  border: 1px solid ${({ theme }) => theme.PALETTE.primary.main};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.PALETTE.primary.light};
  }
`;

S.AnalyzeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 38px;
  background-color: ${({ theme }) => theme.PALETTE.primary.main};
  color: ${({ theme }) => theme.PALETTE.white};
  border: none;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;
