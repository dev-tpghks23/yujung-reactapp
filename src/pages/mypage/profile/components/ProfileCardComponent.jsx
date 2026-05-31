import React, { useRef, useState } from 'react';
import S from '../styles/MyProfileStyle';
import defaltProfileImage from '../resouces/default.png';
import cameraIcon from '../../../../components/resources/camera.svg';
import PopupComponent from '../../../../components/commons/PopupComponent';

const ProfileCardComponent = ({
  memberNickname,
  memberProfileImageUrl,
  onNicknameChange,
  onImageChange,
  isPageOwner = true,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempNickname, setTempNickname] = useState(memberNickname || '');
  const [showProfileAlert, setShowProfileAlert] = useState(false);
  const fileInputRef = useRef(null);
  const profileSrc = memberProfileImageUrl || defaltProfileImage;

  const handleImageButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && onImageChange) {
      onImageChange(file);
      setShowProfileAlert(true);
    }
    e.target.value = '';
  };

  const handleSave = () => {
    if (onNicknameChange) {
      onNicknameChange(tempNickname);
    }
    setIsEditing(false);
    setShowProfileAlert(true);
  };

  const handleCancel = () => {
    setTempNickname(memberNickname);
    setIsEditing(false);
  };

  return (
    <>
      <PopupComponent
        isOpen={showProfileAlert}
        message="프로필이 수정되었습니다."
        onConfirm={() => setShowProfileAlert(false)}
      />
      <S.ProfileCard>
        <div className="profileImageContainer">
          <div className="profileImageCircle">
            <img
                src={profileSrc}
                alt="프로필"
                onError={(e) => { e.target.src = defaltProfileImage; }}
              />
          </div>

          {isPageOwner && (
            <>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileChange}
              />
              <button
                className="image-edit-btn"
                onClick={handleImageButtonClick}
                type="button"
              >
                <img src={cameraIcon} alt="프로필 사진 변경" />
              </button>
            </>
          )}
        </div>

        <div className="nickname-area">
          {isPageOwner ? (
            !isEditing ? (
              <div className="display-mode">
                <span className="nickname-display">
                  {memberNickname ? `${memberNickname}님` : ''}
                </span>
                <button
                  className="nickname-change-btn"
                  onClick={() => setIsEditing(true)}
                  type="button"
                >
                  변경
                </button>
              </div>
            ) : (
              <S.NicknameInputGroup>
                <input
                  type="text"
                  className="edit-input"
                  value={tempNickname}
                  onChange={(e) => setTempNickname(e.target.value)}
                  placeholder="닉네임을 입력해주세요."
                  autoFocus
                />
                <div className="EditActions">
                  <button className="SaveBtn" onClick={handleSave}>저장</button>
                  <button className="CancelBtn" onClick={handleCancel}>취소</button>
                </div>
              </S.NicknameInputGroup>
            )
          ) : (
            <div className="nickname-display">
              {memberNickname ? `${memberNickname}님` : '회원님'}
            </div>
          )}
        </div>

        <p className="profile-card-footer-text">
          {isPageOwner
            ? '* FailLog에서 사용할 내 프로필 이미지를 설정해주세요.'
            : `* ${memberNickname || '회원'}님의 프로필입니다.`}
        </p>
      </S.ProfileCard>
    </>
  );
};

export default ProfileCardComponent;
