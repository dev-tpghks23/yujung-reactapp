import theme from '../../../styles/theme';
import OfficeMaterialIcon from '../project_icon/office-material_227089.svg';
import S from './ProjectMyListStyle';

// ─────────────────────────────────────────
// SUB COMPONENTS
// ─────────────────────────────────────────
const FolderIcon = () => (
	<img src={OfficeMaterialIcon} alt="folder" width="16" height="16" />
);

const ProjectCard = ({ project, onClick }) => (
	<S.CardWrapper>
		<S.Card onClick={() => onClick?.(project)}>
			<S.AccentBar $color={project.accentColor || theme.PALETTE.third.main} />
			<S.CardContent>
				<S.CardTop>
					<S.OwnerRow>
						<S.OwnerAvatar $color={project.ownerColor || theme.PALETTE.third.main}>
							{project.ownerInitial || '나'}
						</S.OwnerAvatar>
						<S.OwnerName>{project.owner || '나의 프로젝트'}</S.OwnerName>
					</S.OwnerRow>
					<S.DDay>{project.dDay || 'D-Day'}</S.DDay>
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

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────
const ProjectMyList = ({ projects, carouselIndex, onPrev, onNext, onCardClick, itemsPerView }) => (
	<S.MyProjectsSection>
		<S.CarouselWrap>
			<S.ArrowBtn onClick={onPrev} disabled={carouselIndex === 0}>&#8249;</S.ArrowBtn>
			<S.CardGrid>
				{projects.slice(carouselIndex, carouselIndex + itemsPerView).map((project) => (
					<ProjectCard key={project.id} project={project} onClick={onCardClick} />
				))}
			</S.CardGrid>
			<S.ArrowBtn onClick={onNext} disabled={carouselIndex + itemsPerView >= projects.length}>&#8250;</S.ArrowBtn>
		</S.CarouselWrap>
	</S.MyProjectsSection>
);

export default ProjectMyList;