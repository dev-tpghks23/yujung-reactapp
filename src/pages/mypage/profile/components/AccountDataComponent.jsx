import React, { useState } from 'react';
import S from '../styles/MyProfileStyle';
import PasswordChangePopup from './PasswordChangePopup';
import EmailChangePopup from './EmailChangePopup';
import PopupComponent from '../../../../components/commons/PopupComponent';

const AccountDataComponent = ({
  memberNickname,
  memberEmail,
  memberName,
  memberPhone,
  memberPhoneVerified,
  onPhoneVerify,
  onUnregister,
  onPasswordSubmit,
  onEmailSubmit,
  isSocialLogin = false,
}) => {
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [socialLoginMsg, setSocialLoginMsg] = useState('');

  const handlePasswordChangeClick = () => {
    if (isSocialLogin) {
      setSocialLoginMsg('현재 소셜로그인 상태입니다.');
    } else {
      setShowPasswordPopup(true);
    }
  };

  return (
    <>
      <PopupComponent
        isOpen={!!successMsg}
        message={successMsg}
        onConfirm={() => setSuccessMsg('')}
      />
      <PopupComponent
        isOpen={!!socialLoginMsg}
        message={socialLoginMsg}
        onConfirm={() => setSocialLoginMsg('')}
      />
      <PasswordChangePopup
        isOpen={showPasswordPopup}
        memberEmail={memberEmail}
        memberNickname={memberNickname}
        onClose={() => setShowPasswordPopup(false)}
        onSubmit={(currentPw, newPw) => {
          onPasswordSubmit?.(currentPw, newPw);
          setShowPasswordPopup(false);
          setSuccessMsg('비밀번호가 변경되었습니다.');
        }}
      />
      <EmailChangePopup
        isOpen={showEmailPopup}
        memberEmail={memberEmail}
        memberNickname={memberNickname}
        onClose={() => setShowEmailPopup(false)}
        onSubmit={(newEmail) => {
          onEmailSubmit?.(newEmail);
          setShowEmailPopup(false);
          setSuccessMsg('이메일이 변경되었습니다.');
        }}
      />

      <S.AccountDataCard>
        <S.AccountList>
          <S.AccountItem>
            <div className="ItemLabel">아이디</div>
            <div className="ItemContent">
              <span className="EmailText">{memberEmail || 'test@example.com'}</span>
              <p className="SubNotice">
                • 소셜 계정으로 가입된 유저의 경우, 이메일은 별도로 변경 안됨을 알려드립니다.<br />
                • 본인의 연동된 계정 소셜 계정에서 변경해 주세요.
              </p>
            </div>
            <button className="ItemBtn" onClick={() => setShowEmailPopup(true)}>연락처 변경</button>
          </S.AccountItem>

          <S.AccountItem>
            <div className="ItemLabel">본인인증</div>
            <div className="ItemContent">
              {memberPhoneVerified === 1 ? (
                <div className="VerifiedStatus">
                  <span className="StatusBadge">인증됨</span>
                  <span className="UserInfoText">{memberName} / {memberPhone}</span>
                </div>
              ) : (
                <span className="UnverifiedText">인증이 필요합니다.</span>
              )}
              <p className="SubNotice">• 본인 명의 휴대폰 번호를 변경하려면, 다시 본인인증을 진행하셔야 합니다.</p>
            </div>
            <button className="ItemBtn" onClick={onPhoneVerify}>
              {memberPhoneVerified === 1 ? '실명수정' : '인증하기'}
            </button>
          </S.AccountItem>

          <S.AccountItem>
            <div className="ItemLabel">비밀번호 변경</div>
            <div className="ItemContent"></div>
            <button className="ItemBtn" onClick={handlePasswordChangeClick}>변경</button>
          </S.AccountItem>

          <S.AccountItem>
            <div className="ItemLabel">회원탈퇴</div>
            <div className="ItemContent"></div>
            <button className="ItemBtn UnregisterBtn" onClick={onUnregister}>탈퇴하기</button>
          </S.AccountItem>
        </S.AccountList>
      </S.AccountDataCard>
    </>
  );
};

export default AccountDataComponent;
