import React, { useState } from 'react';
import styled from 'styled-components';

import S, { colorCSS, hoverBorder, sizeCSS } from '../../style.js';

const MAX_LENGTH = 500;

// onSubmit: 댓글 등록 버튼 클릭 시 이벤트
const ReplySubmit = ({ onSubmit, subject = "댓글" }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length <= MAX_LENGTH) {
      setText(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(text);
  };

  const isMax = text.length === MAX_LENGTH;

  return (
    <Wrapper>
      <TextArea
        value={text}
        onChange={handleChange}
        placeholder={`${subject}을 입력해주세요`}
      />
      <BottomRow>
        <S.Span size="h11Regular" color="faillog_gray8">{`서로를 존중하는 ${subject} 문화를 지켜주세요`}</S.Span>
        <RightGroup>
          <S.Span size="h10Regular" color={isMax ? 'faillog-red' : undefined}>
            글자 수 ({text.length} / {MAX_LENGTH})
          </S.Span>
          <SubmitBtn onClick={handleSubmit}>
            <S.Span size="h8Bold" color="faillog_white">{`${subject} 등록`}</S.Span>
          </SubmitBtn>
        </RightGroup>
      </BottomRow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const TextArea = styled.textarea`
  width: 1236px;
  height: 112px;
  padding: 14px 16px;
  background: ${colorCSS["faillog-sector-gray"]};
  border: 1px solid ${colorCSS["faillog_gray2"]};
  border-radius: 15px;
  resize: none;
  overflow-y: auto;
  ${sizeCSS["h9Regular"]}
  color: ${colorCSS["faillog-black"]};
  box-sizing: border-box;

  ${hoverBorder}

  &::placeholder {
    color: ${colorCSS["faillog_gray9"]};
  }

  &:focus {
    outline: none;
  }


`

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const SubmitBtn = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colorCSS["faillog_purple"]};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`

export default ReplySubmit;
