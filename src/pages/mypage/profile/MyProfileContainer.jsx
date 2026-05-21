import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import PageS from './styles/MyPageWrapper';
import InfoS from './styles/InfoManagementStyles';
import CommS from './styles/CommunityStyles';

import ProfileCardComponent from './components/ProfileCardComponent';
import ProfileChartCard from './components/ProfileChartCard';
import ProfileStreakCard from './components/ProfileStreakCard';
import AccountDataComponent from './components/AccountDataComponent';
import MyCommunityContainer from './components/MyCommunityContainer';
import HeroRotationComponent from '../heroSection/HeroRotationComponents';
import { getHeroContent } from '../heroSection/HeroData';

const MyProfileContainer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { mainContent, quickMenus } = getHeroContent(pathname);

  const [memberInfo, setMemberInfo] = useState({
    memberNickname: '',
    memberProfileImageUrl: null,
    memberEmail: '',
    memberName: '',
    memberPhone: '',
    memberPhoneVerified: 0,
  });

  const [stats, setStats] = useState({
    communityCount: 0,
    logCount: 0,
    todayVisitors: 0,
    loginStreak: 1,
  });

  const [chartLogs, setChartLogs] = useState([]);

  const handleImageChange = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setMemberInfo((prev) => ({
        ...prev,
        memberProfileImageUrl: reader.result,
      }));
    };
  };

  const handleNicknameChange = (newNickname) => {
    setMemberInfo((prev) => ({ ...prev, memberNickname: newNickname }));
  };

  const handleEmailChange = (newEmail) => {
    setMemberInfo((prev) => ({ ...prev, memberEmail: newEmail }));
  };

  const handleUnregister = () => navigate('/delete');

  const handlePasswordChange = (newPassword) => {
    setMemberInfo((prev) => ({ ...prev, memberPassword: newPassword }));
  };

  return (
    <PageS.MainWrapper>
      <HeroRotationComponent mainContent={mainContent} quickMenus={quickMenus} />

      <InfoS.InfoManagementSection>
        <div className="info-header">
          <h2>내 정보 관리</h2>
          <p>내 정보의 수정 및 회원 서비스를 관리할 수 있습니다.</p>
        </div>

        <InfoS.TopCardGrid>
          <ProfileCardComponent
            memberNickname={memberInfo.memberNickname}
            memberProfileImageUrl={memberInfo.memberProfileImageUrl}
            onNicknameChange={handleNicknameChange}
            onImageChange={handleImageChange}
          />
          <ProfileChartCard logs={chartLogs} />
          <ProfileStreakCard
            communityCount={stats.communityCount}
            logCount={stats.logCount}
            todayVisitors={stats.todayVisitors}
            loginStreak={stats.loginStreak}
          />
        </InfoS.TopCardGrid>

        <InfoS.BottomAccountArea>
          <AccountDataComponent
            memberNickname={memberInfo.memberNickname}
            memberEmail={memberInfo.memberEmail}
            memberName={memberInfo.memberName}
            memberPhone={memberInfo.memberPhone}
            memberPhoneVerified={memberInfo.memberPhoneVerified}
            onEmailSubmit={handleEmailChange}
            onPasswordSubmit={handlePasswordChange}
            onUnregister={handleUnregister}
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