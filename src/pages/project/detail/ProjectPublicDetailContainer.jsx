import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../api/axiosInstance';
import theme from '../../../styles/theme';
import S from './ProjectDetailContainerStyle';

// 컴포넌트 Import
import ProjectDetailAction from './ProjectDetailAction';
import ProjectDetailChecklist from './ProjectDetailChecklist';
import ShareIcon from '../project_icon/icon-park-outline_share.svg';

// AI 뱃지 컴포넌트
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
// MAIN COMPONENT (읽기 전용 - 다른 사람 프로젝트 상세)
// ─────────────────────────────────────────
const ProjectPublicDetailContainer = () => {
    const { id: projectId } = useParams();

    const [project, setProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [aiSuggestions, setAiSuggestions] = useState([]);
    const [checklist, setChecklist] = useState([]);

    // ── 다른 사람 프로젝트 상세 조회 ──
    const fetchProject = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`/api/project/public/${projectId}`);
            setProject(response.data.data);
            setAiSuggestions(response.data.data?.aiSuggestions || []);

            // 체크리스트 목록도 함께 조회
            const checklistResponse = await axios.get(`/api/checklist/list/${projectId}`);
            setChecklist(checklistResponse.data.data || []);
        } catch (err) {
            setError('프로젝트를 불러오는데 실패했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    // ── 내 프로젝트로 복사 ──
    const handleCopy = async () => {
        if (!window.confirm('이 프로젝트를 내 프로젝트로 추가하시겠습니까?')) return;
        try {
            await axios.post(`/api/project/copy/${projectId}`);
            alert('내 프로젝트에 추가되었습니다!');
        } catch (err) {
            alert('프로젝트 추가에 실패했습니다.');
        }
    };

    useEffect(() => {
        if (projectId) fetchProject();
    }, [projectId]);

    // ── D+day 계산 ──
    const getDDay = (startDate) => {
        if (!startDate) return 'D-Day';
        const start = new Date(startDate);
        const today = new Date();
        const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
        return diff >= 0 ? `D+${diff}` : `D${diff}`;
    };

    // ── 진행률 계산 (시작일~종료일 기준) ──
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

    // ── 로딩 / 에러 처리 ──
    if (isLoading) return <S.PageWrapper><S.Inner><p>불러오는 중...</p></S.Inner></S.PageWrapper>;
    if (error)     return <S.PageWrapper><S.Inner><p>{error}</p></S.Inner></S.PageWrapper>;
    if (!project)  return null;

    const progressPercent = getProgressPercent(project.projectStartDate, project.projectEndDate);

    return (
        <S.PageWrapper>
            <S.Inner>
                {/* ── PAGE TITLE ── */}
                <S.PageTop>
                    <S.PageTitle>PROJECT</S.PageTitle>
                    <S.TopBtnRow>
                        {/* 작성자 닉네임 표시 */}
                        <span style={{ color: theme.GRAYSCALE[10], fontSize: '14px' }}>
                            {project.memberNickname}님의 프로젝트
                        </span>
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
                            <S.DDay>{project.progressDay || getDDay(project.projectStartDate)}</S.DDay>
                        </S.ProgressRow>
                    </S.ProjectCardInner>

                    {/* 내 프로젝트 추가 버튼 - 수정 버튼과 같은 위치 */}
                    <S.ProjectEditBtn onClick={handleCopy} title="내 프로젝트에 추가">
                        <img src={ShareIcon} alt="내 프로젝트 추가" width="16" height="16" />
                    </S.ProjectEditBtn>
                </S.ProjectCard>

                {/* ── 행동 추천 (읽기 전용) ── */}
                <ProjectDetailAction actions={aiSuggestions} />

                {/* ── 체크리스트 (읽기 전용) ── */}
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
                    // 읽기 전용 - 수정/삭제/추가 기능 비활성화
                    onToggle={() => {}}
                    onStatusChange={() => {}}
                    showAddModal={false}
                    setShowAddModal={() => {}}
                    newItem={{ title: '', memo: '', priority: null }}
                    setNewItem={() => {}}
                    onAddItem={() => {}}
                    readOnly={true}
                />
            </S.Inner>
        </S.PageWrapper>
    );
};

export default ProjectPublicDetailContainer;