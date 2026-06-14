import React, { useState, useEffect } from 'react';
import S from '../styles/AccountPopupStyles';

const PasswordChangePopup = ({ isOpen, memberEmail, memberNickname, onClose, onSubmit }) => {
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');

  const sameError = newPw !== '' && newPw === currentPw;
  const canSubmit = currentPw !== '' && newPw !== '' && !sameError;

  useEffect(() => {
    if (!isOpen) {
      setCurrentPw('');
      setNewPw('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.Card onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.Title>
            <strong>{memberNickname || 'User'}님</strong> 의 회원정보 중{' '}
            <br /> <span>비밀번호</span> 수정을 위해<br />
            변경할 비밀번호를 입력해주세요.
          </S.Title>
          <S.CurrentId>현재 아이디 : {memberEmail}</S.CurrentId>
        </S.Header>

        <S.Body>
          <S.InfoBox>
            비밀번호를 변경할 시, 현재 Fail Log 계정의<br />
            로그인은 변경된 비밀번호로만 로그인 하실 수 있습니다.
          </S.InfoBox>

          <S.InputField
            type="password"
            placeholder="현재 비밀번호"
            value={currentPw}
            onChange={(e) => setCurrentPw(e.target.value)}
            $hasError={sameError}
          />
          <S.InputField
            type="password"
            placeholder="변경할 비밀번호"
            value={newPw}
            onChange={(e) => setNewPw(e.target.value)}
            $hasError={sameError}
          />
          {sameError && <S.ErrorText>비밀번호가 기존과 일치합니다.</S.ErrorText>}
        </S.Body>

        <S.Footer>
          <S.CancelBtn type="button" onClick={onClose}>취소</S.CancelBtn>
          <S.SubmitBtn
            type="button"
            onClick={() => onSubmit?.(currentPw, newPw)}
            disabled={!canSubmit}
          >
            변경
          </S.SubmitBtn>
        </S.Footer>
      </S.Card>
    </S.Overlay>
  );
};

export default PasswordChangePopup;
