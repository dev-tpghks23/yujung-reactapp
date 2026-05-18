import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import S from '../styles/ResetPassWordContainerStyle';

const TIMER_SECONDS = 300;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

const ResetPassWordContainer = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [codeVerified, setCodeVerified] = useState(false);
  const [timer, setTimer] = useState(TIMER_SECONDS);
  const timerRef = useRef(null);

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  useEffect(() => () => clearInterval(timerRef.current), []);

  const formatTimer = (s) => {
    const m = String(Math.floor(s / 60)).padStart(2, '0');
    const sec = String(s % 60).padStart(2, '0');
    return `${m}:${sec}`;
  };

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

  const handleSendCode = async () => {
    if (!email) return;
    try {
      const res = await fetch('http://localhost:10000/public/auth/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberEmail: email, purpose: 'FIND_PW' }),
      });
      if (!res.ok) throw new Error('인증코드 발송에 실패했습니다.');
      setCodeSent(true);
      startTimer();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleVerifyCode = async () => {
    if (!code) return;
    try {
      const res = await fetch('http://localhost:10000/public/auth/email/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberEmail: email, code, purpose: 'FIND_PW' }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error('인증번호가 올바르지 않습니다.');
      setCodeVerified(true);
      clearInterval(timerRef.current);
      setStep(2);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleResetPassword = async () => {
    if (!password || password !== passwordConfirm) return;
    try {
      const res = await fetch('http://localhost:10000/public/auth/password/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberEmail: email, newPassword: password }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || '비밀번호 변경에 실패했습니다.');
      setStep(3);
    } catch (err) {
      alert(err.message);
    }
  };

  // ─── Step 1: 이메일 인증 ───
  if (step === 1) return (
    <>
      <S.Title>비밀번호 찾기</S.Title>
      <S.Subtitle>가입한 이메일로 인증코드를 받아 비밀번호를 재설정하세요.</S.Subtitle>

      <S.FieldLabel>이메일</S.FieldLabel>
      <S.InputRow>
        <S.Input
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={codeVerified}
        />
        <S.SmallButton onClick={handleSendCode} disabled={codeVerified || !email}>
          인증코드 발송
        </S.SmallButton>
      </S.InputRow>

      {codeSent && (
        <>
          <S.FieldLabel>인증번호</S.FieldLabel>
          <S.InputRow>
            <S.InputWithTimer>
              <S.Input
                placeholder="인증번호 6자리"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                disabled={codeVerified}
              />
              {!codeVerified && <S.Timer>{formatTimer(timer)}</S.Timer>}
            </S.InputWithTimer>
            <S.SmallButton onClick={handleVerifyCode} disabled={codeVerified} $verified={codeVerified}>
              {codeVerified ? '인증 완료' : '인증 확인'}
            </S.SmallButton>
          </S.InputRow>
        </>
      )}

      <S.PrimaryButton onClick={() => setStep(2)} $disabled={!codeVerified} style={{ marginTop: 8 }}>
        다음 단계로
      </S.PrimaryButton>
      <S.Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</S.Copyright>
    </>
  );

  // ─── Step 2: 새 비밀번호 입력 ───
  if (step === 2) return (
    <>
      <S.Title>비밀번호 재설정</S.Title>
      <S.Subtitle>새로운 비밀번호를 입력하세요.</S.Subtitle>

      <S.FieldLabel>새 비밀번호</S.FieldLabel>
      <S.Input
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: 4 }}
      />
      <S.HintMsg>소문자, 숫자, 특수문자(!@#)를 각 하나씩 포함한 8자리 이상</S.HintMsg>
      {password && !passwordRegex.test(password) && (
        <S.ValidationMsg>비밀번호 형식이 올바르지 않습니다.</S.ValidationMsg>
      )}

      <S.FieldLabel style={{ marginTop: 16 }}>비밀번호 확인</S.FieldLabel>
      <S.Input
        type="password"
        placeholder="비밀번호를 다시 입력하세요"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        style={{ marginBottom: 4 }}
      />
      {passwordConfirm && password !== passwordConfirm && (
        <S.ValidationMsg>비밀번호가 일치하지 않습니다.</S.ValidationMsg>
      )}

      <S.PrimaryButton
        onClick={handleResetPassword}
        $disabled={!password || !passwordRegex.test(password) || password !== passwordConfirm}
        style={{ marginTop: 24 }}
      >
        비밀번호 재설정
      </S.PrimaryButton>
      <S.Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</S.Copyright>
    </>
  );

  // ─── Step 3: 완료 ───
  return (
    <S.SuccessBox>
      <S.SuccessText>비밀번호가 변경되었습니다!</S.SuccessText>
      <S.PrimaryButton onClick={() => navigate('/login')}>로그인 페이지로</S.PrimaryButton>
    </S.SuccessBox>
  );
};

export default ResetPassWordContainer;
