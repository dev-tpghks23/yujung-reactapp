import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import S from '../styles/DeleteAccountContainerStyle';
import PopupComponent from '../../../components/commons/PopupComponent';
import axiosInstance from '../../../api/axiosInstance';
import useAuthStore from '../../../store/authStore';

const CONFIRM_PHRASE = '회원탈퇴';

const DeleteAccountContainer = () => {
  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useAuthStore();
  const [isSocialLogin, setIsSocialLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axiosInstance.get('/private/member/me')
      .then((res) => {
        setIsSocialLogin(res.data?.data?.socialMemberProvider !== 'local');
      })
      .catch(console.error);
  }, []);

  const canSubmit = agreed && (
    isSocialLogin
      ? confirmText === CONFIRM_PHRASE
      : password.length > 0 && !passwordError
  );

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleSubmit = () => {
    if (!canSubmit) return;
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    axiosInstance.delete('/private/member')
      .then(() => axiosInstance.post('/private/auth/logout'))
      .catch(console.error)
      .finally(() => {
        setUser(null);
        setIsAuthenticated(false);
        setShowPopup(false);
        navigate('/login');
      });
  };

  return (
    <>
      <PopupComponent
        isOpen={showPopup}
        message="지금까지 Fail Log를 이용해주셔서 감사합니다."
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowPopup(false)}
        confirmText="네"
        cancelText="아니오"
      /> 
      <S.Title>회원 탈퇴</S.Title>
      <S.Subtitle>탈퇴 전에 반드시 아래 내용을 확인해 주세요.</S.Subtitle>

      <S.WarnBox>
        <S.WarnTitle>탈퇴 시 삭제되는 정보</S.WarnTitle>
        <S.WarnList>
          <S.WarnItem>작성한 모든 페일로그 및 임시저장 로그</S.WarnItem>
          <S.WarnItem>작성한 커뮤니티 게시글 및 댓글</S.WarnItem>
          <S.WarnItem>방명록에 남긴 모든 내용</S.WarnItem>
          <S.WarnItem>좋아요한 페일로그 목록</S.WarnItem>
          <S.WarnItem>프로필 이미지 및 닉네임 정보</S.WarnItem>
        </S.WarnList>
      </S.WarnBox>

      {isSocialLogin ? (
        <>
          <S.FieldLabel>회원 탈퇴를 진행하려면 "{CONFIRM_PHRASE}"를 입력하세요</S.FieldLabel>
          <S.Input
            type="text"
            placeholder={CONFIRM_PHRASE}
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
          />
        </>
      ) : (
        <>
          <S.FieldLabel>현재 비밀번호</S.FieldLabel>
          <S.Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <S.ValidationMsg>{passwordError}</S.ValidationMsg>}
        </>
      )}

      <S.CheckRow>
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <span>
          위 내용을 모두 확인하였으며,<br />
          회원 탈퇴에 동의합니다.
        </span>
      </S.CheckRow>

      <S.ButtonGroup>
        <S.DangerButton $disabled={!canSubmit} onClick={handleSubmit}>
          탈퇴하기
        </S.DangerButton>
        <S.CancelButton type="button" onClick={() => navigate(-1)}>
          취소
        </S.CancelButton>
      </S.ButtonGroup>

      <S.Copyright>© FAIL LOG. ALL RIGHTS RESERVED.</S.Copyright>
    </>
  );
};

export default DeleteAccountContainer;
