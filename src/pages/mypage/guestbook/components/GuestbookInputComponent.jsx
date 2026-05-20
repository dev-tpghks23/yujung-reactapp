import React from 'react';
import S from '../styles/MyGuestbookStyles';

const GuestbookInputComponent = ({
  value,
  onChange,
  onSubmit,
  placeholder = '인사를 남겨볼까요?',
}) => {
  return (
    <S.InputCard>
      <S.CommentTextarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <S.InputFooter>
        <S.SubmitButton type="button" onClick={onSubmit} disabled={!value.trim()}>
          확인
        </S.SubmitButton>
      </S.InputFooter>
    </S.InputCard>
  );
};

export default GuestbookInputComponent;
