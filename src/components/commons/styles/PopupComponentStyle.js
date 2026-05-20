import styled from 'styled-components';
import { colorCSS, sizeCSS } from '../../style';

const S = {};

S.Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

S.Popup = styled.div`
  min-width: 300px;
  min-height: 150px;
  background: ${colorCSS['faillog_white']};
  border: 1px solid ${colorCSS['faillog_gray4']};
  border-radius: 15px;
  padding: 28px 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
`;

S.Message = styled.p`
  ${sizeCSS['h8-regular']}
  color: ${colorCSS['faillog-black']};
  text-align: center;
  line-height: 1.65;
  margin: 0;
  word-break: keep-all;
`;

S.ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

S.ConfirmBtn = styled.button`
  border: none;
  background: ${colorCSS['faillog_purple']};
  color: ${colorCSS['faillog_white']};
  ${sizeCSS['h9-bold']}
  border-radius: 999px;
  padding: 7px 22px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover { opacity: 0.85; }
`;

S.CancelBtn = styled.button`
  border: 1px solid ${colorCSS['faillog_gray4']};
  background: transparent;
  color: ${colorCSS['faillog_gray9']};
  ${sizeCSS['h9-regular']}
  border-radius: 999px;
  padding: 7px 22px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover { background: ${colorCSS['faillog_gray1']}; }
`;

export default S;
