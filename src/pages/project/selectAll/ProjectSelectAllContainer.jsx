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
    const [otherProjects, setOtherProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

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

    // ── 프로젝트 검색 ──
    const handleSearch = async (keyword) => {
        setCurrentPage(1); // 검색 시 1페이지로 초기화
        if (!keyword) {
            fetchOtherProjects();
            return;
        }
        try {
            const response = await axios.get(`/api/project/search?keyword=${keyword}`);
            setOtherProjects(response.data.data || []);
        } catch (err) {
            console.error('프로젝트 검색 실패:', err);
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
                    onCardClick={handleCardClick}
                />
            </S.Inner>

            <S.CommunitySection>
                <S.Inner>
                    <ProjectOtherSearch onSearch={handleSearch} />
                    <ProjectOtherList
                        projects={otherProjects.slice((currentPage - 1) * 9, currentPage * 9)}
                        currentPage={currentPage}
                        onPageChange={(page) => {
                            setCurrentPage(page);
                        }}
                        maxPage={Math.ceil(otherProjects.length / 9)}
                    />
                </S.Inner>
            </S.CommunitySection>
        </S.PageWrapper>
    );
};

export default ProjectSelectAllContainer;