import styled from 'styled-components';
import { colorCSS, sizeCSS } from '../../../../components/style';

const S = {};

S.Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

S.Card = styled.div`
  width: 326px;
  background: ${colorCSS['faillog_white']};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
`;

S.Header = styled.div`
  padding: 28px 24px 20px;
  text-align: center;
  border-bottom: 1px solid ${colorCSS['faillog_gray2']};
`;

S.Title = styled.h3`
  ${sizeCSS['h9-regular']}
  color: ${colorCSS['faillog-black']};
  line-height: 1.65;
  margin: 0 0 16px;
  word-break: keep-all;

  strong { font-weight: 700; }
  span { color: ${colorCSS['faillog_purple']}; }
`;

S.CurrentId = styled.p`
  ${sizeCSS['h9-regular']}
  color: ${colorCSS['faillog-black']};
  margin: 0;
  text-decoration: underline;
  text-underline-offset: 3px;
`;

S.Body = styled.div`
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

S.InfoBox = styled.div`
  background: ${colorCSS['faillog_gray1']};
  border-radius: 8px;
  padding: 10px 12px;
  ${sizeCSS['h10-regular']}
  color: ${colorCSS['faillog_gray10']};
  line-height: 1.6;
  margin-bottom: 6px;
`;

S.InputField = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid ${({ $hasError }) => $hasError ? colorCSS['faillog-red'] : colorCSS['faillog_gray4']};
  border-radius: 8px;
  padding: 0 14px;
  ${sizeCSS['h9-regular']}
  color: ${colorCSS['faillog-black']};
  outline: none;
  box-sizing: border-box;

  &::placeholder { color: ${colorCSS['faillog_gray8']}; }
  &:focus { border-color: ${({ $hasError }) => $hasError ? colorCSS['faillog-red'] : colorCSS['faillog_purple']}; }
`;

S.InputRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  ${S.InputField} { flex: 1; min-width: 0; }
`;

S.OtpRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${S.InputField} { flex: 1; padding-right: 60px; }
`;

S.Timer = styled.span`
  position: absolute;
  right: 12px;
  ${sizeCSS['h9-regular']}
  color: ${colorCSS['faillog-red']};
  cursor: pointer;
  user-select: none;

  &:hover { opacity: 0.7; }
`;

S.SendButton = styled.button`
  flex-shrink: 0;
  height: 44px;
  padding: 0 12px;
  border: 1px solid ${colorCSS['faillog_gray4']};
  border-radius: 8px;
  background: ${colorCSS['faillog_white']};
  ${sizeCSS['h10-regular']}
  color: ${colorCSS['faillog-black']};
  cursor: pointer;
  white-space: nowrap;

  &:hover { background: ${colorCSS['faillog_gray1']}; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

S.ErrorText = styled.p`
  ${sizeCSS['h10-regular']}
  color: ${colorCSS['faillog-red']};
  margin: 0;
`;

S.ResendRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`;

S.ResendLabel = styled.span`
  ${sizeCSS['h10-regular']}
  color: ${colorCSS['faillog_gray9']};
`;

S.Footer = styled.div`
  display: flex;
  border-top: 1px solid ${colorCSS['faillog_gray2']};
`;

S.CancelBtn = styled.button`
  flex: 1;
  height: 52px;
  border: none;
  background: ${colorCSS['faillog_gray4']};
  color: ${colorCSS['faillog-black']};
  ${sizeCSS['h8-bold']}
  cursor: pointer;

  &:hover { opacity: 0.88; }
`;

S.SubmitBtn = styled.button`
  flex: 1;
  height: 52px;
  border: none;
  background: ${colorCSS['faillog_purple']};
  color: ${colorCSS['faillog_white']};
  ${sizeCSS['h8-bold']}
  cursor: pointer;

  &:hover { opacity: 0.88; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

export default S;
