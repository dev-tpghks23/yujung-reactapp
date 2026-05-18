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

const LocalEmptyState = ({ title, subText, buttonText, onButtonClick }) => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center',
      padding: '120px 20px', // 시안 여백과 맞춤
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h3 style={{ 
        fontSize: '22px', 
        fontWeight: '700', 
        color: '#1E293B', 
        marginBottom: '14px', 
        lineHeight: '1.5' 
      }}>
        {title}
      </h3>
      <p style={{ 
        fontSize: '15px', 
        color: '#64748B', 
        marginBottom: '32px', 
        lineHeight: '1.6' 
      }}>
        {subText}
      </p>
      {buttonText && onButtonClick && (
        <button 
          onClick={onButtonClick}
          style={{ 
            padding: '12px 36px', 
            background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)', // 시안 그라데이션 완벽 재현
            color: '#fff', 
            border: 'none', 
            borderRadius: '8px', 
            fontSize: '15px', 
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(99, 102, 241, 0.2)',
            transition: 'opacity 0.2s'
          }}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

const MyFailLogsContainer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { mainContent, quickMenus } = getHeroContent(pathname);
  const { content, setContent, setPage } = useSearchStore();
  
  // 📌 팁: 이 배열을 [] 빈 배열로 비우면 공백 상태가 활성화되고, 데이터가 들어오면 원래 리스트가 뜹니다.
  const [allLogs, setAllLogs] = useState([
    { id: 1, title: "1페이지 - Asunica 최종 면접 준비 중 발견한 코드 오류", content: "오늘 프로젝트를 정리하다가 스타일 경로가 꼬인 것을 발견했다.", createdAt: "2026-05-14", isLiked: false },
    { id: 2, title: "1페이지 - React 공통 컴포넌트 설계의 어려움", content: "페이지네이션 컴포넌트를 만들면서 그룹화 로직을 구현하는 게 까다로웠다.", createdAt: "2026-05-13", isLiked: true },
    { id: 3, title: "1페이지 - 오늘의 실패: 커피를 쏟은 키보드", content: "코딩에 집중하다가 커피를 쏟았다. 하드웨어 관리는 정말 중요하다.", createdAt: "2026-05-12", isLiked: false },
    { id: 4, title: "스타일 컴포넌트 레이어 연동 실패 분석", content: "z-index와 가상요소 속성의 원리를 분석한다.", createdAt: "2026-05-11", isLiked: false },
  ]);

  const [trashedLogs, setTrashedLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchOption, setSearchOption] = useState('제목+내용');
  const [selectedDeleteIds, setSelectedDeleteIds] = useState([]);
  const [isTrashEditMode, setIsTrashEditMode] = useState(false);
  const [selectedTrashIds, setSelectedTrashIds] = useState([]);

  const draftLogs = [
    { id: 1, title: "작성중인 페일로그 1", content: '"신기시험 실패의 원인을 찾아서"', progress: 80, date: "3일 전", color: "#A5B4C3" },
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
      
      {/* 🎯 동적 분기 영역 */}
      {hasNoCards ? (
        /* 📌 1. 카드가 없을 때: 로컬 빌트인 컴포넌트가 확실하게 UI 바인딩 */
        <LocalEmptyState 
          title={
            <>
              아직 기록된 실패가 없네요.<br />
              <span style={{ color: '#6366f1' }}>첫 번째 페일로그</span>를 적어볼까요?
            </>
          }
          subText="실패를 외면하지 않고 기록할 때, 당신의 강력한 성장 데이터가 됩니다."
          buttonText="시작하기"
          onButtonClick={() => navigate('/my-page/fail-logs/write')}
        />
      ) : (
        /* 📌 2. 카드가 있을 때: 기존 요약 배너 및 검색/리스트 섹션 노출 */
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

      {/* 📌 하단 대칭 휴지통 섹션 */}
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