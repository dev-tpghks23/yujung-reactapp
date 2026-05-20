import { useState } from 'react';
import ProjectCreateModal from '../create/ProjectCreateModal';
import ProjectCreateStep1Modal from '../create/ProjectCreateStep1Modal';
import ProjectCreateStep2Modal from '../create/ProjectCreateStep2Modal';
import ProjectEditModal from '../edit/ProjectEditModal';
import useProjectStore from '../../../store/projectStore';
import theme from '../../../styles/theme';
import S from './ProjectDetailContainerStyle';

// 컴포넌트 Import
import ProjectDetailAction from './ProjectDetailAction';
import ProjectDetailChecklist from './ProjectDetailChecklist';
import ProjectDetailSuggestion from './ProjectDetailSuggestion';

// ─────────────────────────────────────────
// MOCK DATA
// ─────────────────────────────────────────
const MOCK_CHECKLIST = [
	{ id: 1, title: '운동복과 물을 자기 전에 미리 준비하기', memo: '아침 실행 전 생각할 요소를 줄여 시작 허들을 낮춥니다.', priority: '높음', status: null },
	{ id: 2, title: '갈등 상황에서 24시간 후 결정하기', memo: '즉각 반응 대신 하루 뒤 다시 생각하는 규칙을 만들어 지킵니다.', priority: '중간', status: null },
	{ id: 3, title: '일을 3개 단위로 나눠서 시간 배분하기', memo: '한 번에 끝마치는 습관을 줄이고 실수를 예방합니다.', priority: '낮음', status: null },
];

const MOCK_ACTIONS = [
	{ id: 1, title: '실패 분석 보기', desc: '밤이 되기 전 준비한 행동을 가장 먼저 체크하세요.' },
	{ id: 2, title: '실내 대체 계획 추가', desc: '날씨 변수를 위한 실내 계획을 추가해보세요.' },
	{ id: 3, title: '주말 기준 완화', desc: '잠들기 전 완료로 기준을 넓히는 게 좋아요.' },
	{ id: 4, title: '최초 4개 추천이 뜨는걸로 해야 될것 같지 않겠는지', desc: '날씨 변수를 위한 실내 계획을 추가해보세요.' },
];

const PROFILE_IMG = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAcABwDASIAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAABAcIAwUG/8QAKxAAAgEDAgUDBAMBAAAAAAAAAQIDBAURBiEABxITMUFRYRQiMnEVM2KR/8QAFgEBAQEAAAAAAAAAAAAAAAAABAUD/8QAIhEAAQQCAQQDAAAAAAAAAAAAAQIDBBEAIRMSIkGBMWFx/9oADAMBAAIRAxEAPwCbuXGj4LmUr7qjNAys0MIOO50kDJ+Mnx649vPd09krrnforfp/Tsz06soMy07x0ysV2BdEIXqBBBbAIIIJDAncaTof4u+0UddbXmoqKIrLGHCt2lSPBGPXIJwSAcbkZ4fNkrLZUW2MWieOWkp4gkcUK/1IB9q9AHUuANlIz8cS1SVoc6x6zSJCRPClLPaMki9aeir3NPLaZKapeNHhkETRmRWJ6ZVyB3I2w2GGxxt44W1ypJaGtlpZcFkOOpTkMPQg+x4tHnVa6K76dp4HZBcVl66NHGHdSMOpH5dGME/6VB7Ape5aAt9RJG81LPUN29mhZY1AyTjBU5xnzt+hw1qUHU2rRwclAgP8d2mrGMXlTeaLWXLhVjgeashi+nq4g25mx+WP9YBydh+gcCXWOpSaegk0tSCrKRdueOdwq7A9X2y4Ulds4O+dlKuwmnTGobvpq6JcbPVmnnXyCoZHHsynYj9+PI34pzlrc59YWOS93pVkqpx3JAHcqzfIZj1ePXP/ADiNLYEZRWTYOV2JSmmCy0Sm/mvw68aPnDdJ6frY6+OCvlECRSyKYyqu0gIbLrIjfdliFwc/159iUxzg14y63qaTTNVGaCkUQGVRlZZASWYfAJ6fY9ORseM3OrmJqeW+VtkirPpoCCsskRfuSgkkgsWOAT56cZzvwouHRWeQh5R1VAYWRxrWVBNbPr6F3rP/2Q==';

const MOCK_SUGGESTIONS = [
	{ id: 1, user: '마인드컨트롤러', avatar: PROFILE_IMG, text: '아침 루틴에 \'잔을 세수하기\'를 추가해보세요. 잘 해는 대 최고입니다!' },
	{ id: 2, user: '마인드컨트롤러', avatar: PROFILE_IMG, text: '아침 루틴에 \'잔을 세수하기\'를 추가해보세요. 잘 해는 대 최고입니다!' },
	{ id: 3, user: '마인드컨트롤러', avatar: PROFILE_IMG, text: '아침 루틴에 \'잔을 세수하기\'를 추가해보세요. 잘 해는 대 최고입니다!' },
];

// ─────────────────────────────────────────
// SUB COMPONENTS (컨테이너 전용)
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
	const { projects, addProject, updateProject, deleteProject } = useProjectStore();
	const [step, setStep] = useState(null);
	const [projectData, setProjectData] = useState({});
	const [editingProject, setEditingProject] = useState(null);
	const [checklist, setChecklist] = useState(MOCK_CHECKLIST);
	const [suggestion, setSuggestion] = useState('');
	const [suggestions, setSuggestions] = useState(MOCK_SUGGESTIONS);
	const [addedToMyProject, setAddedToMyProject] = useState(false);
	const [showAddedPopup, setShowAddedPopup] = useState(false);
	const [showAddModal, setShowAddModal] = useState(false);
	const [newItem, setNewItem] = useState({ title: '', memo: '', priority: null });

	const handleOpenAddModalFromSuggestion = (text) => {
		setNewItem({ title: text, memo: '', priority: null });
		setShowAddModal(true);
	};

	const activeProject = projects.find((p) => p.isActive) || projects[0];

	const handleStep1Next = (data) => { setProjectData(data); setStep('step2'); };
	const handleCreate = (data) => { addProject({ ...projectData, ...data }); setStep(null); setProjectData({}); };

	const handleEditOpen = () => {
		if (activeProject) { setEditingProject(activeProject); setStep('edit'); }
	};
	const handleUpdate = (data) => {
		if (editingProject) {
			updateProject(editingProject.id, { name: data.projectName, startDate: data.startDate, endDate: data.endDate, isActive: data.isActive });
		}
		setStep(null); setEditingProject(null);
	};
	const handleClose = () => { setStep(null); setEditingProject(null); setProjectData({}); };

	const handleCheckToggle = (id, action) => {
		setChecklist(prev => prev.filter(item => action === 'delete' ? item.id !== id : true));
	};
	const handleStatusChange = (id, status) => {
		setChecklist(prev => prev.map(item => item.id === id ? { ...item, status } : item));
	};

	const handleAddItem = () => {
		if (!newItem.title.trim()) return;
		setChecklist(prev => [...prev, {
			id: Date.now(),
			title: newItem.title,
			memo: newItem.memo,
			priority: newItem.priority || '낮음',
			status: null,
		}]);
		setNewItem({ title: '', memo: '', priority: null });
		setShowAddModal(false);
	};

	const handleSuggestionSubmit = () => {
		if (!suggestion.trim()) return;
		setSuggestions(prev => [...prev, {
			id: Date.now(),
			user: '마인드컨트롤러',
			avatar: PROFILE_IMG,
			text: suggestion,
		}]);
		setSuggestion('');
	};

	const handleAddToMyProject = () => {
		setShowAddedPopup(true);
		setAddedToMyProject(true);
	};

	const getDDay = (startDate) => {
		if (!startDate) return 'D-Day';
		const start = new Date(startDate);
		const today = new Date();
		const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
		return diff >= 0 ? `D+${diff}` : `D${diff}`;
	};

	const progressPercent = 68;

	return (
		<S.PageWrapper>
			{/* MODALS */}
			{step === 'select' && <ProjectCreateModal onClose={handleClose} onNext={() => setStep('step1')} />}
			{step === 'step1' && <ProjectCreateStep1Modal onClose={handleClose} onNext={handleStep1Next} />}
			{step === 'step2' && <ProjectCreateStep2Modal onClose={handleClose} onSubmit={handleCreate} projectName={projectData.projectName} isActive={projectData.isActive} />}
			{step === 'edit' && (
				<ProjectEditModal
					onClose={handleClose}
					onSubmit={handleUpdate}
					initialData={editingProject ? {
						projectName: editingProject.name,
						startDate: editingProject.startDate,
						endDate: editingProject.endDate,
						isActive: editingProject.isActive,
					} : {}}
				/>
			)}

			{/* 내 프로젝트 추가 팝업 */}
			{showAddedPopup && (
				<S.AddedPopupOverlay>
					<S.AddedPopup>
						<S.AddedPopupText>내 프로젝트에<br />추가되었습니다.</S.AddedPopupText>
						<S.AddedPopupBtn onClick={() => setShowAddedPopup(false)}>확인</S.AddedPopupBtn>
					</S.AddedPopup>
				</S.AddedPopupOverlay>
			)}

			<S.Inner>
				{/* ── PAGE TITLE ── */}
				<S.PageTop>
					<S.PageTitle>PROJECT</S.PageTitle>
					<S.TopBtnRow>
						{activeProject ? (
							<S.OutlineBtn $danger onClick={() => activeProject && deleteProject?.(activeProject.id)}>
								프로젝트 삭제
							</S.OutlineBtn>
						) : (
							<S.OutlineBtn onClick={handleAddToMyProject}>내 프로젝트 추가</S.OutlineBtn>
						)}
					</S.TopBtnRow>
				</S.PageTop>

				{/* ── VISION ── */}
				<S.Section>
					<S.SectionLabel>VISION</S.SectionLabel>
					<S.VisionText>{activeProject?.vision || '꾸준히 운동해서 미래에도 건강한 몸 유지하기'}</S.VisionText>
				</S.Section>

				{/* ── AI 추천 프로젝트 CARD ── */}
				<S.ProjectCard>
					<S.ProjectCardInner>
						<S.ProjectCardMeta>
							<S.AiRecommendLabel><AiBadge /> AI 추천 프로젝트</S.AiRecommendLabel>
						</S.ProjectCardMeta>
						<S.ProjectName>{activeProject?.name || '20일 아침루틴 만들기'}</S.ProjectName>
						<S.ProjectDateRange>
							{activeProject?.startDate || '2026.03.01'} ~ {activeProject?.endDate || '2027.03.14'}
						</S.ProjectDateRange>
						<S.ProjectGoal>{activeProject?.goal || '목표를 위해 달린다'}</S.ProjectGoal>
						<S.ProgressRow>
							<S.ProgressBar>
								<S.ProgressFill $percent={progressPercent} />
							</S.ProgressBar>
							<S.DDay>{getDDay(activeProject?.startDate)}</S.DDay>
						</S.ProgressRow>
					</S.ProjectCardInner>
					<S.ProjectEditBtn onClick={handleEditOpen}>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M11.333 2a1.886 1.886 0 0 1 2.667 2.667L4.667 14H2v-2.667L11.333 2Z" stroke={theme.GRAYSCALE[7]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</S.ProjectEditBtn>
				</S.ProjectCard>

				{/* ── 행동 추천 ── */}
				<ProjectDetailAction actions={MOCK_ACTIONS} />

				{/* ── Checklist ── */}
				<ProjectDetailChecklist
					checklist={checklist}
					onToggle={handleCheckToggle}
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
					onSubmit={handleSuggestionSubmit}
					onAddFromSuggestion={handleOpenAddModalFromSuggestion}
				/>
			</S.Inner>
		</S.PageWrapper>
	);
};

export default ProjectDetailContainer;