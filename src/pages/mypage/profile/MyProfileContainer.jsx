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
import { DUMMY_COMMUNITY_POSTS, DUMMY_FAIL_LOGS as DUMMY_FAIL_LOGS_DATA } from '../data/dummyData';

const DUMMY_STATS = {
  communityCount: DUMMY_COMMUNITY_POSTS.length,
  logCount: DUMMY_FAIL_LOGS_DATA.length,
  todayVisitors: 17,
  loginStreak: 5,
};

const DUMMY_FAIL_LOGS = [
  { id: 1, factorType: 'external' },
  { id: 2, factorType: 'external' },
  { id: 3, factorType: 'external' },
  { id: 4, factorType: 'internal' },
  { id: 5, factorType: 'internal' },
  { id: 6, factorType: 'external' },
  { id: 7, factorType: 'internal' },
  { id: 8, factorType: 'external' },
  { id: 9, factorType: 'external' },
  { id: 10, factorType: 'internal' },
];

const MyProfileContainer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { mainContent, quickMenus } = getHeroContent(pathname);

  const [memberInfo, setMemberInfo] = useState({
    memberNickname: 'test',
    memberProfileImageUrl: null,
    memberEmail: 'test@example.com',
    memberName: 'test',
    memberPhone: '010-1234-5678',
    memberPhoneVerified: 1,
  });

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
    setMemberInfo((prev) => ({
      ...prev,
      memberNickname: newNickname,
    }));
  };

  const handlePasswordChange = () => {
    navigate('/change-password');
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
          <ProfileChartCard logs={DUMMY_FAIL_LOGS} />
          <ProfileStreakCard
            communityCount={DUMMY_STATS.communityCount}
            logCount={DUMMY_STATS.logCount}
            todayVisitors={DUMMY_STATS.todayVisitors}
            loginStreak={DUMMY_STATS.loginStreak}
          />
        </InfoS.TopCardGrid>

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