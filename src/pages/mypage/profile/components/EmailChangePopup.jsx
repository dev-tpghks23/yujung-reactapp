import React, { useState, useEffect, useRef } from 'react';
import S from '../styles/AccountPopupStyles';

const TIMER_DURATION = 5 * 60;

const maskEmail = (email) => {
  if (!email || !email.includes('@')) return email;
  const [local, domain] = email.split('@');
  const lastDot = domain.lastIndexOf('.');
  const domainName = domain.slice(0, lastDot);
  const tld = domain.slice(lastDot);
  const maskedLocal = local.slice(0, 3) + '****';
  const maskedDomain = domainName[0] + '*'.repeat(Math.max(domainName.length - 1, 7));
  return `${maskedLocal}@${maskedDomain}${tld}`;
};

const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

const EmailChangePopup = ({ isOpen, memberEmail, memberNickname, onClose, onSubmit }) => {
  const [emailInput, setEmailInput] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  // 두 메시지를 분리: OTP 불일치 / 타이머 갱신
  const [otpError, setOtpError] = useState(false);
  const [timerRefreshed, setTimerRefreshed] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    setTimeLeft(TIMER_DURATION);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) { clearInterval(timerRef.current); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSend = () => {
    if (!emailInput.trim()) return;
    // TODO: 실제 인증번호 발송 API 연동
    setOtpSent(true);
    setOtpError(false);
    setTimerRefreshed(false);
    setOtpInput('');
    startTimer();
  };

  const handleVerify = () => {
    // TODO: 실제 인증번호 검증 API 연동
    // 현재는 '000000' 을 더미 유효 OTP로 사용
    if (otpInput !== '000000') {
      setOtpError(true);
      setTimerRefreshed(false);
    } else {
      setOtpError(false);
      setTimerRefreshed(false);
    }
  };

  // 타이머 클릭 → 갱신
  const handleTimerClick = () => {
    setOtpError(false);
    setTimerRefreshed(true);
    setOtpInput('');
    startTimer();
  };

  useEffect(() => {
    if (!isOpen) {
      setEmailInput('');
      setOtpInput('');
      setOtpSent(false);
      setOtpError(false);
      setTimerRefreshed(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current); }, []);

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.Card onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.Title>
            <strong>{memberNickname || 'User'}님</strong> 의 회원정보 중{' '}
            <br /><span>연락처 이메일</span> 수정을 위해<br />
            인증절차가 필요합니다.
          </S.Title>
          <S.CurrentId>{maskEmail(memberEmail)}</S.CurrentId>
        </S.Header>

        <S.Body>
          <S.InfoBox>
            Fail Log 서비스의 변경/종료, 본인 작성 게시물 조치 등<br />
            대부분의 Fail Log 안내에 사용합니다.
          </S.InfoBox>

          <S.InputRow>
            <S.InputField
              type="email"
              placeholder="이메일 입력"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <S.SendButton
              type="button"
              onClick={otpSent ? handleVerify : handleSend}
              disabled={!emailInput.trim()}
            >
              {otpSent ? '인증 번호 확인' : '인증 번호 발송'}
            </S.SendButton>
          </S.InputRow>

          {otpSent && (
            <S.OtpRow>
              <S.InputField
                type="text"
                placeholder="인증번호 입력"
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                $hasError={otpError}
                maxLength={6}
              />
              <S.Timer onClick={handleTimerClick} title="클릭하면 타이머를 갱신합니다">
                {formatTime(timeLeft)}
              </S.Timer>
            </S.OtpRow>
          )}

          {otpSent && (
            <S.ResendRow>
              <S.ResendLabel>인증번호가 오지 않나요?</S.ResendLabel>
              {otpError && (
                <S.ErrorText>인증번호가 잘못되었습니다.</S.ErrorText>
              )}
              {timerRefreshed && (
                <S.ErrorText>타이머를 갱신했습니다.</S.ErrorText>
              )}
            </S.ResendRow>
          )}
        </S.Body>

        <S.Footer>
          <S.CancelBtn type="button" onClick={onClose}>취소</S.CancelBtn>
          <S.SubmitBtn type="button" onClick={() => onSubmit?.(emailInput)}>
            변경
          </S.SubmitBtn>
        </S.Footer>
      </S.Card>
    </S.Overlay>
  );
};

export default EmailChangePopup;
