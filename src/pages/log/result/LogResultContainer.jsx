import React, { useState, useEffect } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import axiosInstance from '../../../api/axiosInstance';
import { S } from './LogResultContainerStyles';
import viewIcon from './result_icon/view_icon.svg';
import likeIcon from './result_icon/like_icon.svg';
import theme from '../../../styles/theme';
const LogResultContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const [logData, setLogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [relatedLogs, setRelatedLogs] = useState([]);
  const [carouselPage, setCarouselPage] = useState(0);

  const getCategoryColor = (categoryName) => {
    switch (categoryName) {
      case "사업/창업":
        return { color: theme.PALETTE.third.main, bg: theme.PALETTE.third.light }; // Purple
      case "공부/취업":
        return { color: theme.PALETTE.primary.main, bg: theme.PALETTE.primary.light }; // Blue
      case "인간관계":
        return { color: theme.PALETTE.fourth.main, bg: theme.PALETTE.fourth.light }; // Red
      case "건강/루틴":
        return { color: theme.PALETTE.secondary.main, bg: theme.PALETTE.secondary.light }; // Green
      case "기타":
      default:
        return { color: theme.GRAYSCALE[10], bg: theme.GRAYSCALE[2] }; // Gray
    }
  };

  const saveToRecentLogs = (logInfo) => {
    const recent = JSON.parse(localStorage.getItem('recentViewedLogs') || '[]');
    const entry = {
      id: logInfo.id,
      title: logInfo.logTitle || '',
      author: logInfo.memberNickname || '익명',
      profileImg: logInfo.memberProfileImageUrl || null,
      date: logInfo.logCreatedAt || '',
    };
    const filtered = recent.filter((item) => item.id !== entry.id);
    localStorage.setItem('recentViewedLogs', JSON.stringify([entry, ...filtered].slice(0, 3)));
  };

  // 실데이터 연동 API 호출
  useEffect(() => {
    const fetchLogData = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`/api/logs/analyze/${id}`);
        if (res.data?.success) {
            setLogData(res.data.data);
            setLikeCount(res.data.data.logInfo.likeCount || 0);
            setLiked(res.data.data.logInfo.isLiked ?? res.data.data.logInfo.liked ?? false);
            saveToRecentLogs(res.data.data.logInfo);

            // 관련 카테고리 로그 가져오기
            const cat = res.data.data.logInfo.categoryName;
            if (cat) {
              const relatedRes = await axiosInstance.get(`/api/logs/category`, {
                params: { category: cat, page: 0, size: 10 }
              });
              if (relatedRes.data?.success) {
                // 현재 로그 제외 (data가 배열인지 객체인지 확인)
                const data = relatedRes.data.data;
                const fetchedList = Array.isArray(data) ? data : (data?.content || []);
                const list = fetchedList.filter(item => String(item.id) !== String(id));
                setRelatedLogs(list);
              }
            }
        }
      } catch (err) {
        console.error("로그 상세 조회 실패:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchLogData();
    }
  }, [id]);

  const handleLike = async () => {
    const prevLiked = liked;
    const prevCount = likeCount;

    setLiked(!prevLiked);
    setLikeCount(prevLiked ? prevCount - 1 : prevCount + 1);

    try {
      await axiosInstance.post(`/api/logs/${id}/like`);
    } catch (err) {
      console.error("좋아요 처리 실패:", err);
      setLiked(prevLiked);
      setLikeCount(prevCount);
    }
  };

  if (loading) {
      return <S.Wrapper><S.Header><S.Title>Loading...</S.Title></S.Header></S.Wrapper>;
  }

  if (!logData) {
      return <S.Wrapper><S.Header><S.Title>데이터를 불러올 수 없습니다.</S.Title></S.Header></S.Wrapper>;
  }

  const { logInfo, aiResult, radarScores, logPatterns, logActionPlans } = logData;
  const categoryStyle = getCategoryColor(logInfo.categoryName);

  // 자식 컴포넌트들이 기존에 기대하던 selectedLog 형태를 맞춰줌
  const selectedLog = {
    id: logInfo.id,
    badges: [
      { 
        label: logInfo.logStatus === "PUBLISHED" ? "분석 완료" : "작성 중", 
        color: theme.PALETTE.secondary.main, 
        bg: theme.PALETTE.secondary.light 
      },
      { label: logInfo.categoryName || "카테고리", color: categoryStyle.color, bg: categoryStyle.bg },
    ],
    title: logInfo.logTitle,
    date: logInfo.logCreatedAt ? logInfo.logCreatedAt.substring(0, 10).replace(/-/g, '.') : "방금 전",
    author: { 
      memberId: logInfo.memberId,
      name: logInfo.memberNickname || "익명",
      profileImg: logInfo.memberProfileImageUrl || '/assets/picture/default-profile.png'
    },
    vision: logInfo.visionTitle,
    content: logInfo.logContent,
    likes: likeCount,
    views: logInfo.logReadCount || 0
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>
          {logData?.logInfo?.isAuthor ? "My Fail Log" : "View Fail Log"}
        </S.Title>
        <S.SubTitle>
          {logData?.logInfo?.isAuthor ? "내가 작성한 페일로그를 확인해보세요." : "다른 사람의 페일로그를 경험해보세요."}
        </S.SubTitle>
      </S.Header>

      <S.ContentWrapper>
        <S.TabBar>
          <S.Tab to={`/logs/result/${id}/detail`}>작성 내용</S.Tab>
          <S.Tab
            to={`/logs/result/${id}/report/patterns`}
            className={location.pathname.includes('/report') ? 'active' : ''}
          >
            분석 결과
          </S.Tab>
        </S.TabBar>

        <S.CardWrapper>
          <S.PurpleShadow />
          <S.Card>
            <Outlet context={{ 
                isMyLog: true, 
                liked, 
                likeCount, 
                handleLike, 
                selectedLog, 
                aiResult, 
                radarScores, 
                logPatterns, 
                logActionPlans 
            }} />
          </S.Card>
        </S.CardWrapper>

        {/* 하단 목록으로 가기 버튼 */}
        <S.BottomActionRow>
          <S.ListButton onClick={() => navigate('/fail-logs')}>목록으로 가기</S.ListButton>
        </S.BottomActionRow>
      </S.ContentWrapper>

      {/* 추천 로그 캐러셀 */}
      {relatedLogs.length > 0 && (() => {
        const ITEMS_PER_PAGE = 3;
        const totalPages = Math.ceil(relatedLogs.length / ITEMS_PER_PAGE);
        const pages = [];
        for (let i = 0; i < relatedLogs.length; i += ITEMS_PER_PAGE) {
          pages.push(relatedLogs.slice(i, i + ITEMS_PER_PAGE));
        }

        return (
          <S.CarouselSection>
            <S.CarouselTitle>나와 같은 목표를 달성하기 위해 도전하는 사람들</S.CarouselTitle>
            <S.CarouselSubTitle>다른 사람들의 생생한 노력/복기 사례를 통해 인사이트를 얻어보세요.</S.CarouselSubTitle>
            <S.CarouselContainer>
              <S.NavButton 
                onClick={() => setCarouselPage(p => Math.max(0, p - 1))} 
                disabled={carouselPage === 0}
                style={{ opacity: carouselPage === 0 ? 0.3 : 1 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="11 17 6 12 11 7"></polyline>
                  <polyline points="18 17 13 12 18 7"></polyline>
                </svg>
              </S.NavButton>
              
              <S.SliderWindow>
                <div style={{ 
                  display: 'flex', 
                  width: `${totalPages * 100}%`, 
                  transform: `translateX(-${carouselPage * (100 / totalPages)}%)`, 
                  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  willChange: 'transform'
                }}>
                  {pages.map((page, pageIdx) => (
                    <S.PageWrapper key={pageIdx} $totalPages={totalPages}>
                      {page.map(log => (
                        <S.RelatedCard key={log.id} onClick={() => navigate(`/logs/result/${log.id}/detail`)}>
                          <S.RelatedBadge style={{ backgroundColor: getCategoryColor(log.categoryName).bg, color: getCategoryColor(log.categoryName).color }}>
                            {log.categoryName || "기타"}
                          </S.RelatedBadge>
                          <S.RelatedDate>{log.logCreatedAt?.substring(0, 10).replace(/-/g, '.')}</S.RelatedDate>
                          <S.RelatedTitle>{log.logTitle}</S.RelatedTitle>
                          <S.RelatedSub>{log.visionTitle}</S.RelatedSub>
                          <S.RelatedFooter>
                            <S.RelatedAuthor 
                                onClick={(e) => { 
                                    e.stopPropagation(); 
                                    navigate(`/user/${log.memberId}/profile`); 
                                }} 
                                style={{ cursor: 'pointer', zIndex: 10, position: 'relative', display: 'flex', alignItems: 'center' }}
                            >
                              <S.AvatarWrap>
                                <img src={log.memberProfileImageUrl || '/assets/picture/default-profile.png'} alt="프로필" onError={(e) => { e.target.onerror = null; e.target.src = '/assets/picture/default-profile.png'; }} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                              </S.AvatarWrap>
                              <span>{log.memberNickname || "익명"}</span>
                            </S.RelatedAuthor>
                            <S.RelatedStats>
                              <span><img src={viewIcon} alt="views" width="12" style={{ marginRight: 4 }} />{log.readCount || 0}</span>
                              <span><img src={likeIcon} alt="likes" width="12" style={{ marginRight: 4 }} />{log.likeCount || 0}</span>
                            </S.RelatedStats>
                          </S.RelatedFooter>
                        </S.RelatedCard>
                      ))}
                    </S.PageWrapper>
                  ))}
                </div>
              </S.SliderWindow>

              <S.NavButton 
                onClick={() => setCarouselPage(p => Math.min(totalPages - 1, p + 1))} 
                disabled={carouselPage >= totalPages - 1}
                style={{ opacity: carouselPage >= totalPages - 1 ? 0.3 : 1 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="13 17 18 12 13 7"></polyline>
                  <polyline points="6 17 11 12 6 7"></polyline>
                </svg>
              </S.NavButton>
            </S.CarouselContainer>
          </S.CarouselSection>
        );
      })()}

    </S.Wrapper>
  );
};

export default LogResultContainer;
