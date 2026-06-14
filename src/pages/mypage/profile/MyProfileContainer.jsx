import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../../api/axiosInstance';
import useAuthStore from '../../../store/authStore';

import PageS from './styles/MyPageWrapper';
import InfoS from './styles/InfoManagementStyles';
import CommS from './styles/CommunityStyles';

import ProfileCardComponent from './components/ProfileCardComponent';
import ProfileChartCardComponent from './components/ProfileChartCardComponent';
import ProfileStreakCardComponent from './components/ProfileStreakCardComponent';
import AccountDataComponent from './components/AccountDataComponent';
import PhoneVerifyPopup from './components/PhoneVerifyPopup';
import NameInfoChangePopup from './components/NameInfoChangePopup';
import MyCommunityContainer from './components/MyCommunityContainer';
import HeroRotationComponent from '../heroSection/HeroRotationComponents';
import { getHeroContent } from '../heroSection/HeroData';

const MyProfileContainer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { handle } = useParams();
  const currentUserEmail = useAuthStore((state) => state.user?.memberEmail);
  const currentUserHandle = currentUserEmail ? currentUserEmail.split('@')[0] : null;
  const isPageOwner = !handle || handle === currentUserHandle;
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
  const [showNameInfoPopup, setShowNameInfoPopup] = useState(false);
  const [memberNotFound, setMemberNotFound] = useState(false);

  // 1. 내 프로필일 때 정보 조회
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
  }, [isPageOwner]);

  // 2. 남의 프로필 방문 시: 공개 회원 정보 조회 + 방문 기록
  useEffect(() => {
    if (isPageOwner || !handle) return;
    axiosInstance.get(`/api/members/handle/${handle}`)
      .then((res) => {
        if (res.data?.success) {
          const d = res.data.data;
          setMemberInfo((prev) => ({
            ...prev,
            memberId: d.memberId, 
            memberNickname: d.memberNickname || '',
            memberProfileImageUrl: d.memberProfileImageUrl || null,
          }));
          if (d.memberId) {
            axiosInstance.post(`/private/profile/${d.memberId}/visit`).catch(console.error);
          }
        }
      })
      .catch((err) => {
        if (err.response?.status === 404) {
          setMemberNotFound(true);
        } else {
          console.error(err);
        }
      });
  }, [isPageOwner, handle]);

  // 3. 로그 리스트 조회 
  useEffect(() => {
    if (!isPageOwner && !memberInfo.memberId) return;

    const url = isPageOwner ? '/api/logs/my-list' : `/api/logs/list?memberId=${memberInfo.memberId}`; 
    
    axiosInstance.get(isPageOwner ? '/api/logs/my-list' : '/api/logs/my-list', { params: { memberId: memberInfo.memberId } })
      .then((res) => {
        if (res.data?.success && Array.isArray(res.data.data)) {
          const completedLogs = res.data.data.filter((item) => item.logStatus !== 'DRAFT');
          setStats((prev) => ({ ...prev, logCount: completedLogs.length }));
          setChartLogs(
            completedLogs
              .filter((item) => item.logResultExternalRatio != null && item.logResultInternalRatio != null)
              .map((item) => ({
                ...item,
                factorType: item.logResultExternalRatio >= item.logResultInternalRatio ? 'external' : 'internal',
              }))
          );
        }
      })
      .catch(console.error);
  }, [isPageOwner, memberInfo.memberId]);

  const { data: myPostsTotal } = useQuery({
    queryKey: ['myPostsTotal', memberInfo.memberId],
    queryFn: () =>
      axiosInstance.get('/api/posts/my-posts', { params: { memberId: memberInfo.memberId } })
        .then((res) => (res.data?.success ? res.data.data?.total ?? 0 : 0)),
    enabled: !!memberInfo.memberId,
    staleTime: 0,
  });

  useEffect(() => {
    if (myPostsTotal != null) setStats((prev) => ({ ...prev, communityCount: myPostsTotal }));
  }, [myPostsTotal]);

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
    // 1. 폼 데이터에 파일 담기
    const formData = new FormData();
    formData.append('file', file);

    // 2. 서버의 파일 업로드 API 호출 (/api/upload)
    axiosInstance.post('/api/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then((uploadRes) => {
      if (uploadRes.data?.success) {
        const fileUrl = uploadRes.data.data; // 서버가 반환한 짧은 이미지 URL (예: http://localhost:10000/uploads/...)
        
        // 3. UI 업데이트 및 DB에 회원 프로필 주소 저장 (/private/member)
        setMemberInfo((prev) => ({ ...prev, memberProfileImageUrl: fileUrl }));
        axiosInstance.put('/private/member', { memberProfileImageUrl: fileUrl })
          .catch(console.error);
      }
    })
    .catch(console.error);
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
    navigate('/delete');
  };

  const handlePasswordChange = (currentPw, newPw) => {
    return axiosInstance.put('/private/member/password', { currentPassword: currentPw, newPassword: newPw });
  };

  const handleVerifyPassword = (password) => {
    return axiosInstance.post('/private/member/verify-password', { password });
  };

  const handleNameInfoSubmit = ({ memberName, memberPhone }) => {
    return axiosInstance.put('/private/member', { memberName, memberPhone, verifyPhone: true })
      .then((res) => {
        if (res.data?.success) {
          setMemberInfo((prev) => ({ ...prev, memberName, memberPhone, memberPhoneVerified: 1 }));
        }
      });
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

  const displayNickname = memberInfo.memberNickname || (!isPageOwner ? handle : '');

  if (memberNotFound) {
    return (
      <PageS.MainWrapper>
        <InfoS.InfoManagementSection>
          <div className="info-header">
            <h2>해당 사용자가 없습니다.</h2>
            <p>존재하지 않거나 탈퇴한 회원입니다.</p>
          </div>
        </InfoS.InfoManagementSection>
      </PageS.MainWrapper>
    );
  }

  return (
    <>
    <PhoneVerifyPopup
      isOpen={showPhoneVerifyPopup}
      memberNickname={memberInfo.memberNickname}
      onClose={() => setShowPhoneVerifyPopup(false)}
      onSubmit={handlePhoneVerifySubmit}
    />
    <NameInfoChangePopup
      isOpen={showNameInfoPopup}
      memberNickname={memberInfo.memberNickname}
      memberName={memberInfo.memberName}
      memberPhone={memberInfo.memberPhone}
      onClose={() => setShowNameInfoPopup(false)}
      onVerifyPassword={handleVerifyPassword}
      onSubmit={handleNameInfoSubmit}
    />
    <PageS.MainWrapper>
      <HeroRotationComponent mainContent={mainContent} quickMenus={quickMenus} isPageOwner={isPageOwner} handle={handle} />

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
              onNameInfoEdit={() => setShowNameInfoPopup(true)}
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