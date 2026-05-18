import styled from "styled-components";
import { colorCSS, shadowCSS } from "../style";
import {
  h3Extrabold, h7Extrabold, h8Bold, h8Regular,
  h9Bold, h9Regular, h10Regular, h7Bold,
} from "../../../styles/common";

const S = {};

S.Wrapper = styled.div`
  padding: 40px 60px 80px;
`;

S.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`;

S.HeaderLeft = styled.div``;

S.PageTitle = styled.h1`
  ${h3Extrabold}
  color: ${colorCSS["faillog-black"]};
`;

S.PageSubtitle = styled.p`
  ${h9Regular}
  color: ${colorCSS.faillog_gray8};
  margin-top: 6px;
`;

S.ProjectSelector = styled.div`
  select {
    padding: 8px 14px;
    border: 1px solid ${colorCSS.faillog_gray2};
    border-radius: 8px;
    ${h9Regular}
    color: ${colorCSS["faillog-black"]};
    background: ${colorCSS.faillog_white};
    cursor: pointer;
    outline: none;
  }
`;

S.VisionWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin-bottom: 40px;
`;

S.VisionCard = styled.div`
  border: 1px solid ${colorCSS.faillog_gray2};
  border-radius: 12px;
  padding: 20px 24px;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-color: ${colorCSS.faillog_purple};
  }
`;

S.VisionLabel = styled.p`
  ${h9Bold}
  color: ${colorCSS.faillog_gray8};
  margin-bottom: 6px;
`;

S.VisionTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

S.VisionChevron = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transform: ${({ $open }) => $open ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.2s;
`;

S.VisionDropdown = styled.div`
  position: absolute;
  left: calc(100% + 8px);
  top: 0;
  min-width: 280px;
  border: 1px solid ${colorCSS.faillog_gray2};
  border-radius: 10px;
  overflow: hidden;
  max-height: 320px;
  overflow-y: auto;
  ${shadowCSS.panel}
  z-index: 100;
  background: ${colorCSS.faillog_white};
`;

S.VisionDropdownItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: ${({ $active }) => ($active ? colorCSS.faillog_light_purple : colorCSS.faillog_white)};
  cursor: pointer;
  border-bottom: 1px solid ${colorCSS.faillog_gray1};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ $active }) => ($active ? colorCSS.faillog_light_purple : colorCSS.faillog_gray1)};
  }
`;

S.VisionTitle = styled.p`
  ${h8Bold}
  color: ${colorCSS.faillog_purple};
`;

S.TimelineSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 92px;
    top: 11px;
    bottom: 47px;
    width: 2px;
    background: linear-gradient(to bottom, ${colorCSS.faillog_purple}, #4caf50);
  }
`;

S.YearGroup = styled.div``;

S.YearLabel = styled.div`
  display: none;
`;

S.YearItems = styled.div``;

S.TimelineRow = styled.div`
  display: flex;
  gap: 0;
  margin-bottom: 40px;
  cursor: grab;
  opacity: ${({ $isDragging }) => $isDragging ? 0.4 : 1};
  outline: ${({ $isDragOver }) => $isDragOver ? `2px dashed ${colorCSS.faillog_purple}` : 'none'};
  border-radius: 12px;
  transition: opacity 0.15s;

  &:active {
    cursor: grabbing;
  }
`;

S.DateCol = styled.div`
  width: 80px;
  text-align: right;
  padding-right: 12px;
  flex-shrink: 0;
`;

S.YearText = styled.p`
  ${h7Extrabold}
  color: ${colorCSS["faillog-black"]};
  line-height: 1;
`;

S.MonthText = styled.p`
  ${h8Bold}
  color: ${colorCSS["faillog-black"]};
`;

S.DotCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24px;
  flex-shrink: 0;
`;

S.Dot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${colorCSS.faillog_purple};
  flex-shrink: 0;
  margin-top: 4px;
  position: relative;
  z-index: 1;
`;

S.CardCol = styled.div`
  width: 460px;
  flex-shrink: 0;
  padding-left: 20px;
  margin-left: ${({ $reverse }) => $reverse ? '160px' : '0'};
`;

S.TimelineCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  ${shadowCSS.card}
`;

S.CarouselWrapper = styled.div`
  position: relative;
`;

S.CarouselImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

S.CarouselBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $left }) => $left ? 'left: 8px;' : 'right: 8px;'}
  background: rgba(255, 255, 255, 0.85);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(255, 255, 255, 0.85);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.CardBody = styled.div`
  padding: 16px;
  background: ${colorCSS.faillog_white};
`;

S.CardDesc = styled.p`
  ${h9Bold}
  color: ${colorCSS["faillog-black"]};
  margin-bottom: 12px;
  line-height: 1.5;
`;

S.BulletGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
`;

S.BulletItem = styled.p`
  ${h10Regular}
  color: ${colorCSS.faillog_gray10};
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${colorCSS.faillog_purple};
    flex-shrink: 0;
  }
`;

S.AddSection = styled.div`
  margin-bottom: 32px;
`;

S.AddButton = styled.button`
  width: 100%;
  padding: 16px;
  background: ${colorCSS.faillog_white};
  border: 1.5px dashed ${colorCSS.faillog_gray4};
  border-radius: 10px;
  ${h8Regular}
  color: ${colorCSS.faillog_gray8};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    border-color: ${colorCSS.faillog_purple};
    color: ${colorCSS.faillog_purple};
  }
`;

S.ProjectToggleList = styled.div`
  margin-top: 8px;
  border: 1px solid ${colorCSS.faillog_gray2};
  border-radius: 10px;
  overflow: hidden;
  max-height: 320px;
  overflow-y: auto;
  ${shadowCSS.panel}
`;

S.ProjectToggleItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: ${({ $active }) => ($active ? colorCSS.faillog_light_purple : colorCSS.faillog_white)};
  cursor: pointer;
  border-bottom: 1px solid ${colorCSS.faillog_gray1};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ $active }) => ($active ? colorCSS.faillog_light_purple : colorCSS.faillog_gray1)};
  }
`;

S.ProjectToggleInfo = styled.div``;

S.ProjectToggleName = styled.p`
  ${h8Bold}
  color: ${colorCSS["faillog-black"]};
`;

S.ProjectToggleDate = styled.p`
  ${h10Regular}
  color: ${colorCSS.faillog_gray8};
  margin-top: 3px;
`;

S.DDay = styled.p`
  ${h8Bold}
  color: ${({ $active }) => ($active ? colorCSS.faillog_purple : colorCSS.faillog_gray10)};
`;

S.AnalysisButton = styled.button`
  width: 100%;
  padding: 20px;
  background: ${colorCSS.faillog_purple};
  color: ${colorCSS.faillog_white};
  ${h7Bold}
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background: #9333ea;
  }
`;

export default S;
