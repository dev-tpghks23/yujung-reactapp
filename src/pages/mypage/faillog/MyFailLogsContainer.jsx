import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageS from '../profile/styles/MyPageWrapper';
import CommS from '../profile/styles/CommunityStyles';
import LogS from './styles/MyFailLogStyles'; 
import HeroRotationComponent from '../heroSection/HeroRotationComponents';
import DraftLogsComponent from './components/DraftLogsComponent';
import { getHeroContent } from '../heroSection/HeroData';
import FeaturedLogComponent from './components/FeaturedLogComponent';

const MyFailLogsContainer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { mainContent, quickMenus } = getHeroContent(pathname);
  
  const draftLogs = [
    { id: 1, title: "작성중인 페일로그 1", content: '"신기시험 실패의 원인을 찾아서" 역시 술을 마시면 안됐던 걸까?', progress: 80, date: "3일 전", color: "#A5B4C3" },
    { id: 2, title: "작성중인 페일로그 2", content: '"신기시험 실패의 원인을 찾아서" 역시 술을 마시면 안됐던 걸까?', progress: 60, date: "3월 전", color: "#94A3B8" },
    { id: 3, title: "작성중인 페일로그 3", content: '"신기시험 실패의 원인을 찾아서" 역시 술을 마시면 안됐던 걸까?', progress: 80, date: "3월 전", color: "#8E9EB1" },
  ];

  const logs = [
    { id: 1, title: "당신의 가장 빛났던 실패 이야기", content: "실패는 성공의 어머니라는 말이 있듯이...", createdAt: "2026-05-10" },
    { id: 2, title: "리액트 경로 에러 해결기", content: "파일을 분리하면서 겪었던 수많은 에러들...", createdAt: "2026-05-09" },
  ];

  return (
    <PageS.MainWrapper>
      <HeroRotationComponent 
        mainContent={mainContent} 
        quickMenus={quickMenus} 
      />

      <DraftLogsComponent draftLogs={draftLogs} />
      
      {/* 1. FeaturedLogComponent 내부에 "나의 페일로그" 타이틀이 포함되어 있으므로 위치를 조정했습니다 */}
      <FeaturedLogComponent />

      {/* 2. 하단 리스트 섹션 */}
      <LogS.LogSection>
        {/* 기존 LogS.SectionTitle 대신 LogS.SectionHeader 구조로 변경하거나, 
            스타일 시트에 SectionTitle이 없다면 아래와 같이 범용 헤더를 사용하세요. */}
        
        {logs.length === 0 ? (
          <CommS.EmptyStateWrapper>
            <CommS.EmptyTitle>
              아직 기록된 실패가 없네요.<br/>
              <strong>첫 번째 페일로그</strong>를 적어볼까요?
            </CommS.EmptyTitle>
            <CommS.EmptySubText>
              실패를 외면하지 않고 기록할 때, 당신의 강력한 성장 데이터가 됩니다.
            </CommS.EmptySubText>
            <CommS.StartButton onClick={() => navigate('/fail-logs')}>시작하기</CommS.StartButton>
          </CommS.EmptyStateWrapper>
        ) : (
          <CommS.PostGrid>
            {logs.map((log) => (
              <CommS.CardWrapper key={log.id} onClick={() => navigate(`/logs/new/step1/${log.id}`)}>
                <LogS.CardContent>
                  <h3>{log.title}</h3>
                  <p>{log.content}</p>
                  <LogS.DateText>{log.createdAt}</LogS.DateText>
                </LogS.CardContent>
              </CommS.CardWrapper>
            ))}
          </CommS.PostGrid>
        )}
      </LogS.LogSection>
    </PageS.MainWrapper>
  );
};

export default MyFailLogsContainer;