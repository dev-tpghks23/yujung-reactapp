import styled from "styled-components";
import { sizeCSS, colorCSS } from "../../../../../components/style";
import theme from "../../../../../styles/theme";

const S = {};

S.DraftSection = styled.section`
  padding: 78px 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    ${sizeCSS["h3_2Bold"]}
    margin-bottom: 30px;
    color: ${colorCSS["faillog-black"]};
    span {
      background: ${theme.GRADIENT.blue};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
`;

S.DraftGrid = styled.div`
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

S.DraftCard = styled.div`
  width: 100%;
  max-width: 410px; 
  height: 534px;     
  
  

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

  &:nth-of-type(1) { background-color: #E7EFFF; }
  &:nth-of-type(2) { background-color: #D8EEFD; }
  &:nth-of-type(3) { background-color: #D7E0FF; }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(25, 34, 49, 0.45); 
    z-index: 2; 
    transition: opacity 0.25s ease;
  }

  /* 🔥 [레이어 3] 최상단 콘텐츠 그룹 */
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

  .CardHeader {
    h3 {
      ${sizeCSS["h7-regular"]}
      color: ${colorCSS["faillog_white"]};
      margin: 0 0 12px 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    p {
      ${sizeCSS["h9-regular"]}
      color: ${colorCSS["faillog_white"]};
      opacity: 0.85;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .CardImage {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1; 
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    pointer-events: none;

    img { 
      width: 278px !important;
      height: 209px !important;
      margin-top: 340px !important; 
      object-fit: contain;
      filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.15));
      transition: filter 0.25s ease;
    }
  }

  /* 🎯 피그마 안착 푸터 레이아웃 규격 */
  .CardFooter {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end; 
    
    .InfoText {
      ${sizeCSS["h9-bold"]}
      color: ${colorCSS["faillog_white"]};
      opacity: 0.9;
      line-height: 1.6;
    }
    
    /* 📌 피그마 시안 전용 미완성 태그 스타일 정의 */
    .StatusTag {
      background: #FFF0F0; 
      color: ${colorCSS["faillog-red"]};
      padding: 8px 16px;
      border-radius: 12px; 
      ${sizeCSS["h10-bold"]} 
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      transition: background-color 0.25s ease, color 0.25s ease;
    }
  }

  /* ✨ 마우스 호버 인터랙션 반전 액션 */
  &:hover {
    border-color: ${colorCSS["faillog_purple"]}; 
    transform: translateY(-8px); 
    
    /* background-color: ${colorCSS["faillog_white"]} !important; */
    
    &::before {
      opacity: 0; 
    }
    
    /* 글자 및 푸터 정보를 공통 폰트 컬러로 일괄 반전 (밝은 배경 대비 가독성 확보) */
    .CardHeader h3, .CardHeader p, .CardFooter .InfoText {
      color: ${colorCSS["faillog-black"]} !important;
      opacity: 1 !important;
    }

    .CardImage img {
      filter: drop-shadow(0 15px 20px rgba(0, 0, 0, 0.08));
    }

    /* 호버 시 미완성 태그 색상 반전 */
    .CardFooter .StatusTag {
      background: ${colorCSS["faillog-red"]};
      color: ${colorCSS["faillog_white"]};
    }
  }
`;

export default S;