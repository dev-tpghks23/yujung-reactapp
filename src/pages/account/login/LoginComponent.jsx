import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAuthStore from '../../../store/authStore';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

const LoginComponent = () => {
  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useAuthStore();

  const [memberEmail, setMemberEmail] = useState('');
  const [memberPassword, setMemberPassword] = useState('');
  const [keepLogin, setKeepLogin] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!memberEmail) errs.memberEmail = '이메일을 입력하세요.';
    else if (!emailRegex.test(memberEmail)) errs.memberEmail = '이메일 양식에 맞게 입력해주세요.';
    if (!memberPassword) errs.memberPassword = '비밀번호를 입력해주세요.';
    else if (!passwordRegex.test(memberPassword)) errs.memberPassword = '소문자, 숫자, 특수문자(!@#)를 각 하나씩 포함한 8자리 이상이어야 합니다.';
    return errs;
  };

  const handleLogin = async () => {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('http://localhost:10000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ memberEmail, memberPassword }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error?.message);
      }

      const meRes = await fetch('http://localhost:10000/api/members/me', {
        credentials: 'include',
      });

      if (!meRes.ok) throw new Error('Access Token Expired');

      const { success, data } = await meRes.json();
      if (success) {
        setUser(data);
        setIsAuthenticated(true);
        navigate('/');
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigateKakaoAuth = () => {
    window.location.href = 'http://localhost:10000/oauth2/authorization/kakao';
  };
  const navigateGoogleAuth = () => {
    window.location.href = 'http://localhost:10000/oauth2/authorization/google';
  };
  const navigateNaverAuth = () => {
    window.location.href = 'http://localhost:10000/oauth2/authorization/naver';
  };

  return (
    <>
      <Title>로그인</Title>
      <Subtitle>아이디와 비밀번호를 입력해 서비스를 이용하세요.</Subtitle>

      <InputGroup>
        <Input
          type="email"
          placeholder="이메일을 입력하세요"
          value={memberEmail}
          onChange={(e) => setMemberEmail(e.target.value)}
          $error={!!errors.memberEmail}
        />
        {errors.memberEmail && <ErrorText>{errors.memberEmail}</ErrorText>}
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={memberPassword}
          onChange={(e) => setMemberPassword(e.target.value)}
          $error={!!errors.memberPassword}
        />
        {errors.memberPassword && <ErrorText>{errors.memberPassword}</ErrorText>}
      </InputGroup>

      <CheckRow>
        <input
          type="checkbox"
          id="keepLogin"
          checked={keepLogin}
          onChange={(e) => setKeepLogin(e.target.checked)}
        />
        <CheckLabel htmlFor="keepLogin">로그인 상태 유지</CheckLabel>
      </CheckRow>

      <PrimaryButton onClick={handleLogin} disabled={isSubmitting}>
        로그인
      </PrimaryButton>

      <LinksRow>
        <LinkText to="/find-id">아이디 찾기</LinkText>
        <Divider>|</Divider>
        <LinkText to="/reset-password">비밀번호 찾기</LinkText>
        <Divider>|</Divider>
        <SocialIcons>
          <SocialIcon $bg="#FEE500" $color="#000" onClick={navigateKakaoAuth}>K</SocialIcon>
          <SocialIcon $bg="#fff" $color="#4285F4" $border="1px solid #ddd" onClick={navigateGoogleAuth}>G</SocialIcon>
          <SocialIcon $bg="#03C75A" $color="#fff" onClick={navigateNaverAuth}>N</SocialIcon>
        </SocialIcons>
      </LinksRow>

      <JoinPrompt>아직 계정이 없으신가요?</JoinPrompt>
      <OutlineButton onClick={() => navigate('/join')}>회원가입</OutlineButton>

      <Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</Copyright>
    </>
  );
};

export default LoginComponent;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: #222;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 13px;
  color: #888;
  margin-bottom: 28px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid ${({ $error }) => ($error ? '#ff4d4f' : '#e0e0e0')};
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    border-color: ${({ $error }) => ($error ? '#ff4d4f' : '#ab47ff')};
  }
`;

const ErrorText = styled.p`
  font-size: 12px;
  color: #ff4d4f;
  margin-bottom: 6px;
`;

const CheckRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

const CheckLabel = styled.label`
  font-size: 13px;
  color: #555;
  cursor: pointer;
`;

const PrimaryButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #ab47ff;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:hover {
    background: #9333ea;
  }
`;

const LinksRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
`;

const LinkText = styled(Link)`
  font-size: 13px;
  color: #555;
  text-decoration: none;

  &:hover {
    color: #ab47ff;
  }
`;

const Divider = styled.span`
  color: #ccc;
  font-size: 13px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 6px;
`;

const SocialIcon = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  border: ${({ $border }) => $border || 'none'};
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const JoinPrompt = styled.p`
  text-align: center;
  font-size: 13px;
  color: #888;
  margin-bottom: 12px;
`;

const OutlineButton = styled.button`
  width: 100%;
  padding: 14px;
  background: transparent;
  color: #ab47ff;
  font-size: 15px;
  font-weight: 700;
  border: 1.5px solid #d9a8ff;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 24px;

  &:hover {
    background: #f9f0ff;
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 11px;
  color: #bbb;
`;
