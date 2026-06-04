import styled, { keyframes } from 'styled-components';

export const S = {};

/* ─── Animations ─── */
const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const progressAnim = keyframes`
  from { opacity: 0.6; }
  to { opacity: 1; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

S.Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
  animation: ${fadeIn} 0.2s ease;
`;

S.Modal = styled.div`
  width: 648px;
  height: ${({ $step }) => ($step === 1 ? '799px' : 'auto')};
  min-height: ${({ $step }) => ($step === 1 ? 'auto' : '480px')};
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 20px;
  padding: 40px 50px;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
`;

S.HeaderNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

S.CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
`;

S.CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -10px;
`;

S.BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: ${({ theme }) => theme.GRAYSCALE[5]};
  cursor: pointer;
  padding: 4px;
  margin-left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover { color: ${({ theme }) => theme.TEXT_COLOR.basic}; }
`;

S.CloseIcon = styled.img`
  width: 25px;
  height: 25px;
`;

S.BackIcon = styled.img`
  width: 25px;
  height: 25px;
`;

S.CheckIconImg = styled.img`
  width: 14px;
  height: 14px;
`;

S.StyleWarmWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;

S.StyleWarm1Img = styled.img`
  width: 40px;
  height: 40px;
`;

S.StyleWarm2Img = styled.img`
  position: absolute;
  right: -8px;
  bottom: 2px;
  width: 20px;
  height: 18px;
`;

S.StyleObjectiveImg = styled.img`
  width: 40px;
  height: 40px;
`;

S.StyleColdImg = styled.img`
  width: 40px;
  height: 40px;
`;

S.TitleSection = styled.div`
  margin-bottom: 40px;
`;

S.ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  word-break: keep-all;
`;

S.ModalSub = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  color: ${({ theme }) => theme.GRAYSCALE[6]};
`;

S.SectionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

S.SectionLabel = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.SelectedCount = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  color: ${({ theme }) => theme.PALETTE.third.main};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

S.CategoryTabs = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.GRAYSCALE[2]};
`;

S.CategoryTab = styled.button`
  padding: 8px 20px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  cursor: pointer;
  border: 1px solid ${({ $active, theme }) => $active ? theme.PALETTE.third.main : theme.GRAYSCALE[3]};
  background-color: ${({ $active, theme }) => $active ? theme.PALETTE.third.main : theme.PALETTE.white};
  color: ${({ $active, theme }) => $active ? theme.PALETTE.white : theme.TEXT_COLOR.basic};
  font-weight: ${({ $active, theme }) => $active ? theme.FONT_WEIGHT.bold : theme.FONT_WEIGHT.regular};
  transition: all 0.2s;
`;

S.LogList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  padding-right: 8px;
  margin-bottom: 24px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.GRAYSCALE[3]};
    border-radius: 10px;
  }
`;

S.EmptyList = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.GRAYSCALE[5]};
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  padding: 30px 0;
`;

S.LogItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-radius: 12px;
  border: 1.5px solid ${({ $selected, theme }) => $selected ? theme.PALETTE.third.main : theme.GRAYSCALE[3]};
  background-color: ${({ theme }) => theme.PALETTE.white};
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
`;

S.LogItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

S.LogItemCategory = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.PALETTE.third.light};
  color: ${({ theme }) => theme.PALETTE.third.main};
  font-size: ${({ theme }) => theme.FONT_SIZE.h11};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  padding: 4px 10px;
  border-radius: 4px;
  width: fit-content;
  margin-bottom: 4px;
`;

S.LogItemTitle = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.LogItemDate = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  color: ${({ theme }) => theme.GRAYSCALE[5]};
`;

S.LogRadio = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid ${({ $selected, theme }) => $selected ? theme.PALETTE.third.main : theme.GRAYSCALE[3]};
  background-color: ${({ $selected, theme }) => $selected ? theme.PALETTE.third.main : 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  transition: all 0.2s;
`;

S.BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: auto;
`;

S.PrimaryButton = styled.button`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.PALETTE.third.main};
  color: ${({ theme }) => theme.PALETTE.white};
  border: none;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #9E35C0;
  }
`;

S.SkipLink = styled.button`
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  color: ${({ theme }) => theme.GRAYSCALE[6]};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover { color: ${({ theme }) => theme.TEXT_COLOR.basic}; }
`;

/* ─── Step 2 ─── */
S.StyleList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  padding-right: 8px;
  margin-bottom: 24px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.GRAYSCALE[3]};
    border-radius: 10px;
  }
`;

S.StyleCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 135px;
  padding: 0 20px;
  box-sizing: border-box;
  border: 1.5px solid ${({ $selected, theme }) => $selected ? theme.PALETTE.third.main : theme.GRAYSCALE[2]};
  border-radius: 12px;
  cursor: pointer;
  background-color: ${({ $selected, theme }) => $selected ? '#FDF6FF' : theme.PALETTE.white};
  position: relative;
  transition: all 0.2s;
  flex-shrink: 0;
  &:hover { border-color: ${({ theme }) => theme.PALETTE.third.light}; }
`;

S.StyleIcon = styled.div`
  font-size: 28px;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.StyleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
`;

S.StyleTitle = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.StyleDesc = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  color: ${({ theme }) => theme.GRAYSCALE[6]};
  line-height: 1.5;
  white-space: pre-line;
`;

S.StyleBadge = styled.span`
  position: absolute;
  top: 36px;
  right: 24px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h11};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ $color }) => $color};
  background-color: ${({ $bg }) => $bg};
  padding: 4px 8px;
  border-radius: 4px;
`;

/* ─── Step 3 (Loading) ─── */
S.LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 16px;
  padding: 20px 0;
`;

S.SpinnerRing = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.PALETTE.third.light};
  border-top-color: ${({ theme }) => theme.PALETTE.third.main};
  animation: ${spin} 1s linear infinite;
`;

S.LoadingTitle = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  text-align: center;
  line-height: 1.5;
`;

S.LoadingSub = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  color: ${({ theme }) => theme.GRAYSCALE[5]};
`;

S.ProgressBarWrapper = styled.div`
  width: 100%;
  height: 6px;
  background-color: ${({ theme }) => theme.GRAYSCALE[1]};
  border-radius: 99px;
  overflow: hidden;
  margin-top: 8px;
  animation: ${progressAnim} 0.5s ease;
`;

S.ProgressBar = styled.div`
  height: 100%;
  width: 100%;
  transform-origin: left center;
  background: linear-gradient(90deg, ${({ theme }) => theme.PALETTE.third.light}, ${({ theme }) => theme.PALETTE.third.main});
  border-radius: 99px;
  transition: transform 0.08s linear;
  will-change: transform;
`;

S.CancelButton = styled.button`
  margin-top: 24px;
  padding: 10px 24px;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[3]};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  color: ${({ theme }) => theme.GRAYSCALE[6]};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.GRAYSCALE[1]};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
  }
`;

/* ─── Step 4 (Complete) ─── */
S.CompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 16px;
  padding: 20px 0;
  animation: ${fadeIn} 0.4s ease;
`;

S.CompleteCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.PALETTE.third.light};
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.CompleteCheck = styled.span`
  font-size: 32px;
  color: ${({ theme }) => theme.PALETTE.third.main};
  font-weight: bold;
`;

S.CompleteTitle = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  text-align: center;
  line-height: 1.5;
`;

S.CompleteSub = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  color: ${({ theme }) => theme.GRAYSCALE[5]};
`;

/* ─── Goal Input (Step 2) ─── */
S.GoalTextarea = styled.textarea`
    width: 100%;
    height: 140px;
    padding: 16px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    font-family: 'pretendard', sans-serif;
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    resize: none;
    box-sizing: border-box;
    line-height: 1.6;
    transition: border-color 0.15s;
    margin-bottom: 6px;
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.PALETTE.third.main};
    }
    &::placeholder {
        color: ${({ theme }) => theme.GRAYSCALE[5]};
        font-family: 'pretendard', sans-serif;
    }
    &:disabled {
        background: ${({ theme }) => theme.GRAYSCALE[1]};
        cursor: not-allowed;
    }
`;

S.CharCount = styled.p`
    font-size: ${({ theme }) => theme.FONT_SIZE.h11};
    color: ${({ theme }) => theme.GRAYSCALE[5]};
    text-align: right;
    margin-bottom: 24px;
`;

S.ErrorText = styled.p`
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    color: ${({ theme }) => theme.PALETTE.error ?? '#ef4444'};
    text-align: center;
    margin-bottom: 12px;
`;

S.SelectedLogSummary = styled.div`
    padding: 16px 20px;
    border-radius: 10px;
    background: ${({ theme }) => theme.PALETTE.third.light};
    border: 1px solid ${({ theme }) => theme.PALETTE.third.main};
    margin-bottom: 20px;
`;

S.SelectedLogLabel = styled.p`
    font-size: ${({ theme }) => theme.FONT_SIZE.h11};
    color: ${({ theme }) => theme.PALETTE.third.main};
    margin-bottom: 4px;
`;

S.SelectedLogText = styled.p`
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    strong {
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        color: ${({ theme }) => theme.PALETTE.black};
    }
`;

