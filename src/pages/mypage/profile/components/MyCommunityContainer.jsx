import React, { useEffect, useState } from "react";
import MyCommunityPostCard from "./MyCommunityPostCard";
import { useNavigate } from "react-router-dom";
import S from "../styles/MyProfileStyle";
import PagenationComponent from "../../../../components/commons/PagenationComponent";
import SearchbarComponent from "../../../../components/commons/SearchbarComponent";
import useSearchStore from "../../../../components/useSearchStore";

const MyCommunityContainer = () => {
  // 초기값을 빈 배열로 두어 API 연동 구조를 유지합니다.
  const [posts, setPosts] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);

  const navigate = useNavigate();
  const { content, setContent, setPage } = useSearchStore();

  const handleSearchSubmit = (value) => {
    console.log("전달받은 검색어:", value);

    setContent(value); // 스토어에 검색어 저장
    setPage(1);
  };

  // 테스트용 더미 데이터 생성 함수
  const getDummyPosts = (page) => [
    {
      id: (page - 1) * 3 + 1,
      category: "취업/이직",
      title: `${page}페이지 - Asunica 최종 면접 준비 중 발견한 코드 오류`,
      content:
        "오늘 프로젝트를 정리하다가 스타일 경로가 꼬인 것을 발견했다. 당황했지만 Git 복구를 통해 해결!",
      date: "2026.05.14",
      thumbnail: "https://via.placeholder.com/324x184",
      profile: "https://via.placeholder.com/14x14",
      author: "김세종",
      views: 128,
      likes: 15,
      comments: 3,
    },
    {
      id: (page - 1) * 3 + 2,
      category: "공부",
      title: `${page}페이지 - React 공통 컴포넌트 설계의 어려움`,
      content:
        "페이지네이션 컴포넌트를 만들면서 그룹화 로직을 구현하는 게 생각보다 까다로웠다.",
      date: "2026.05.13",
      thumbnail: "https://via.placeholder.com/324x184",
      profile: "https://via.placeholder.com/14x14",
      author: "김세종",
      views: 85,
      likes: 10,
      comments: 1,
    },
    {
      id: (page - 1) * 3 + 3,
      category: "일상",
      title: `${page}페이지 - 오늘의 실패: 커피를 쏟은 키보드`,
      content:
        "코딩에 집중하다가 커피를 쏟았다. 하드웨어 관리는 정말 중요하다.",
      date: "2026.05.12",
      thumbnail: "https://via.placeholder.com/324x184",
      profile: "https://via.placeholder.com/14x14",
      author: "김세종",
      views: 210,
      likes: 42,
      comments: 8,
    },
  ];

  useEffect(() => {
    // 1. 전체 가상 데이터를 먼저 가져옵니다 (실제로는 서버에서 전체 개수를 받아와야 함)
    // 여기서는 테스트를 위해 모든 페이지의 데이터를 합친 것처럼 가정하거나,
    // 검색어가 있을 때와 없을 때의 총 개수를 가공합니다.
    const allSamplePosts = getDummyPosts(currentPage); // 현재는 페이지별로 가져오고 있음

    // 2. 검색어 필터링
    const filtered = content
      ? allSamplePosts.filter((post) =>
          post.title.toLowerCase().includes(content.toLowerCase()),
        )
      : allSamplePosts;

    setPosts(filtered);

    // 3. 페이지네이션 동적 계산
    // 실제 API 연동 시에는 서버에서 '검색 결과 총 개수(totalCount)'를 보내주면 그 값을 사용합니다.
    // 현재는 더미 데이터 기준이므로, 필터된 결과가 있으면 최소 1페이지는 보여주도록 설정합니다.
    if (content) {
      // 검색 시: 검색된 결과가 있으면 1페이지, 없으면 0페이지 (혹은 1)
      setTotalPages(filtered.length > 0 ? 1 : 1);
    } else {
      // 검색 없을 때: 기존처럼 테스트용 10페이지 유지
      setTotalPages(10);
    }

    setSelectedIds([]);
  }, [currentPage, content]);
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(posts.map((post) => post.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleDelete = () => {
    if (selectedIds.length === 0) return alert("삭제할 게시글을 선택해주세요.");
    if (
      window.confirm(`${selectedIds.length}개의 게시글을 삭제하시겠습니까?`)
    ) {
      setPosts(posts.filter((post) => !selectedIds.includes(post.id)));
      setSelectedIds([]);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <S.CommunityContainer>
      <S.HeaderSection>
        <h3>내 커뮤니티 게시글 관리</h3>
        <p>내가 작성한 커뮤니티 게시글을 관리할 수 있습니다.</p>
      </S.HeaderSection>

      {posts.length > 0 ? (
        <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <SearchbarComponent
          placeholder="궁금한 실패 사례를 검색해보세요!"
          onSubmit={handleSearchSubmit}
        />
      </div>
          <S.PostGrid>
            {posts.map((post) => (
              <MyCommunityPostCard
                key={post.id}
                post={post}
                isSelected={selectedIds.includes(post.id)}
                onSelect={() => handleSelectOne(post.id)}
              />
            ))}
          </S.PostGrid>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PagenationComponent
              minPage={1}
              maxPage={totalPages}
              page={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
      <S.ControlBar>
        <S.ControlLeft>
          <div className="all-check-wrapper">
            <input
              type="checkbox"
              id="all-check"
              onChange={handleSelectAll}
              checked={selectedIds.length === posts.length && posts.length > 0}
            />
            <label htmlFor="all-check">전체 선택</label>
          </div>
          <S.DeleteBtn onClick={handleDelete}>선택 삭제</S.DeleteBtn>
        </S.ControlLeft>
      </S.ControlBar>
        </>
      ) : (
        <S.EmptyStateWrapper>
          <S.EmptyTitle>
            아직 작성한 게시글이 없네요.
            <br />
            <strong>페일로그</strong>의 커뮤니티를 이용해볼까요?
          </S.EmptyTitle>
          <S.EmptySubText>
            실패를 외면하지 않고 기록할 때,
            <br />
            당신의 강력한 성장 데이터가 됩니다.
          </S.EmptySubText>
          <S.StartButton onClick={() => navigate("/community")}>
            시작하기
          </S.StartButton>
        </S.EmptyStateWrapper>
      )}
    </S.CommunityContainer>
  );
};

export default MyCommunityContainer;
