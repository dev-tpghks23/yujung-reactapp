import { useState } from 'react';
import styled from 'styled-components';
import ProjectCreateModal from '../create/ProjectCreateModal';
import ProjectCreateStep1Modal from '../create/ProjectCreateStep1Modal';
import ProjectCreateStep2Modal from '../create/ProjectCreateStep2Modal';
import ProjectEditModal from '../edit/ProjectEditModal';
import useProjectStore from '../../../store/projectStore';
import GeminiIcon from '../project_icon/material-icon-theme_gemini-ai.svg';
import {
	flexBetweenRow,
	flexStartRow,
	flexCenterRow,
	flexCenter,
	h2Bold,
	h3Bold,
	h3_2Bold,
	h4Bold,
	h5Regular,
	h5Bold,
	h6Bold,
	h7Bold,
	h7Regular,
	h8Bold,
	h8Regular,
	h9Bold,
	h9Regular,
	h10Bold,
} from '../../../styles/common';
import theme from '../../../styles/theme';

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
// PRIORITY CONFIG
// ─────────────────────────────────────────
const PRIORITY_CONFIG = {
	높음: { label: '우선순위 높음', bg: theme.PALETTE.fourth.light, color: theme.PALETTE.fourth.main },
	중간: { label: '우선순위 중간', bg: theme.PALETTE.primary.light, color: theme.PALETTE.primary.main },
	낮음: { label: '우선순위 낮음', bg: theme.PALETTE.secondary.light, color: theme.PALETTE.secondary.main },
};

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

const ChecklistItem = ({ item, onToggle, onStatusChange }) => {
	const [expanded, setExpanded] = useState(false);
	const [memo, setMemo] = useState(item.memo || '');
	const priorityConf = PRIORITY_CONFIG[item.priority] || PRIORITY_CONFIG['낮음'];

	return (
		<S.CheckItem $status={item.status}>
			<S.CheckItemTop onClick={() => setExpanded(prev => !prev)}>
				<S.CheckLeft>
					<S.CheckCircle $status={item.status} onClick={(e) => { e.stopPropagation(); }}>
						{item.status === 'success' && (
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
								<path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						)}
						{item.status === 'fail' && (
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
								<path d="M4 4L10 10M10 4L4 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
							</svg>
						)}
					</S.CheckCircle>
					<S.CheckTitle $status={item.status}>{item.title}</S.CheckTitle>
				</S.CheckLeft>
				<S.CheckRight>
					<S.PriorityBadge $bg={priorityConf.bg} $color={priorityConf.color}>
						{priorityConf.label}
					</S.PriorityBadge>
					<S.ChevronIcon $expanded={expanded}>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
							<path d="M3 5L7 9L11 5" stroke={theme.PALETTE.black} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</S.ChevronIcon>
				</S.CheckRight>
			</S.CheckItemTop>

			{expanded && (
				<S.CheckExpanded>
					<S.MemoLabel>한 줄 메모</S.MemoLabel>
					<S.MemoInput
						value={memo}
						onChange={(e) => setMemo(e.target.value)}
						placeholder="아직 작성되지 않았습니다."
					/>
					<S.CheckActions>
						<S.CheckActionsLeft>
							<S.SmallBtn onClick={() => onToggle(item.id, 'delete')}>삭제</S.SmallBtn>
							<S.SmallBtn onClick={() => onToggle(item.id, 'edit')}>수정</S.SmallBtn>
						</S.CheckActionsLeft>
						<S.CheckActionsRight>
							<S.StatusBtn $active={item.status === 'success'} $type="success" onClick={() => onStatusChange(item.id, item.status === 'success' ? null : 'success')}>
								목표 달성
							</S.StatusBtn>
							<S.StatusBtn $active={item.status === 'fail'} $type="fail" onClick={() => onStatusChange(item.id, item.status === 'fail' ? null : 'fail')}>
								목표 실패
							</S.StatusBtn>
						</S.CheckActionsRight>
					</S.CheckActions>
				</S.CheckExpanded>
			)}
		</S.CheckItem>
	);
};

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

	// 프로젝트 생성 플로우
	const handleStep1Next = (data) => { setProjectData(data); setStep('step2'); };
	const handleCreate = (data) => { addProject({ ...projectData, ...data }); setStep(null); setProjectData({}); };

	// 프로젝트 편집
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

	// 체크리스트
	const handleCheckToggle = (id, action) => {
		setChecklist(prev => prev.filter(item => action === 'delete' ? item.id !== id : true));
	};
	const handleStatusChange = (id, status) => {
		setChecklist(prev => prev.map(item => item.id === id ? { ...item, status } : item));
	};

	// 새 항목 추가
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

	// 제안 남기기
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

	// 내 프로젝트 추가 팝업
	const handleAddToMyProject = () => {
		setShowAddedPopup(true);
		setAddedToMyProject(true);
	};

	// D-Day 계산
	const getDDay = (startDate) => {
		if (!startDate) return 'D-Day';
		const start = new Date(startDate);
		const today = new Date();
		const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
		return diff >= 0 ? `D+${diff}` : `D${diff}`;
	};

	// 프로젝트 진행률 (mock)
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
				<S.Section $mt="60px">
					<S.SectionTitleRow>
						<S.SectionTitle>행동 추천 <AiBadge /></S.SectionTitle>
					</S.SectionTitleRow>
					<S.ActionGrid>
						{MOCK_ACTIONS.map((action) => (
							<S.ActionCard key={action.id}>
								<S.ActionDot />
								<S.ActionContent>
									<S.ActionTitle>{action.title}</S.ActionTitle>
									<S.ActionDesc>{action.desc}</S.ActionDesc>
								</S.ActionContent>
							</S.ActionCard>
						))}
					</S.ActionGrid>
				</S.Section>

				{/* ── Checklist ── */}
				<S.Section $mt="60px">
					<S.SectionTitle>Checklist</S.SectionTitle>
					<S.ChecklistSubtitle>AI가 만든 '액션'을 그대로 사용하거나, 내 계획으로 설정할 수 있습니다.</S.ChecklistSubtitle>
					<S.ChecklistList>
						{checklist.map((item) => (
							<ChecklistItem
								key={item.id}
								item={item}
								onToggle={handleCheckToggle}
								onStatusChange={handleStatusChange}
							/>
						))}
					</S.ChecklistList>
					<S.AddItemBtn onClick={() => setShowAddModal(true)}>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
							<path d="M7 1V13M1 7H13" stroke={theme.GRAYSCALE[7]} strokeWidth="1.5" strokeLinecap="round" />
						</svg>
						새 항목 추가
					</S.AddItemBtn>

					{/* ── 새 항목 추가 모달 ── */}
					{showAddModal && (
						<S.ModalOverlay onClick={() => setShowAddModal(false)}>
							<S.AddModal onClick={(e) => e.stopPropagation()}>
								<S.AddModalHeader>
									<S.AddModalTitle>새 항목 추가</S.AddModalTitle>
									<S.AddModalClose onClick={() => setShowAddModal(false)}>✕</S.AddModalClose>
								</S.AddModalHeader>

								<S.AddModalField>
									<S.AddModalLabel>항목 이름</S.AddModalLabel>
									<S.AddModalInput
										placeholder="예) 자기 전 30분 독서하기"
										value={newItem.title}
										onChange={(e) => setNewItem(prev => ({ ...prev, title: e.target.value }))}
									/>
								</S.AddModalField>

								<S.AddModalField>
									<S.AddModalLabel>한 줄 메모</S.AddModalLabel>
									<S.AddModalTextarea
										placeholder="아직 작성되지 않았습니다."
										value={newItem.memo}
										onChange={(e) => setNewItem(prev => ({ ...prev, memo: e.target.value }))}
									/>
								</S.AddModalField>

								<S.AddModalBottom>
									<S.AddModalPriorityRow>
										<S.AddModalPriorityBtns>
											{['높음', '중간', '낮음'].map((p) => (
												<S.PrioritySelectBtn
													key={p}
													$selected={newItem.priority === p}
													$priority={p}
													onClick={() => setNewItem(prev => ({ ...prev, priority: p }))}
												>
													우선순위 {p}
												</S.PrioritySelectBtn>
											))}
										</S.AddModalPriorityBtns>
									</S.AddModalPriorityRow>
									<S.AddModalSubmitBtn onClick={handleAddItem}>추가하기</S.AddModalSubmitBtn>
								</S.AddModalBottom>
							</S.AddModal>
						</S.ModalOverlay>
					)}
				</S.Section>

				{/* ── Suggestion ── */}
				<S.Section $mt="60px">
					<S.SectionTitle>Suggestion</S.SectionTitle>
					<S.SuggestionBox>
						<S.SuggestionLeft>
							<S.SuggestionHeader>
								<S.SuggestionIcon>
									<img src={GeminiIcon} alt="gemini icon" width={28} height={28} />
								</S.SuggestionIcon>
								<S.SuggestionPrompt>당신의 체크리스트를 공유해주세요.</S.SuggestionPrompt>
							</S.SuggestionHeader>
							<S.SuggestionDesc>작은 조언과 피드백이 큰 성장의 밑거름이 됩니다.</S.SuggestionDesc>
							<S.SuggestionInput
								value={suggestion}
								onChange={(e) => setSuggestion(e.target.value)}
								placeholder="제안을 입력해보세요."
							/>
							<S.SuggestionSubmitBtn onClick={handleSuggestionSubmit}>
								<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M21.6557 0.0668626C21.8088 0.18275 21.9064 0.313124 21.9883 0.501166C22.0388 0.966272 21.9164 1.38595 21.7962 1.82313C21.7756 1.89985 21.7551 1.97659 21.7347 2.05335C21.6795 2.26005 21.6235 2.46646 21.5674 2.67283C21.5081 2.89123 21.4496 3.10989 21.3911 3.32854C21.2944 3.68919 21.1974 4.04969 21.1001 4.41011C20.9695 4.89423 20.8401 5.37876 20.7113 5.86354C20.7016 5.90024 20.6918 5.93695 20.6818 5.97476C20.6428 6.12144 20.6038 6.26812 20.5649 6.4148C20.497 6.67041 20.429 6.92597 20.361 7.1815C20.3513 7.21775 20.3417 7.254 20.3317 7.29134C20.3123 7.36441 20.2928 7.43747 20.2733 7.51054C20.0453 8.3666 19.8182 9.22299 19.5914 10.0795C19.1783 11.6389 18.7638 13.1979 18.3488 14.7567C18.2044 15.299 18.06 15.8414 17.9157 16.3838C17.9052 16.4232 17.8947 16.4626 17.8839 16.5031C17.8317 16.6993 17.7796 16.8955 17.7274 17.0916C17.6787 17.2746 17.63 17.4576 17.5813 17.6405C17.5628 17.7101 17.5443 17.7796 17.5258 17.8492C17.4806 18.0191 17.4353 18.189 17.3899 18.3589C17.3022 18.6875 17.2152 19.0162 17.13 19.3456C17.0876 19.5091 17.0449 19.6725 17.0022 19.8359C16.9818 19.9142 16.9616 19.9926 16.9415 20.0711C16.9136 20.1801 16.8852 20.289 16.8567 20.3978C16.8406 20.46 16.8245 20.5222 16.808 20.5863C16.7237 20.8432 16.6155 21.0544 16.4088 21.1999C16.2021 21.279 16.0202 21.2887 15.8199 21.1937C15.639 21.0749 15.4755 20.9368 15.309 20.7933C15.2735 20.763 15.238 20.7326 15.2014 20.7014C15.0886 20.605 14.9762 20.5082 14.8637 20.4113C14.8279 20.3805 14.7921 20.3497 14.7551 20.3179C14.6122 20.1949 14.4694 20.0718 14.3266 19.9486C14.0836 19.739 13.8397 19.5309 13.5949 19.3241C13.5614 19.2957 13.5279 19.2674 13.4933 19.2382C13.3254 19.0964 13.1573 18.9548 12.9892 18.8133C12.5875 18.475 12.1898 18.1314 11.7943 17.7836C11.5444 17.5644 11.2911 17.3527 11.0337 17.1452C10.8999 17.0356 10.7697 16.921 10.6397 16.8056C10.5988 16.7694 10.558 16.7332 10.5159 16.6959C10.4344 16.6234 10.3532 16.5507 10.2721 16.4776C10.235 16.4446 10.1978 16.4115 10.1595 16.3775C10.1263 16.3476 10.093 16.3177 10.0588 16.2869C9.97024 16.209 9.97024 16.209 9.84217 16.2223C9.83069 16.2489 9.8192 16.2754 9.80737 16.3028C9.52723 16.9505 9.2467 17.598 8.96576 18.2453C8.8299 18.5583 8.69417 18.8714 8.55875 19.1846C8.42799 19.4871 8.29687 19.7894 8.16553 20.0915C8.11555 20.2066 8.06569 20.3219 8.01595 20.4371C7.94612 20.5989 7.87586 20.7605 7.8055 20.922C7.78516 20.9694 7.76481 21.0168 7.74385 21.0657C7.60075 21.3924 7.45276 21.7265 7.18655 21.9391C6.96331 22.0211 6.79023 22.0224 6.56958 21.9299C6.41646 21.814 6.31884 21.6836 6.23696 21.4956C6.2329 21.3857 6.23173 21.2756 6.2318 21.1657C6.23174 21.1142 6.23174 21.1142 6.23169 21.0617C6.23161 20.9462 6.23185 20.8308 6.23209 20.7153C6.2321 20.6327 6.23209 20.5502 6.23207 20.4676C6.23205 20.243 6.23231 20.0184 6.23261 19.7938C6.23287 19.5593 6.2329 19.3247 6.23295 19.0902C6.23308 18.6458 6.23344 18.2014 6.23387 17.757C6.23435 17.2512 6.23458 16.7454 6.2348 16.2396C6.23525 15.1989 6.236 14.1582 6.23696 13.1175C6.20847 13.1079 6.17998 13.0983 6.15062 13.0883C5.77423 12.9601 5.77423 12.9601 5.59299 12.8796C5.55615 12.8633 5.5193 12.8471 5.48134 12.8303C5.42308 12.8043 5.42308 12.8043 5.36365 12.7777C5.3002 12.7496 5.3002 12.7496 5.23546 12.721C5.09623 12.6593 4.95708 12.5973 4.81794 12.5354C4.71976 12.4918 4.62157 12.4482 4.52337 12.4047C4.31561 12.3126 4.10789 12.2203 3.90018 12.128C3.59942 11.9943 3.29849 11.8612 2.99753 11.7281C2.83364 11.6557 2.66977 11.5832 2.5059 11.5107C2.3748 11.4527 2.2437 11.3947 2.11259 11.3367C1.87256 11.2306 1.63263 11.1241 1.39295 11.0169C1.22098 10.9401 1.04856 10.8649 0.875572 10.7911C0.797945 10.7573 0.720321 10.7234 0.642702 10.6896C0.590531 10.668 0.590531 10.668 0.537306 10.646C0.284566 10.5342 0.137666 10.396 0.0136667 10.1113C-0.00905476 9.84952 -0.0148161 9.63458 0.0887754 9.39668C0.224112 9.22401 0.352375 9.11839 0.541492 9.03696C0.578014 9.02105 0.614536 9.00515 0.652165 8.98876C0.691809 8.97186 0.731453 8.95496 0.772298 8.93754C0.814162 8.9194 0.856025 8.90126 0.899158 8.88256C0.989901 8.84327 1.08069 8.80413 1.17153 8.76512C1.31684 8.70271 1.46202 8.63993 1.60718 8.57704C1.75764 8.51186 1.90811 8.44671 2.05861 8.38166C2.49849 8.19153 2.93755 7.999 3.37633 7.80558C3.58384 7.71411 3.7914 7.62278 3.99895 7.53145C4.04101 7.51294 4.08306 7.49443 4.12639 7.47536C4.64376 7.24771 5.16138 7.02082 5.67901 6.79394C5.72828 6.77234 5.77756 6.75074 5.82833 6.72849C6.07893 6.61865 6.32954 6.50881 6.58014 6.39898C7.02472 6.20414 7.46928 6.00922 7.91384 5.8143C8.15961 5.70654 8.40539 5.59879 8.65116 5.49103C8.74952 5.44791 8.84788 5.40479 8.94623 5.36167C9.53637 5.10293 9.53638 5.10293 9.68391 5.03825C9.78227 4.99512 9.88064 4.952 9.97901 4.90887C10.2247 4.80114 10.4705 4.69341 10.7162 4.58568C11.1608 4.39076 11.6054 4.19583 12.05 4.00079C13.0519 3.56121 14.0541 3.12215 15.0569 2.685C15.8213 2.35175 16.5852 2.01685 17.3487 1.68078C17.9765 1.40446 18.6045 1.12862 19.2325 0.853168C19.3354 0.808075 19.4382 0.762974 19.541 0.717863C19.5899 0.696421 19.6387 0.67498 19.6891 0.652888C19.7367 0.631998 19.7843 0.611107 19.8333 0.589584C19.9695 0.529927 20.1058 0.470542 20.242 0.411167C20.3935 0.345047 20.5445 0.277685 20.6949 0.208454C20.7261 0.194348 20.7572 0.180241 20.7894 0.165708C20.869 0.129627 20.9483 0.0929122 21.0277 0.0561301C21.2475 -0.0162397 21.4373 -0.0247504 21.6557 0.0668626ZM16.1686 3.83396C16.1282 3.8517 16.0878 3.86943 16.0462 3.88771C16.002 3.90737 15.9579 3.92703 15.9124 3.94729C15.866 3.96771 15.8197 3.98813 15.7719 4.00917C15.6184 4.07681 15.4651 4.14479 15.3117 4.21276C15.2044 4.26011 15.0971 4.30743 14.9898 4.3547C14.8245 4.42754 14.6592 4.50039 14.494 4.57335C14.0107 4.78668 13.5268 4.99801 13.0427 5.20879C12.233 5.56138 11.424 5.91609 10.6154 6.27202C9.97157 6.55541 9.32752 6.8381 8.68335 7.12044C8.60944 7.15284 8.60944 7.15284 8.53403 7.18589C8.28343 7.29573 8.03283 7.40557 7.78222 7.5154C7.48485 7.64573 7.18749 7.77609 6.89013 7.90646C6.84144 7.92781 6.79274 7.94916 6.74256 7.97116C6.49873 8.07807 6.2549 8.18498 6.01107 8.29189C5.54853 8.49469 5.08598 8.69747 4.6234 8.90015C4.43078 8.98456 4.23816 9.06897 4.04554 9.15339C3.91382 9.21111 3.7821 9.26883 3.65037 9.32654C3.50519 9.39013 3.36001 9.45376 3.21484 9.51739C3.1503 9.54565 3.1503 9.54565 3.08446 9.57448C3.02488 9.6006 3.02488 9.6006 2.96409 9.62725C2.92975 9.64229 2.89542 9.65734 2.86004 9.67284C2.75498 9.71947 2.6504 9.76733 2.5459 9.81558C2.66109 9.92169 2.76598 9.99349 2.90409 10.0529C2.94102 10.0689 2.97794 10.085 3.01598 10.1015C3.05604 10.1186 3.09611 10.1357 3.13738 10.1532C3.17969 10.1716 3.222 10.1899 3.26559 10.2088C3.40471 10.269 3.54397 10.3288 3.68326 10.3885C3.87807 10.4722 4.07282 10.5561 4.26753 10.6401C4.31703 10.6614 4.36652 10.6828 4.41751 10.7048C4.75201 10.8496 5.08407 11.0004 5.41529 11.1549C5.54357 11.2141 5.67188 11.2732 5.8002 11.3324C5.88185 11.3704 5.96333 11.4088 6.04462 11.4478C6.15766 11.502 6.27122 11.5544 6.385 11.6065C6.41794 11.6229 6.45089 11.6393 6.48483 11.6561C6.65717 11.7345 6.65717 11.7345 6.83538 11.7064C6.92703 11.6502 6.92703 11.6502 7.05242 11.5405C7.08326 11.5168 7.1141 11.4931 7.14587 11.4687C7.17202 11.4466 7.19817 11.4246 7.22511 11.4019C7.25523 11.3766 7.28536 11.3514 7.31639 11.3254C7.3479 11.2988 7.37941 11.2722 7.41187 11.2448C7.48058 11.1872 7.54932 11.1297 7.61809 11.0723C7.65265 11.0434 7.68721 11.0145 7.72283 10.9847C7.87746 10.8562 8.03355 10.7301 8.18978 10.6041C8.4389 10.403 8.68636 10.1996 8.93282 9.99423C9.24118 9.73745 9.55251 9.48589 9.865 9.23579C10.1372 9.01752 10.4069 8.79534 10.6757 8.5715C11.0406 8.26783 11.4093 7.97042 11.778 7.6728C12.1542 7.36903 12.5286 7.06278 12.901 6.75295C13.1477 6.54792 13.3962 6.3459 13.6453 6.14477C13.8641 5.96789 14.0812 5.78849 14.2977 5.60808C14.5703 5.38107 14.845 5.15773 15.1212 4.9366C15.4085 4.70638 15.695 4.47495 15.9796 4.24049C16.0117 4.21425 16.0438 4.18801 16.0769 4.16098C16.2282 4.03578 16.3678 3.91236 16.4947 3.75382C16.3619 3.75382 16.2912 3.77975 16.1686 3.83396ZM19.7994 3.75382C19.3738 4.23291 19.3738 4.23291 18.9741 4.74005C18.8552 4.89337 18.7269 5.0357 18.5997 5.17978C18.4869 5.30817 18.3788 5.43854 18.2758 5.57728C18.1349 5.76708 17.9816 5.94113 17.8272 6.11611C17.7144 6.24452 17.6063 6.37489 17.5033 6.51365C17.3624 6.70345 17.2091 6.8775 17.0546 7.05248C16.9419 7.18089 16.8337 7.31126 16.7307 7.45002C16.6088 7.61428 16.4782 7.76671 16.3444 7.9182C16.2116 8.06868 16.0818 8.21997 15.9608 8.38331C15.8106 8.5857 15.6466 8.77016 15.482 8.95687C15.338 9.12098 15.2029 9.29019 15.0714 9.46772C14.9514 9.62198 14.8223 9.76565 14.694 9.91089C14.5813 10.0393 14.4732 10.1697 14.3702 10.3084C14.2292 10.4982 14.076 10.6723 13.9215 10.8472C13.8088 10.9756 13.7006 11.106 13.5976 11.2448C13.4567 11.4346 13.3034 11.6086 13.149 11.7836C13.0362 11.912 12.9281 12.0424 12.8251 12.1811C12.7031 12.3454 12.5725 12.4978 12.4388 12.6493C12.306 12.7998 12.1762 12.9511 12.0552 13.1144C11.905 13.3168 11.741 13.5012 11.5764 13.6879C11.4319 13.8526 11.2961 14.0224 11.1641 14.2006C11.0038 14.4074 10.8296 14.5992 10.6576 14.7931C10.7151 14.9467 10.7698 15.0271 10.8892 15.1219C10.9191 15.1462 10.9491 15.1704 10.9799 15.1953C11.0289 15.2341 11.0289 15.2341 11.0788 15.2736C11.3833 15.5201 11.682 15.7736 11.9774 16.0344C12.244 16.2693 12.512 16.5 12.787 16.7217C13.0594 16.9429 13.3227 17.1779 13.5874 17.4109C13.7958 17.5939 14.0052 17.7741 14.2199 17.9472C14.5204 18.1901 14.8113 18.4467 15.1016 18.7052C15.1381 18.7375 15.1745 18.7697 15.2121 18.8029C15.2442 18.8315 15.2764 18.8601 15.3095 18.8896C15.4568 19.0112 15.6103 19.1199 15.765 19.2286C15.7748 19.192 15.7845 19.1554 15.7945 19.1177C15.8154 19.0392 15.8154 19.0392 15.8367 18.9591C15.8526 18.8994 15.8685 18.8397 15.8849 18.7781C15.9213 18.6414 15.9577 18.5046 15.9941 18.3678C16.0876 18.0165 16.181 17.6652 16.2745 17.3139C16.3296 17.1068 16.3847 16.8997 16.4398 16.6926C16.451 16.6506 16.4622 16.6086 16.4737 16.5652C16.6228 16.0049 16.772 15.4446 16.9211 14.8843C17.3348 13.3307 17.7479 11.777 18.1595 10.2226C18.3755 9.40695 18.5919 8.59141 18.8091 7.77613C18.8305 7.69578 18.8519 7.61544 18.8733 7.53509C19.041 6.90554 19.041 6.90554 19.1212 6.60515C19.2304 6.19569 19.3394 5.78613 19.4478 5.37636C19.4824 5.24569 19.5171 5.11507 19.5519 4.98447C19.6019 4.7968 19.6513 4.60894 19.7007 4.42106C19.7233 4.33657 19.7233 4.33657 19.7463 4.25038C19.7664 4.1736 19.7664 4.1736 19.7868 4.09526C19.8046 4.02812 19.8046 4.02812 19.8227 3.95962C19.8528 3.85075 19.8528 3.85075 19.7994 3.75382Z" fill="currentColor"/>
								</svg>
								제안 남기기
							</S.SuggestionSubmitBtn>
						</S.SuggestionLeft>
						<S.SuggestionRight>
							{suggestions.map((s) => (
								<S.SuggestionItem key={s.id}>
									<S.SuggestionAvatarWrap>
										<S.SuggestionAvatarImg src={s.avatar} alt={s.user} />
									</S.SuggestionAvatarWrap>
									<S.SuggestionItemContent>
										<S.SuggestionUser>{s.user}</S.SuggestionUser>
										<S.SuggestionItemText>{s.text}</S.SuggestionItemText>
									</S.SuggestionItemContent>
									<S.AddListBtn onClick={() => handleOpenAddModalFromSuggestion(s.text)}>+</S.AddListBtn>
								</S.SuggestionItem>
							))}
						</S.SuggestionRight>
					</S.SuggestionBox>
				</S.Section>
			</S.Inner>
		</S.PageWrapper>
	);
};

// ─────────────────────────────────────────
// STYLED COMPONENTS
// ─────────────────────────────────────────
const S = {};

S.PageWrapper = styled.div`
	min-height: 100vh;
	background-color: #F8F9FA;
	padding-bottom: 150px;
`;

S.Inner = styled.div`
	max-width: 1320px;
	margin: 0 auto;
	padding: 0 60px;
`;

S.PageTop = styled.div`
	${flexBetweenRow}
	padding-top: 120px;
	padding-bottom: 0;
	margin-bottom: 50px;
`;

S.PageTitle = styled.h1`
	${h2Bold}
	color: ${theme.PALETTE.black};
`;

S.TopBtnRow = styled.div`
	${flexStartRow}
	gap: 12px;
`;

S.OutlineBtn = styled.button`
	${h8Bold}
	height: 40px;
	padding: 0 20px;
	border-radius: 10px;
	border: 1px solid ${({ $danger }) => $danger ? '#FF4D4D' : theme.GRAYSCALE[4]};
	color: ${({ $danger }) => $danger ? '#FF4D4D' : theme.GRAYSCALE[9]};
	background: ${theme.PALETTE.white};
	transition: all 0.15s ease;
	&:hover {
		background: ${({ $danger }) => $danger ? '#FFF0F0' : theme.GRAYSCALE[1]};
	}
`;

S.Section = styled.div`
	margin-top: ${({ $mt }) => $mt || '0'};
	margin-bottom: ${({ $mb }) => $mb || '0'};
`;

S.SectionLabel = styled.p`
	${h3_2Bold}
	color: ${theme.PALETTE.black};
	margin-bottom: 10px;
`;

S.SectionTitle = styled.h2`
	${h4Bold}
	color: ${theme.PALETTE.black};
	margin-bottom: 8px;
	display: flex;
	align-items: center;
	gap: 8px;
`;

S.SectionTitleRow = styled.div`
	${flexBetweenRow}
	margin-bottom: 24px;
`;

S.VisionText = styled.p`
	${h7Bold}
	color: ${theme.PALETTE.primary.main};
	margin-bottom: 50px;
`;

S.AiBadge = styled.span`
	display: inline-flex;
	align-items: center;
	gap: 4px;
	font-size: 11px;
	font-weight: 700;
	color: ${theme.PALETTE.primary.main};
`;

/* ── Project Card ── */
S.ProjectCard = styled.div`
	position: relative;
	border: 1px solid ${theme.GRAYSCALE[3]};
	border-radius: 16px;
	padding: 28px 40px 28px 32px;
	background: ${theme.PALETTE.white};
	box-shadow: 0 4px 20px rgba(0,0,0,0.05);
	display: flex;
	flex-direction: column;
`;

S.ProjectCardInner = styled.div``;

S.ProjectCardMeta = styled.div`
	${flexBetweenRow}
	margin-bottom: 16px;
`;

S.AiRecommendLabel = styled.span`
	${flexStartRow}
	gap: 6px;
	${h7Bold}
	color: ${theme.PALETTE.black};
`;

S.ProjectDateRange = styled.span`
	${h10Bold}
	color: ${theme.GRAYSCALE[10]};
	display: block;
	margin-bottom: 20px;
`;

S.ProjectName = styled.h3`
	${h5Bold}
	color: ${theme.PALETTE.black};
	margin-bottom: 20px;
`;

S.ProjectGoal = styled.p`
	${h8Regular}
	color: ${theme.GRAYSCALE[10]};
	margin-bottom: 16px;
`;

S.ProgressRow = styled.div`
	${flexBetweenRow}
	gap: 16px;
`;

S.ProgressBar = styled.div`
	flex: 1;
	height: 10px;
	background: ${theme.GRAYSCALE[2]};
	border-radius: 5px;
	overflow: hidden;
`;

S.ProgressFill = styled.div`
	height: 100%;
	width: ${({ $percent }) => $percent}%;
	background: linear-gradient(90deg, ${theme.PALETTE.primary.main}, ${theme.PALETTE.third.main});
	border-radius: 5px;
`;

S.DDay = styled.span`
	${h6Bold}
	color: ${theme.PALETTE.black};
	white-space: nowrap;
`;

S.ProjectEditBtn = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
	width: 32px;
	height: 32px;
	border-radius: 8px;
	border: 1px solid ${theme.GRAYSCALE[3]};
	background: ${theme.PALETTE.white};
	${flexCenter}
	transition: all 0.15s;
	&:hover { background: ${theme.GRAYSCALE[1]}; }
`;

/* ── Action Grid ── */
S.ActionGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 16px 40px;
`;

S.ActionCard = styled.div`
	${flexStartRow}
	align-items: flex-start;
	gap: 12px;
	padding: 24px;
	border: 1px solid ${theme.GRAYSCALE[3]};
	border-radius: 12px;
	background: ${theme.PALETTE.white};
`;

S.ActionDot = styled.div`
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background: ${theme.PALETTE.third.main};
	flex-shrink: 0;
	margin-top: 4px;
`;

S.ActionContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

S.ActionTitle = styled.p`
	${h7Bold}
	color: ${theme.PALETTE.black};
`;

S.ActionDesc = styled.p`
	${h8Regular}
	color: ${theme.GRAYSCALE[10]};
`;

/* ── Checklist ── */
S.ChecklistSubtitle = styled.p`
	${h8Regular}
	color: ${theme.GRAYSCALE[10]};
	margin-bottom: 20px;
`;

S.ChecklistList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

S.CheckItem = styled.div`
	border: 1px solid ${({ $status }) =>
		$status === 'success' ? theme.PALETTE.secondary.main :
		$status === 'fail' ? theme.PALETTE.fourth.main :
		theme.GRAYSCALE[3]};
	border-radius: 12px;
	background: ${({ $status }) =>
		$status === 'success' ? theme.PALETTE.secondary.light :
		$status === 'fail' ? theme.PALETTE.fourth.light :
		theme.PALETTE.white};
	overflow: hidden;
	transition: all 0.2s;
`;

S.CheckItemTop = styled.div`
	${flexBetweenRow}
	padding: 18px 20px;
	min-height: 100px;
	cursor: pointer;
`;

S.CheckLeft = styled.div`
	${flexStartRow}
	gap: 30px;
	flex: 1;
`;

S.CheckRight = styled.div`
	${flexStartRow}
	gap: 12px;
`;

S.CheckCircle = styled.div`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 2px solid ${({ $status }) =>
		$status === 'success' ? theme.PALETTE.secondary.main :
		$status === 'fail' ? theme.PALETTE.fourth.main :
		theme.GRAYSCALE[4]};
	background: ${({ $status }) =>
		$status === 'success' ? theme.PALETTE.secondary.main :
		$status === 'fail' ? theme.PALETTE.fourth.main :
		'transparent'};
	${flexCenter}
	flex-shrink: 0;
	transition: all 0.2s;
`;

S.CheckTitle = styled.span`
	${h7Bold}
	color: ${({ $status }) => $status ? theme.GRAYSCALE[7] : theme.PALETTE.black};
	text-decoration: ${({ $status }) => $status === 'success' ? 'line-through' : 'none'};
`;

S.PriorityBadge = styled.span`
	${h9Bold}
	padding: 4px 10px;
	border-radius: 20px;
	background: ${({ $bg }) => $bg};
	color: ${({ $color }) => $color};
	white-space: nowrap;
`;

S.ChevronIcon = styled.span`
	display: flex;
	transform: rotate(${({ $expanded }) => $expanded ? '180deg' : '0deg'});
	transition: transform 0.2s;
`;

S.CheckExpanded = styled.div`
	padding: 0 20px 16px 56px;
	border-top: 1px solid ${theme.GRAYSCALE[2]};
`;

S.MemoLabel = styled.p`
	${h8Regular}
	color: ${theme.PALETTE.black};
	margin: 12px 0 8px;
`;

S.MemoInput = styled.textarea`
	width: 100%;
	height: 56px;
	border: 1px solid ${theme.GRAYSCALE[3]};
	border-radius: 8px;
	padding: 10px 12px;
	${h8Regular}
	font-family: 'pretendard', sans-serif;
	color: ${theme.PALETTE.black};
	resize: none;
	outline: none;
	margin-bottom: 12px;
	&:focus { border-color: ${theme.PALETTE.third.main}; }
`;

S.CheckActions = styled.div`
	${flexBetweenRow}
`;

S.CheckActionsLeft = styled.div`
	${flexStartRow}
	gap: 8px;
`;

S.CheckActionsRight = styled.div`
	${flexStartRow}
	gap: 8px;
`;

S.SmallBtn = styled.button`
	${h9Regular}
	padding: 4px 12px;
	border-radius: 6px;
	border: 1px solid ${theme.GRAYSCALE[3]};
	color: ${theme.GRAYSCALE[10]};
	background: ${theme.PALETTE.white};
	&:hover { background: ${theme.GRAYSCALE[1]}; }
`;

S.StatusBtn = styled.button`
	${h9Bold}
	padding: 4px 12px;
	border-radius: 6px;
	border: 1px solid ${({ $type }) => $type === 'success' ? theme.PALETTE.secondary.main : theme.PALETTE.fourth.main};
	color: ${({ $type, $active }) => $active ? 'white' : ($type === 'success' ? theme.PALETTE.secondary.main : theme.PALETTE.fourth.main)};
	background: ${({ $type, $active }) => !$active ? 'white' : ($type === 'success' ? theme.PALETTE.secondary.main : theme.PALETTE.fourth.main)};
	transition: all 0.15s;
`;

S.AddItemBtn = styled.button`
	${flexCenterRow}
	gap: 8px;
	width: 100%;
	height: 52px;
	margin-top: 10px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	border-radius: 12px;
	${h8Regular}
	color: ${theme.PALETTE.black};
	background: ${theme.PALETTE.white};
	transition: all 0.15s;
	&:hover { border-color: ${theme.PALETTE.third.main}; color: ${theme.PALETTE.third.main}; }
`;

/* ── Suggestion ── */
S.SuggestionBox = styled.div`
	display: grid;
	grid-template-columns: 520px 1fr;
	width: 100%;
	height: 400px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	border-radius: 15px;
	background: ${theme.PALETTE.white};
	overflow: hidden;
`;

S.SuggestionLeft = styled.div`
	padding: 40px;
	border-right: 1px solid ${theme.GRAYSCALE[2]};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

S.SuggestionHeader = styled.div`
	${flexStartRow}
	gap: 10px;
	margin-bottom: 10px;
	width: 400px;
`;

S.SuggestionIcon = styled.div`
	width: 28px;
	height: 28px;
	flex-shrink: 0;
	${flexCenter}
`;

S.SuggestionTextWrap = styled.div``;

S.SuggestionPrompt = styled.p`
	${h6Bold}
	color: ${theme.PALETTE.black};
`;

S.SuggestionDesc = styled.p`
	${h8Regular}
	color: ${theme.GRAYSCALE[10]};
	padding-left: 38px;
	width: 400px;
`;

S.SuggestionInput = styled.textarea`
	width: 400px;
	height: 120px;
	margin-top: 30px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	border-radius: 10px;
	padding: 12px;
	background: #F9FAFB;
	${h8Regular}
	color: ${theme.PALETTE.black};
	resize: none;
	outline: none;
	font-family: 'pretendard', sans-serif;
	&::placeholder { color: ${theme.GRAYSCALE[10]}; }
	&:focus { border-color: ${theme.PALETTE.third.main}; }
`;

S.SuggestionSubmitBtn = styled.button`
	${flexCenterRow}
	gap: 8px;
	width: 400px;
	height: 40px;
	margin-top: 20px;
	border-radius: 10px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	background: ${theme.PALETTE.white};
	color: ${theme.PALETTE.third.main};
	${h8Bold}
	transition: all 0.15s;
	&:hover {
		border: 1px solid ${theme.PALETTE.third.main};
		background: ${theme.PALETTE.white};
	}
	&:active {
		background: ${theme.PALETTE.third.main};
		color: ${theme.PALETTE.white};
		border-color: ${theme.PALETTE.third.main};
	}
`;

S.SuggestionRight = styled.div`
	display: flex;
	flex-direction: column;
	padding: 40px;
	gap: 12px;
	overflow-y: auto;
	&::-webkit-scrollbar { width: 4px; }
	&::-webkit-scrollbar-thumb { background: ${theme.GRAYSCALE[4]}; border-radius: 2px; }
	&::-webkit-scrollbar-track { background: transparent; }
`;

S.SuggestionItem = styled.div`
	${flexBetweenRow}
	align-items: center;
	gap: 12px;
	padding: 16px;
	border: 1px solid ${theme.GRAYSCALE[2]};
	border-radius: 12px;
	background: ${theme.PALETTE.white};
`;

S.SuggestionAvatarWrap = styled.div`
	width: 52px;
	height: 52px;
	border-radius: 50%;
	background: ${theme.PALETTE.third.light};
	${flexCenter}
	flex-shrink: 0;
`;

S.SuggestionAvatarImg = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	object-fit: cover;
`;

S.SuggestionItemContent = styled.div`
	flex: 1;
`;

S.SuggestionUser = styled.p`
	${h9Regular}
	color: ${theme.PALETTE.black};
	margin-bottom: 4px;
`;

S.SuggestionItemText = styled.p`
	${h8Bold}
	color: ${theme.PALETTE.black};
`;

S.AddListBtn = styled.button`
	width: 36px;
	height: 36px;
	border-radius: 10px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	color: ${theme.PALETTE.third.main};
	background: ${theme.PALETTE.white};
	${flexCenter}
	font-size: 18px;
	font-weight: 400;
	flex-shrink: 0;
	transition: all 0.15s;
	&:hover {
		border: 1px solid ${theme.PALETTE.third.main};
		background: ${theme.PALETTE.white};
	}
	&:active {
		background: ${theme.PALETTE.third.main};
		color: ${theme.PALETTE.white};
		border-color: ${theme.PALETTE.third.main};
	}
`;

/* ── 새 항목 추가 모달 ── */
S.ModalOverlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.4);
	${flexCenter}
	z-index: 200;
`;

S.AddModal = styled.div`
	width: 900px;
	background: ${theme.PALETTE.white};
	border-radius: 16px;
	padding: 40px 48px;
	display: flex;
	flex-direction: column;
	gap: 28px;
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
`;

S.AddModalHeader = styled.div`
	${flexBetweenRow}
`;

S.AddModalTitle = styled.h3`
	${h7Bold}
	color: ${theme.PALETTE.black};
`;

S.AddModalClose = styled.button`
	${h7Bold}
	color: ${theme.GRAYSCALE[7]};
	background: none;
	border: none;
	cursor: pointer;
	font-size: 20px;
	&:hover { color: ${theme.PALETTE.black}; }
`;

S.AddModalField = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

S.AddModalLabel = styled.label`
	${h8Regular}
	color: ${theme.PALETTE.black};
`;

S.AddModalInput = styled.input`
	width: 100%;
	height: 56px;
	border: 1px solid ${theme.GRAYSCALE[3]};
	border-radius: 10px;
	padding: 0 16px;
	${h8Regular}
	color: ${theme.PALETTE.black};
	font-family: 'pretendard', sans-serif;
	outline: none;
	&::placeholder { color: ${theme.GRAYSCALE[5]}; }
	&:focus { border-color: ${theme.PALETTE.third.main}; }
`;

S.AddModalTextarea = styled.textarea`
	width: 100%;
	height: 80px;
	border: 1px solid ${theme.GRAYSCALE[3]};
	border-radius: 10px;
	padding: 16px;
	${h8Regular}
	color: ${theme.PALETTE.black};
	font-family: 'pretendard', sans-serif;
	resize: none;
	outline: none;
	&::placeholder { color: ${theme.GRAYSCALE[5]}; }
	&:focus { border-color: ${theme.PALETTE.third.main}; }
`;

S.AddModalBottom = styled.div`
	${flexBetweenRow}
	align-items: center;
`;

S.AddModalPriorityRow = styled.div`
	${flexStartRow}
	gap: 16px;
`;

S.AddModalPriorityBtns = styled.div`
	${flexStartRow}
	gap: 8px;
`;

S.PrioritySelectBtn = styled.button`
	${h8Bold}
	padding: 6px 16px;
	border-radius: 20px;
	border: 1px solid ${({ $selected, $priority }) =>
		$selected
			? $priority === '높음' ? theme.PALETTE.fourth.main
			: $priority === '중간' ? theme.PALETTE.primary.main
			: theme.PALETTE.secondary.main
			: theme.GRAYSCALE[4]};
	background: ${({ $selected, $priority }) =>
		$selected
			? $priority === '높음' ? theme.PALETTE.fourth.light
			: $priority === '중간' ? theme.PALETTE.primary.light
			: theme.PALETTE.secondary.light
			: theme.PALETTE.white};
	color: ${({ $selected, $priority }) =>
		$selected
			? $priority === '높음' ? theme.PALETTE.fourth.main
			: $priority === '중간' ? theme.PALETTE.primary.main
			: theme.PALETTE.secondary.main
			: theme.GRAYSCALE[7]};
	cursor: pointer;
	transition: all 0.15s;
`;

S.AddModalSubmitBtn = styled.button`
	${h8Bold}
	width: 88px;
	height: 36px;
	border-radius: 10px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	background: ${theme.PALETTE.white};
	color: ${theme.PALETTE.black};
	transition: all 0.15s;
	&:hover { border-color: ${theme.PALETTE.third.main}; color: ${theme.PALETTE.third.main}; }
`;

/* ── Added Popup ── */
S.AddedPopupOverlay = styled.div`
	position: fixed;
	inset: 0;
	z-index: 100;
	pointer-events: none;
	${flexCenter}
`;

S.AddedPopup = styled.div`
	pointer-events: all;
	background: white;
	border: 1.5px solid ${theme.PALETTE.third.main};
	border-radius: 16px;
	padding: 28px 40px;
	text-align: center;
	box-shadow: 0 8px 32px rgba(171, 71, 255, 0.12);
`;

S.AddedPopupText = styled.p`
	${h7Regular}
	color: ${theme.PALETTE.black};
	margin-bottom: 20px;
	line-height: 1.6;
`;

S.AddedPopupBtn = styled.button`
	${h8Bold}
	padding: 8px 28px;
	border-radius: 20px;
	border: 1px solid ${theme.GRAYSCALE[4]};
	background: white;
	color: ${theme.PALETTE.black};
	&:hover { background: ${theme.GRAYSCALE[1]}; }
`;

export default ProjectDetailContainer;
