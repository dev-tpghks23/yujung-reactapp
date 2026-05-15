import styled from "styled-components";

const S = {};

// --- 1. 공통 및 제목 스타일 ---
S.SectionHeader = styled.div`
  margin: 60px 0 30px 0;
  h2 {
    font-size: 32px;
    font-weight: 900;
    color: #1e293b;
    span {
      /* 피그마 원안의 보라-파랑 그라데이션 */
      background: linear-gradient(90deg, #6366f1, #a855f7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

// --- 2. 작성 중인 페일로그 (DraftSection) 영역 ---
S.DraftSection = styled.section`
  padding: 60px 0;
  h2 {
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 40px;
    span { color: #5D5FEF; }
  }
`;

S.DraftGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

S.DraftCard = styled.div`
  background: ${(props) => props.bgColor || "#94A3B8"};
  border-radius: 25px;
  padding: 35px 30px;
  min-height: 420px;
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover { transform: translateY(-10px); }

  .CardHeader {
    h3 { font-size: 22px; font-weight: 700; margin-bottom: 12px; }
    p { font-size: 14px; line-height: 1.6; opacity: 0.85; font-weight: 400; }
  }

  .CardImage {
    position: absolute;
    bottom: 85px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    justify-content: center;
    
    img { 
      width: 160px;
      height: auto;
      filter: drop-shadow(0 15px 25px rgba(0,0,0,0.2));
    }
  }

  .CardFooter {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
    .InfoText {
      font-size: 13px;
      line-height: 1.5;
      opacity: 0.9;
    }

    .StatusTag {
      background: #FFFFFF;
      color: #FF7A7A;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 800;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
  }
`;

// --- 3. 강조된 페일로그 (FeaturedSection) 영역 (image_57615f.jpg 반영) ---
S.FeaturedContainer = styled.section`
  display: flex;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 80px;
  border: 1px solid #f1f5f9;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

S.FeaturedListArea = styled.div`
  flex: 1.1;
  padding: 60px 50px;

  .TitleBox {
    margin-bottom: 50px;
    h3 { 
      font-size: 34px; 
      font-weight: 850; 
      color: #000; 
      margin-bottom: 12px;
      letter-spacing: -1px;
    }
    p { 
      font-size: 15px; 
      color: #94a3b8; 
      line-height: 1.6;
      font-weight: 500;
    }
  }
`;

S.FeaturedItem = styled.div`
  margin-bottom: 45px;
  cursor: pointer;

  h4 {
    font-size: 18px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 10px;
    line-height: 1.4;
    text-decoration: underline;
    text-underline-offset: 4px;
    &:hover { color: #6366f1; }
  }

  .Meta {
    display: flex;
    align-items: center;
    gap: 15px;
    
    .User {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 600;
      color: #475569;
      div { border-radius: 50%; }
    }
    .Stats {
      display: flex;
      gap: 12px;
      font-size: 13px;
      color: #94a3b8;
      span { display: flex; align-items: center; gap: 4px; }
    }
  }
`;

S.FeaturedMainImage = styled.div`
  flex: 0.9;
  position: relative;
  min-height: 500px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .BlackOverlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #332f2e; /* 피그마 원안의 짙은 갈색빛 블랙 */
    padding: 35px;
    color: white;

    p {
      font-size: 18px;
      line-height: 1.6;
      font-weight: 600;
      margin-bottom: 20px;
      word-break: keep-all;
    }

    .AuthorInfo {
      display: flex;
      align-items: center;
      gap: 8px;
      justify-content: flex-end;
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

// --- 4. 완료된 페일로그 (LogSection) 영역 ---
S.LogSection = styled.div`
  padding: 40px 0;
`;

S.CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #1E293B;
    margin: 0;
  }

  p {
    font-size: 14px;
    color: #64748B;
    line-height: 1.5;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

S.DateText = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: #94A3B8;
`;

export default S;