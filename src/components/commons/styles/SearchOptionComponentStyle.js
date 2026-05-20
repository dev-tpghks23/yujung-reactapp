import styled from "styled-components"
import { colorCSS } from "../../style"
import { flexCenterRow } from "../../../styles/common"

const S = {}

S.Wrapper = styled.div`
  position: relative;
  min-width: 130px;
  user-select: none;
`

S.Trigger = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid #D9D9D9;
  border-radius: 15px;
  background: ${colorCSS["faillog_white"]};
  cursor: pointer;
  ${flexCenterRow}
  padding: 0 12px;
  box-sizing: border-box;
  white-space: nowrap;
  gap: 6px;
`

S.ChevronImg = styled.img`
  display: inline-block;
  transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 200ms ease;
  flex-shrink: 0;
`

S.OptionBox = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  min-width: 130px;
  height: auto;
  border-radius: 15px;
  overflow: hidden;
  z-index: 999;
  border: 1px solid ${colorCSS["faillog_gray9"]};
  background-color: ${colorCSS["faillog_white"]};
`

S.OptionItem = styled.div`
  width: 100%;
  height: 36px;
  cursor: pointer;
  ${flexCenterRow}
  white-space: nowrap;

  &:hover {
    background-color: ${colorCSS['faillog_gray1']};
  }
`

export default S
