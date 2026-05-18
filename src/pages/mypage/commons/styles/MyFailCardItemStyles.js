import styled from "styled-components";
import { sizeCSS, colorCSS } from "../../../../components/style"; // 프로젝트 내 경로에 맞게 자동 조절될 수 있음

const S = {};

// ⭕ 기존 MyFailCardItemComponent가 사용하는 오리지널 스타일 정의
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
    content: ''; 
    position: absolute; 
    top: -2px; left: -2px; right: -2px; bottom: -2px;
    background: rgba(25, 34, 49, 0.45); 
    z-index: 2; 
    border-radius: 20px; 
    opacity: ${(props) => props.$isSelected ? 0 : 1}; 
    transition: opacity 0.2s ease-in-out;
  }

  &:not(:hover) {
    h4, .TimeText, .AuthorArea span {
      color: ${(props) => props.$isSelected ? (colorCSS["faillog-black"] || "#000000") : "#FFFFFF"} !important;
    }
  }

  &:hover {
    border-color: ${colorCSS["faillog_purple"] || "#8B5CF6"}; 
    transform: translateY(-4px);
    &::before { opacity: 0; }
    h4, .TimeText, .AuthorArea span { color: ${colorCSS["faillog-black"] || "#000000"} !important; }
  }
`;

S.MyFailContent = styled.div`
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
    ${sizeCSS["h8-bold"] || "font-size: 16px; font-weight: 700;"} 
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
    margin-bottom: auto;
    .ProfileIcon { width: 16px; height: 16px; border-radius: 50%; object-fit: cover; }
    span { ${sizeCSS["h10-regular"] || "font-size: 13px;"} }
  }

  .CardMainImage {
    position: absolute; 
    bottom: -10px; right: -10px; 
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
    .TimeText { ${sizeCSS["h9-regular"] || "font-size: 13px;"} }
    .LikeArea { display: flex; align-items: center; gap: 4px; font-size: 14px; }
  }
`;

export default S;