import styled, { keyframes } from "styled-components";
import { colorCSS, shadowCSS } from "../style";
import {
  h3Extrabold, h6Bold, h7Bold, h7Regular, h8Bold,
  h9Bold, h9Regular, h10Regular,
} from "../../../styles/common";

const S = {};

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

S.RankTitle = styled.h2`
  ${h6Bold}
  color: ${colorCSS["faillog-black"]};
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.4;
`;

S.Nickname = styled.span`
  color: ${colorCSS.faillog_blue};
  font-weight: 800;
`;

S.Highlight = styled.span`
  color: ${colorCSS["faillog-red"]};
  font-weight: 800;
`;

S.RankSubtitle = styled.p`
  ${h9Regular}
  color: ${colorCSS.faillog_gray8};
  text-align: center;
  margin-bottom: 36px;
`;

S.BellCurveBox = styled.div`
  margin-bottom: 48px;
  width: 100%;
`;

S.ChecklistSummary = styled.p`
  ${h7Bold}
  color: ${colorCSS["faillog-black"]};
  text-align: center;
  margin-bottom: 10px;
`;

S.CountHighlight = styled.span`
  color: ${colorCSS["faillog-red"]};
  font-weight: 800;
  font-size: 20px;
`;

S.ChecklistCompare = styled.p`
  ${h9Regular}
  color: #666;
  text-align: center;
  margin-bottom: 40px;
`;

S.StatsCard = styled.div`
  border: 1px solid ${colorCSS.faillog_gray2};
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 32px;
  ${shadowCSS.card}
`;

S.StatsSection = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

S.StatsSectionTitle = styled.p`
  ${h8Bold}
  color: ${colorCSS["faillog-black"]};
`;

S.StatsLabel = styled.p`
  ${h9Bold}
  color: ${colorCSS.faillog_gray8};
`;

S.Top3Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

S.Top3Bullet = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${colorCSS.faillog_purple};
  flex-shrink: 0;
`;

S.Top3Text = styled.p`
  flex: 1;
  ${h9Regular}
  color: ${colorCSS["faillog-black"]};
`;

S.Top3Count = styled.p`
  ${h9Bold}
  color: ${colorCSS["faillog-red"]};
`;

S.StatsDivider = styled.hr`
  border: none;
  border-top: 1px solid ${colorCSS.faillog_gray1};
  margin: 0;
`;

S.StatItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  ${h9Regular}
  color: ${colorCSS.faillog_gray10};
  line-height: 1.6;
`;

S.StatBullet = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${colorCSS.faillog_purple};
  flex-shrink: 0;
  margin-top: 5px;
`;

S.StatHighlight = styled.span`
  color: ${colorCSS["faillog-red"]};
  font-weight: 700;
`;

S.AiCard = styled.div`
  background: linear-gradient(135deg, #f5f0ff 0%, #ede8ff 100%);
  border: 1px solid ${colorCSS.faillog_purple}33;
  border-radius: 16px;
  padding: 28px 32px;
  margin-bottom: 32px;
`;

S.AiCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
`;

S.AiCardIcon = styled.span`
  font-size: 22px;
`;

S.AiCardTitle = styled.p`
  ${h8Bold}
  color: ${colorCSS.faillog_purple};
`;

S.AiCardText = styled.p`
  ${h7Regular}
  color: ${colorCSS["faillog-black"]};
  line-height: 1.8;
  white-space: pre-line;
  padding: 0 72px;
`;

S.AiCardLoading = styled.p`
  ${h9Regular}
  color: ${colorCSS.faillog_purple};
  font-style: italic;
  text-align: center;
  margin-top: 10px;
`;

S.AiCardSkeleton = styled.div`
  height: 64px;
  border-radius: 8px;
  background: linear-gradient(90deg, #e8e0ff 25%, #d8ccff 50%, #e8e0ff 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;

  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

S.AiProgressBarWrap = styled.div`
  width: 100%;
  height: 8px;
  background: #e8e0ff;
  border-radius: 100px;
  margin-top: 14px;
  overflow: hidden;
`;

S.AiProgressBar = styled.div`
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  background: linear-gradient(90deg, ${colorCSS.faillog_purple}, #ab47ff);
  border-radius: 100px;
  transition: width 0.4s ease;
`;

S.BackButton = styled.button`
  background: none;
  border: 1.5px solid ${colorCSS.faillog_gray2};
  border-radius: 8px;
  padding: 12px 20px;
  ${h9Regular}
  color: #666;
  cursor: pointer;

  &:hover {
    border-color: ${colorCSS.faillog_purple};
    color: ${colorCSS.faillog_purple};
  }
`;

export default S;
