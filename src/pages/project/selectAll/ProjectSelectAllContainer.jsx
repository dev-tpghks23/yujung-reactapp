import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../../../styles/theme';

// 모달 및 스토어 Import
import ProjectCreateModal from '../create/ProjectCreateModal';
import ProjectCreateStep1Modal from '../create/ProjectCreateStep1Modal';
import ProjectCreateStep2Modal from '../create/ProjectCreateStep2Modal';
import useProjectStore from '../../../store/projectStore';

// 컴포넌트 Import
import ProjectMyList from './ProjectMyList';
import ProjectOtherSearch from './ProjectOtherSearch';
import ProjectOtherList from './ProjectOtherList';

// 스타일 Import
import S from './ProjectSelectAllContainerStyle';

// ─────────────────────────────────────────
// MOCK DATA
// ─────────────────────────────────────────
const MOCK_PROJECTS = [
	{ id: 1, name: '하루 1시간 영어 듣기 훈련', owner: '영어원주민', ownerInitial: '영', ownerColor: theme.PALETTE.third.main, dDay: 'D+45', tags: ['미드 팟캐스트 정복', '자기 전 섀도잉하기'], accentColor: theme.PALETTE.third.main },
	{ id: 2, name: '매일 새벽 5시 기상 프로젝트', owner: '영어원주민', ownerInitial: '영', ownerColor: theme.PALETTE.fifth.main, dDay: 'D+45', tags: ['새벽 기상 스터디 참여', '모닝 스트레칭'], accentColor: theme.PALETTE.fifth.main },
	{ id: 3, name: '오전 6시 기상 + 1시간 공부 루틴', owner: '영어원주민', ownerInitial: '영', ownerColor: theme.PALETTE.yellow, dDay: 'D+45', tags: ['기상 직후 루틴 프로그램', '아침 공부법'], accentColor: theme.PALETTE.yellow },
	{ id: 4, name: '주 5일 운동 + 식단 기록', owner: '영어원주민', ownerInitial: '영', ownerColor: theme.PALETTE.secondary.main, dDay: 'D+45', tags: ['기상 직후 루틴 프로그램', '아침 공부법'], accentColor: theme.PALETTE.secondary.main },
	{ id: 5, name: '한 달에 책 4권 읽기', owner: '영어원주민', ownerInitial: '영', ownerColor: theme.PALETTE.primary.main, dDay: 'D+45', tags: ['주말 도서관 투어', '자투리 시간 독서 습관화'], accentColor: theme.PALETTE.primary.main },
	{ id: 6, name: '매일 밤 10분 영상 루틴', owner: '영어원주민', ownerInitial: '영', ownerColor: theme.PALETTE.fourth.main, dDay: 'D+45', tags: ['수면 환경 최적화 세팅', '영상 100일 챌린지'], accentColor: theme.PALETTE.fourth.main },
];

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────
const ProjectSelectAllContainer = () => {
	const navigate = useNavigate();
	const { projects, addProject } = useProjectStore();
	const [step, setStep] = useState(null);
	const [projectData, setProjectData] = useState({});
	const [currentPage, setCurrentPage] = useState(1);
	const [carouselIndex, setCarouselIndex] = useState(0);
	const ITEMS_PER_VIEW = 6;

	const displayProjects = projects.length > 0 ? projects : MOCK_PROJECTS;
	const communityProjects = [...MOCK_PROJECTS, ...MOCK_PROJECTS].slice(0, 12);

	const handleClose = () => {
		setStep(null);
		setProjectData({});
	};

	const handleFaillogNext = (data) => {
		setProjectData(prev => ({ ...prev, ...data }));
		setStep('step1');
	};

	const handleStep1Next = (data) => {
		setProjectData(prev => ({ ...prev, ...data }));
		setStep('step2');
	};

	const handleCreate = (data) => {
		addProject({ ...projectData, ...data });
		handleClose();
	};

	const handleCardClick = (project) => {
		navigate(`/projects/${project.id}`);
	};

	const handlePrevCarousel = () => setCarouselIndex(prev => Math.max(prev - 3, 0));
	const handleNextCarousel = () => setCarouselIndex(prev => Math.min(prev + 3, Math.max(0, displayProjects.length - ITEMS_PER_VIEW)));

	return (
		<S.PageWrapper>
			{step === 'select' && <ProjectCreateModal onClose={handleClose} onNext={handleFaillogNext} />}
			{step === 'step1' && <ProjectCreateStep1Modal onClose={handleClose} onNext={handleStep1Next} />}
			{step === 'step2' && <ProjectCreateStep2Modal onClose={handleClose} onSubmit={handleCreate} projectName={projectData.projectName} />}

			<S.Inner>
				<S.PageHeader>
					<S.PageTitle>Project</S.PageTitle>
					<S.SubtitleRow>
						<S.PageSubtitle>나의 프로젝트를 모아보세요.</S.PageSubtitle>
						<S.BtnCreate onClick={() => setStep('select')}>프로젝트 생성</S.BtnCreate>
					</S.SubtitleRow>
				</S.PageHeader>

				<ProjectMyList
					projects={displayProjects}
					carouselIndex={carouselIndex}
					onPrev={handlePrevCarousel}
					onNext={handleNextCarousel}
					onCardClick={handleCardClick}
					itemsPerView={ITEMS_PER_VIEW}
				/>
			</S.Inner>

			<S.CommunitySection>
				<S.Inner>
					<ProjectOtherSearch />
					<ProjectOtherList
						projects={communityProjects}
						currentPage={currentPage}
						onPageChange={setCurrentPage}
						maxPage={10}
					/>
				</S.Inner>
			</S.CommunitySection>
		</S.PageWrapper>
	);
};

export default ProjectSelectAllContainer;