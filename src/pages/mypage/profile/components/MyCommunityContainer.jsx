import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import S from "../styles/MyProfileStyle";
import LogStyles from "../../faillog/styles/MyFailLogStyles";
import useSearchStore from "../../../../components/useSearchStore";
import EmptyStateComponent from "../../commons/EmptyStateComponent";
import LogSearchComponent from "../../commons/LogSearchComponent";
import PagenationComponent from "../../../../components/commons/PagenationComponent";
import PostControlBarComponent from "../../commons/ControlBarComponent";
import PostGridSectionComponent from "./PostGridSectionComponent";
import { DUMMY_COMMUNITY_POSTS } from '../../data/dummyData';

const PAGE_SIZE = 9;

const MyCommunityContainer = () => {
  const [allPosts, setAllPosts] = useState(DUMMY_COMMUNITY_POSTS);
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchOption, setSearchOption] = useState("제목");

  const navigate = useNavigate();
  const { content, setContent, setPage } = useSearchStore();

  const filteredPosts = React.useMemo(() => {
    let posts = allPosts;

    const keyword = content?.toLowerCase().trim() ?? "";
    if (!keyword) return posts;

    return posts.filter((post) => {
      switch (searchOption) {
        case "내용": return post.content.toLowerCase().includes(keyword);
        case "제목+내용":
          return post.title.toLowerCase().includes(keyword) || post.content.toLowerCase().includes(keyword);
        case "작성자": return post.author.toLowerCase().includes(keyword);
        case "댓글": return post.comments.toString().includes(keyword);
        default: return post.title.toLowerCase().includes(keyword);
      }
    });
  }, [allPosts, content, searchOption]);

  const totalPages = Math.ceil(filteredPosts.length / PAGE_SIZE);
  const safeCurrentPage = totalPages > 0 ? Math.min(currentPage, totalPages) : 1;
  const currentPagePosts = filteredPosts.slice(
    (safeCurrentPage - 1) * PAGE_SIZE,
    (safeCurrentPage - 1) * PAGE_SIZE + PAGE_SIZE,
  );

  useEffect(() => {
    setCurrentPage((prev) => prev !== safeCurrentPage ? safeCurrentPage : prev);
    setSelectedIds([]);
  }, [safeCurrentPage]);

  const handleOptionChange = (option) => setSearchOption(option);
  const handleSearchSubmit = (value) => {
    setContent(value);
    setPage(1);
    setCurrentPage(1);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(currentPagePosts.map((post) => post.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleNavigate = (id) => {
    navigate(`/community/detail/${id}`);
  };

  const handleDelete = () => {
    if (selectedIds.length === 0) return alert("삭제할 게시글을 선택해주세요.");
    
    if (window.confirm(`${selectedIds.length}개의 게시글을 삭제하시겠습니까?`)) {
      const nextPosts = allPosts.filter((post) => !selectedIds.includes(post.id));
      setAllPosts(nextPosts);
      setSelectedIds([]);
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const selectedCount = selectedIds.length;
  const totalCountOnPage = currentPagePosts.length;

  const isAllChecked = 
    totalCountOnPage > 0 && 
    currentPagePosts.every((post) => selectedIds.includes(post.id));

  return (
    <S.CommunityContainer>
      <S.HeaderSection style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h3>내 커뮤니티 게시글 관리</h3>
          <p>내가 작성한 커뮤니티 게시글을 관리할 수 있습니다.</p>
        </div>
      </S.HeaderSection>

      {currentPagePosts.length > 0 || content ? (
        <>
          <S.SearchCenterWrapper>
            <LogSearchComponent
              currentOption={searchOption}
              onOptionChange={handleOptionChange}
              onSearchSubmit={handleSearchSubmit}
              styles={LogStyles}
            />
          </S.SearchCenterWrapper>
          
          {currentPagePosts.length > 0 ? (
            <>
              <PostGridSectionComponent 
                posts={currentPagePosts}
                selectedIds={selectedIds}
                onSelectOne={handleSelectOne}
                onNavigateOne={handleNavigate}
                styles={S}
              />

              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1200px',
                margin: '40px auto 0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <PagenationComponent
                  minPage={1}
                  maxPage={totalPages}
                  page={currentPage}
                  onPageChange={handlePageChange}
                />
                
                <div style={{ position: 'absolute', right: 0 }}>
                  <PostControlBarComponent 
                    isAllChecked={isAllChecked}
                    onSelectAll={handleSelectAll}
                    selectedCount={selectedCount}
                    totalCount={totalCountOnPage}
                    onDelete={handleDelete}
                    showRestore={false}
                    styles={S}
                  />
                </div>
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "100px 0", color: "#64748B", fontSize: "15px" }}>
              선택하신 조건에 맞는 게시글이 존재하지 않습니다.
            </div>
          )}
        </>
      ) : (
        <EmptyStateComponent
          title={<>아직 작성한 게시글이 없네요.<br /><strong>페일로그</strong>의 커뮤니티를 이용해볼까요?</>}
          subText={<>실패를 외면하지 않고 기록할 때,<br />당신의 강력한 성장 데이터가 됩니다.</>}
          buttonText="시작하기"
          onButtonClick={() => navigate("/community")}
          styles={S}
        />
      )}
    </S.CommunityContainer>
  );
};

export default MyCommunityContainer;