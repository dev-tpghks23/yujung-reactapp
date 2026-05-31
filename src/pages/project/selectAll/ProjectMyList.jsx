import { useState } from 'react';
import theme from '../../../styles/theme';
import OfficeMaterialIcon from '../project_icon/office-material_227089.svg';
import S from './ProjectMyListStyle';

const getDDay = (startDate) => {
    if (!startDate) return 'D-Day';
    const start = new Date(startDate);
    const today = new Date();
    const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
    return diff >= 0 ? `D+${diff}` : `D${diff}`;
};

const GROUPS_PER_VIEW = 2;

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
                        <S.OwnerAvatar>
                            <img
                                src={project.memberProfileImageUrl || '/default-profile.png'}
                                alt="프로필"
                                style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
                            />
                        </S.OwnerAvatar>
                        <S.OwnerName>{project.owner || '나의 프로젝트'}</S.OwnerName>
                    </S.OwnerRow>
                    <S.DDay>{getDDay(project.projectStartDate)}</S.DDay>
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
// MAIN COMPONENT — 로그별 그룹화 + 2개씩 캐러셀
// ─────────────────────────────────────────
const ProjectMyList = ({ projects, onCardClick }) => {
    const [groupIndex, setGroupIndex] = useState(0);

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
                visionTitle: project.visionTitle || '기타 프로젝트',
                projects: [],
            };
        }
        acc[key].projects.push(project);
        return acc;
    }, {});

    const groups = Object.values(grouped);
    const visibleGroups = groups.slice(groupIndex, groupIndex + GROUPS_PER_VIEW);

    const handlePrev = () => setGroupIndex(prev => Math.max(prev - 1, 0));
    const handleNext = () => setGroupIndex(prev => Math.min(prev + 1, groups.length - GROUPS_PER_VIEW));

    const canPrev = groupIndex > 0;
    const canNext = groupIndex + GROUPS_PER_VIEW < groups.length;

    return (
        <S.MyProjectsSection>
            <S.CarouselOuter>
                <S.ArrowBtn onClick={handlePrev} disabled={!canPrev}>&#8249;</S.ArrowBtn>

                {visibleGroups.map((group) => (
                    <S.LogSection key={group.logId ?? 'etc'}>
                        <S.LogSectionHeader>
                            <S.LogSectionTitle>{group.visionTitle}</S.LogSectionTitle>
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

                <S.ArrowBtn onClick={handleNext} disabled={!canNext}>&#8250;</S.ArrowBtn>
            </S.CarouselOuter>
        </S.MyProjectsSection>
    );
};

export default ProjectMyList;
