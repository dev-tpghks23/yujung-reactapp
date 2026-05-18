import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageS from '../profile/styles/MyPageWrapper';

import HeroRotationComponent from '../heroSection/HeroRotationComponents';
import { getHeroContent } from '../heroSection/HeroData';
import RecentLogsComponent from './components/RecentLogsComponent'; 

// 🎯 [시안 오른쪽] 좋아요 한 데이터가 아예 없을 때의 Empty UI
const LocalEmptyState = ({ title, subText, buttonText, onButtonClick }) => {
  return (
    <div style={{ 
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
      textAlign: 'center', padding: '120px 20px', width: '100%', maxWidth: '1200px', margin: '0 auto'
    }}>
      <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#1E293B', marginBottom: '14px' }}>{title}</h3>
      <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '32px', lineHeight: '1.6' }}>{subText}</p>
      {buttonText && onButtonClick && (
        <button 
          onClick={onButtonClick}
          style={{ 
            padding: '12px 48px', background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)', 
            color: '#fff', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer'
          }}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

const MyLikesContainer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { mainContent, quickMenus } = getHeroContent(pathname);

  // 1️⃣ [상단용] 최근 확인한 페일로그 목 데이터 (3개 고정)
  const [recentLogs, setRecentLogs] = useState([
    { id: 101, title: "읽고있던 페일로그 1", content: '"실패시험 실패의 원인을 찾아서"\n역사 속을 파헤쳐 본다면 어떨까?' },
    { id: 102, title: "읽고있던 페일로그 2", content: '"실패시험 실패의 원인을 찾아서"\n역사 속을 파헤쳐 본다면 어떨까?' },
    { id: 103, title: "읽고있던 페일로그 3", content: '"실패시험 실패의 원인을 찾아서"\n역사 속을 파헤쳐 본다면 어떨까?' },
  ]);

  // 2️⃣ [하단용] 좋아요 한 페일로그 데이터 (이 배열을 비우면 오른쪽 Empty 시안이 뜹니다)
  const [likedLogs, setLikedLogs] = useState([
    { id: 1, title: '"웹프로젝트 32시간 헤맸다" 개발부 영업직 10% 팀 증가' },
    { id: 2, title: '"웹프로젝트 32시간 헤맸다" 개발부 영업직 10% 팀 증가' },
    { id: 3, title: '"웹프로젝트 32시간 헤맸다" 개발부 영업직 10% 팀 증가' },
    { id: 4, title: '"웹프로젝트 32시간 헤맸다" 개발부 영업직 10% 팀 증가' },
  ]);

  // 하단 좋아요 데이터 존재 여부 판별
  const hasNoLikedCards = likedLogs.length === 0;

  return (
    <PageS.MainWrapper>
      {/* 상단 공통 배너 */}
      <HeroRotationComponent mainContent={mainContent} quickMenus={quickMenus} />
      
      {/* 🧩 1. [상단] 최근 확인한 페일로그 세션 (3열 고정 배치할 영역) */}
      <div style={{ width: '100%', marginTop: '40px' }}>
        <RecentLogsComponent logs={recentLogs} />
        <p style={{ fontWeight: 'bold' }}>상단: 최근 확인한 페일로그 구역 (준비 중)</p>
      </div>
      
      {/* 🧩 2. [하단] 좋아요 한 페일로그 모음 (동적 분기만 처리) */}
      <div style={{ width: '100%', marginTop: '80px' }}>
        {hasNoLikedCards ? (
          <LocalEmptyState 
            title={<>아직 마음에 든 <span style={{ color: '#2563EB' }}>페일로그</span>가 없나봐요.<br />다른 사람들의 <span style={{ color: '#2563EB' }}>페일로그</span>를 살펴볼까요?</>}
            subText={<>실패를 외면하지 않고 기록할 때,<br />당신의 강력한 성장 데이터가 됩니다.</>}
            buttonText="이동하기"
            onButtonClick={() => navigate('/feed')} 
          />
        ) : (
          <div>
            <p style={{ fontWeight: 'bold' }}>하단: 좋아요 한 페일로그 리스트 구역 (준비 중)</p>
            {/* 여기에 검색바나 4열 리스트 컴포넌트를 조율하면서 붙여갈 예정입니다 */}
          </div>
        )}
      </div>

    </PageS.MainWrapper>
  );
};

export default MyLikesContainer;