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

S.ContentWrapper = styled.div`
  width: 100%;
  max-width: 882px;
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
  color: ${({ theme }) => theme.PALETTE.third.main};
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

S.NextButton = styled.button`
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
    background-color: ${({ theme }) => theme.PALETTE.third.main};
    color: ${({ theme }) => theme.PALETTE.white};
    border-color: ${({ theme }) => theme.PALETTE.third.main};
  }
`;

S.FormContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 16px;
  padding: 40px 50px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 36px;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[3]};

  /* The left purple bar */
  &::before {
    content: '';
    position: absolute;
    top: 24px;
    bottom: 24px;
    left: 0px;
    width: 5px;
    background-color: ${({ theme }) => theme.PALETTE.third.main};
    border-radius: 0 4px 4px 0;
  }
`;

S.FormRow = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

S.FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
`;

S.LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

S.Label = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.Input = styled.input`
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
  height: 52px;
  padding: 0 24px;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[3]};
  border-radius: 8px;
  font-family: inherit;
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  outline: none;
  background-color: ${({ theme }) => theme.PALETTE.white};
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.GRAYSCALE[9]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.PALETTE.third.main};
  }
`;

S.DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

S.DropdownHeader = styled.div`
  width: 267px;
  height: 52px;
  padding: 0 24px;
  border: 1px solid ${({ $isOpen, theme }) => $isOpen ? theme.PALETTE.third.main : theme.GRAYSCALE[3]};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  background-color: ${({ theme }) => theme.PALETTE.white};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border-color 0.2s;
  box-sizing: border-box;
`;

S.DropdownText = styled.span`
  color: ${({ $hasValue, theme }) => $hasValue ? theme.TEXT_COLOR.basic : theme.GRAYSCALE[9]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

S.ArrowIcon = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-right: 2px solid ${({ $isOpen, theme }) => $isOpen ? theme.PALETTE.third.main : theme.GRAYSCALE[5]};
  border-bottom: 2px solid ${({ $isOpen, theme }) => $isOpen ? theme.PALETTE.third.main : theme.GRAYSCALE[5]};
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(-135deg) translateY(3px)' : 'rotate(45deg) translateY(-3px)'};
  transition: transform 0.3s ease, border-color 0.2s;
  flex-shrink: 0;
  margin-bottom: ${({ $isOpen }) => $isOpen ? '-4px' : '4px'};
`;

S.FloatingList = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[3]};
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

S.FloatingItem = styled.li`
  padding: 14px 20px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  cursor: pointer;
  background-color: ${({ $isSelected, theme }) => ($isSelected ? theme.PALETTE.third.light : 'transparent')};
  
  /* Prevent layout shift by using a transparent border initially */
  border: 1.5px solid transparent;
  border-bottom: 1px solid ${({ theme }) => theme.GRAYSCALE[2]};
  position: relative;
  transition: border-color 0.1s ease;

  &:last-child {
    border-bottom: 1.5px solid transparent;
  }

  &:hover {
    border: 1.5px solid ${({ theme }) => theme.PALETTE.third.main};
    border-radius: 8px;
    z-index: 1;
    /* Maintain background color as per user request */
    background-color: ${({ $isSelected, theme }) => ($isSelected ? theme.PALETTE.third.light : 'transparent')};
  }

  /* Apply the same border for selected items as seen in the photo */
  ${({ $isSelected, theme }) => $isSelected && `
    border: 1.5px solid ${theme.PALETTE.third.main};
    border-radius: 8px;
    z-index: 1;
  `}
`;

S.LoadVisionButton = styled.button`
  width: 155px;
  height: 36px;
  border: 1px solid ${({ $isOpen, theme }) => $isOpen ? theme.PALETTE.third.main : theme.GRAYSCALE[3]};
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 6px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ $isOpen, theme }) => $isOpen ? theme.PALETTE.third.main : theme.GRAYSCALE[9]};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  white-space: nowrap;
  transition: border-color 0.2s, color 0.2s, background-color 0.2s;
  box-sizing: border-box;
  padding: 0;

  &:hover {
    background-color: ${({ theme }) => theme.PALETTE.white};
  }

  &:active {
    border-color: ${({ theme }) => theme.PALETTE.third.main};
    color: ${({ theme }) => theme.PALETTE.third.main};
  }
`;

S.EmptyVision = styled.li`
  padding: 50px 20px;
  text-align: center;
  color: ${({ theme }) => theme.GRAYSCALE[5]};
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  line-height: 1.6;
`;

S.ThumbnailRow = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
`;

S.UploadButtonArea = styled.div`
  flex: 2;
  height: 52px;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[3]};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.PALETTE.white};
  cursor: pointer;
  gap: 10px;
  transition: border-color 0.2s, background-color 0.2s;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.PALETTE.white};
  }

  &:active {
    border-color: ${({ theme }) => theme.PALETTE.third.main};
    background-color: ${({ theme }) => theme.PALETTE.white};
  }
`;

S.UploadText = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.GRAYSCALE[9]};
`;

S.PreviewWrapper = styled.div`
  flex: 1; /* aligns with category input area */
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 140px;
  border: 1.5px solid ${({ theme }) => theme.GRAYSCALE[2]};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.PALETTE.white};
`;

S.PreviewImage = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 11px 11px 0 0;
`;

S.FileNameContainer = styled.div`
  padding: 8px 12px;
  width: 100%;
  box-sizing: border-box;
`;

S.PreviewFileName = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  color: ${({ theme }) => theme.PALETTE.third.main};
  text-decoration: underline;
  text-underline-offset: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
`;

S.DeleteIcon = styled.div`
  position: absolute;
  top: -24px;
  right: 0;
  cursor: pointer;
  z-index: 10;
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  transition: transform 0.2s, color 0.2s;

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.PALETTE.fourth.main};
  }
`;

S.VisionIcon = styled.svg`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  flex-shrink: 0;
`;

S.UploadIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.GRAYSCALE[9]};
`;

S.UploadIconImg = styled.img`
  width: 15px;
  height: 15px;
`;

S.DeleteImg = styled.img`
  width: 14px;
  height: 14px;
`;
