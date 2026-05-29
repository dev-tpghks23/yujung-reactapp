import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../../api/axiosInstance';

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
import { DUMMY_FAIL_LOGS } from '../data/dummyData';

const MyProfileContainer = ({ isPageOwner = true }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { userId } = useParams();
  const { mainContent, quickMenus } = getHeroContent(pathname);

  const [memberInfo, setMemberInfo] = useState({
    memberId: null,
    memberNickname: '',
    memberProfileImageUrl: null,
    memberEmail: '',
    memberName: '',
    memberPhone: '',
    memberPhoneVerified: 0,
    socialMemberProvider: 'local',
  });

  const [stats, setStats] = useState({
    communityCount: 0,
    logCount: 0,
    todayVisitors: 0,
    loginStreak: 1,
  });

  const [chartLogs, setChartLogs] = useState(DUMMY_FAIL_LOGS);

  useEffect(() => {
    if (!isPageOwner) return;
    axiosInstance.get('/private/member/me')
      .then((res) => {
        if (res.data?.success) {
          const d = res.data.data;
          setMemberInfo((prev) => ({
            ...prev,
            memberId: d.id,
            memberNickname: d.memberNickname || '',
            memberProfileImageUrl: d.memberPicture || null,
            memberEmail: d.memberEmail || '',
            memberName: d.memberName || '',
            socialMemberProvider: d.socialMemberProvider || 'local',
          }));
          setStats((prev) => ({ ...prev, loginStreak: d.memberLoginStreak || 1 }));
        }
      })
      .catch(console.error);

    axiosInstance.get('/api/logs/my-list')
      .then((res) => {
        if (res.data?.success && Array.isArray(res.data.data)) {
          setStats((prev) => ({ ...prev, logCount: res.data.data.length }));
        }
      })
      .catch(console.error);
  }, [isPageOwner]);

  // 남의 프로필 방문 시 기록
  useEffect(() => {
    if (isPageOwner || !userId) return;
    axiosInstance.post(`/private/profile/${userId}/visit`).catch(console.error);
  }, [isPageOwner, userId]);

  // 내 프로필에서 오늘 방문자 수 조회
  useEffect(() => {
    if (!isPageOwner || !memberInfo.memberId) return;
    axiosInstance.get(`/private/profile/${memberInfo.memberId}/today-visitors`)
      .then((res) => {
        if (res.data?.success) {
          setStats((prev) => ({ ...prev, todayVisitors: res.data.data }));
        }
      })
      .catch(console.error);
  }, [isPageOwner, memberInfo.memberId]);

  const isSocialLogin = memberInfo.socialMemberProvider !== 'local';

  const handleImageChange = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64 = reader.result;
      setMemberInfo((prev) => ({ ...prev, memberProfileImageUrl: base64 }));
      axiosInstance.put('/private/member', { memberProfileImageUrl: base64 }).catch(console.error);
    };
  };

  const handleNicknameChange = (newNickname) => {
    axiosInstance.put('/private/member', { memberNickname: newNickname })
      .then((res) => {
        if (res.data?.success) {
          setMemberInfo((prev) => ({ ...prev, memberNickname: newNickname }));
        }
      })
      .catch(console.error);
  };

  const handleEmailChange = (newEmail) => {
    setMemberInfo((prev) => ({ ...prev, memberEmail: newEmail }));
  };

  const handleUnregister = () => {
    axiosInstance.delete('/private/member')
      .then(() => navigate('/delete'))
      .catch(console.error);
  };

  const handlePasswordChange = (currentPw, newPw) => {
    axiosInstance.put('/private/member/password', { currentPassword: currentPw, newPassword: newPw }).catch(console.error);
  };

  const displayNickname = memberInfo.memberNickname || (!isPageOwner ? userId : '');

  return (
    <PageS.MainWrapper>
      <HeroRotationComponent mainContent={mainContent} quickMenus={quickMenus} isPageOwner={isPageOwner} userId={userId} />

      <InfoS.InfoManagementSection>
        <div className="info-header">
          {isPageOwner ? (
            <>
              <h2>내 정보 관리</h2>
              <p>내 정보의 수정 및 회원 서비스를 관리할 수 있습니다.</p>
            </>
          ) : (
            <h2>{displayNickname || '회원'}의 페이지입니다.</h2>
          )}
        </div>

        <InfoS.TopCardGrid>
          <ProfileCardComponent
            memberNickname={displayNickname}
            memberProfileImageUrl={memberInfo.memberProfileImageUrl}
            onNicknameChange={handleNicknameChange}
            onImageChange={handleImageChange}
            isPageOwner={isPageOwner}
          />
          <ProfileChartCard logs={chartLogs} />
          <ProfileStreakCard
            communityCount={stats.communityCount}
            logCount={stats.logCount}
            todayVisitors={stats.todayVisitors}
            loginStreak={stats.loginStreak}
          />
        </InfoS.TopCardGrid>

        {isPageOwner && (
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
              isSocialLogin={isSocialLogin}
            />
          </InfoS.BottomAccountArea>
        )}
      </InfoS.InfoManagementSection>

      <CommS.CommunitySection>
        <MyCommunityContainer isPageOwner={isPageOwner} memberNickname={displayNickname} />
      </CommS.CommunitySection>
    </PageS.MainWrapper>
  );
};

export default MyProfileContainer;