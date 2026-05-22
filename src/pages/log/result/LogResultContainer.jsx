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

  // 실데이터 연동 API 호출
  useEffect(() => {
    const fetchLogData = async () => {
      try {
        setLoading(true);
        // GET /api/logs/analyze/{logId} 호출
        const res = await axiosInstance.get(`/api/logs/analyze/${id}`);
        if (res.data?.success) {
            setLogData(res.data.data);
            setLikeCount(res.data.data.logInfo.likeCount || 0);
            setLiked(false);
        }
      } catch (err) {
        console.error("로그 데이터 불러오기 실패:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchLogData();
    }
  }, [id]);

  const handleLike = () => {
    setLiked(prev => !prev);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
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
      { label: logInfo.logStatus === "PUBLISHED" ? "분석 완료" : "작성 중", color: "#22C55E", bg: "#F0FDF4" },
      { label: logInfo.categoryName || "카테고리", color: categoryStyle.color, bg: categoryStyle.bg },
    ],
    title: logInfo.logTitle,
    date: logInfo.logCreatedAt ? logInfo.logCreatedAt.substring(0, 10).replace(/-/g, '.') : "방금 전",
    author: { name: logInfo.memberNickname || "나" },
    vision: logInfo.visionTitle,
    content: logInfo.logContent,
    likes: likeCount,
    views: logInfo.logReadCount || 0
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>My Fail Log</S.Title>
        <S.SubTitle>내가 작성한 페일로그를 확인해보세요.</S.SubTitle>
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
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default LogResultContainer;
