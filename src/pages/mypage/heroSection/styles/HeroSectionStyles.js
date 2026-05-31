import styled from "styled-components";

const S = {};

// 1. 최상위 섹션
S.HeroSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
`;

// 2. 메인 그리드 (배너 1.5 : 퀵메뉴 1)
S.HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr; 
  gap: 20px;
  width: 100%;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

// 3. 왼쪽 큰 배너 내부 그래픽 (배너보다 먼저 선언해야 참조 가능)
S.MainGraphic = styled.div`
  position: absolute;
  z-index: 1;
  transition: all 0.3s ease;
  
  /* ✅ 기본 크기를 줄여서 글자 침범 방지 */
  width: 70%; 
  bottom: -10%;

  ${props => props.$align === "right" 
    ? "left: -5%; right: auto;" 
    : "right: -5%; left: auto;"
  }

  img { 
    width: 100%; 
    height: auto; 
    object-fit: contain; 
  }
`;

// 4. 왼쪽 큰 배너
S.HeroBanner = styled.div`
  aspect-ratio: 648 / 730; 
  background-color: ${props => props.$bgColor || "#E8EBFD"};
  border-radius: 25px;
  padding: 8% 8%;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  overflow: hidden; /* ✅ 이미지가 배너 밖으로 나가는 것 방지 */
  transition: all 0.3s ease-in-out;

  align-items: ${props => props.$align === "right" ? "flex-end" : "flex-start"};

  .TextGroup {
    position: relative;
    z-index: 2; /* ✅ 이미지보다 위에 오도록 설정 */
    text-align: ${props => props.$align === "right" ? "right" : "left"};
    & > * { margin: 0; white-space: nowrap; }
    h3 { font-size: clamp(16px, 2vw, 24px); font-weight: 400; color: #5D5FEF; line-height: 1.4; }
    h2 { font-size: clamp(28px, 4vw, 45px); font-weight: 800; color: #2D3494; line-height: 1.2; margin-top: 5px; }
    p { font-size: clamp(16px, 2vw, 24px); font-weight: 400; color: #4B5563; line-height: 1.4; margin-top: 5px; }
  }

  /* ✅ ID별 이미지 세부 조정 (배너 안으로 검거) */
  ${props => props.$id === "fail-logs" && `
    ${S.MainGraphic} { width: 90%; bottom: -1%; right: 0%; }
  `}

  ${props => props.$id === "my-fail-log" && `
    ${S.MainGraphic} { width: 60%; bottom: 0%; right: 0%; }
  `}

  ${props => props.$id === "likes" && `
    ${S.MainGraphic} { width: 50%; bottom: -1%; left: 0%; }
  `}

  ${props => props.$id === "guestbook" && `
    ${S.MainGraphic} { width: 60%; bottom: 0%; right: 0%; }
  `}

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }
`;

// 5. 오른쪽 퀵 메뉴 그룹
S.QuickMenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

// 퀵 카드의 공통 베이스 스타일
const BaseCard = styled.div`
  aspect-ratio: 424 / 236;
  border-radius: 24px;
  position: relative;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 8% 10%;
  transition: all 0.3s ease-in-out;

  align-items: ${props => props.$align === "right" ? "flex-end" : "flex-start"};

  .CardText {
    position: relative;
    z-index: 2;
    text-align: ${props => props.$align === "right" ? "right" : "left"};
    & > * { margin: 0; white-space: nowrap; }
    h3 { font-size: clamp(14px, 1.5vw, 20px); font-weight: 400; color: #5D5FEF; }
    h2 { font-size: clamp(20px, 3vw, 36px); font-weight: 700; color: #1E293B; margin-top: 2px; }
    span { font-size: clamp(14px, 1.5vw, 20px); color: #64748B; margin-top: 2px; }
  }

  &:hover {
    transform: ${props => props.$disabled ? 'none' : 'translateY(-8px)'};
    box-shadow: ${props => props.$disabled ? 'none' : '0 12px 30px rgba(0, 0, 0, 0.1)'};
  }
`;

// 6. 카드 내부 아이콘 (공통)
S.CardIcon = styled.div`
  position: absolute;
  z-index: 5;
  img { width: 100%; height: auto; object-fit: contain; }

  ${props => props.$align === "right" 
    ? "left: -5%; right: auto; bottom: -5%;" 
    : "right: -5%; left: auto; bottom: -5%;"
  }
`;

// 7. 개별 퀵 카드 스타일
S.FailLogQuickCard = styled(BaseCard)`
  background-color: #E8EBFD;
  ${S.CardIcon} { width: 48%; bottom: -12%; }
`;

S.MyLogCard = styled(BaseCard)`
  background-color: #F0F3FF;
  ${S.CardIcon} { width: 42%; bottom: -5%; }
`;

S.LikesCard = styled(BaseCard)`
  background-color: #EBF8FF;
  ${S.CardIcon} { width: 38%; left: -5%; bottom: -2%; }
`;

S.GuestBookCard = styled(BaseCard)`
  background-color: #EEF2FF;
  ${S.CardIcon} { width: 44%; bottom: -8%; transform: rotate(-2deg); }
`;

export default S;