import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../../../api/axiosInstance";
import S from "../styles/MyProfileStyle";
import LogStyles from "../../faillog/styles/MyFailLogStyles";
import useSearchStore from "../../../../components/useSearchStore";
import EmptyStateComponent from "../../commons/EmptyStateComponent";
import LogSearchComponent from "../../commons/LogSearchComponent";
import PagenationComponent from "../../../../components/commons/PagenationComponent";
import PostControlBarComponent from "../../commons/ControlBarComponent";
import PostGridSectionComponent from "./PostGridSectionComponent";
import PopupComponent from '../../../../components/commons/PopupComponent';
import { formatRelativeTime } from '../../../../utils/relativeTime';

const PAGE_SIZE = 9;

const stripHtml = (html) => {
  if (!html) return '';
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};

const mapPost = (item) => ({
  id: item.id,
  categoryId: item.categoryId - 1,
  title: item.postTitle || '',
  content: stripHtml(item.postContent),
  author: item.memberNickname || '',
  date: formatRelativeTime(item.postCreatedAt),
  likes: item.likeCount || 0,
  comments: item.replyCount || 0,
  imageUrl: item.postThumbnailUrl || null,
});

const MyCommunityContainer = ({ isPageOwner = true, memberNickname = '', memberId = null }) => {
  const [popup, setPopup] = useState(null);
  const closePopup = () => setPopup(null);
  const showAlert = (message) => setPopup({ message, onConfirm: closePopup });
  const showConfirm = (message, onConfirm) => setPopup({ message, onConfirm, onCancel: closePopup });
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchOption, setSearchOption] = useState("제목");

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { content, setContent, setPage } = useSearchStore();

  const { data: fetchedPosts = [] } = useQuery({
    queryKey: ['myPosts', memberId],
    queryFn: () =>
      axiosInstance.get('/api/posts/my-posts', { params: { memberId } })
        .then((res) => (res.data?.success && Array.isArray(res.data.data?.posts) ? res.data.data.posts.map(mapPost) : [])),
    enabled: !!memberId,
    staleTime: 0,
  });

  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    setAllPosts(fetchedPosts);
  }, [fetchedPosts]);

  const filteredPosts = React.useMemo(() => {
    const keyword = content?.toLowerCase().trim() ?? "";
    if (!keyword) return allPosts;

    return allPosts.filter((post) => {
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
    if (selectedIds.length === 0) return;
    showConfirm('게시글을 삭제 하시겠습니까?', async () => {
      try {
        await Promise.all(selectedIds.map((id) => axiosInstance.delete(`/api/posts/delete/${id}`)));
        setAllPosts((prev) => prev.filter((post) => !selectedIds.includes(post.id)));
        setSelectedIds([]);
        queryClient.invalidateQueries({ queryKey: ['myPosts', memberId] });
        queryClient.invalidateQueries({ queryKey: ['myPostsTotal', memberId] });
        closePopup();
        showAlert('게시글이 삭제되었습니다.');
      } catch (error) {
        console.error('게시글 삭제 실패:', error);
        closePopup();
        showAlert('게시글 삭제 중 오류가 발생했습니다.');
      }
    });
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const selectedCount = selectedIds.length;
  const totalCountOnPage = currentPagePosts.length;

  const isAllChecked =
    totalCountOnPage > 0 &&
    currentPagePosts.every((post) => selectedIds.includes(post.id));

  return (
    <>
      <PopupComponent
        isOpen={!!popup}
        message={popup?.message}
        onConfirm={popup?.onConfirm}
        onCancel={popup?.onCancel}
      />
      <S.CommunityContainer>
        <S.HeaderSection>
          <div>
            {isPageOwner ? (
              <>
                <h3>내 커뮤니티 게시글 관리</h3>
                <p>내가 작성한 커뮤니티 게시글을 관리할 수 있습니다.</p>
              </>
            ) : (
              <h3>{memberNickname || '회원'}님의 커뮤니티 게시글</h3>
            )}
          </div>
        </S.HeaderSection>

        {currentPagePosts.length > 0 || content ? (
          <>
            <LogSearchComponent
              currentOption={searchOption}
              onOptionChange={handleOptionChange}
              onSearchSubmit={handleSearchSubmit}
              styles={LogStyles}
            />

            {currentPagePosts.length > 0 ? (
              <>
                <PostGridSectionComponent
                  posts={currentPagePosts}
                  selectedIds={selectedIds}
                  onSelectOne={handleSelectOne}
                  onNavigateOne={handleNavigate}
                  styles={S}
                  isPageOwner={isPageOwner}
                />

                <S.PaginationWrapper>
                  <PagenationComponent
                    minPage={1}
                    maxPage={totalPages}
                    page={currentPage}
                    onPageChange={handlePageChange}
                  />

                  {isPageOwner && (
                    <S.ControlBarAbsolute>
                      <PostControlBarComponent
                        isAllChecked={isAllChecked}
                        onSelectAll={handleSelectAll}
                        selectedCount={selectedCount}
                        totalCount={totalCountOnPage}
                        onDelete={handleDelete}
                        showRestore={false}
                      />
                    </S.ControlBarAbsolute>
                  )}
                </S.PaginationWrapper>
              </>
            ) : (
              <S.SearchEmptyState>
                선택하신 조건에 맞는 게시글이 존재하지 않습니다.
              </S.SearchEmptyState>
            )}
          </>
        ) : (
          <EmptyStateComponent
            title={isPageOwner ? <>아직 작성한 게시글이 없네요.<br /><strong>페일로그</strong>의 커뮤니티를 이용해볼까요?</>:
              <>아직 {memberNickname || '회원'}님의 게시글이 없어요.</>
            }
            subText={<>실패를 외면하지 않고 기록할 때,<br />당신의 강력한 성장 데이터가 됩니다.</>}
            buttonText={isPageOwner ? "시작하기" : null}
            onButtonClick={() => navigate("/community")}
            styles={S}
          />
        )}
      </S.CommunityContainer>
    </>
  );
};

export default MyCommunityContainer;
