import { useState } from 'react';
import theme from '../../../styles/theme';
import OfficeMaterialIcon from '../project_icon/office-material_227089.svg';
import S from './ProjectMyListStyle';

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

const getAccentColor = (id) => {
    const themeColors = [
        theme.PALETTE.primary.main,
        theme.PALETTE.secondary.main,
        theme.PALETTE.third.main,
        theme.PALETTE.fourth.main,
        theme.PALETTE.fifth.main,
        theme.PALETTE.yellow,
    ];
    if (!id) return theme.PALETTE.third.main;
    return themeColors[id % themeColors.length];
};

// ─────────────────────────────────────────
// SUB COMPONENTS
// ─────────────────────────────────────────
const FolderIcon = () => (
    <img src={OfficeMaterialIcon} alt="folder" width="16" height="16" />
);

const ProjectCard = ({ project, onClick }) => (
    <S.CardWrapper>
        <S.Card onClick={() => onClick?.(project)}>
            <S.AccentBar $color={project.accentColor || getAccentColor(project.id)} />
            <S.CardContent>
                <S.CardTop>
                    <S.OwnerRow>
                        <S.OwnerAvatar>
                            <img
                                src={project.memberProfileImageUrl || '/default-profile.png'}
                                  alt="프로필"
                                style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
                            />
                        </S.OwnerAvatar>
                        <S.OwnerName>{project.owner || '나의 프로젝트'}</S.OwnerName>
                    </S.OwnerRow>
                    <S.DDay>{getDDay(project.projectEndDate)}</S.DDay>
                </S.CardTop>
                <S.CardTitle>{project.projectTitle}</S.CardTitle>
                <S.TagRow>
                    {(project.checklists || []).map((checklist) => (
                        <S.Tag key={checklist.id}>
                            <FolderIcon />
                            <span className="text">{checklist.checklistTitle}</span>
                        </S.Tag>
                    ))}
                </S.TagRow>
            </S.CardContent>
        </S.Card>
    </S.CardWrapper>
);

// ─────────────────────────────────────────
// MAIN COMPONENT — 로그별 그룹화
// ─────────────────────────────────────────
const ProjectMyList = ({ projects, onCardClick }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const ITEMS_PER_PAGE = 2; // 최대 2개의 로그 그룹(줄)만 표시

    if (!projects || projects.length === 0) {
        return (
            <S.MyProjectsSection>
                <S.EmptyState>
                    아직 생성된 프로젝트가 없습니다. 프로젝트를 생성해보세요!
                </S.EmptyState>
            </S.MyProjectsSection>
        );
    }

    // logId 기준으로 그룹화
    const grouped = projects.reduce((acc, project) => {
        const key = project.logId ?? 'etc';
        if (!acc[key]) {
            acc[key] = {
                logId: project.logId,
                logTitle: project.logTitle || project.visionTitle || '기타 프로젝트',
                projects: [],
            };
        }
        acc[key].projects.push(project);
        return acc;
    }, {});

    const groups = Object.values(grouped);
    const maxPage = Math.ceil(groups.length / ITEMS_PER_PAGE);
    
    // 페이지 범위 보정 (혹시라도 삭제 등으로 페이지가 줄어들었을 경우)
    const validCurrentPage = Math.min(currentPage, Math.max(0, maxPage - 1));
    const visibleGroups = groups.slice(validCurrentPage * ITEMS_PER_PAGE, (validCurrentPage + 1) * ITEMS_PER_PAGE);

    // 페이지 그룹화 로직 (최대 3개의 페이지 번호만 표시)
    const pageGroupSize = 3;
    const currentGroupStart = Math.floor(validCurrentPage / pageGroupSize) * pageGroupSize;
    const visiblePages = [];
    for (let i = currentGroupStart; i < Math.min(currentGroupStart + pageGroupSize, maxPage); i++) {
        visiblePages.push(i);
    }

    const handlePrev = () => setCurrentPage((prev) => Math.max(0, prev - 1));
    const handleNext = () => setCurrentPage((prev) => Math.min(maxPage - 1, prev + 1));

    return (
        <S.MyProjectsSection>
            {visibleGroups.map((group) => (
                <S.LogSection key={group.logId ?? 'etc'}>
                    <S.LogSectionHeader>
                        <S.LogSectionTitle>{group.logTitle}</S.LogSectionTitle>
                        <S.LogSectionCount>{group.projects.length}개</S.LogSectionCount>
                    </S.LogSectionHeader>
                    <S.CardScrollWrapper>
                        <S.CardGrid>
                            {group.projects.map((project) => (
                                <ProjectCard key={project.id} project={project} onClick={onCardClick} />
                            ))}
                        </S.CardGrid>
                    </S.CardScrollWrapper>
                </S.LogSection>
            ))}

            {maxPage > 1 && (
                <S.PaginationWrapper>
                    <S.NavButton onClick={handlePrev} disabled={validCurrentPage === 0}>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                            <path d="M7 1L1 7L7 13" stroke={validCurrentPage === 0 ? theme.GRAYSCALE[4] : theme.GRAYSCALE[9]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </S.NavButton>
                    
                    {visiblePages.map((idx) => (
                        <S.PageButton 
                            key={idx} 
                            $active={idx === validCurrentPage} 
                            onClick={() => setCurrentPage(idx)}
                        >
                            <span style={{ 
                                color: idx === validCurrentPage ? theme.PALETTE.white : theme.PALETTE.black, 
                                fontWeight: idx === validCurrentPage ? 700 : 400 
                            }}>
                                {idx + 1}
                            </span>
                        </S.PageButton>
                    ))}

                    <S.NavButton onClick={handleNext} disabled={validCurrentPage === maxPage - 1}>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                            <path d="M1 1L7 7L1 13" stroke={validCurrentPage === maxPage - 1 ? theme.GRAYSCALE[4] : theme.GRAYSCALE[9]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </S.NavButton>
                </S.PaginationWrapper>
            )}
        </S.MyProjectsSection>
    );
};

export default ProjectMyList;
