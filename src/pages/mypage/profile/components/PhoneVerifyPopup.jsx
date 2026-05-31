import React, { useState, useEffect, useRef } from 'react';
import S from '../styles/AccountPopupStyles';
import axiosInstance from '../../../../api/axiosInstance';

const TIMER_SECONDS = 300;

const formatTimer = (seconds) => {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
};

const PhoneVerifyPopup = ({ isOpen, memberNickname, onClose, onSubmit }) => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [sent, setSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [timer, setTimer] = useState(TIMER_SECONDS);
  const [error, setError] = useState('');
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      setPhone('');
      setCode('');
      setSent(false);
      setVerified(false);
      setTimer(TIMER_SECONDS);
      setError('');
      clearInterval(timerRef.current);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => () => clearInterval(timerRef.current), []);

  const startTimer = () => {
    clearInterval(timerRef.current);
    setTimer(TIMER_SECONDS);
    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) { clearInterval(timerRef.current); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSend = async () => {
    if (!phone.trim()) return;
    setError('');
    try {
      const res = await axiosInstance.post('/public/auth/phone/send', { memberPhone: phone });
      if (!res.data?.success) throw new Error('인증번호 발송에 실패했습니다.');
      setSent(true);
      startTimer();
    } catch {
      setError('인증번호 발송에 실패했습니다.');
    }
  };

  const handleVerify = async () => {
    if (!code.trim()) return;
    setError('');
    try {
      const res = await axiosInstance.post('/public/auth/phone/verify', { memberPhone: phone, code });
      if (!res.data?.success) throw new Error('인증번호가 올바르지 않습니다.');
      setVerified(true);
      clearInterval(timerRef.current);
    } catch {
      setError('인증번호가 올바르지 않습니다.');
    }
  };

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.Card onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.Title>
            <strong>{memberNickname || 'User'}님</strong>의 회원정보 중{' '}
            <span>본인인증</span>을 위해<br />
            휴대폰 번호를 입력해주세요.
          </S.Title>
        </S.Header>

        <S.Body>
          <S.InfoBox>
            본인 명의 휴대폰 번호로 인증을 진행합니다.<br />
            인증번호는 5분간 유효합니다.
          </S.InfoBox>

          <S.InputRow>
            <S.InputField
              type="tel"
              placeholder="전화번호 (예: 01012345678)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={verified}
            />
            <S.SendButton onClick={handleSend} disabled={verified || !phone.trim()}>
              {sent ? '재발송' : '인증번호 발송'}
            </S.SendButton>
          </S.InputRow>

          {sent && (
            <S.InputRow>
              <S.OtpRow style={{ flex: 1 }}>
                <S.InputField
                  placeholder="인증번호 입력"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  disabled={verified}
                />
                {!verified && <S.Timer>{formatTimer(timer)}</S.Timer>}
              </S.OtpRow>
              <S.SendButton onClick={handleVerify} disabled={verified || !code.trim()}>
                {verified ? '인증 완료' : '확인'}
              </S.SendButton>
            </S.InputRow>
          )}

          {error && <S.ErrorText>{error}</S.ErrorText>}
        </S.Body>

        <S.Footer>
          <S.CancelBtn type="button" onClick={onClose}>취소</S.CancelBtn>
          <S.SubmitBtn type="button" onClick={() => onSubmit?.(phone)} disabled={!verified}>
            저장
          </S.SubmitBtn>
        </S.Footer>
      </S.Card>
    </S.Overlay>
  );
};

export default PhoneVerifyPopup;
