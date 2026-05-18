import styled from "styled-components";
import { colorCSS } from "../style";
import { h5Extrabold, h7Bold, h9Regular, h9Bold, h8Bold, h10Regular, h11Regular, flexCenterColumn } from "../../../styles/common";

const S = {};

S.Title = styled.h2`
  ${h5Extrabold}
  color: ${colorCSS["faillog-black"]};
  margin-bottom: 8px;
`;

S.Subtitle = styled.p`
  ${h9Regular}
  color: ${colorCSS.faillog_gray8};
  margin-bottom: 24px;
`;

S.FieldLabel = styled.p`
  ${h9Bold}
  color: #444;
  margin-bottom: 6px;
`;

S.Input = styled.input`
  width: 100%;
  padding: 13px 16px;
  border: 1px solid ${colorCSS.faillog_gray2};
  border-radius: 8px;
  ${h9Regular}
  color: ${colorCSS["faillog-black"]};
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${colorCSS.faillog_gray4};
  }

  &:focus {
    border-color: ${colorCSS.faillog_purple};
  }
`;

S.HintBox = styled.div`
  padding: 16px;
  background: ${colorCSS.faillog_light_purple};
  border-radius: 8px;
  ${h9Regular}
  color: ${colorCSS.faillog_gray10};
  text-align: center;
`;

S.HintValue = styled.span`
  ${h9Bold}
  color: ${colorCSS.faillog_purple};
`;

S.PrimaryButton = styled.button`
  width: 100%;
  padding: 15px;
  background: ${({ $disabled }) => ($disabled ? '#d8a8ff' : colorCSS.faillog_purple)};
  color: ${colorCSS.faillog_white};
  ${h8Bold}
  border: none;
  border-radius: 8px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  margin-bottom: 16px;

  &:hover {
    background: ${({ $disabled }) => ($disabled ? '#d8a8ff' : '#9333ea')};
  }
`;

S.InputRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-bottom: 12px;
`;

S.InputWithTimer = styled.div`
  flex: 1;
  position: relative;
`;

S.Timer = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  ${h9Bold}
  color: ${colorCSS.faillog_purple};
`;

S.SmallButton = styled.button`
  padding: 13px 14px;
  background: ${({ $verified }) => ($verified ? colorCSS.faillog_gray2 : colorCSS.faillog_purple)};
  color: ${({ $verified }) => ($verified ? colorCSS.faillog_gray8 : colorCSS.faillog_white)};
  border: none;
  border-radius: 8px;
  ${h9Bold}
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  white-space: nowrap;
`;

S.ValidationMsg = styled.p`
  ${h10Regular}
  color: ${colorCSS["faillog-red"]};
  margin-top: 4px;
`;

S.HintMsg = styled.p`
  ${h10Regular}
  color: ${colorCSS.faillog_gray8};
  margin-top: 4px;
`;

S.SuccessBox = styled.div`
  ${flexCenterColumn}
  gap: 32px;
  padding: 20px 0;
`;

S.SuccessText = styled.p`
  ${h7Bold}
  color: ${colorCSS["faillog-black"]};
  text-align: center;
`;

S.Copyright = styled.p`
  text-align: center;
  ${h11Regular}
  color: ${colorCSS.faillog_gray4};
  margin-top: 8px;
`;

export default S;
