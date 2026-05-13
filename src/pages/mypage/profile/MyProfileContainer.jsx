import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import PageS from './styles/MyPageWrapper'; 
import InfoS from './styles/InfoManagementStyles'; 
import CommS from './styles/CommunityStyles'; 

import ProfileCardComponent from './components/ProfileCardComponent';
import AccountDataComponent from './components/AccountDataComponent';
import MyCommunityContainer from './components/MyCommunityContainer';
import HeroRotationComponent from '../heroSection/HeroRotationComponents';
import { getHeroContent } from '../heroSection/HeroData';

const MyProfileContainer = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  // [절대 삭제 금지] 로그인 체크 및 접근 제한 로직
  // useEffect(() => {
  //   const token = localStorage.getItem('token'); 

  //   if (!token) {
  //     alert("로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.");
  //     navigate('/login', { replace: true });
  //   }
  // }, [navigate]);

  // 0. 히어로 섹션 복붙용
    const { mainContent, quickMenus } = getHeroContent(pathname);

  // 1. 회원 정보 상태 (이미지 상태를 여기에 통합하면 관리가 편합니다)
  const [memberInfo, setMemberInfo] = useState({
    memberNickname: 'test',
    memberProfileImageUrl: null, 
    memberEmail: 'test@example.com',
    memberName: 'test',
    memberPhone: '010-1234-5678',
    memberPhoneVerified: 1 
  });

  // 2. 이미지 변경 핸들러 (const 추가 및 중복 제거)
  const handleImageChange = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setMemberInfo(prev => ({
        ...prev,
        memberProfileImageUrl: reader.result // 미리보기 데이터를 상태에 저장
      }));
    };
  };

  // 3. 닉네임 변경 핸들러
  const handleNicknameChange = (newNickname) => {
    setMemberInfo(prev => ({
      ...prev,
      memberNickname: newNickname
    }));
    console.log("닉네임 변경 완료:", newNickname);
  };

  const handlePasswordChange = () => {
    navigate('/change-password'); // 실제 경로로 수정 필요
  };


  return (
    <PageS.MainWrapper>
      <HeroRotationComponent 
        mainContent={mainContent} 
        quickMenus={quickMenus} 
      />

     <InfoS.InfoManagementSection>
      <div className="info-header">
        <h2>내 정보 관리</h2>
        <p>내 정보의 수정 및 회원 서비스를 관리할 수 있습니다.</p>
      </div>
      {/* 윗줄: 3개 그리드 (기획안 반영) */}
      <InfoS.TopCardGrid>
        <ProfileCardComponent 
          memberNickname={memberInfo.memberNickname}
          memberProfileImageUrl={memberInfo.memberProfileImageUrl}
          onNicknameChange={handleNicknameChange}
          onImageChange={handleImageChange}
        />
        {/* 아직 컴포넌트가 없으니 임시로 InfoS.ProfileCard를 사용하여 자리를 잡습니다 */}
        <InfoS.ProfileCard><div>차트 카드 (준비 중)</div></InfoS.ProfileCard>
        <InfoS.ProfileCard><div>활동량 카드 (준비 중)</div></InfoS.ProfileCard>
      </InfoS.TopCardGrid>

      {/* 아랫줄: 1개 긴 카드 */}
      <InfoS.BottomAccountArea>
        <AccountDataComponent 
          memberEmail={memberInfo.memberEmail}
          memberName={memberInfo.memberName}
          memberPhone={memberInfo.memberPhone}
          memberPhoneVerified={memberInfo.memberPhoneVerified}
          onPasswordChange={handlePasswordChange}
        />
      </InfoS.BottomAccountArea>
    </InfoS.InfoManagementSection>
      <CommS.CommunitySection>
        <MyCommunityContainer />
      </CommS.CommunitySection>
    </PageS.MainWrapper>
  );
};

export default MyProfileContainer;