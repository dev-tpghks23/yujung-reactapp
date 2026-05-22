import styled from "styled-components";
import { sizeCSS, colorCSS } from "../../../../components/style";

const S = {};

S.InfoManagementSection = styled.section`
  padding: 60px 20px;
  max-width: 1200px; /* 전체 중앙 정렬을 위해 추가 */
  margin: 0 auto;

.info-header {
    margin-bottom: 40px; 
    
    h2 {
      font-size: 45px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 12px;
    }
    
    p {
      font-size: 24px;
      color: #64748B;
      font-weight: 400;
    }
  }
`;

// ✅ 1. 상단 3개 카드를 위한 그리드 (기획안의 윗줄)
S.TopCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 1:1:1 비율로 3개 배치 */
  grid-auto-rows: 1fr;
  align-items: stretch;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* 모바일/태블릿에선 세로로 나열 */
  }
`;

S.InfoCard = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #F1F5F9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 320px;
  height: 100%;
`;

S.DonutChartArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 14px;
  padding-top: 6px;
`;

S.CardTitle = styled.h3`
  width: 100%;
  font-size: 18px;
  font-weight: 800;
  color: #1E293B;
  margin: 0;
  text-align: left;
  margin-bottom: 10px;
`;

S.ChartWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto;
  cursor: pointer;

  svg { display: block; }
`;

S.ChartCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  pointer-events: none;

  strong {
    display: block;
    ${sizeCSS['h5Bold']}
    color: #2563EB;
    line-height: 1.1;
  }

  span {
    display: block;
    margin-top: 3px;
    ${sizeCSS['h11Regular']}
    color: ${colorCSS['faillog-black']};
    white-space: nowrap;
  }
`;

S.Tooltip = styled.div`
  position: absolute;
  background: rgba(15, 23, 42, 0.88);
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 8px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
  line-height: 1.5;
`;

S.ChartEmptyText = styled.p`
  font-size: 13px;
  color: #94A3B8;
  text-align: center;
  line-height: 1.7;
  margin: 8px 0 0;
`;

S.ChartLegend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  width: 100%;
`;

S.LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748B;
  font-size: 14px;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    background: ${({ color }) => color || '#5D5FEE'};
  }
`;

S.StreakHeader = styled.div`
  text-align: left;

  h3 {
    font-size: 24px;
    font-weight: 900;
    color: #1E293B;
    margin: 0 0 10px;
    line-height: 1.2;
  }

  p {
    font-size: 14px;
    color: #64748B;
    line-height: 1.6;
    margin: 0;
  }
`;

S.StreakGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 10px;
  margin-top: auto;
  padding-top: 28px;
  width: 100%;
`;

S.StreakStat = styled.div`
  flex: 1;
  background: #F1F5F9;
  border-radius: 14px;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  strong {
    display: block;
    font-size: 22px;
    font-weight: 900;
    color: #1E293B;
    margin-bottom: 5px;
    line-height: 1.1;
  }

  span {
    display: block;
    font-size: 11px;
    color: #64748B;
    line-height: 1.4;
    word-break: keep-all;
  }
`;

// ✅ 2. 하단 긴 카드를 위한 컨테이너 (기획안의 아랫줄)
S.BottomAccountArea = styled.div`
  width: 100%;
`;

S.AccountDataCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 50px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  /* 상단 카드들과의 독립성을 위해 margin-top 제거하거나 조정 */
`;

// --- 프로필 카드 디자인 디테일 수정 (기획안 느낌 반영) ---
S.ProfileCard = styled.div`
  background: #ffffff;
  border-radius: 24px; /* 좀 더 둥글게 */
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid #F1F5F9; /* 기획안처럼 얇은 테두리 추가 */
  height: 100%; /* 그리드 높이 통일 */

  .profileImageContainer {
    position: relative;
    margin-bottom: 30px;
  }

  .profileImageCircle { 
    width: 140px; /* 기획안 비율에 맞춰 조금 키움 */
    height: 140px; 
    border-radius: 50%; 
    overflow: hidden;
    border: 4px solid #F0F3FF;
    img { width: 100%; height: 100%; object-fit: cover; }
  }

  /* 닉네임 영역 강조 */
  .nickname-area {
    width: 100%;
    text-align: center;
    .nickname-display {
      font-size: 24px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 10px;
    }
  }

  .profile-card-footer-text {
    font-size: 13px;
    color: #94A3B8;
    margin-top: 20px;
  }
`;

S.AccountItem = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr 100px; /* 라벨 너비 살짝 조정 */
  align-items: center; /* 텍스트 중앙 정렬 */
  padding: 25px 0;
  border-bottom: 1px solid #f1f1f1;
  &:last-child { border-bottom: none; }

  .ItemLabel { font-size: 15px; font-weight: 700; color: #64748B; }
  .ItemContent { 
    padding-left: 20px;
    .EmailText, .UserInfoText { font-size: 16px; font-weight: 700; color: #1E293B; }
    .StatusBadge { 
      background: #7E3AF2; 
      color: white; 
      padding: 4px 12px; 
      border-radius: 6px; 
      font-size: 12px; 
      margin-right: 10px;
    }
  }
  .ItemBtn { 
    background: #F8FAFC; 
    border: 1px solid #E2E8F0;
    padding: 6px 12px;
    border-radius: 8px;
    color: #64748B; 
    cursor: pointer; 
    font-size: 13px;
    transition: all 0.2s;
    &:hover { background: #F1F5F9; color: #1E293B; }
  }
`;

export default S;