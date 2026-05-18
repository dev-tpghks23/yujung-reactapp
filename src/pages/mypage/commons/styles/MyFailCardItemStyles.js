import styled from "styled-components";
import { sizeCSS, colorCSS } from "../../../../components/style"; 

const S = {};

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
  
  /* 🎯 전체 선택 시 피그마 로즈빛 테두리 라인 밀착 */
  border: 2px solid ${(props) => props.$isSelected ? "#FDA4AF" : "transparent"}; 

  /* 🎯 평상시 및 호버 시 기존 고유 색상 유지 */
  background-color: ${(props) => 
    props.$isSelected 
      ? (colorCSS["faillog_light_red"] || "#FFE4E6") 
      : (props.$bgColor || "transparent")
  };

  ${(props) => !props.$isSelected && !props.$bgColor && `
    &:nth-of-type(4n + 1) { background-color: #F1F3FB; }
    &:nth-of-type(4n + 2) { background-color: #E7EFFF; }
    &:nth-of-type(4n + 3) { background-color: #D8EEFD; }
    &:nth-of-type(4n + 4) { background-color: #D7E0FF; }
  `}

  /* 🔥 [요구사항 1 & 5] 검은 반투명 필름 오버레이 (z-index: 2) */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: rgba(25, 34, 49, 0.45); 
    z-index: 2; 
    border-radius: 20px; 
    /* 선택되었을 때는 필름을 걷어내 본연의 라이트 레드 컬러 노출 */
    opacity: ${(props) => props.$isSelected ? 0 : 1}; 
    transition: opacity 0.2s ease-in-out;
  }

  /* 🔥 평상시 (마우스 호버하지 않았을 때) 글자 흰색 고정 */
  &:not(:hover) {
    h4, .TimeText, .AuthorArea span {
      /* 선택 시에는 배경이 밝아지므로 가독성을 위해 블랙으로 반전, 평소엔 화이트 */
      color: ${(props) => props.$isSelected ? (colorCSS["faillog-black"] || "#000000") : "#FFFFFF"} !important;
      opacity: 1 !important;
    }
  }

  /* ✨ 마우스 호버 시 인터랙션 (필름 제거, 고유색 노출, 블랙 반전) */
  &:hover {
    border-color: ${(props) => props.$isSelected ? "#FDA4AF" : colorCSS["faillog_purple"]}; 
    transform: translateY(-4px);
    
    &::before {
      opacity: 0; 
    }
    
    h4, .TimeText, .AuthorArea span {
      color: ${colorCSS["faillog-black"] || "#000000"} !important;
      opacity: 1 !important;
    }

    .CardMainImage img {
      filter: drop-shadow(0 15px 20px rgba(0, 0, 0, 0.08));
    }
  }

  /* 전체 선택(isSelected) 상태 시 텍스트 컬러 최종 고정 강제 */
  ${(props) => props.$isSelected && `
    h4, .TimeText, .AuthorArea span {
      color: ${(colorCSS["faillog-black"] || "#000000")} !important;
      opacity: 1 !important;
    }
  `}
`;

/* S.MyFailContent 이하는 레이어 구조(z-index) 복구가 끝난 상태이므로 그대로 유지됩니다. */
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
    
    * {
      pointer-events: auto;
    }
  }

  h4 {
    ${sizeCSS["h8-bold"]}
    margin: 0 0 8px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: color 0.2s ease;
  }

  .AuthorArea {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: auto;
    
    .ProfileIcon {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      object-fit: cover;
    }

    span {
      ${sizeCSS["h10-regular"]}
      transition: color 0.2s ease;
    }
  }

  .CardMainImage {
    position: absolute;
    bottom: -10px; 
    right: -10px;
    z-index: 1; 
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    pointer-events: none;
    
    img { 
      width: 100%; 
      height: 100%; 
      object-fit: contain; 
      filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.15));
      transition: filter 0.25s ease;
    }
  }

  .CardFooter {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .TimeText { 
      ${sizeCSS["h9-regular"]}
      transition: color 0.2s ease;
    }

    .LikeArea {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
      cursor: pointer;
    }
  }
`;

export default S;