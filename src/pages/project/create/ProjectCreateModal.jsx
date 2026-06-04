import React, { useState, useEffect } from 'react';
import axios from '../../../api/axiosInstance';
import { S } from './ProjectCreateModalStyles';

import closeIcon from '../../log/write/write_icon/close.svg';
import backIcon from '../../log/write/write_icon/back.svg';
import checkIcon from '../../log/write/write_icon/check.svg';

const CATEGORIES = ['공부/취업', '사업/창업', '인간관계', '건강/루틴', '기타'];

const ProjectCreateModal = ({ onClose, onCreated }) => {
    const [step, setStep] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('공부/취업');
    const [selectedLogId, setSelectedLogId] = useState(null);
    const [userGoal, setUserGoal] = useState('');
    const [logs, setLogs] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);
    
    // Step 3 progress
    const [progress, setProgress] = useState(0);
    // Completed project data
    const [createdProject, setCreatedProject] = useState(null);

    // ── 내 로그 목록 불러오기 ──
    useEffect(() => {
        const fetchLogs = async () => {
            try {
                setIsFetching(true);
                const response = await axios.get('/api/logs/my-list');
                setLogs(response.data.data || []);
            } catch (err) {
                setError('로그 목록을 불러오는데 실패했습니다.');
            } finally {
                setIsFetching(false);
            }
        };
        fetchLogs();
    }, []);

    const filteredLogs = logs.filter((log) => log.categoryName === selectedCategory);

    const selectedLog = logs.find((log) => log.id === selectedLogId);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget && step < 3) onClose();
    };

    // ── ESC 키 누르면 모달 닫기 ──
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && step < 3) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [step, onClose]);

    // ── Step 3: 로딩 프로세스 (API 호출) ──
    useEffect(() => {
        if (step === 3) {
            setProgress(0);

            const createProject = async () => {
                try {
                    const response = await axios.post('/api/project/create', {
                        logId: selectedLogId,
                        userGoal: userGoal.trim() || null,
                    });
                    
                    if (response.data.success) {
                        setCreatedProject(response.data.data);
                        setProgress(100);
                        setTimeout(() => setStep(4), 300);
                    }
                } catch (err) {
                    const msg = err.response?.data?.message;
                    if (msg?.includes('분석 결과가 없습니다')) {
                        alert('선택한 로그의 분석 결과가 없습니다. 먼저 로그 분석을 완료해주세요.');
                    } else {
                        alert('프로젝트 생성에 실패했습니다. 다시 시도해주세요.');
                    }
                    setStep(2); // 에러 시 뒤로 돌려보냄
                }
            };
            createProject();

            // 프로그레스 바 흉내내기 (AI 로딩)
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 90) {
                        clearInterval(interval);
                        return 90;
                    }
                    return prev + 1.5;
                });
            }, 150);
            return () => clearInterval(interval);
        }
    }, [step, selectedLogId, userGoal]);

    // ── Step 4: 완료 후 모달 닫기 ──
    useEffect(() => {
        if (step === 4) {
            const timer = setTimeout(() => {
                if (createdProject) {
                    onCreated(createdProject);
                    onClose();
                }
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [step, createdProject, onCreated, onClose]);


    // ── 렌더링 ──
    const renderStep1 = () => (
        <>
            <S.CloseButtonWrapper>
                <S.CloseButton onClick={onClose}>
                    <S.CloseIcon src={closeIcon} alt="close" />
                </S.CloseButton>
            </S.CloseButtonWrapper>

            <S.TitleSection>
                <S.ModalTitle>어떤 페일로그의 프로젝트를 생성할 계획인가요?</S.ModalTitle>
                <S.ModalSub>원하시는 실패 기록을 선택해 주세요.</S.ModalSub>
            </S.TitleSection>

            <S.CategoryTabs>
                {CATEGORIES.map(cat => (
                    <S.CategoryTab
                        key={cat}
                        $active={selectedCategory === cat}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </S.CategoryTab>
                ))}
            </S.CategoryTabs>

            <S.LogList>
                {isFetching ? (
                    <S.EmptyList>로그 목록을 불러오는 중...</S.EmptyList>
                ) : filteredLogs.length === 0 ? (
                    <S.EmptyList>해당 카테고리의 페일로그가 없습니다.</S.EmptyList>
                ) : (
                    filteredLogs.map(log => {
                        const isSelected = selectedLogId === log.id;
                        return (
                            <S.LogItem
                                key={log.id}
                                $selected={isSelected}
                                onClick={() => setSelectedLogId(log.id)}
                            >
                                <S.LogItemContent>
                                    <S.LogItemCategory>{log.categoryName}</S.LogItemCategory>
                                    <S.LogItemTitle>{log.logTitle}</S.LogItemTitle>
                                    <S.LogItemDate>{log.logCreatedAt} 작성</S.LogItemDate>
                                </S.LogItemContent>
                                <S.LogRadio $selected={isSelected}>
                                    {isSelected && (
                                        <S.CheckIconImg src={checkIcon} alt="check" />
                                    )}
                                </S.LogRadio>
                            </S.LogItem>
                        );
                    })
                )}
            </S.LogList>

            {error && <S.ErrorText>{error}</S.ErrorText>}

            <S.BottomSection>
                <S.PrimaryButton 
                    onClick={() => setStep(2)} 
                    disabled={!selectedLogId}
                    style={{ opacity: !selectedLogId ? 0.5 : 1 }}
                >
                    다음 단계로
                </S.PrimaryButton>
            </S.BottomSection>
        </>
    );

    const renderStep2 = () => (
        <>
            <S.HeaderNav>
                <S.BackButton onClick={() => setStep(1)}>
                    <S.BackIcon src={backIcon} alt="back" />
                </S.BackButton>
                <S.CloseButton onClick={onClose}>
                    <S.CloseIcon src={closeIcon} alt="close" />
                </S.CloseButton>
            </S.HeaderNav>

            <S.TitleSection>
                <S.ModalTitle>이 프로젝트에서 달성하고 싶은 세부 목표를 알려주세요.</S.ModalTitle>
                <S.ModalSub>AI가 이 목표를 바탕으로 행동 추천과 체크리스트를 설계합니다.</S.ModalSub>
            </S.TitleSection>

            {selectedLog && (
                <S.SelectedLogSummary>
                    <S.SelectedLogLabel>선택된 로그</S.SelectedLogLabel>
                    <S.SelectedLogText>
                        <strong>{selectedLog.logTitle}</strong> — {selectedLog.visionTitle}
                    </S.SelectedLogText>
                </S.SelectedLogSummary>
            )}

            <S.GoalTextarea
                placeholder="예: 매일 30분씩 영어 회화 연습하기, 주 3회 운동 루틴 만들기 등"
                value={userGoal}
                onChange={(e) => setUserGoal(e.target.value)}
                maxLength={200}
            />
            <S.CharCount>{userGoal.length} / 200</S.CharCount>

            <S.BottomSection>
                <S.PrimaryButton onClick={() => setStep(3)}>
                    AI로 프로젝트 생성 시작
                </S.PrimaryButton>
            </S.BottomSection>
        </>
    );

    const renderStep3 = () => (
        <S.LoadingWrapper>
            <S.SpinnerRing />
            <S.LoadingTitle>
                AI가 맞춤형 프로젝트를<br />생성하고 있어요
            </S.LoadingTitle>
            <S.LoadingSub>
                {progress < 30 && "입력하신 목표와 로그 내용을 분석하고 있습니다..."}
                {progress >= 30 && progress < 60 && "목표 달성을 위한 구체적인 체크리스트를 생성 중입니다..."}
                {progress >= 60 && progress < 85 && "추가적인 행동 추천 및 리소스 분석을 진행하고 있습니다..."}
                {progress >= 85 && "거의 다 완료되었습니다! (약 10~15초 소요됩니다)"}
            </S.LoadingSub>
            <S.ProgressBarWrapper>
                <S.ProgressBar style={{ transform: `scaleX(${progress / 100})` }} />
            </S.ProgressBarWrapper>
        </S.LoadingWrapper>
    );

    const renderStep4 = () => (
        <S.CompleteWrapper>
            <S.CompleteCircle>
                <S.CompleteCheck>✓</S.CompleteCheck>
            </S.CompleteCircle>
            <S.CompleteTitle>
                프로젝트 생성이<br />완료되었습니다!
            </S.CompleteTitle>
            <S.CompleteSub>상세 페이지로 이동합니다.</S.CompleteSub>
        </S.CompleteWrapper>
    );

    return (
        <S.Overlay onClick={handleOverlayClick}>
            <S.Modal $step={step}>
                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}
                {step === 4 && renderStep4()}
            </S.Modal>
        </S.Overlay>
    );
};

export default ProjectCreateModal;
