import styled from "styled-components";
import { sizeCSS, colorCSS, gradientText } from "../../../../components/style";
import theme from "../../../../styles/theme";

const S = {};

S.RecentSection = styled.section`
  padding: 78px 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    ${sizeCSS["h3_2Bold"]}
    margin-bottom: 30px;
    color: ${colorCSS["faillog-black"]};
    span {
      ${gradientText}
    }
  }
`;

S.RecentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 38px; 
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

S.RecentCard = styled.div`
  width: 100%;
  max-width: 410px;  
  height: 534px;     
  box-sizing: border-box; 
  border-radius: 24px; 
  padding: 40px 32px;  
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid transparent; 
  transition: border-color 0.25s ease, transform 0.2s ease, background-color 0.25s ease;
  
  &:nth-of-type(1) { background-color: #E7EFFF; }
  &:nth-of-type(2) { background-color: #D8EEFD; }
  &:nth-of-type(3) { background-color: #D7E0FF; }

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(25, 34, 49, 0.45); 
    z-index: 2; 
    transition: opacity 0.25s ease;
  }

  &:not(:hover) {
    h4, .TimeText, .AuthorArea span {
      color: ${colorCSS["faillog_white"] || "#FFFFFF"} !important;
      opacity: 0.85;
    }
    h4 { opacity: 1 !important; }
  }

  &:hover {
    border-color: ${colorCSS["faillog_purple"] || "#8B5CF6"}; 
    transform: translateY(-8px); 
    
    &::before {
      opacity: 0; 
    }
    
    h4, .TimeText, .AuthorArea span {
      color: ${colorCSS["faillog-black"] || "#1E293B"} !important;
      opacity: 1 !important;
    }

    .CardMainImage img {
      filter: drop-shadow(0 15px 20px rgba(0, 0, 0, 0.08));
    }
  }
`;

S.RecentContent = styled.div`
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
    line-height: 1.4; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical; 
    overflow: hidden;
  }

  .AuthorArea {
    display: flex; 
    align-items: center; 
    gap: 6px; 
    margin-bottom: auto; 
    
    .ProfileIcon { 
      width: 18px; 
      height: 18px; 
      border-radius: 50%; 
    }
    span {
      ${sizeCSS["h9-regular"]}
    }
  }

  .CardMainImage {
    position: absolute; 
    bottom: 0;      /* 0으로 변경하여 여백 밀착 */
    right: 0;       /* 0으로 변경하여 여백 밀착 */
    z-index: 1; 
    display: flex; 
    justify-content: flex-end; 
    align-items: flex-end; 
    pointer-events: none;
    
    img { 
      width: 278px !important;  
      height: 209px !important; 
      margin-top: 340px !important;
      margin-bottom: -45px;
      margin-right: -40px; 
      object-fit: contain; 
      filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.15)); 
      transition: filter 0.25s ease; 
    }
  }

  .CardFooter {
    margin-top: auto; 
    display: flex; 
    justify-content: space-between; 
    align-items: flex-end; /* flex-end 정렬로 싱크 조절 */
    
    .TimeText { 
      ${sizeCSS["h9-bold"]}
      color: ${colorCSS["faillog_white"]};
      opacity: 0.9;
      line-height: 1.6; 
    }
  }
`;


/* ==========================================================================
   🚨 2. [기존 유지] 기존 공통 마이페이지 카드 컴포넌트용 오리지널 스타일
   ========================================================================== */
S.MyFailCard = styled.div`
  width: 258px;
  height: 336px;
  box-sizing: border-box; 
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  border: 2px solid ${(props) => props.$isSelected ? "#FDA4AF" : "transparent"}; 
  background-color: ${(props) => props.$isSelected ? (colorCSS["faillog_light_red"] || "#FFE4E6") : (props.$bgColor || "#F1F3FB")};

  &::before {
    content: ''; position: absolute; top: -2px; left: -2px; right: -2px; bottom: -2px;
    background: rgba(25, 34, 49, 0.45); z-index: 2; border-radius: 20px; 
    opacity: ${(props) => props.$isSelected ? 0 : 1}; transition: opacity 0.2s ease-in-out;
  }

  &:not(:hover) {
    h4, .TimeText, .AuthorArea span {
      color: ${(props) => props.$isSelected ? (colorCSS["faillog-black"] || "#000000") : "#FFFFFF"} !important;
    }
  }

  &:hover {
    border-color: ${colorCSS["faillog_purple"] || "#8B5CF6"}; transform: translateY(-4px);
    &::before { opacity: 0; }
    h4, .TimeText, .AuthorArea span { color: ${colorCSS["faillog-black"] || "#000000"} !important; }
  }
`;

S.MyFailContent = styled.div`
  width: 100%; height: 100%; display: flex; flex-direction: column; position: relative; box-sizing: border-box;
  .ContentGroup {
    position: relative; z-index: 3; display: flex; flex-direction: column; height: 100%; pointer-events: none;
    * { pointer-events: auto; }
  }
  h4 { ${sizeCSS["h8-bold"]} margin: 0 0 8px 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .AuthorArea {
    display: flex; align-items: center; gap: 6px; margin-bottom: auto;
    .ProfileIcon { width: 16px; height: 16px; border-radius: 50%; object-fit: cover; }
    span { ${sizeCSS["h10-regular"]} }
  }
  .CardMainImage {
    position: absolute; bottom: -10px; right: -10px; z-index: 1; width: 110px; height: 110px;
    img { width: 100%; height: 100%; object-fit: contain; }
  }
  .CardFooter {
    margin-top: auto; display: flex; justify-content: space-between; align-items: center;
    .TimeText { ${sizeCSS["h9-regular"]} }
    .LikeArea { display: flex; align-items: center; gap: 4px; font-size: 14px; }
  }
`;

S.EmptyText = styled.p`
  color: #94A3B8;
  font-size: 14px;
  padding: 40px 0;
  text-align: center;
`;

export default S;