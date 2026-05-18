import React from 'react';
import DOMPurify from 'dompurify';
import '../../css/HtmlContent.css'
import styled from 'styled-components';

const HtmlContent = ({content}) => {
  
    // containerstyle(이미지 정렬/크기 정보)을 실제 style로 옮긴 뒤 XSS 방지
  const sanitizedData = () => {
    // DOMPurify 이전에 먼저 처리 (containerstyle → style 변환)
    const raw = new DOMParser().parseFromString(content, 'text/html');
    raw.querySelectorAll('img[containerstyle]').forEach(img => {
      const containerStyle = img.getAttribute('containerstyle');
      const figure = img.closest('figure');
      // console.log('[preview] containerstyle:', containerStyle, '| figure:', figure);
      if (containerStyle) {
        if (figure) {
          figure.setAttribute('style', containerStyle);
        } else {
          img.setAttribute('style', containerStyle);
        }
      }
      img.removeAttribute('containerstyle');
      img.removeAttribute('wrapperstyle');
    });

    const processed = raw.body.innerHTML;
    console.log('[preview] processed HTML:', processed);
    return { __html: DOMPurify.sanitize(processed) };
  };
  
  return (
    <Wrapper>
      <div className="preview-content" dangerouslySetInnerHTML={sanitizedData()} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1270px;
`

export default HtmlContent;