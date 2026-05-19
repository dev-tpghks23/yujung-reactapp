import React from 'react';
import styled, { keyframes } from 'styled-components';
import S, { colorCSS, boxShadow } from '../../style';
import HtmlContent from '../../detail/components/HtmlContent';

const Preview = ({ content, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <Popup onClick={(e) => e.stopPropagation()}>
        <Header>
          <S.Span size="h6Bold">미리보기</S.Span>
          <CloseBtn onClick={onClose}>✕</CloseBtn>
        </Header>
        <Divider />
        <ContentArea>
          <HtmlContent content={content} />
        </ContentArea>
      </Popup>
    </Overlay>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const Popup = styled.div`
  width: 1370px;
  max-height: 85vh;
  background: ${colorCSS["faillog_white"]};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  ${boxShadow["boxBasic"]}
  animation: ${fadeIn} 0.2s ease;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;
  flex-shrink: 0;
`

const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${colorCSS["faillog_gray8"]};
  padding: 0;
  line-height: 1;
`

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${colorCSS["faillog_gray2"]};
  margin: 0;
  flex-shrink: 0;
`

const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 32px;
`

export default Preview;
