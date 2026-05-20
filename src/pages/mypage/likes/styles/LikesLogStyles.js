import styled from "styled-components";
import { sizeCSS, colorCSS } from "../../../../components/style";
import theme from "../../../../styles/theme";

const S = {};

// ==========================================
// ── 1. [상단] 최근 확인한 페일로그 섹션 ──
// ==========================================
S.RecentSection = styled.section`
  /* 피그마 스펙 상하 78px 여백 적용 */
  padding: 78px 0;
  width: 100%;
  
  /* 💡 불필요한 flex-direction과 강제 align-items 제거 */
  /* 부모 Container의 중앙 정렬선 및 그리드 배치 시스템을 그대로 상속받습니다 */

  .ContentHeader {
    margin-bottom: 80px;

    h2 {
      font-size: 32px;
      font-weight: 800;
      margin: 0 0 12px 0;
      color: #1E293B;
      span { color: #5D5FEF; }
    }
    .sub-desc {
      font-size: 16px;
      color: #64748B;
      margin: 0;
      line-height: 1.7;
      font-weight: 400;
    }
  }
`;

S.RecentGrid = styled.div`
  display: grid;
  /* 💡 요청하신 DraftGrid 설정과 결을 똑같이 맞춤: 고정 px 폭을 버리고 fr 기반 3열 배치 */
  grid-template-columns: repeat(3, 1fr);
  /* 💡 피그마 가로 카드 간의 고유 여백 간격 38px 적용 */
  gap: 38px;
  width: 100%;

  /* 화면이 좁아질 때 반응형 깨짐 방지 레이아웃 (DraftGrid 규칙 응용) */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

/* 최근 확인한 페일로그 카드 본체 디자인 스펙 */
S.RecentCard = styled.div`
  /* 💡 1fr 시스템 안에서 유연하게 채워지도록 width 고정을 풀고, 최소/최대 안전선 확보 */
  width: 100%;
  max-width: 410px;
  height: 534px;
  background: ${(props) => props.bgColor || "#94A3B8"};
  border-radius: 24px;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  overflow: hidden;
  border: 3px solid transparent; 
  transition: border-color 0.25s ease, transform 0.2s ease, background-color 0.25s ease;

  &:hover {
    border-color: #8b5cf6; 
    transform: translateY(-8px);
    background-color: #FFFFFF !important;
    
    .card-film-overlay { 
      opacity: 0; 
    }
    
    h4, p, span, .TimeText {
      color: #1E293B !important;
      opacity: 1 !important;
    }
  }
`;

/* 상단 카드 전용 반투명 필름 오버레이 */
S.RecentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3); 
  z-index: 2;
  transition: opacity 0.25s ease;
  pointer-events: none; 
  
  &.active {
    opacity: 0;
  }
`;

S.RecentContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 3;

  .TitleArea {
    margin-bottom: 16px;
    h4 {
      font-size: 22px;
      font-weight: 700;
      color: ${(props) => props.textColor || "#1E293B"};
      line-height: 1.4;
      margin: 0 0 10px 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    p {
      font-size: 15px;
      color: ${(props) => props.textColor || "#1E293B"};
      opacity: 0.7;
      line-height: 1.5;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .AuthorArea {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: ${(props) => props.textColor || "#1E293B"};
    font-weight: 600;
    margin-bottom: auto;
    img { width: 20px; height: 20px; border-radius: 50%; }
  }

  .CardMainImage {
    align-self: center;
    margin-top: auto;
    margin-bottom: 24px;
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    img { width: 100%; height: 100%; object-fit: contain; }
  }

  .CardFooter {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .TimeText { 
      font-size: 14px; 
      color: ${(props) => props.textColor || "#1E293B"}; 
      font-weight: 600;
      opacity: 0.8; 
    }
    .LikeIconArea { 
      display: flex; 
      align-items: center; 
      svg { width: 22px; height: 22px; } 
    }
  }
`;

// ==========================================
// ── 2. [하단] 좋아요 한 페일로그 모음 섹션 ──
// ==========================================
S.LogSection = styled.section`
  margin-top: 40px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .LogHeader {
    width: 1092px;
    margin-bottom: 40px;

    h3 {
      font-size: 32px;
      font-weight: 800;
      margin: 0 0 12px 0;
      color: #1E293B;
    }
    .sub-desc {
      font-size: 16px;
      color: #64748B;
      margin: 0;
      line-height: 1.7;
      font-weight: 400;
    }
  }
`;

S.PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 258px);
  gap: 20px;
  width: 1092px;
  margin: 0 auto;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, 258px);
    width: auto;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 258px);
    width: auto;
  }
`;

/* 하단 좋아요 카드 디자인 스펙 (W 258 / H 336 고정) */
S.LikeCard = styled.div`
  width: 258px;
  height: 336px;
  background: ${(props) => props.bgColor || "#94A3B8"};
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  overflow: hidden;
  border: 2px solid transparent; 
  transition: border-color 0.25s ease, transform 0.2s ease;

  &:hover {
    border-color: #8b5cf6; 
    transform: translateY(-4px);
    .like-film-overlay { opacity: 0; }
  }
`;

S.LikeOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.45); 
  z-index: 2;
  transition: opacity 0.25s ease;
  pointer-events: none; 
`;

S.LikeContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 1;

  h4 {
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.textColor || "#1E293B"};
    line-height: 1.4;
    margin: 0 0 8px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .AuthorArea {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: ${(props) => props.textColor || "#1E293B"};
    opacity: 0.8;
    font-weight: 500;
    margin-bottom: auto;
    img { width: 16px; height: 16px; border-radius: 50%; }
  }

  .CardMainImage {
    align-self: center;
    margin-top: auto;
    margin-bottom: 20px;
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    img { width: 100%; height: 100%; object-fit: contain; }
  }

  .CardFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .TimeText { font-size: 13px; color: ${(props) => props.textColor || "#1E293B"}; opacity: 0.6; }
    .LikeIconArea { display: flex; align-items: center; svg { width: 18px; height: 18px; } }
  }
`;

// ==========================================
// ── 3. [복구] 내역이 없을 때의 예외 래퍼 ──
// ==========================================
S.EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  text-align: center;
`;

S.EmptyTitle = styled.h3`
  ${sizeCSS['h3Bold']}
  color: ${colorCSS['faillog-black']};
  margin-bottom: 20px;
  line-height: 1.5;
  strong, span {
    background: ${theme.GRADIENT.blue};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

S.EmptySubText = styled.p`
  ${sizeCSS['h4Regular']}
  color: ${colorCSS['faillog_gray10']};
  margin-bottom: 40px;
  line-height: 1.6;
`;

S.StartButton = styled.button`
  padding: 12px 40px;
  background: ${theme.GRADIENT.blue};
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  &:hover { opacity: 0.9; }
`;

// ==========================================
// ── 4. 좋아요 카드 콘텐츠 (피그마 h7-regular / h9-regular 규격) ──
// ==========================================
S.LikesCardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;

  .ContentGroup {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    height: 100%;
    pointer-events: none;
    * { pointer-events: auto; }
  }

  h4 {
    ${sizeCSS["h7-regular"]}
    margin: 0 0 12px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .AuthorArea {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: auto;

    .ProfileIcon {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
    }

    span { ${sizeCSS["h9-regular"]} }
  }

  .CardMainImage {
    position: absolute;
    bottom: -10px;
    right: -10px;
    z-index: 1;
    width: 110px;
    height: 110px;
    img { width: 100%; height: 100%; object-fit: contain; }
  }

  .CardFooter {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .TimeText { ${sizeCSS["h9-regular"]} }

    .LikeArea {
      position: relative;
      z-index: 4;
      display: flex;
      align-items: center;
    }
  }
`;

// ==========================================
// ── 5. 검색 래퍼 ──
// ==========================================
S.SearchCenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;
`;

export default S;