import styled, { keyframes } from "styled-components";
import { colorCSS } from "../style";
import { h3Extrabold, h6Bold, h8Bold, h9Bold, h9Regular } from "../../../styles/common";

const S = {};

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

S.Wrapper = styled.div`
  padding: 40px 60px 80px;
  animation: ${fadeIn} 0.3s ease;
`;

S.Header = styled.div`
  margin-bottom: 32px;
`;

S.PageTitle = styled.h1`
  ${h3Extrabold}
  color: ${colorCSS["faillog-black"]};
`;

S.PageSubtitle = styled.p`
  ${h9Regular}
  color: ${colorCSS.faillog_gray8};
  margin-top: 6px;
`;

S.VisionCard = styled.div`
  border: 1px solid ${colorCSS.faillog_gray2};
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 48px;
  display: inline-block;
  min-width: 220px;
`;

S.VisionLabel = styled.p`
  ${h9Bold}
  color: ${colorCSS.faillog_gray8};
  margin-bottom: 6px;
`;

S.VisionTitle = styled.p`
  ${h8Bold}
  color: ${colorCSS.faillog_purple};
`;

S.AnalysisBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

S.AnalysisTitle = styled.h2`
  ${h6Bold}
  color: ${colorCSS["faillog-black"]};
  text-align: center;
`;

S.Nickname = styled.span`
  color: ${colorCSS.faillog_blue};
  font-weight: 800;
`;

S.GaugeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

S.GaugeLabel = styled.div`
  display: flex;
  justify-content: space-between;
  ${h9Regular}
  color: ${colorCSS.faillog_gray10};
`;

S.GaugePercent = styled.span`
  font-weight: 700;
  color: ${colorCSS.faillog_purple};
`;

S.GaugeTrack = styled.div`
  width: 100%;
  height: 16px;
  background: ${colorCSS.faillog_gray1};
  border-radius: 999px;
  overflow: hidden;
`;

S.GaugeFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, ${colorCSS.faillog_purple}, ${colorCSS.faillog_blue});
  border-radius: 999px;
  transition: width 0.15s ease-out;
`;

S.StepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
  background: ${colorCSS.faillog_gray1};
  border-radius: 12px;
  border: 1px solid ${colorCSS.faillog_gray2};
`;

S.StepItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: ${({ $done }) => ($done ? 1 : 0.45)};
  transition: opacity 0.3s;
`;

S.StepIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ $done }) => ($done ? colorCSS.faillog_purple : 'transparent')};
  border: ${({ $done }) => ($done ? 'none' : `2px solid ${colorCSS.faillog_gray4}`)};
  color: ${colorCSS.faillog_white};
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

S.Spinner = styled.div`
  width: 12px;
  height: 12px;
  border: 2px solid ${colorCSS.faillog_gray2};
  border-top-color: ${colorCSS.faillog_purple};
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

S.StepText = styled.p`
  ${h9Regular}
  font-weight: ${({ $done }) => ($done ? '600' : '400')};
  color: ${({ $done }) => ($done ? colorCSS["faillog-black"] : colorCSS.faillog_gray8)};
`;

export default S;
