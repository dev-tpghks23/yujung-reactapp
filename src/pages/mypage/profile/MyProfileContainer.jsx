import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../../api/axiosInstance';

import PageS from './styles/MyPageWrapper';
import InfoS from './styles/InfoManagementStyles';
import CommS from './styles/CommunityStyles';

import ProfileCardComponent from './components/ProfileCardComponent';
import ProfileChartCardComponent from './components/ProfileChartCardComponent';
import ProfileStreakCardComponent from './components/ProfileStreakCardComponent';
import AccountDataComponent from './components/AccountDataComponent';
import PhoneVerifyPopup from './components/PhoneVerifyPopup';
import MyCommunityContainer from './components/MyCommunityContainer';
import HeroRotationComponent from '../heroSection/HeroRotationComponents';
import { getHeroContent } from '../heroSection/HeroData';

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

  const [chartLogs, setChartLogs] = useState([]);
  const [showPhoneVerifyPopup, setShowPhoneVerifyPopup] = useState(false);

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
            memberPhone: d.memberPhone || '',
            memberPhoneVerified: d.memberPhoneVerifiedAt ? 1 : 0,
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
          setChartLogs(
            res.data.data
              .filter((item) => item.logResultExternalRatio != null && item.logResultInternalRatio != null)
              .map((item) => ({
                ...item,
                factorType: item.logResultExternalRatio >= item.logResultInternalRatio ? 'external' : 'internal',
              }))
          );
        }
      })
      .catch(console.error);

  }, [isPageOwner]);

  const { data: myPostsData } = useQuery({
    queryKey: ['myPosts', memberInfo.memberId],
    queryFn: () =>
      axiosInstance.get('/api/posts/my-list', { params: { memberId: memberInfo.memberId } })
        .then((res) => (res.data?.success && Array.isArray(res.data.data) ? res.data.data : [])),
    enabled: isPageOwner && !!memberInfo.memberId,
    staleTime: 0,
  });

  useEffect(() => {
    if (myPostsData) setStats((prev) => ({ ...prev, communityCount: myPostsData.length }));
  }, [myPostsData]);

  // 남의 프로필 방문 시: 공개 회원 정보 조회 + 방문 기록
  useEffect(() => {
    if (isPageOwner || !userId) return;
    axiosInstance.get(`/api/members/${userId}`)
      .then((res) => {
        if (res.data?.success) {
          setMemberInfo((prev) => ({
            ...prev,
            memberNickname: res.data.data.memberNickname || '',
            memberProfileImageUrl: res.data.data.memberProfileImageUrl || null,
          }));
        }
      })
      .catch(console.error);
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

  const handlePhoneVerifySubmit = (phone) => {
    axiosInstance.put('/private/member', { memberPhone: phone, verifyPhone: true })
      .then((res) => {
        if (res.data?.success) {
          setMemberInfo((prev) => ({ ...prev, memberPhone: phone, memberPhoneVerified: 1 }));
        }
      })
      .catch(console.error)
      .finally(() => setShowPhoneVerifyPopup(false));
  };

  const displayNickname = memberInfo.memberNickname || (!isPageOwner ? userId : '');

  return (
    <>
    <PhoneVerifyPopup
      isOpen={showPhoneVerifyPopup}
      memberNickname={memberInfo.memberNickname}
      onClose={() => setShowPhoneVerifyPopup(false)}
      onSubmit={handlePhoneVerifySubmit}
    />
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
          <ProfileChartCardComponent logs={chartLogs} />
          <ProfileStreakCardComponent
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
              onPhoneVerify={() => setShowPhoneVerifyPopup(true)}
              onUnregister={handleUnregister}
              isSocialLogin={isSocialLogin}
            />
          </InfoS.BottomAccountArea>
        )}
      </InfoS.InfoManagementSection>

      <CommS.CommunitySection>
        <MyCommunityContainer isPageOwner={isPageOwner} memberNickname={displayNickname} memberId={memberInfo.memberId} />
      </CommS.CommunitySection>
    </PageS.MainWrapper>
    </>
  );
};

export default MyProfileContainer;