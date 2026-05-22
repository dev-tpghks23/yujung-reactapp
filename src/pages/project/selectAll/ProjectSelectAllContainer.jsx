import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/axiosInstance';
import theme from '../../../styles/theme';

// 모달 Import
import ProjectCreateModal from '../create/ProjectCreateModal';

// 컴포넌트 Import
import ProjectMyList from './ProjectMyList';
import ProjectOtherSearch from './ProjectOtherSearch';
import ProjectOtherList from './ProjectOtherList';

// 스타일 Import
import S from './ProjectSelectAllContainerStyle';

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────
const ProjectSelectAllContainer = () => {
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [myProjects, setMyProjects] = useState([]);
    const [otherProjects, setOtherProjects] = useState([]); // 추가
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_VIEW = 6;

    // ── 내 프로젝트 목록 조회 ──
    const fetchMyProjects = async () => {
        try {
            const response = await axios.get('/api/project/list');
            setMyProjects(response.data.data || []);
        } catch (err) {
            console.error('프로젝트 목록 조회 실패:', err);
        }
    };

    // ── 다른 사람들의 프로젝트 목록 조회 ── (추가)
    const fetchOtherProjects = async () => {
        try {
            const response = await axios.get('/api/project/others');
            setOtherProjects(response.data.data || []);
        } catch (err) {
            console.error('다른 프로젝트 목록 조회 실패:', err);
        }
    };

    useEffect(() => {
        fetchMyProjects();
        fetchOtherProjects(); // 추가
    }, []);

    // ── 프로젝트 생성 완료 후 처리 ──
    const handleCreated = (newProject) => {
    fetchMyProjects();
    navigate(`/projects/${newProject.id}`, {
        state: { aiSuggestions: newProject.aiSuggestions }  // ← aiSuggestions 전달
    });
};

    // ── 프로젝트 카드 클릭 ──
    const handleCardClick = (project) => {
        navigate(`/projects/${project.id}`);
    };

    // ── 캐러셀 ──
    const handlePrevCarousel = () => setCarouselIndex(prev => Math.max(prev - 3, 0));
    const handleNextCarousel = () => setCarouselIndex(prev =>
        Math.min(prev + 3, Math.max(0, myProjects.length - ITEMS_PER_VIEW))
    );

    return (
        <S.PageWrapper>
            {/* 모달 */}
            {isModalOpen && (
                <ProjectCreateModal
                    onClose={() => setIsModalOpen(false)}
                    onCreated={handleCreated}
                />
            )}

            <S.Inner>
                <S.PageHeader>
                    <S.PageTitle>Project</S.PageTitle>
                    <S.SubtitleRow>
                        <S.PageSubtitle>나의 프로젝트를 모아보세요.</S.PageSubtitle>
                        <S.BtnCreate onClick={() => setIsModalOpen(true)}>프로젝트 생성</S.BtnCreate>
                    </S.SubtitleRow>
                </S.PageHeader>

                <ProjectMyList
                    projects={myProjects}
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
                        projects={otherProjects}  // MOCK → 실제 데이터로 교체
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                        maxPage={Math.ceil(otherProjects.length / 6)}  // 동적으로 변경
                    />
                </S.Inner>
            </S.CommunitySection>
        </S.PageWrapper>
    );
};

export default ProjectSelectAllContainer;