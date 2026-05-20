import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageS from '../profile/styles/MyPageWrapper';

import HeroRotationComponent from '../heroSection/HeroRotationComponents';
import RecentLogsComponent from './components/RecentLogsComponent';
import LikesLogListSectionComponent from './components/LikesLogListSectionComponent';

import { getHeroContent } from '../heroSection/HeroData';
import useSearchStore from '../../../components/useSearchStore';
import EmptyStateComponent from '../commons/EmptyStateComponent';
import CommS from '../profile/styles/CommunityStyles';

const MyLikesContainer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { mainContent, quickMenus } = getHeroContent(pathname);
  const { content, setContent, setPage } = useSearchStore();

  const [recentLogs] = useState([
    { id: 101, title: '"붉은사막 30시간 해봤다" 게임주 영업익 10% 될 증거', author: "필기마스터", profileImg: null, timeText: "7시간 전" },
    { id: 102, title: '"붉은사막 30시간 해봤다" 게임주 영업익 10% 될 증거', author: "필기마스터", profileImg: null, timeText: "7시간 전" },
    { id: 103, title: '"붉은사막 30시간 해봤다" 게임주 영업익 10% 될 증거', author: "필기마스터", profileImg: null, timeText: "7시간 전" },
  ]);

  const [allLogs, setAllLogs] = useState([
    { id: 1, title: '"웹프로젝트 32시간 헤맸다" 개발부 영업직 10% 팀 증가', content: '실패를 기록하면서 오히려 더 강해진 팀의 이야기입니다.', createdAt: '2026-05-14', author: '필기마스터', bgColor: '#E7EFFF', isLiked: true, likeCount: 45 },
    { id: 2, title: '"웹프로젝트 32시간 헤맸다" 개발부 영업직 10% 팀 증가', content: '실패를 기록하면서 오히려 더 강해진 팀의 이야기입니다.', createdAt: '2026-05-13', author: '필기마스터', bgColor: '#D8EEFD', isLiked: true, likeCount: 45 },
    { id: 3, title: '"웹프로젝트 32시간 헤맸다" 개발부 영업직 10% 팀 증가', content: '실패를 기록하면서 오히려 더 강해진 팀의 이야기입니다.', createdAt: '2026-05-12', author: '필기마스터', bgColor: '#D7E0FF', isLiked: true, likeCount: 45 },
  ]);

  const [filteredLogs, setFilteredLogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchOption, setSearchOption] = useState('제목+내용');

  useEffect(() => {
    let filtered = allLogs;
    if (content) {
      const keyword = content.toLowerCase().trim();
      filtered = allLogs.filter((log) => {
        if (searchOption === '제목') return log.title.toLowerCase().includes(keyword);
        if (searchOption === '내용') return log.content.toLowerCase().includes(keyword);
        return log.title.toLowerCase().includes(keyword) || log.content.toLowerCase().includes(keyword);
      });
    }
    setFilteredLogs(filtered);
    setTotalPages(Math.ceil(filtered.length / 4) || 1);
  }, [allLogs, content, searchOption]);

  const handleSearchSubmit = (val) => {
    setContent(val);
    setCurrentPage(1);
    setPage(1);
  };

  const handleUnlikeOne = (id) => {
    setAllLogs((prev) => prev.filter((log) => log.id !== id));
  };

  const hasNoCards = allLogs.length === 0;

  return (
    <PageS.MainWrapper>
      <HeroRotationComponent mainContent={mainContent} quickMenus={quickMenus} />
      <RecentLogsComponent logs={recentLogs} />

      {hasNoCards ? (
        <EmptyStateComponent
          title={<>아직 마음에 든 페일로그가 없네요.<br /><span>다른 사람들의 페일로그</span>를 살펴볼까요?</>}
          subText="실패를 외면하지 않고 기록할 때, 당신의 강력한 성장 데이터가 됩니다."
          buttonText="피드 보러가기"
          onButtonClick={() => navigate('/feed')}
          styles={CommS}
        />
      ) : (
        <LikesLogListSectionComponent
          searchOption={searchOption}
          setSearchOption={setSearchOption}
          handleSearchSubmit={handleSearchSubmit}
          filteredLogs={filteredLogs}
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={(page) => setCurrentPage(page)}
          navigate={navigate}
          onUnlikeOne={handleUnlikeOne}
        />
      )}
    </PageS.MainWrapper>
  );
};

export default MyLikesContainer;
