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
            setSuggestions(suggestionResponse.data.data || []);

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

    // ── D+day 계산 ──
    const getDDay = (endDate) => {
        if (!endDate) return 'D-Day';
        const end = new Date(endDate);
        end.setHours(0, 0, 0, 0);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const diff = Math.round((end - today) / (1000 * 60 * 60 * 24));
        
        if (diff === 0) return 'D-Day';
        return diff > 0 ? `D-${diff}` : `D+${Math.abs(diff)}`;
    };

    // ── 진행률 계산 (시작일~종료일 기준) ──
    const getProgressPercent = (startDate, endDate) => {
        if (!startDate || !endDate) return 0;
        const start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
        const end = new Date(endDate);
        end.setHours(0, 0, 0, 0);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const total = end - start;
        const elapsed = today - start;
        if (total <= 0) return 100;
        return Math.min(100, Math.max(0, Math.round((elapsed / total) * 100)));
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

    const progressPercent = getProgressPercent(project.projectStartDate, project.projectEndDate);

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
                            <S.DDay>{getDDay(project.projectEndDate)}</S.DDay>
                        </S.ProgressRow>
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
                    onSubmit={() => {}}
                    onAddFromSuggestion={handleOpenAddModalFromSuggestion}
                    isOwner={true}
                />
            </S.Inner>
        </S.PageWrapper>
    );
};

export default ProjectDetailContainer;