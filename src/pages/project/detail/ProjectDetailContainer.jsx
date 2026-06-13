import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../../api/axiosInstance';
import ProjectEditModal from '../edit/ProjectEditModal';
import theme from '../../../styles/theme';
import S from './ProjectDetailContainerStyle';

// 컴포넌트 Import
import ProjectDetailAction from './ProjectDetailAction';
import ProjectDetailChecklist from './ProjectDetailChecklist';
import ProjectDetailSuggestion from './ProjectDetailSuggestion';

// ─────────────────────────────────────────
// SUB COMPONENTS
// ─────────────────────────────────────────
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
// MAIN COMPONENT
// ─────────────────────────────────────────
const ProjectDetailContainer = () => {
    const { id: projectId } = useParams();
    const navigate = useNavigate();

    const [project, setProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [aiSuggestions, setAiSuggestions] = useState([]);
    const [checklist, setChecklist] = useState([]);
    const [suggestions, setSuggestions] = useState([]);  // 추가

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [suggestion, setSuggestion] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [newItem, setNewItem] = useState({ title: '', memo: '', priority: null });
    const [recommendedSuggestions, setRecommendedSuggestions] = useState([]);

    // ── 프로젝트 상세 조회 + 체크리스트 + 제안 목록 조회 ──
    const fetchProject = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`/api/project/${projectId}`);
            setProject(response.data.data);
            setAiSuggestions(response.data.data?.aiSuggestions || []);

            // 체크리스트 목록 조회
            const checklistResponse = await axios.get(`/api/checklist/list/${projectId}`);
            setChecklist(checklistResponse.data.data || []);

            // 내 프로젝트에 달린 제안 목록 조회
            const suggestionResponse = await axios.get(`/api/suggestion/list/${projectId}`);
            const realSuggestions = suggestionResponse.data.data || [];
            setSuggestions(realSuggestions);

            // 실제 제안이 없을 때만 AI 추천 제안 조회
            if (realSuggestions.length === 0) {
                try {
                    const recommendResponse = await axios.get(`/api/suggestion/recommend/${projectId}`);
                    setRecommendedSuggestions(recommendResponse.data.data || []);
                } catch {
                    setRecommendedSuggestions([]);
                }
            } else {
                setRecommendedSuggestions([]);
            }

        } catch (err) {
            setError('프로젝트를 불러오는데 실패했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (projectId) fetchProject();
    }, [projectId]);

    // ── 프로젝트 삭제 ──
    const handleDelete = async () => {
        if (!window.confirm('프로젝트를 삭제하시겠습니까?')) return;
        try {
            await axios.delete(`/api/project/${projectId}`);
            navigate('/projects');
        } catch (err) {
            alert('프로젝트 삭제에 실패했습니다.');
        }
    };

    // ── 프로젝트 수정 완료 ──
    const handleUpdate = async (data) => {
        try {
            await axios.put(`/api/project/${projectId}`, data);
            await fetchProject();
            setIsEditOpen(false);
        } catch (err) {
            alert('프로젝트 수정에 실패했습니다.');
        }
    };

    // ── 체크리스트 추가 ──
    const handleAddItem = async () => {
        if (!newItem.title.trim()) return;
        try {
            await axios.post('/api/checklist/create', {
                projectId: Number(projectId),
                checklistTitle: newItem.title,
                checklistMemo: newItem.memo,
                checklistPriority: newItem.priority || '낮음',
            });
            setNewItem({ title: '', memo: '', priority: null });
            setShowAddModal(false);
            const response = await axios.get(`/api/checklist/list/${projectId}`);
            setChecklist(response.data.data || []);
        } catch (err) {
            alert('체크리스트 추가에 실패했습니다.');
        }
    };

    // ── 체크리스트 상태 변경 (목표 달성 / 목표 실패) ──
    const handleStatusChange = async (id, status) => {
        const item = checklist.find(c => c.id === id);
        if (!item) return;
        try {
            await axios.put('/api/checklist/update', {
                id,
                checklistTitle: item.checklistTitle,
                checklistMemo: item.checklistMemo,
                checklistPriority: item.checklistPriority,
                checklistCompleted: status === 'success' ? 'Y' : 'N',
                checklistFailed: status === 'fail' ? 'Y' : 'N',
            });
            const response = await axios.get(`/api/checklist/list/${projectId}`);
            setChecklist(response.data.data || []);
        } catch (err) {
            alert('상태 변경에 실패했습니다.');
        }
    };

    // ── 체크리스트 수정, 삭제 ──
    const handleToggle = async (id, action, updatedMemo, updatedTitle) => {
        if (action === 'delete') {
            try {
                await axios.delete(`/api/checklist/${id}`);
                const response = await axios.get(`/api/checklist/list/${projectId}`);
                setChecklist(response.data.data || []);
            } catch (err) {
                alert('삭제에 실패했습니다.');
            }
        } else if (action === 'edit') {
            const item = checklist.find(c => c.id === id);
            if (!item) return;
            try {
                await axios.put('/api/checklist/update', {
                    id,
                    checklistTitle: updatedTitle || item.checklistTitle,
                    checklistMemo: updatedMemo,
                    checklistPriority: item.checklistPriority,
                    checklistCompleted: item.checklistCompleted,
                    checklistFailed: item.checklistFailed,
                });
                const response = await axios.get(`/api/checklist/list/${projectId}`);
                setChecklist(response.data.data || []);
            } catch (err) {
                alert('수정에 실패했습니다.');
            }
        }
    };

    // ── D- (종료일까지 남은 날) ──
    const getDDay = (endDate) => {
        if (!endDate) return 'D-0';
        const end = new Date(endDate);
        end.setHours(0, 0, 0, 0);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const diff = Math.round((end - today) / (1000 * 60 * 60 * 24));
        if (diff > 0) return `D-${diff}`;
        if (diff === 0) return 'D-0';
        return `D-${Math.abs(diff)}`;
    };

    // ── 달성률 계산 (체크리스트 완료 비율) ──
    const getChecklistPercent = (items) => {
        if (!items || items.length === 0) return 0;
        const completed = items.filter(i => i.checklistCompleted === 'Y').length;
        return Math.round((completed / items.length) * 100);
    };

    // ── 체크리스트 추가 모달 (Suggestion에서 열기) ──
    const handleOpenAddModalFromSuggestion = (text) => {
        setNewItem({ title: text, memo: '', priority: null });
        setShowAddModal(true);
    };

    // ── 로딩 / 에러 처리 ──
    if (isLoading) return <S.PageWrapper><S.Inner><p>불러오는 중...</p></S.Inner></S.PageWrapper>;
    if (error)     return <S.PageWrapper><S.Inner><p>{error}</p></S.Inner></S.PageWrapper>;
    if (!project)  return null;

    const checklistPercent = getChecklistPercent(checklist);
    const completedCount   = checklist.filter(i => i.checklistCompleted === 'Y').length;

    // ── 마일스톤 바 ──
    const MILESTONES = [
        { pct: 0,   main: '시작',   sub: '0%' },
        { pct: 25,  main: '달성',   sub: '25%' },
        { pct: 50,  main: '절반',   sub: '50%' },
        { pct: 75,  main: '후반부', sub: '75%' },
        { pct: 100, main: '완료',   sub: '100%', trophy: true },
    ];
    const onFixed = MILESTONES.some(m => m.pct === checklistPercent);

    const MilestoneBar = () => (
        <S.MilestoneWrap>
            <S.MilestoneTrackLine>
                <S.MilestoneFill $percent={checklistPercent} />

                {MILESTONES.map(m => {
                    const done    = m.pct < checklistPercent;
                    const current = m.pct === checklistPercent;
                    const active  = done || current;
                    return (
                        <S.MilestoneNode key={m.pct} $left={m.pct}>
                            <S.MilestoneCircle $done={done} $current={current}>
                                {done ? (
                                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                                        <path d="M1 5.5L5.5 10L13 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                ) : m.trophy ? (
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                        <path d="M8 21h8M12 17v4M5 3H3v5c0 2.2 1.8 4 4 4M19 3h2v5c0 2.2-1.8 4-4 4M12 17c-3.3 0-6-2.7-6-6V3h12v8c0 3.3-2.7 6-6 6z"
                                            stroke={current ? theme.PALETTE.third.main : theme.GRAYSCALE[5]}
                                            strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                ) : (
                                    <span>{m.pct}%</span>
                                )}
                            </S.MilestoneCircle>
                            <S.MilestoneNodeLabel>
                                <S.MilestoneLabelMain $active={active}>
                                    {current && !m.trophy ? '진행 중' : m.main}
                                </S.MilestoneLabelMain>
                                <S.MilestoneLabelSub $active={active}>
                                    {current && !m.trophy ? '' : m.sub}
                                </S.MilestoneLabelSub>
                            </S.MilestoneNodeLabel>
                        </S.MilestoneNode>
                    );
                })}

                {/* 고정 마일스톤이 아닐 때만 표시되는 현재 위치 */}
                {!onFixed && checklistPercent > 0 && checklistPercent < 100 && (
                    <S.MilestoneNode $left={checklistPercent} $zIndex={10}>
                        <S.MilestoneCircle $current>
                            <span>{checklistPercent}%</span>
                        </S.MilestoneCircle>
                        <S.MilestoneNodeLabel>
                            <S.MilestoneLabelMain $active>진행 중</S.MilestoneLabelMain>
                            <S.MilestoneLabelSub $active> </S.MilestoneLabelSub>
                        </S.MilestoneNodeLabel>
                    </S.MilestoneNode>
                )}
            </S.MilestoneTrackLine>
        </S.MilestoneWrap>
    );

    return (
        <S.PageWrapper>
            {/* 수정 모달 */}
            {isEditOpen && (
                <ProjectEditModal
                    onClose={() => setIsEditOpen(false)}
                    onSubmit={handleUpdate}
                    initialData={{
                        projectTitle:     project.projectTitle,
                        projectContent:   project.projectContent,
                        projectStartDate: project.projectStartDate,
                        projectEndDate:   project.projectEndDate,
                    }}
                />
            )}

            <S.Inner>
                {/* ── PAGE TITLE ── */}
                <S.PageTop>
                    <S.PageTitle>PROJECT</S.PageTitle>
                    <S.TopBtnRow>
                        <S.OutlineBtn onClick={() => navigate('/projects')}>
                            목록으로
                        </S.OutlineBtn>
                        <S.OutlineBtn $danger onClick={handleDelete}>
                            프로젝트 삭제
                        </S.OutlineBtn>
                    </S.TopBtnRow>
                </S.PageTop>

                {/* ── VISION ── */}
                <S.Section>
                    <S.SectionLabel>VISION</S.SectionLabel>
                    <S.VisionText>{project.visionTitle || '-'}</S.VisionText>
                </S.Section>

                {/* ── AI 추천 프로젝트 CARD ── */}
                <S.ProjectCard>
                    <S.ProjectCardInner>
                        <S.ProjectCardMeta>
                            <S.ProjectTypeBadge>AI 추천 프로젝트</S.ProjectTypeBadge>
                        </S.ProjectCardMeta>
                        <S.ProjectName>{project.projectTitle}</S.ProjectName>
                        <S.ProjectDateRange>
                            {project.projectStartDate} ~ {project.projectEndDate}
                        </S.ProjectDateRange>
                        <S.AchievementRow>
                            <S.AchievementText>
                                달성률 <S.AchievementHighlight>{checklistPercent}%</S.AchievementHighlight>
                                {' · '}체크리스트 <S.AchievementHighlight>{completedCount} / {checklist.length}</S.AchievementHighlight>
                            </S.AchievementText>
                            <S.DDay>{getDDay(project.projectEndDate)}</S.DDay>
                        </S.AchievementRow>
                        <MilestoneBar />
                    </S.ProjectCardInner>
                    <S.ProjectEditBtn onClick={() => setIsEditOpen(true)}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M11.333 2a1.886 1.886 0 0 1 2.667 2.667L4.667 14H2v-2.667L11.333 2Z"
                                stroke={theme.GRAYSCALE[7]} strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </S.ProjectEditBtn>
                </S.ProjectCard>

                {/* ── 행동 추천 ── */}
                <ProjectDetailAction actions={aiSuggestions} />

                {/* ── Checklist ── */}
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
                    onToggle={handleToggle}
                    onStatusChange={handleStatusChange}
                    showAddModal={showAddModal}
                    setShowAddModal={setShowAddModal}
                    newItem={newItem}
                    setNewItem={setNewItem}
                    onAddItem={handleAddItem}
                />

                {/* ── Suggestion ── */}
                <ProjectDetailSuggestion
                    suggestion={suggestion}
                    setSuggestion={setSuggestion}
                    suggestions={suggestions}
                    recommendedSuggestions={recommendedSuggestions}
                    onSubmit={() => {}}
                    onAddFromSuggestion={handleOpenAddModalFromSuggestion}
                    isOwner={true}
                />
            </S.Inner>
        </S.PageWrapper>
    );
};

export default ProjectDetailContainer;