import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import PageS from '../profile/styles/MyPageWrapper';

import HeroRotationComponent from '../heroSection/HeroRotationComponents';
import FeaturedLogComponent from './components/FeaturedLogComponent';
import DraftLogsComponent from './components/DraftLogsComponent'; 
import MyFailLogListSectionComponent from './components/MyFailLogListSectionComponent';
import TrashComponent from './components/TrashComponent'; 

import { getHeroContent } from '../heroSection/HeroData';
import useSearchStore from '../../../components/useSearchStore';
import EmptyStateComponent from '../commons/EmptyStateComponent';
import CommS from '../profile/styles/CommunityStyles';
import FailS from './styles/MyFailLogStyles';
import PopupComponent from '../../../components/commons/PopupComponent';
import axiosInstance from '../../../api/axiosInstance';

const mapLog = (item) => ({
  id: item.id,
  title: item.logTitle || '',
  content: item.visionTitle || '',
  author: item.memberNickname || '나의 기록',
  profileImg: item.memberProfileImageUrl || null,
  createdAt: item.logCreatedAt || '',
  date: item.logCreatedAt || '',
  likeCount: item.likeCount || 0,
  isLiked: false,
  views: item.logReadCount || 0,
  progress: item.logProgress || 0,
  logStatus: item.logStatus,
});

const MyFailLogsContainer = ({ isPageOwner = true }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { userId } = useParams();
  const { mainContent, quickMenus } = getHeroContent(pathname);
  const { content, setContent, setPage } = useSearchStore();
  
  const [allLogs, setAllLogs] = useState([]);
  const [popup, setPopup] = useState(null);
  const closePopup = () => setPopup(null);
  const showAlert = (message) => setPopup({ message, onConfirm: closePopup });
  const showConfirm = (message, onConfirm) => setPopup({ message, onConfirm, onCancel: closePopup });

  const [trashedLogs, setTrashedLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchOption, setSearchOption] = useState('제목+내용');
  const [selectedDeleteIds, setSelectedDeleteIds] = useState([]);
  const [isTrashEditMode, setIsTrashEditMode] = useState(false);
  const [selectedTrashIds, setSelectedTrashIds] = useState([]);

  const [draftLogs, setDraftLogs] = useState([]);
  const [ownerNickname, setOwnerNickname] = useState('');

  useEffect(() => {
    if (isPageOwner || !userId) return;
    axiosInstance.get(`/api/members/${userId}`)
      .then((res) => {
        if (res.data?.success) setOwnerNickname(res.data.data.memberNickname || '');
      })
      .catch(console.error);
  }, [isPageOwner, userId]);

  useEffect(() => {
    if (!isPageOwner) return;
    axiosInstance.get('/api/logs/my-list')
      .then((res) => {
        if (res.data?.success && Array.isArray(res.data.data)) {
          const mapped = res.data.data.map(mapLog);
          setAllLogs(mapped.filter((log) => log.logStatus !== 'DRAFT'));
          setDraftLogs(mapped.filter((log) => log.logStatus === 'DRAFT'));
        }
      })
      .catch(console.error);

    axiosInstance.get('/api/logs/trashed')
      .then((res) => {
        if (res.data?.success && Array.isArray(res.data.data)) {
          setTrashedLogs(res.data.data.map(mapLog));
        }
      })
      .catch(console.error);
  }, [isPageOwner]);

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
    if (selectedDeleteIds.length === 0) return;
    showConfirm('선택한 로그를 삭제(휴지통 이동)하시겠습니까?', async () => {
      try {
        const res = await axiosInstance.delete('/api/logs/trash', { data: selectedDeleteIds });
        if (res.data?.success) {
          const logsToTrash = allLogs.filter((log) => selectedDeleteIds.includes(log.id));
          setTrashedLogs((prev) => [...prev, ...logsToTrash]);
          setAllLogs((prev) => prev.filter((log) => !selectedDeleteIds.includes(log.id)));
          setSelectedDeleteIds([]);
          setCurrentPage(1);
          closePopup();
          showAlert('로그가 휴지통으로 이동되었습니다.');
        } else {
          showAlert(res.data?.message || '로그 삭제에 실패했습니다.');
        }
      } catch (error) {
        console.error("로그 휴지통 이동 실패:", error);
        showAlert('로그 삭제 중 오류가 발생했습니다.');
      }
    });
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
    if (selectedTrashIds.length === 0) return;
    showConfirm('로그를 복원 하시겠습니까?', async () => {
      try {
        const res = await axiosInstance.post('/api/logs/restore', selectedTrashIds);
        if (res.data?.success) {
          const targets = trashedLogs.filter((log) => selectedTrashIds.includes(log.id));
          setAllLogs((prev) => [...targets, ...prev]);
          setTrashedLogs((prev) => prev.filter((log) => !selectedTrashIds.includes(log.id)));
          setSelectedTrashIds([]);
          setIsTrashEditMode(false);
          closePopup();
          showAlert('로그가 복원되었습니다.');
        } else {
          showAlert(res.data?.message || '로그 복원에 실패했습니다.');
        }
      } catch (error) {
        console.error("로그 복원 실패:", error);
        showAlert('로그 복원 중 오류가 발생했습니다.');
      }
    });
  };

  const handleDeleteForeverSelectedLogs = () => {
    if (selectedTrashIds.length === 0) return;
    showConfirm('로그를 영구 삭제 하시겠습니까?', async () => {
      try {
        const res = await axiosInstance.delete('/api/logs/permanent', { data: selectedTrashIds });
        if (res.data?.success) {
          setTrashedLogs((prev) => prev.filter((log) => !selectedTrashIds.includes(log.id)));
          setSelectedTrashIds([]);
          setIsTrashEditMode(false);
          closePopup();
          showAlert('로그가 완전히 삭제되었습니다.');
        } else {
          showAlert(res.data?.message || '로그 영구 삭제에 실패했습니다.');
        }
      } catch (error) {
        console.error("로그 영구 삭제 실패:", error);
        showAlert('로그 영구 삭제 중 오류가 발생했습니다.');
      }
    });
  };

  const hasNoCards = allLogs.length === 0;

  return (
    <>
    <PopupComponent
      isOpen={!!popup}
      message={popup?.message}
      onConfirm={popup?.onConfirm}
      onCancel={popup?.onCancel}
    />
    <PageS.MainWrapper>
      <HeroRotationComponent mainContent={mainContent} quickMenus={quickMenus} isPageOwner={isPageOwner} userId={userId} />
      {isPageOwner && <DraftLogsComponent draftLogs={draftLogs.slice(0, 3)} />}

      {hasNoCards ? (
        <EmptyStateComponent
          title={isPageOwner
            ? <>아직 기록된 실패가 없네요.<br /><span>첫 번째 페일로그</span>를 적어볼까요?</>
            : <>아직 <span>{ownerNickname}</span>님의 페일로그가 없어요.</>
          }
          subText="실패를 외면하지 않고 기록할 때, 당신의 강력한 성장 데이터가 됩니다."
          buttonText={isPageOwner ? "시작하기" : undefined}
          onButtonClick={isPageOwner ? () => navigate('/logs/new/step1') : undefined}
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
            isPageOwner={isPageOwner}
          />
        </>
      )}

      {isPageOwner && (
        <FailS.TrashSeparator>
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
        </FailS.TrashSeparator>
      )}
    </PageS.MainWrapper>
    </>
  );
};

export default MyFailLogsContainer;