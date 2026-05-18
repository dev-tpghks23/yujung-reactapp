import styled, { keyframes } from "styled-components";
import { colorCSS, shadowCSS } from "../style";
import {
  h3Extrabold, h6Bold, h7Bold, h8Bold,
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
