import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageS from '../profile/styles/MyPageWrapper';

import HeroRotationComponent from '../heroSection/HeroRotationComponents';
import FeaturedLogComponent from './components/FeaturedLogComponent';
import DraftLogsComponent from './components/DraftLogsComponent'; 
import MyFailLogListSectionComponent from './components/MyFailLogListSectionComponent';
import TrashComponent from './components/TrashComponent'; 

import { getHeroContent } from '../heroSection/HeroData';
import useSearchStore from '../../../components/useSearchStore';
import { DUMMY_FAIL_LOGS } from '../data/dummyData';
import EmptyStateComponent from '../commons/EmptyStateComponent';
import CommS from '../profile/styles/CommunityStyles';

const MyFailLogsContainer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { mainContent, quickMenus } = getHeroContent(pathname);
  const { content, setContent, setPage } = useSearchStore();
  
  // 📌 팁: 이 배열을 [] 빈 배열로 비우면 공백 상태가 활성화되고, 데이터가 들어오면 원래 리스트가 뜹니다.
  const [allLogs, setAllLogs] = useState(DUMMY_FAIL_LOGS);

  const [trashedLogs, setTrashedLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchOption, setSearchOption] = useState('제목+내용');
  const [selectedDeleteIds, setSelectedDeleteIds] = useState([]);
  const [isTrashEditMode, setIsTrashEditMode] = useState(false);
  const [selectedTrashIds, setSelectedTrashIds] = useState([]);

  const draftLogs = [
    { id: 1, title: '"붉은사막 30시간 해봤다" 게임주 영업익 10% 될 증거', content: '오늘 프로젝트를 정리하다가 스타일 경로가 꼬인 것을 발견했다. 당황했지만 Git 복구를 통해 해결!', progress: 80, date: "3일 전", color: "#E7EFFF" },
    { id: 2, title: 'React 공통 컴포넌트 설계의 어려움, 그리고 깨달음', content: '페이지네이션 컴포넌트를 만들면서 그룹화 로직을 구현하는 게 생각보다 까다로웠다.', progress: 45, date: "5일 전", color: "#D8EEFD" },
    { id: 3, title: '오늘의 실패: 커피를 쏟은 키보드와 하드웨어의 소중함', content: '코딩에 집중하다가 커피를 쏟았다. 하드웨어 관리는 정말 중요하다는 것을 다시 깨달았다.', progress: 20, date: "1주 전", color: "#D7E0FF" },
  ];

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

  useEffect(() => {
    setSelectedDeleteIds([]);
  }, [currentPage]);

  const handleSearchSubmit = (val) => {
    setContent(val);
    setCurrentPage(1);
    setPage(1);
  };

  const handleSelectOneLog = (id) => {
    setSelectedDeleteIds((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
  };

  const handleSelectAllLogs = (e) => {
    if (e.target.checked) {
      setSelectedDeleteIds(filteredLogs.map((log) => log.id));
    } else {
      setSelectedDeleteIds([]);
    }
  };

  const handleDeleteLogs = () => {
    if (selectedDeleteIds.length === 0) return alert("삭제할 페일로그를 선택해주세요.");
    if (window.confirm(`선택한 ${selectedDeleteIds.length}개의 페일로그를 휴지통으로 이동하시겠습니까?`)) {
      const logsToTrash = allLogs.filter((log) => selectedDeleteIds.includes(log.id));
      setTrashedLogs((prev) => [...prev, ...logsToTrash]);
      setAllLogs((prev) => prev.filter((log) => !selectedDeleteIds.includes(log.id)));
      setSelectedDeleteIds([]);
      setCurrentPage(1);
    }
  };

  const handleToggleTrashEditMode = (e) => {
    const isChecked = e.target.checked;
    setIsTrashEditMode(isChecked);
    if (!isChecked) setSelectedTrashIds([]);
  };

  const handleSelectOneTrash = (id) => {
    if (!isTrashEditMode) return;
    setSelectedTrashIds((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
  };

  const handleSelectAllTrash = () => {
    if (!isTrashEditMode) return;
    const isAlreadyAllChecked = selectedTrashIds.length === trashedLogs.length && trashedLogs.length > 0;
    if (!isAlreadyAllChecked) {
      setSelectedTrashIds(trashedLogs.map((log) => log.id));
    } else {
      setSelectedTrashIds([]);
    }
  };

  const handleRestoreSelectedLogs = () => {
    if (selectedTrashIds.length === 0) return alert("복구할 페일로그를 선택해주세요.");
    const targets = trashedLogs.filter((log) => selectedTrashIds.includes(log.id));
    setAllLogs((prev) => [...targets, ...prev]);
    setTrashedLogs((prev) => prev.filter((log) => !selectedTrashIds.includes(log.id)));
    setSelectedTrashIds([]);
    setIsTrashEditMode(false); 
    alert("선택한 페일로그가 목록으로 복구되었습니다.");
  };

  const handleDeleteForeverSelectedLogs = () => {
    if (selectedTrashIds.length === 0) return alert("영구 삭제할 페일로그를 선택해주세요.");
    if (window.confirm(`선택한 ${selectedTrashIds.length}개의 페일로그를 영구 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.`)) {
      setTrashedLogs((prev) => prev.filter((log) => !selectedTrashIds.includes(log.id)));
      setSelectedTrashIds([]);
      setIsTrashEditMode(false); 
    }
  };

  // 페일로그 데이터 존재 여부 판별
  const hasNoCards = allLogs.length === 0;

  return (
    <PageS.MainWrapper>
      <HeroRotationComponent mainContent={mainContent} quickMenus={quickMenus} />
      <DraftLogsComponent draftLogs={draftLogs} />
      
      {hasNoCards ? (
        <EmptyStateComponent
          title={<>아직 기록된 실패가 없네요.<br /><span>첫 번째 페일로그</span>를 적어볼까요?</>}
          subText="실패를 외면하지 않고 기록할 때, 당신의 강력한 성장 데이터가 됩니다."
          buttonText="시작하기"
          onButtonClick={() => navigate('/my-page/fail-logs/write')}
          styles={CommS}
        />
      ) : (
        <>
          <FeaturedLogComponent logs={allLogs} />
          <MyFailLogListSectionComponent
            searchOption={searchOption}
            setSearchOption={setSearchOption}
            handleSearchSubmit={handleSearchSubmit}
            filteredLogs={filteredLogs}
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={(page) => setCurrentPage(page)}
            navigate={navigate}
            selectedDeleteIds={selectedDeleteIds}
            onSelectOneLog={handleSelectOneLog}
            onSelectAllLogs={handleSelectAllLogs}
            onDeleteLogs={handleDeleteLogs}
          />
        </>
      )}

      <div style={{
        width: '100%', 
        maxWidth: '1200px', 
        margin: '100px auto 40px',
        borderTop: '1px dashed #CBD5E1',
        paddingTop: '60px'
      }}>
        <TrashComponent 
          trashedLogs={trashedLogs}
          isTrashEditMode={isTrashEditMode}
          onToggleEditMode={handleToggleTrashEditMode}
          selectedTrashIds={selectedTrashIds}
          onSelectOneTrash={handleSelectOneTrash}
          onSelectAllTrash={handleSelectAllTrash}
          onRestoreSelected={handleRestoreSelectedLogs}
          onDeleteForeverSelected={handleDeleteForeverSelectedLogs}
        />
      </div>
    </PageS.MainWrapper>
  );
};

export default MyFailLogsContainer;