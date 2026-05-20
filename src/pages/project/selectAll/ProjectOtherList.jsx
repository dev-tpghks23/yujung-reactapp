import theme from '../../../styles/theme';
import OfficeMaterialIcon from '../project_icon/office-material_227089.svg';
import S from './ProjectOtherListStyle';

// ─────────────────────────────────────────
// SUB COMPONENTS
// ─────────────────────────────────────────
const FolderIcon = () => (
	<img src={OfficeMaterialIcon} alt="folder" width="16" height="16" />
);

const ProjectCard = ({ project }) => (
	<S.CardWrapper>
		<S.Card>
			<S.AccentBar $color={project.accentColor || theme.PALETTE.third.main} />
			<S.CardContent>
				<S.CardTop>
					<S.OwnerRow>
						<S.OwnerAvatar $color={project.ownerColor || theme.PALETTE.third.main}>
							{project.ownerInitial || '나'}
						</S.OwnerAvatar>
						<S.OwnerName>{project.owner || '나의 프로젝트'}</S.OwnerName>
					</S.OwnerRow>
				</S.CardTop>
				<S.CardTitle>{project.name}</S.CardTitle>
				<S.TagRow>
					{(project.tags || []).map((tag, idx) => (
						<S.Tag key={idx}><FolderIcon />{tag}</S.Tag>
					))}
				</S.TagRow>
			</S.CardContent>
		</S.Card>
	</S.CardWrapper>
);

const Pagination = ({ minPage = 1, maxPage = 10, currentPage, onPageChange }) => {
	const groupStart = Math.floor((currentPage - minPage) / 5) * 5 + minPage;
	const pages = [];
	for (let i = groupStart; i <= Math.min(groupStart + 4, maxPage); i++) {
		pages.push(i);
	}
	const canPrev = groupStart > minPage;
	const canNext = groupStart + 5 <= maxPage;

	return (
		<S.PaginationWrapper>
			<S.NavButton onClick={() => canPrev && onPageChange(groupStart - 1)} disabled={!canPrev}>
				<svg width="8" height="14" viewBox="0 0 8 14" fill="none">
					<path d="M7 1L1 7L7 13" stroke={canPrev ? theme.GRAYSCALE[9] : theme.GRAYSCALE[4]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</S.NavButton>
			{pages.map((page) => (
				<S.PageButton key={page} $active={page === currentPage} onClick={() => onPageChange(page)}>
					<span style={{ color: page === currentPage ? theme.PALETTE.white : theme.PALETTE.black, fontWeight: page === currentPage ? 700 : 400 }}>{page}</span>
				</S.PageButton>
			))}
			<S.NavButton onClick={() => canNext && onPageChange(groupStart + 5)} disabled={!canNext}>
				<svg width="8" height="14" viewBox="0 0 8 14" fill="none">
					<path d="M1 1L7 7L1 13" stroke={canNext ? theme.GRAYSCALE[9] : theme.GRAYSCALE[4]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</S.NavButton>
		</S.PaginationWrapper>
	);
};

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────
const ProjectOtherList = ({ projects, currentPage, onPageChange, maxPage = 10 }) => (
	<>
		<S.CommunityGrid>
			{projects.map((project, idx) => (
				<ProjectCard key={idx} project={{ ...project, id: idx }} />
			))}
		</S.CommunityGrid>
		<Pagination currentPage={currentPage} onPageChange={onPageChange} maxPage={maxPage} />
	</>
);

export default ProjectOtherList;