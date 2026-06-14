import { useNavigate } from 'react-router-dom';
import theme from '../../../styles/theme';
import { goToMemberProfile } from '../../../utils/profileNavigation';
import OfficeMaterialIcon from '../project_icon/office-material_227089.svg';
import S from './ProjectOtherListStyle';

// ─────────────────────────────────────────
// SUB COMPONENTS
// ─────────────────────────────────────────

// 폴더 아이콘 컴포넌트
const FolderIcon = () => (
    <img src={OfficeMaterialIcon} alt="folder" width="16" height="16" />
);


// 프로젝트 순서에 따라 색상 순환
const ACCENT_COLORS = [
    theme.PALETTE.third.main,
    theme.PALETTE.fifth.main,
    theme.PALETTE.yellow,
    theme.PALETTE.secondary.main,
    theme.PALETTE.primary.main,
    theme.PALETTE.fourth.main,
];

// 프로젝트 카드 컴포넌트 - 클릭 시 다른 사람 프로젝트 상세 페이지로 이동
const ProjectCard = ({ project, index }) => {
    const navigate = useNavigate();
    const accentColor = ACCENT_COLORS[index % ACCENT_COLORS.length];

    return (
        <S.CardWrapper onClick={() => navigate(`/projects/public/${project.id}`)} style={{ cursor: 'pointer' }}>
            <S.Card>
                <S.AccentBar $color={accentColor} />
                <S.CardContent>
                    <S.CardTop>
                        <S.OwnerRow
                            onClick={(e) => {
                                e.stopPropagation();
                                goToMemberProfile(navigate, project.memberId);
                            }}
                            style={{ cursor: 'pointer', zIndex: 10, position: 'relative' }}
                        >
                            <S.OwnerAvatar>
                                <img
                                    src={project.memberProfileImageUrl || '/assets/picture/default-profile.png'}
                                    alt="프로필"
                                    onError={(e) => { e.target.onerror = null; e.target.src = '/assets/picture/default-profile.png'; }}
                                    style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
                                />
                            </S.OwnerAvatar>
                            <S.OwnerName>{project.memberNickname || '알 수 없음'}</S.OwnerName>
                        </S.OwnerRow>
                    </S.CardTop>
                    <S.CardTitle>{project.projectTitle}</S.CardTitle>
                    <S.TagRow>
                        {(project.checklists || []).map((checklist, idx) => (
                            <S.Tag key={idx}>
                                <FolderIcon />
                                <span className="text">{checklist.checklistTitle}</span>
                            </S.Tag>
                        ))}
                    </S.TagRow>
                </S.CardContent>
            </S.Card>
        </S.CardWrapper>
    );
};

// 페이지네이션 컴포넌트
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
                <ProjectCard key={project.id} project={project} index={idx} />
            ))}
        </S.CommunityGrid>
        <Pagination currentPage={currentPage} onPageChange={onPageChange} maxPage={maxPage} />
    </>
);

export default ProjectOtherList;