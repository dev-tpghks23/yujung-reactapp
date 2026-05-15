import React, { useState } from 'react';
import { NavLink, Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const LogResultContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const isMyLog = id === "my";
  
  // Lifting up like state
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(38); // Using mock value from relatedPeople for now

  const handleLike = () => {
    setLiked(prev => !prev);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  // Unified Mock Data
  const MOCK_LOGS = [
    { 
      id: "my", 
      category: "공부/취업", 
      date: "2026.03.15", 
      title: "정보처리기사 자격증 필기 도전기", 
      sub: "이론 공부 생략의 대가", 
      author: { name: "필기마스터", avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=faillog" }, 
      views: 45, 
      likes: 24,
      vision: "정보처리기사 합격",
      badges: [
        { label: "분석 완료", color: "#22C55E", bg: "#F0FDF4" },
        { label: "공부/취업", color: "#027DF0", bg: "#DBEAFE" },
      ],
      content: `이론서(기본기) 학습을 완전히 생략하고, 최근 5개년 기출문제 달치기(문제-답 암기)에만 집중하기로 했다. 1과목 (소프트웨어설계)과 2과목 (소프트 웨어 개발)은 용어 위주라 암기로 버텼으나, 4과목 (프로그래밍 언어 활용)과 5과목 (정보시스템 구축 관리)의 신유형 문제에서 완전히 무너졌다. 문제를 조금만 꼬아내도 원리를 몰라서 응용이 불가능했다.\n\n정치기는 기출만 돌리면 무조건 합격한다"는 커뮤니티의 수많은 후기 중 내 입맛에 맞는 글만 골라 읽었다. 본인이 비전공자이거나 기초가 부족한 상태임에도 불구하고, 남들과 똑같은 단기 합격 전략이 통할 것이라고 생각했다. 방대한 양의 이론 공부가 주는 압박감을 피하기 위해 '효율성'이라는 핑계로 '암기'라는 쉬운 길을 선택했다.\n\n회사 병시 준비 기간과 시험 기간이 겹치면서 절대적인 학습 시간이 부족했다. 해당 회차부터 신규 유형 및 실무 위주의 주관식 스타일 객관식 문제가 대거 출제되어, 단순 기출 암기법의 유효기간이 끝났다.\n\n이번 실패를 계기로 단순히 지식을 암기하는 것과 원리를 완전히 이해하는 것의 차이를 뼈저리게 느꼈습니다. 다음 도전에서는 기본서 위주로 전체적인 흐름을 먼저 파악한 뒤, 기출문제를 응용 풀이하는 방식으로 학습 전략을 전면 수정할 계획입니다.\n\n부족한 학습 시간을 보완하기 위해 퇴근 후 최소 3시간 이상의 몰입 학습 시간을 고정적으로 확보하고, 주말에는 신규 유형 문제들을 집중적으로 분석하는 시간을 가질 예정입니다. 남들이 말하는 '지름길'보다는 나에게 맞는 '바른 길'을 선택하는 것이 결국 가장 빠른 방법이라는 것을 깨달았습니다.`
    },
    { 
      id: "1", 
      category: "건강/취업", 
      date: "2026.03.03", 
      title: "정보처리기사 실기 합격하기!", 
      sub: "금연 성공해서 제 건강 회복하기", 
      author: { name: "필기마스터", avatar: "" }, 
      views: 45, 
      likes: 38,
      vision: "건강한 개발자 되기",
      badges: [{ label: "분석 중", color: "#F59E0B", bg: "#FFFBEB" }, { label: "건강/취업", color: "#027DF0", bg: "#DBEAFE" }],
      content: "실기 시험 준비와 동시에 금연을 시작했습니다. 스트레스 관리가 가장 힘들었지만, 건강이 뒷받침되어야 공부도 효율이 난다는 것을 깨달았습니다. 매일 아침 조깅을 병행하며 체력을 길렀고, 결국 실기 시험에서도 좋은 결과를 얻을 수 있었습니다."
    },
    { 
      id: "2", 
      category: "공부/취업", 
      date: "2026.03.04", 
      title: "빅데이터분석기사 도전", 
      sub: "비전공자의 데이터 분석 입문기", 
      author: { name: "데이터러버", avatar: "" }, 
      views: 120, 
      likes: 56,
      vision: "데이터 분석가 데뷔",
      badges: [{ label: "분석 완료", color: "#22C55E", bg: "#F0FDF4" }, { label: "공부/취업", color: "#027DF0", bg: "#DBEAFE" }],
      content: "비전공자로서 통계학적 기초가 부족해 고생했습니다. 하지만 파이썬 라이브러리를 하나씩 익혀가며 데이터의 흐름을 이해하게 되었습니다. 실제 공공 데이터를 활용해 프로젝트를 진행해본 것이 큰 도움이 되었습니다."
    },
    { 
      id: "3", 
      category: "자기계발", 
      date: "2026.03.05", 
      title: "매일 아침 6시 기상 챌린지", 
      sub: "미라클 모닝으로 인생 바꾸기", 
      author: { name: "새벽형인간", avatar: "" }, 
      views: 89, 
      likes: 42,
      vision: "규칙적인 삶",
      badges: [{ label: "분석 완료", color: "#22C55E", bg: "#F0FDF4" }, { label: "자기계발", color: "#9333EA", bg: "#F3E8FF" }],
      content: "처음 일주일은 몸이 천근만근이었습니다. 하지만 아침 1시간의 독서가 제 하루의 밀도를 완전히 바꿔놓았습니다. 이제는 알람 없이도 6시에 눈이 떠지는 습관이 생겼습니다."
    },
    { 
      id: "4", 
      category: "건강/취업", 
      date: "2026.03.06", 
      title: "바디프로필 도전기", 
      sub: "3개월 만에 10kg 감량 성공", 
      author: { name: "운동하는직장인", avatar: "" }, 
      views: 230, 
      likes: 154,
      vision: "최고의 몸 만들기",
      badges: [{ label: "분석 완료", color: "#22C55E", bg: "#F0FDF4" }, { label: "건강/취업", color: "#027DF0", bg: "#DBEAFE" }],
      content: "식단 조절이 가장 큰 고비였습니다. 하지만 변화하는 몸을 거울로 보며 동기부여를 얻었습니다. 운동은 단순히 살을 빼는 것이 아니라 자신감을 채우는 과정임을 배웠습니다."
    },
    { 
      id: "5", 
      category: "공부/취업", 
      date: "2026.03.07", 
      title: "영어 회화 정복하기", 
      sub: "하루 30분씩 꾸준히 하기", 
      author: { name: "글로벌리더", avatar: "" }, 
      views: 67, 
      likes: 29,
      vision: "해외 취업",
      badges: [{ label: "분석 완료", color: "#22C55E", bg: "#F0FDF4" }, { label: "공부/취업", color: "#027DF0", bg: "#DBEAFE" }],
      content: "완벽하게 말하려고 하기보다 틀려도 뱉어보는 연습을 했습니다. 쉐도잉 훈련을 통해 억양과 리듬을 익힌 것이 큰 도움이 되었습니다. 이제는 외국인 동료와 가벼운 대화가 가능합니다."
    },
    { 
      id: "6", 
      category: "자기계발", 
      date: "2026.03.08", 
      title: "독서 100권 읽기 프로젝트", 
      sub: "생각의 깊이를 더하는 시간", 
      author: { name: "책벌레", avatar: "" }, 
      views: 145, 
      likes: 88,
      vision: "지식의 확장",
      badges: [{ label: "분석 완료", color: "#22C55E", bg: "#F0FDF4" }, { label: "자기계발", color: "#9333EA", bg: "#F3E8FF" }],
      content: "장르를 가리지 않고 읽으려고 노력했습니다. 책 속의 한 문장이 제 가치관을 흔드는 경험을 여러 번 했습니다. 100권을 채우는 것보다 그 속에서 무엇을 얻느냐가 더 중요하다는 것을 깨달았습니다."
    },
  ];

  const selectedLog = MOCK_LOGS.find(log => String(log.id) === String(id)) || MOCK_LOGS[0];
  const relatedPeople = MOCK_LOGS.filter(log => log.id !== "my");

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = relatedPeople.length - itemsPerPage;

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>{isMyLog ? "My Fail Log" : "View Fail Log"}</S.Title>
        <S.SubTitle>
          {isMyLog
            ? "내가 작성한 페일로그를 확인해보세요."
            : "다른 사람의 페일로그를 경험해보세요."}
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
            <Outlet context={{ isMyLog, liked, likeCount, handleLike, selectedLog }} />
          </S.Card>
        </S.CardWrapper>

        {/* Carousel Section */}
        <S.CarouselSection>
          <S.CarouselTitle>나와 같은 목표를 달성하기 위해 도전하는 사람들</S.CarouselTitle>
          <S.CarouselSubTitle>다른 사람들의 생생한 노력/복기 사례를 통해 인사이트를 얻어보세요.</S.CarouselSubTitle>

          <S.CarouselContainer>
            <S.NavButton className="left" onClick={handlePrev} disabled={currentIndex === 0}>〈</S.NavButton>
            <S.SliderWindow>
              <S.CardList style={{ transform: `translateX(-${currentIndex * 448}px)` }}>
                {relatedPeople.map((person) => (
                  <S.RelatedCard key={person.id} onClick={() => navigate(`/logs/result/${person.id}/detail`)}>
                    <S.RelatedBadge>{person.category}</S.RelatedBadge>
                    <S.RelatedDate>{person.date}</S.RelatedDate>
                    <S.RelatedTitle>{person.title}</S.RelatedTitle>
                    <S.RelatedSub>{person.sub}</S.RelatedSub>
                    <S.RelatedFooter>
                      <S.RelatedAuthor>{person.author.name}</S.RelatedAuthor>
                      <S.RelatedStats>
                        <span>👁️ {person.views}</span>
                        <span>🤍 {person.likes}</span>
                      </S.RelatedStats>
                    </S.RelatedFooter>
                  </S.RelatedCard>
                ))}
              </S.CardList>
            </S.SliderWindow>
            <S.NavButton className="right" onClick={handleNext} disabled={currentIndex === maxIndex}>〉</S.NavButton>
          </S.CarouselContainer>
        </S.CarouselSection>

      </S.ContentWrapper>
    </S.Wrapper>
  );
};

const S = {};

S.Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #F8F9FA;
  min-height: 100vh;
`;

S.Header = styled.div`
  text-align: left;
  width: 1298px;
  margin-bottom: 100px;
`;

S.Title = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.h2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  margin-bottom: 12px;
`;

S.SubTitle = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.ContentWrapper = styled.div`
  width: 1320px;
`;

S.TabBar = styled.div`
  display: flex;
  gap: 24px;
  width: 1320px;
  margin: 0 auto;
  padding-left: 101px;
  box-sizing: border-box;
  flex-shrink: 0;
`;

S.Tab = styled(NavLink)`
  width: 200px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  text-decoration: none;
  color: ${({ theme }) => theme.PALETTE.third.main};
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[3]};
  border-bottom: 1px solid ${({ theme }) => theme.PALETTE.third.main};
  border-radius: 12px 12px 0 0;
  transition: all 0.2s;
  background: ${({ theme }) => theme.PALETTE.white};
  position: relative;
  top: 1px;
  z-index: 5;

  &.active {
    color: ${({ theme }) => theme.PALETTE.white};
    background-color: ${({ theme }) => theme.PALETTE.third.main};
    border: 1px solid ${({ theme }) => theme.PALETTE.third.main};
    border-bottom: 1px solid ${({ theme }) => theme.PALETTE.third.main};
    z-index: 10;
  }

  &:hover:not(.active) {
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    background-color: ${({ theme }) => theme.GRAYSCALE[1]};
  }
`;

S.CardWrapper = styled.div`
  position: relative;
  width: 1320px;
  padding-right: 22px;
  z-index: 1;
`;

S.PurpleShadow = styled.div`
  position: absolute;
  top: 0;
  left: 22px;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.PALETTE.third.main};
  border-radius: 12px;
  z-index: 0;
`;

S.Card = styled.div`
  background: ${({ theme }) => theme.PALETTE.white};
  border: 1px solid ${({ theme }) => theme.PALETTE.third.main};
  border-radius: 12px;
  padding: 83px 80px 80px;
  position: relative;
  z-index: 1;
  width: 1298px;
  box-sizing: border-box;
  min-height: 800px;
`;

S.CarouselSection = styled.div`
  margin-top: 100px;
  width: 1320px;
  padding-right: 22px;
  box-sizing: border-box;
`;

S.CarouselTitle = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  margin-bottom: 16px;
`;

S.CarouselSubTitle = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  color: ${({ theme }) => theme.GRAYSCALE[6]};
  margin-bottom: 48px;
`;

S.CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
`;

S.SliderWindow = styled.div`
  width: 1320px; /* 424px * 3 + 24px * 2 (gap) */
  overflow: hidden;
  padding: 10px 0;
`;

S.CardList = styled.div`
  display: flex;
  gap: 24px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
`;

S.RelatedCard = styled.div`
  position: relative;
  background: ${({ theme }) => theme.PALETTE.white};
  border: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
  border-radius: 16px;
  padding: 32px 32px;
  width: 424px;
  height: 264px;
  min-width: 424px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0,0,0,0.04);
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.08);
    border-color: ${({ theme }) => theme.PALETTE.third.main};
  }
`;

S.RelatedBadge = styled.span`
  background: ${({ theme }) => theme.PALETTE.secondary.light};
  color: ${({ theme }) => theme.PALETTE.secondary.main};
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: bold;
  align-self: flex-start;
  margin-bottom: 16px;
`;

S.RelatedDate = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  position: absolute;
  right: 32px;
  top: 36px;
`;

S.RelatedTitle = styled.h4`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  margin-bottom: 8px;
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

S.RelatedSub = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
  margin-bottom: 16px;
  line-height: 1.5;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

S.RelatedFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.RelatedAuthor = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.RelatedStats = styled.div`
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: ${({ theme }) => theme.GRAYSCALE[5]};
`;

S.NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 32px;
  color: ${({ theme }) => theme.GRAYSCALE[4]};
  transition: all 0.2s;
  padding: 20px;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.GRAYSCALE[8]};
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.2;
    cursor: default;
  }
`;

export default LogResultContainer;