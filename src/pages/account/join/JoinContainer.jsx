import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import S from '../styles/JoinContainerStyle';
import TermsModal from './TermsModal';

const TIMER_SECONDS = 300;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

const JoinContainer = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [modalType, setModalType] = useState(null);

  const [agreements, setAgreements] = useState({
    all: false, terms: false, marketing: false, notification: false,
  });

  const [email, setEmail] = useState('');
  const [emailCode, setEmailCode] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [emailTimer, setEmailTimer] = useState(TIMER_SECONDS);
  const emailTimerRef = useRef(null);

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [phoneSent, setPhoneSent] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [phoneTimer, setPhoneTimer] = useState(TIMER_SECONDS);
  const phoneTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(emailTimerRef.current);
      clearInterval(phoneTimerRef.current);
    };
  }, []);

  const formatTimer = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const startEmailTimer = () => {
    clearInterval(emailTimerRef.current);
    setEmailTimer(TIMER_SECONDS);
    emailTimerRef.current = setInterval(() => {
      setEmailTimer((prev) => {
        if (prev <= 1) { clearInterval(emailTimerRef.current); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  const startPhoneTimer = () => {
    clearInterval(phoneTimerRef.current);
    setPhoneTimer(TIMER_SECONDS);
    phoneTimerRef.current = setInterval(() => {
      setPhoneTimer((prev) => {
        if (prev <= 1) { clearInterval(phoneTimerRef.current); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  const handleAgreementAll = (checked) => {
    setAgreements({ all: checked, terms: checked, marketing: checked, notification: checked });
  };

  const handleAgreement = (key, checked) => {
    const next = { ...agreements, [key]: checked };
    next.all = next.terms && next.marketing && next.notification;
    setAgreements(next);
  };

  const handleSendEmail = async () => {
    if (!email) return;
    try {
      const res = await fetch('/public/auth/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberEmail: email, purpose: 'JOIN' }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error('인증번호 발송에 실패했습니다.');
      setEmailSent(true);
      startEmailTimer();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleVerifyEmail = async () => {
    if (!emailCode) return;
    try {
      const res = await fetch('/public/auth/email/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberEmail: email, code: emailCode, purpose: 'JOIN' }),
      });
      if (!res.ok) throw new Error('인증번호가 올바르지 않습니다.');
      const data = await res.json();
      if (!data.success) throw new Error('인증번호가 올바르지 않습니다.');
      setEmailVerified(true);
      clearInterval(emailTimerRef.current);
      setStep(3);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSendPhone = async () => {
    if (!phone) return;
    try {
      const res = await fetch('/public/auth/phone/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberPhone: phone }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error('인증번호 발송에 실패했습니다.');
      setPhoneSent(true);
      startPhoneTimer();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleVerifyPhone = async () => {
    if (!phoneCode) return;
    try {
      const res = await fetch('/public/auth/phone/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberPhone: phone, code: phoneCode }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error('인증번호가 올바르지 않습니다.');
      setPhoneVerified(true);
      clearInterval(phoneTimerRef.current);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleJoin = async () => {
    try {
      const res = await fetch('/public/auth/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          memberEmail: email,
          memberPassword: password,
          memberName: name,
          memberPhone: phone,
          memberNickname: nickname,
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.message || '회원가입에 실패했습니다.');
      }
      setStep(6);
    } catch (err) {
      alert(err.message);
    }
  };

  const navigateGoogleAuth  = () => { window.location.href = 'http://localhost:10000/oauth2/authorization/google'; };
  const navigateNaverAuth   = () => { window.location.href = 'http://localhost:10000/oauth2/authorization/naver'; };
  const navigateKakaoAuth   = () => { window.location.href = 'http://localhost:10000/oauth2/authorization/kakao'; };

  // ─── Step 1: 약관 동의 ───
  if (step === 1) return (
    <>
      {modalType && <TermsModal type={modalType} onClose={() => setModalType(null)} />}

      <S.Title>회원가입</S.Title>
      <S.Subtitle>아래 정보를 입력하고 회원가입을 완료해 주세요.</S.Subtitle>

      <S.AgreementBox>
        <S.AgreementAll>
          <S.Checkbox
            type="checkbox"
            checked={agreements.all}
            onChange={(e) => handleAgreementAll(e.target.checked)}
          />
          <span>전체 동의하기</span>
        </S.AgreementAll>
        <S.Separator />
        <S.AgreementRow>
          <S.Checkbox
            type="checkbox"
            checked={agreements.terms}
            onChange={(e) => handleAgreement('terms', e.target.checked)}
          />
          <S.AgreementLabel>이용약관 및 개인정보 처리방침 동의 <S.Required>(필수)</S.Required></S.AgreementLabel>
          <S.Arrow onClick={() => setModalType('terms')}>›</S.Arrow>
        </S.AgreementRow>
        <S.AgreementRow>
          <S.Checkbox
            type="checkbox"
            checked={agreements.marketing}
            onChange={(e) => handleAgreement('marketing', e.target.checked)}
          />
          <S.AgreementLabel>개인정보 마케팅 활용 동의 <S.Optional>(선택)</S.Optional></S.AgreementLabel>
          <S.Arrow onClick={() => setModalType('marketing')}>›</S.Arrow>
        </S.AgreementRow>
        <S.AgreementRow $column>
          <S.AgreementRowInner>
            <S.Checkbox
              type="checkbox"
              checked={agreements.notification}
              onChange={(e) => handleAgreement('notification', e.target.checked)}
            />
            <S.AgreementLabel>마케팅 정보 수신 동의 <S.Optional>(선택)</S.Optional></S.AgreementLabel>
            <S.Arrow onClick={() => setModalType('notification')}>›</S.Arrow>
          </S.AgreementRowInner>
          <S.AgreementDesc>맞춤 추천, 뉴스레터 등 유용한 혜택을 제공받을 수 있습니다.</S.AgreementDesc>
        </S.AgreementRow>
      </S.AgreementBox>
      <S.PrimaryButton
        onClick={() => { if (agreements.terms) setStep(2); }}
        $disabled={!agreements.terms}
      >
        Fail Log 계정 만들기
      </S.PrimaryButton>

      <S.OrDivider><S.OrLine /><S.OrText>또는</S.OrText><S.OrLine /></S.OrDivider>

      <S.SocialButton onClick={navigateGoogleAuth}>
        <S.SocialIcon $bg="#fff" $border="1.5px solid #ddd">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </S.SocialIcon>
        구글로 회원가입
      </S.SocialButton>
      <S.SocialButton onClick={navigateNaverAuth}>
        <S.SocialIcon $bg="#03C75A">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
            <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/>
          </svg>
        </S.SocialIcon>
        네이버로 회원가입
      </S.SocialButton>
      <S.SocialButton onClick={navigateKakaoAuth}>
        <S.SocialIcon $bg="#FEE500">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.713 1.6 5.09 4.02 6.587L5.1 21l4.38-2.88A11.5 11.5 0 0 0 12 18.6c5.523 0 10-3.477 10-7.8C22 6.477 17.523 3 12 3z" fill="#3C1E1E"/>
          </svg>
        </S.SocialIcon>
        카카오톡으로 회원가입
      </S.SocialButton>


      <S.BottomLink>이미 계정이 있으신가요? <S.PurpleLink to="/login">로그인</S.PurpleLink></S.BottomLink>
      <S.Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</S.Copyright>
    </>
  );

  // ─── Step 2: 이메일 인증 ───
  if (step === 2) return (
    <>
      <S.Title>회원가입</S.Title>
      <S.Subtitle>아래 정보를 입력하고 회원가입을 완료해 주세요.</S.Subtitle>

      <S.FieldLabel>이메일</S.FieldLabel>
      <S.InputRow>
        <S.Input
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={emailVerified}
        />
        <S.SmallButton onClick={handleSendEmail} disabled={emailVerified}>
          이메일 인증
        </S.SmallButton>
      </S.InputRow>

      {emailSent && (
        <>
          <S.FieldLabel>인증번호</S.FieldLabel>
          <S.InputRow>
            <S.InputWithTimer>
              <S.Input
                placeholder="인증번호를 입력하세요"
                value={emailCode}
                onChange={(e) => setEmailCode(e.target.value)}
                disabled={emailVerified}
              />
              {!emailVerified && <S.Timer>{formatTimer(emailTimer)}</S.Timer>}
            </S.InputWithTimer>
            <S.SmallButton onClick={handleVerifyEmail} disabled={emailVerified} $verified={emailVerified}>
              {emailVerified ? '인증 완료' : '인증 확인'}
            </S.SmallButton>
          </S.InputRow>
        </>
      )}

      <S.BottomLink>이미 계정이 있으신가요? <S.PurpleLink to="/login">로그인</S.PurpleLink></S.BottomLink>
      <S.Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</S.Copyright>
    </>
  );

  // ─── Step 3: 이름 / 닉네임 ───
  if (step === 3) return (
    <>
      <S.Title>회원가입</S.Title>
      <S.Subtitle>아래 정보를 입력하고 회원가입을 완료해 주세요.</S.Subtitle>

      <S.FieldLabel>이름</S.FieldLabel>
      <S.Input placeholder="이름을 입력하세요" value={name} onChange={(e) => setName(e.target.value)} />
      {name.length > 0 && name.length < 2 && <S.ValidationMsg>이름을 입력해주세요.</S.ValidationMsg>}

      <S.FieldLabel style={{ marginTop: 16 }}>닉네임</S.FieldLabel>
      <S.Input placeholder="닉네임을 입력하세요" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      {nickname.length > 0 && nickname.length < 2 && <S.ValidationMsg>닉네임을 입력해주세요.</S.ValidationMsg>}

      <S.PrimaryButton
        onClick={() => { if (name.length >= 2 && nickname.length >= 2) setStep(4); }}
        $disabled={name.length < 2 || nickname.length < 2}
        style={{ marginTop: 24 }}
      >
        다음 단계로
      </S.PrimaryButton>
      <S.BottomLink>이미 계정이 있으신가요? <S.PurpleLink to="/login">로그인</S.PurpleLink></S.BottomLink>
      <S.Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</S.Copyright>
    </>
  );

  // ─── Step 4: 비밀번호 ───
  if (step === 4) return (
    <>
      <S.Title>회원가입</S.Title>
      <S.Subtitle>아래 정보를 입력하고 회원가입을 완료해 주세요.</S.Subtitle>

      <S.FieldLabel>비밀번호</S.FieldLabel>
      <S.Input
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
      />
      {passwordConfirm && password !== passwordConfirm && (
        <S.ValidationMsg>비밀번호가 일치하지 않습니다.</S.ValidationMsg>
      )}

      <S.PrimaryButton
        onClick={() => { if (passwordRegex.test(password) && password === passwordConfirm) setStep(5); }}
        $disabled={!passwordRegex.test(password) || password !== passwordConfirm}
        style={{ marginTop: 24 }}
      >
        다음 단계로
      </S.PrimaryButton>
      <S.BottomLink>이미 계정이 있으신가요? <S.PurpleLink to="/login">로그인</S.PurpleLink></S.BottomLink>
      <S.Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</S.Copyright>
    </>
  );

  // ─── Step 5: 전화번호 인증 ───
  if (step === 5) return (
    <>
      <S.Title>회원가입</S.Title>
      <S.Subtitle>아래 정보를 입력하고 회원가입을 완료해 주세요.</S.Subtitle>

      <S.FieldLabel>전화번호</S.FieldLabel>
      <S.InputRow>
        <S.Input
          type="tel"
          placeholder="전화번호를 입력하세요"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={phoneVerified}
        />
        <S.SmallButton onClick={handleSendPhone} disabled={phoneVerified}>
          전화번호 인증
        </S.SmallButton>
      </S.InputRow>

      {phoneSent && (
        <>
          <S.FieldLabel>인증번호</S.FieldLabel>
          <S.InputRow>
            <S.InputWithTimer>
              <S.Input
                placeholder="인증번호를 입력하세요"
                value={phoneCode}
                onChange={(e) => setPhoneCode(e.target.value)}
                disabled={phoneVerified}
              />
              {!phoneVerified && <S.Timer>{formatTimer(phoneTimer)}</S.Timer>}
            </S.InputWithTimer>
            <S.SmallButton onClick={handleVerifyPhone} disabled={phoneVerified} $verified={phoneVerified}>
              {phoneVerified ? '인증 완료' : '인증 확인'}
            </S.SmallButton>
          </S.InputRow>
        </>
      )}

      <S.PrimaryButton onClick={handleJoin} $disabled={!phoneVerified} style={{ marginTop: 8 }}>
        회원가입
      </S.PrimaryButton>
      <S.BottomLink>이미 계정이 있으신가요? <S.PurpleLink to="/login">로그인</S.PurpleLink></S.BottomLink>
      <S.Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</S.Copyright>
    </>
  );

  // ─── Step 6: 가입 완료 ───
  return (
    <S.SuccessBox>
      <S.SuccessText>
        회원가입에 성공했습니다!<br />
        당신만의 이야기를 작성해보세요!
      </S.SuccessText>
      <S.PrimaryButton onClick={() => navigate('/login')}>로그인 페이지로</S.PrimaryButton>
    </S.SuccessBox>
  );
};

export default JoinContainer;
