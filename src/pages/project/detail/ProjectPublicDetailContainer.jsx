import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import axios from '../../../api/axiosInstance';
import theme from '../../../styles/theme';
import S from './ProjectDetailContainerStyle';
import {
    flexCenter,
    flexBetweenRow,
    flexStartRow,
    h4Bold,
    h8Regular,
    h8Bold,
    h9Regular,
    h9Bold,
    h11Regular,
} from '../../../styles/common';

import ProjectDetailAction from './ProjectDetailAction';
import ProjectDetailChecklist from './ProjectDetailChecklist';
import ProjectDetailSuggestion from './ProjectDetailSuggestion';
import CheckIconSrc from '../create/create_icon/check-small.svg';

const AiBadge = () => (
    <S.AiBadge>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="14" fill="url(#ai_grad)" />
            <text x="14" y="19" textAnchor="middle" fontSize="13" fill="white" fontWeight="bold">AI</text>
            <defs>
                <linearGradient id="ai_grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor={theme.PALETTE.primary.main} />
                    <stop offset="1" stopColor={theme.PALETTE.third.main} />
                </linearGradient>
            </defs>
        </svg>
        AI
    </S.AiBadge>
);

// ─────────────────────────────────────────
// 내 로그 선택 모달 (프로젝트 가져오기용)
// ─────────────────────────────────────────
const LogSelectModal = ({ onClose, onConfirm }) => {
    const [logs, setLogs] = useState([]);
    const [selectedLogId, setSelectedLogId] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [isConfirming, setIsConfirming] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const res = await axios.get('/api/logs/my-list');
                setLogs(res.data.data || []);
            } catch {
                setError('로그 목록을 불러오는데 실패했습니다.');
            } finally {
                setIsFetching(false);
            }
        };
        fetchLogs();
    }, []);

    const handleConfirm = async () => {
        if (!selectedLogId) return;
        setIsConfirming(true);
        try {
            await onConfirm(selectedLogId);
            onClose();
        } catch {
            setError('프로젝트 추가에 실패했습니다. 다시 시도해주세요.');
        } finally {
            setIsConfirming(false);
        }
    };

    return (
        <LS.Overlay>
            <LS.ModalWrap>
                <LS.CloseBtn onClick={onClose} disabled={isConfirming}>✕</LS.CloseBtn>
                <LS.Title>어느 페일로그의 프로젝트로 가져올까요?</LS.Title>
                <LS.Desc>내 페일로그 중 하나를 선택하면 해당 로그의 프로젝트로 추가됩니다.</LS.Desc>

                <LS.LogList>
                    {isFetching ? (
                        <LS.EmptyText>로그 목록을 불러오는 중...</LS.EmptyText>
                    ) : logs.length === 0 ? (
                        <LS.EmptyText>페일로그가 없습니다. 먼저 로그를 작성해주세요.</LS.EmptyText>
                    ) : (
                        logs.map((log) => (
                            <LS.LogCard
                                key={log.id}
                                $active={selectedLogId === log.id}
                                onClick={() => setSelectedLogId(log.id)}
                            >
                                <div>
                                    <LS.LogCategory>{log.categoryName}</LS.LogCategory>
                                    <LS.LogTitle>
                                        <strong>{log.logTitle}</strong> — {log.visionTitle}
                                    </LS.LogTitle>
                                    <LS.LogDate>{log.logCreatedAt} 작성</LS.LogDate>
                                </div>
                                <LS.RadioCircle $active={selectedLogId === log.id}>
                                    {selectedLogId === log.id && (
                                        <LS.CheckIcon src={CheckIconSrc} alt="check" />
                                    )}
                                </LS.RadioCircle>
                            </LS.LogCard>
                        ))
                    )}
                </LS.LogList>

                {error && <LS.ErrorText>{error}</LS.ErrorText>}

                <LS.BtnRow>
                    <LS.CancelBtn onClick={onClose} disabled={isConfirming}>취소</LS.CancelBtn>
                    <LS.ConfirmBtn
                        onClick={handleConfirm}
                        disabled={!selectedLogId || isConfirming}
                    >
                        {isConfirming ? '추가 중...' : '이 로그의 프로젝트로 추가하기'}
                    </LS.ConfirmBtn>
                </LS.BtnRow>
            </LS.ModalWrap>
        </LS.Overlay>
    );
};

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────
const ProjectPublicDetailContainer = () => {
    const { id: projectId } = useParams();

    const [project, setProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [aiSuggestions, setAiSuggestions] = useState([]);
    const [checklist, setChecklist] = useState([]);
    const [suggestion, setSuggestion] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newItem, setNewItem] = useState({ title: '', memo: '', priority: null });
    const [currentMemberId, setCurrentMemberId] = useState(null);
    const [showLogSelectModal, setShowLogSelectModal] = useState(false);

    const fetchProject = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`/api/project/public/${projectId}`);
            setProject(response.data.data);
            setAiSuggestions(response.data.data?.aiSuggestions || []);

            const checklistResponse = await axios.get(`/api/checklist/list/${projectId}`);
            setChecklist(checklistResponse.data.data || []);

            const suggestionResponse = await axios.get(`/api/suggestion/list/${projectId}`);
            setSuggestions(suggestionResponse.data.data || []);

            try {
                const meResponse = await axios.get('/private/member/me');
                setCurrentMemberId(meResponse.data.data?.id);
            } catch {
                setCurrentMemberId(null);
            }

        } catch (err) {
            setError('프로젝트를 불러오는데 실패했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSuggestionSubmit = async () => {
        if (!suggestion.trim()) return;
        try {
            await axios.post('/api/suggestion/create', {
                projectId: Number(projectId),
                checklistId: checklist[0]?.id || null,
                suggestionTitle: suggestion,
            });
            setSuggestion('');
            const response = await axios.get(`/api/suggestion/list/${projectId}`);
            setSuggestions(response.data.data || []);
        } catch (err) {
            alert('제안 등록에 실패했습니다.');
        }
    };

    const handleAddFromSuggestion = (text) => {
        setNewItem({ title: text, memo: '', priority: null });
        setShowAddModal(true);
    };

    // 로그 선택 모달 열기
    const handleCopyClick = () => {
        setShowLogSelectModal(true);
    };

    // 선택한 logId로 프로젝트 복사
    const handleCopyConfirm = async (logId) => {
        await axios.post(`/api/project/copy/${projectId}`, null, {
            params: { logId },
        });
        alert('내 프로젝트에 추가되었습니다!');
    };

    useEffect(() => {
        if (projectId) fetchProject();
    }, [projectId]);

    const getDDay = (startDate) => {
        if (!startDate) return 'D-Day';
        const start = new Date(startDate);
        const today = new Date();
        const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
        return diff >= 0 ? `D+${diff}` : `D${diff}`;
    };

    const getProgressPercent = (startDate, endDate) => {
        if (!startDate || !endDate) return 0;
        const start = new Date(startDate);
        const end = new Date(endDate);
        const today = new Date();
        const total = end - start;
        const elapsed = today - start;
        if (total <= 0) return 100;
        return Math.min(100, Math.max(0, Math.round((elapsed / total) * 100)));
    };

    if (isLoading) return <S.PageWrapper><S.Inner><p>불러오는 중...</p></S.Inner></S.PageWrapper>;
    if (error)     return <S.PageWrapper><S.Inner><p>{error}</p></S.Inner></S.PageWrapper>;
    if (!project)  return null;

    const progressPercent = getProgressPercent(project.projectStartDate, project.projectEndDate);

    return (
        <S.PageWrapper>
            {showLogSelectModal && (
                <LogSelectModal
                    onClose={() => setShowLogSelectModal(false)}
                    onConfirm={handleCopyConfirm}
                />
            )}

            <S.Inner>
                <S.PageTop>
                    <S.PageTitle>PROJECT</S.PageTitle>
                    <S.TopBtnRow>
                        <span style={{ color: theme.GRAYSCALE[10], fontSize: '14px' }}>
                            {project.memberNickname}님의 프로젝트
                        </span>
                    </S.TopBtnRow>
                </S.PageTop>

                <S.Section>
                    <S.SectionLabel>VISION</S.SectionLabel>
                    <S.VisionText>{project.visionTitle || '-'}</S.VisionText>
                </S.Section>

                <S.ProjectCard>
                    <S.ProjectCardInner>
                        <S.ProjectCardMeta>
                            <S.AiRecommendLabel><AiBadge /> AI 추천 프로젝트</S.AiRecommendLabel>
                        </S.ProjectCardMeta>
                        <S.ProjectName>{project.projectTitle}</S.ProjectName>
                        <S.ProjectDateRange>
                            {project.projectStartDate} ~ {project.projectEndDate}
                        </S.ProjectDateRange>
                        <S.ProjectGoal>{project.projectContent}</S.ProjectGoal>
                        <S.ProgressRow>
                            <S.ProgressBar>
                                <S.ProgressFill $percent={progressPercent} />
                            </S.ProgressBar>
                            <S.DDay>{getDDay(project.projectStartDate)}</S.DDay>
                        </S.ProgressRow>
                    </S.ProjectCardInner>
                    <LS.AddProjectBtn onClick={handleCopyClick}>
                        + 내 프로젝트 추가
                    </LS.AddProjectBtn>
                </S.ProjectCard>

                <ProjectDetailAction actions={aiSuggestions} />

                <ProjectDetailChecklist
                    checklist={checklist.map(item => ({
                        id: item.id,
                        title: item.checklistTitle,
                        memo: item.checklistMemo,
                        priority: item.checklistPriority,
                        status: item.checklistCompleted === 'Y' ? 'success'
                            : item.checklistFailed === 'Y' ? 'fail'
                            : null,
                    }))}
                    onToggle={() => {}}
                    onStatusChange={() => {}}
                    showAddModal={showAddModal}
                    setShowAddModal={setShowAddModal}
                    newItem={newItem}
                    setNewItem={setNewItem}
                    onAddItem={() => {}}
                    readOnly={true}
                />

                <ProjectDetailSuggestion
                    suggestion={suggestion}
                    setSuggestion={setSuggestion}
                    suggestions={suggestions}
                    onSubmit={handleSuggestionSubmit}
                    onAddFromSuggestion={handleAddFromSuggestion}
                    isOwner={currentMemberId === project?.memberId}
                />
            </S.Inner>
        </S.PageWrapper>
    );
};

// ─────────────────────────────────────────
// 로그 선택 모달 Styled Components
// ─────────────────────────────────────────
const spin = keyframes`to { transform: rotate(360deg); }`;

const LS = {};

LS.Overlay = styled.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
    ${flexCenter}
`;

LS.ModalWrap = styled.div`
    width: 520px;
    max-height: 75vh;
    overflow-y: auto;
    background: ${theme.PALETTE.white};
    border-radius: 15px;
    padding: 40px;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

LS.CloseBtn = styled.button`
    position: absolute;
    top: 24px; right: 24px;
    font-size: 20px;
    color: ${theme.GRAYSCALE[7]};
    &:disabled { opacity: 0.4; cursor: not-allowed; }
`;

LS.Title = styled.h2`
    ${h4Bold}
    color: ${theme.PALETTE.black};
    margin-bottom: 8px;
`;

LS.Desc = styled.p`
    ${h9Regular}
    color: ${theme.GRAYSCALE[6]};
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${theme.GRAYSCALE[3]};
`;

LS.LogList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
    min-height: 80px;
`;

LS.LogCard = styled.div`
    ${flexBetweenRow}
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid ${({ $active }) => ($active ? theme.PALETTE.third.main : theme.GRAYSCALE[4])};
    background: ${theme.PALETTE.white};
    transition: border-color 0.15s;
    &:hover { border-color: ${theme.PALETTE.third.main}; }
`;

LS.LogCategory = styled.span`
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    ${h11Regular}
    background: ${theme.PALETTE.third.light};
    color: ${theme.PALETTE.third.main};
    margin-bottom: 8px;
`;

LS.LogTitle = styled.p`
    ${h8Regular}
    color: ${theme.GRAYSCALE[9]};
    margin-bottom: 4px;
    strong { ${h8Bold} color: ${theme.PALETTE.black}; }
`;

LS.LogDate = styled.p`
    ${h9Regular}
    color: ${theme.GRAYSCALE[6]};
`;

LS.RadioCircle = styled.div`
    width: 24px; height: 24px;
    border-radius: 50%;
    flex-shrink: 0;
    ${flexCenter}
    border: 1px solid ${({ $active }) => ($active ? theme.PALETTE.third.main : theme.GRAYSCALE[4])};
    background-color: ${({ $active }) => ($active ? theme.PALETTE.third.main : theme.PALETTE.white)};
    transition: all 0.15s;
`;

LS.CheckIcon = styled.img`
    width: 14px; height: 14px;
    filter: brightness(0) invert(1);
`;

LS.EmptyText = styled.p`
    ${h9Regular}
    color: ${theme.GRAYSCALE[6]};
    text-align: center;
    padding: 24px 0;
`;

LS.ErrorText = styled.p`
    ${h9Regular}
    color: #ef4444;
    text-align: center;
    margin-bottom: 12px;
`;

LS.BtnRow = styled.div`
    ${flexStartRow}
    gap: 12px;
`;

LS.CancelBtn = styled.button`
    height: 52px;
    padding: 0 24px;
    border-radius: 10px;
    border: 1px solid ${theme.GRAYSCALE[4]};
    background: ${theme.PALETTE.white};
    color: ${theme.GRAYSCALE[9]};
    ${h8Bold}
    cursor: pointer;
    &:hover:not(:disabled) { background: ${theme.GRAYSCALE[1]}; }
    &:disabled { opacity: 0.4; cursor: not-allowed; }
`;

LS.ConfirmBtn = styled.button`
    flex: 1;
    height: 52px;
    border-radius: 10px;
    background: ${({ disabled }) => (disabled ? theme.GRAYSCALE[4] : theme.PALETTE.third.main)};
    color: ${theme.PALETTE.white};
    ${h8Bold}
    ${flexCenter}
    gap: 8px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    transition: background 0.15s;
    &:hover:not(:disabled) { background: #9333ea; }
`;

LS.AddProjectBtn = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    ${flexCenter}
    gap: 6px;
    height: 36px;
    padding: 0 16px;
    border-radius: 10px;
    border: 1.5px solid ${theme.PALETTE.third.main};
    background: ${theme.PALETTE.white};
    color: ${theme.PALETTE.third.main};
    ${h9Bold}
    font-family: 'pretendard', sans-serif;
    transition: all 0.15s;
    white-space: nowrap;
    &:hover {
        background: ${theme.PALETTE.third.main};
        color: ${theme.PALETTE.white};
    }
`;

export default ProjectPublicDetailContainer;
