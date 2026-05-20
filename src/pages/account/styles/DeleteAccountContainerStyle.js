import styled from 'styled-components';
import { colorCSS } from '../style';
import { h5Extrabold, h7Bold, h8Bold, h9Regular, h9Bold, h10Regular, h11Regular } from '../../../styles/common';

const S = {};

S.Title = styled.h2`
  ${h5Extrabold}
  color: ${colorCSS['faillog-black']};
  margin-bottom: 6px;
`;

S.Subtitle = styled.p`
  ${h9Regular}
  color: ${colorCSS.faillog_gray8};
  margin-bottom: 20px;
`;

S.WarnBox = styled.div`
  background: ${colorCSS.faillog_light_red};
  border-radius: 10px;
  padding: 14px 16px;
  margin-bottom: 16px;
`;

S.WarnTitle = styled.p`
  ${h9Bold}
  color: ${colorCSS['faillog-red']};
  margin-bottom: 8px;
`;

S.WarnList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

S.WarnItem = styled.li`
  ${h10Regular}
  color: ${colorCSS.faillog_gray10};
  display: flex;
  align-items: flex-start;
  gap: 6px;

  &::before {
    content: '•';
    color: ${colorCSS['faillog-red']};
    flex-shrink: 0;
    margin-top: 1px;
  }
`;

S.FieldLabel = styled.p`
  ${h9Bold}
  color: #444;
  margin-bottom: 6px;
  margin-top: 16px;
`;

S.Input = styled.input`
  width: 100%;
  padding: 13px 16px;
  border: 1px solid ${colorCSS.faillog_gray2};
  border-radius: 8px;
  ${h9Regular}
  color: ${colorCSS['faillog-black']};
  outline: none;
  box-sizing: border-box;
  margin-bottom: 4px;

  &::placeholder { color: ${colorCSS.faillog_gray4}; }
  &:focus { border-color: ${colorCSS['faillog-red']}; }
`;

S.ValidationMsg = styled.p`
  ${h10Regular}
  color: ${colorCSS['faillog-red']};
  margin-bottom: 4px;
`;

S.CheckRow = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  margin: 16px 0;

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    margin-top: 2px;
    accent-color: ${colorCSS['faillog-red']};
    cursor: pointer;
  }

  span {
    ${h10Regular}
    color: ${colorCSS.faillog_gray10};
    line-height: 1.6;
  }
`;

S.ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
`;

S.DangerButton = styled.button`
  width: 100%;
  padding: 15px;
  background: ${({ $disabled }) => ($disabled ? '#fca5a5' : colorCSS['faillog-red'])};
  color: ${colorCSS.faillog_white};
  ${h8Bold}
  border: none;
  border-radius: 8px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background: ${({ $disabled }) => ($disabled ? '#fca5a5' : '#c41e0a')};
  }
`;

S.CancelButton = styled.button`
  width: 100%;
  padding: 15px;
  background: transparent;
  color: ${colorCSS.faillog_gray9};
  ${h9Bold}
  border: 1px solid ${colorCSS.faillog_gray4};
  border-radius: 8px;
  cursor: pointer;

  &:hover { background: ${colorCSS.faillog_gray1}; }
`;

S.Copyright = styled.p`
  text-align: center;
  ${h11Regular}
  color: ${colorCSS.faillog_gray4};
  margin-top: 16px;
`;

export default S;
