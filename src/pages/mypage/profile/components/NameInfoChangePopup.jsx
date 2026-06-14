import React, { useState, useEffect, useRef } from 'react';
import S from '../styles/AccountPopupStyles';
import axiosInstance from '../../../../api/axiosInstance';

const TIMER_SECONDS = 300;

const formatTimer = (seconds) => {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
};

const NameInfoChangePopup = ({
  isOpen,
  memberNickname,
  memberName,
  memberPhone,
  onClose,
  onVerifyPassword,
  onSubmit,
}) => {
  const [step, setStep] = useState('password');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [sent, setSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [timer, setTimer] = useState(TIMER_SECONDS);
  const [error, setError] = useState('');
  const timerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setStep('password');
      setPassword('');
      setName(memberName || '');
      setPhone(memberPhone || '');
      setCode('');
      setSent(false);
      setVerified(false);
      setTimer(TIMER_SECONDS);
      setError('');
      clearInterval(timerRef.current);
    }
  }, [isOpen, memberName, memberPhone]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => () => clearInterval(timerRef.current), []);

  if (!isOpen) return null;

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

  const handleVerifyPasswordClick = () => {
    if (!password.trim()) return;
    setError('');
    Promise.resolve(onVerifyPassword?.(password))
      .then(() => setStep('edit'))
      .catch((err) => {
        setError(err?.response?.data?.message || '비밀번호가 일치하지 않습니다.');
      });
  };

  const handleSend = async () => {
    if (!phone.trim()) return;
    setError('');
    try {
      const res = await axiosInstance.post('/public/auth/phone/send', { memberPhone: phone });
      if (!res.data?.success) throw new Error('인증번호 발송에 실패했습니다.');
      setSent(true);
      setVerified(false);
      startTimer();
    } catch {
      setError('인증번호 발송에 실패했습니다.');
    }
  };

  const handleVerifyCode = async () => {
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

  const handleSubmit = () => {
    if (!verified || !name.trim() || !phone.trim()) return;
    setError('');
    Promise.resolve(onSubmit?.({ memberName: name, memberPhone: phone }))
      .then(() => setStep('success'))
      .catch((err) => {
        setError(err?.response?.data?.message || '수정에 실패했습니다.');
      });
  };

  return (
    <S.Overlay onClick={onClose}>
      <S.Card onClick={(e) => e.stopPropagation()}>
        {step === 'password' && (
          <>
            <S.Header>
              <S.Title>
                <strong>{memberNickname || 'User'}님</strong>의 회원정보 중{' '}<br />
                <span>실명/전화번호</span> 수정을 위해<br />
                비밀번호를 입력해주세요.
              </S.Title>
            </S.Header>

            <S.Body>
              <S.InputField
                type="password"
                placeholder="현재 비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                $hasError={!!error}
              />
              {error && <S.ErrorText>{error}</S.ErrorText>}
            </S.Body>

            <S.Footer>
              <S.CancelBtn type="button" onClick={onClose}>취소</S.CancelBtn>
              <S.SubmitBtn type="button" onClick={handleVerifyPasswordClick} disabled={!password.trim()}>
                확인
              </S.SubmitBtn>
            </S.Footer>
          </>
        )}

        {step === 'edit' && (
          <>
            <S.Header>
              <S.Title>
                <strong>{memberNickname || 'User'}님</strong>의{' '}
                <span>이름</span>과 <span>전화번호</span>를
                수정합니다.<br />
                전화번호 인증 후 변경사항을<br />
                저장할 수 있습니다.
              </S.Title>
            </S.Header>

            <S.Body>
              <S.InputField
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <S.InputRow>
                <S.InputField
                  type="tel"
                  placeholder="전화번호 (예: 01012345678)"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setSent(false); setVerified(false); }}
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
                  <S.SendButton onClick={handleVerifyCode} disabled={verified || !code.trim()}>
                    {verified ? '인증 완료' : '확인'}
                  </S.SendButton>
                </S.InputRow>
              )}

              {error && <S.ErrorText>{error}</S.ErrorText>}
            </S.Body>

            <S.Footer>
              <S.CancelBtn type="button" onClick={onClose}>취소</S.CancelBtn>
              <S.SubmitBtn
                type="button"
                onClick={handleSubmit}
                disabled={!verified || !name.trim() || !phone.trim()}
              >
                저장
              </S.SubmitBtn>
            </S.Footer>
          </>
        )}

        {step === 'success' && (
          <>
            <S.Header>
              <S.Title>
                <span>변경사항이 저장되었습니다.</span>
              </S.Title>
            </S.Header>
            <S.Footer>
              <S.SubmitBtn type="button" onClick={onClose}>확인</S.SubmitBtn>
            </S.Footer>
          </>
        )}
      </S.Card>
    </S.Overlay>
  );
};

export default NameInfoChangePopup;
