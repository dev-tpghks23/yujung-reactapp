import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import S from './LogPopularSolutionStyle';
import axiosInstance from '../../../api/axiosInstance';
import { goToMemberProfile } from '../../../utils/profileNavigation';
import TrumpetIcon from './otherLog_icon/1ee6415a019300001 1.png';
import FeroIcon from './otherLog_icon/chatbot_10541415.svg';
import ArrowIcon from './otherLog_icon/uiw--right.svg';

const LogPopularSolution = () => {
    const [cards, setCards] = useState([]);
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const CARD_WIDTH = 280 + 20;
    const VISIBLE = 3;

    // 인기 솔루션 목록 API 호출
    useEffect(() => {
        const fetchPopularSolutions = async () => {
            try {
                const res = await axiosInstance.get('/api/logs/popular-solutions');
                if (res.data?.success) {
                    setCards(res.data.data);
                }
            } catch (err) {
                console.error('인기 솔루션 조회 실패:', err);
            }
        };
        fetchPopularSolutions();
    }, []);

    const handlePrev = () => setIndex(i => Math.max(0, i - 1));
    const handleNext = () => setIndex(i => Math.min(Math.max(0, cards.length - VISIBLE), i + 1));

    return (
        <S.Wrapper>
            <S.Inner>

                <S.TitleWrap>
                    <S.TrumpetIcon src={TrumpetIcon} alt="trumpet" />
                    <h2 className="solutions-title">인기있는 솔루션</h2>
                </S.TitleWrap>

                <S.Viewport>
                    <S.Track style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}>
                        {cards.map((card, i) => (
                            <S.Card key={i} onClick={() => navigate(`/logs/result/${card.logId}/detail`)} style={{ cursor: 'pointer' }}>

                                {/* 프로필 */}
                                <S.Profile onClick={(e) => { e.stopPropagation(); goToMemberProfile(navigate, card.memberId); }} style={{ cursor: 'pointer' }}>
                                    <S.ProfileCircle>
                                        <S.ProfileImg
                                            src={card.memberProfileImageUrl || '/assets/picture/default-profile.png'}
                                            alt={card.memberNickname}
                                            onError={(e) => { e.target.onerror = null; e.target.src = '/assets/picture/default-profile.png'; }}
                                        />
                                    </S.ProfileCircle>
                                    <S.Nickname>{card.memberNickname}</S.Nickname>
                                </S.Profile>

                                {/* 실패 텍스트 박스 (로그 제목) */}
                                <S.FailTextBox>
                                    <S.FailText>{card.logTitle}</S.FailText>
                                </S.FailTextBox>

                                {/* 페로 라벨 */}
                                <S.SolLabel>
                                    <S.SolLabelText>페로</S.SolLabelText>
                                    <S.SolIconWrap>
                                        <S.SolIcon src={FeroIcon} alt="fero" />
                                    </S.SolIconWrap>
                                </S.SolLabel>

                                {/* 솔루션 요약 박스 (패턴 분석 내용) */}
                                <S.SolSummaryBox>
                                    <S.SolSummary>{card.logResultFailureDesc}</S.SolSummary>
                                </S.SolSummaryBox>

                            </S.Card>
                        ))}
                    </S.Track>
                </S.Viewport>

                <S.NavButtons>
                    <S.NavBtn onClick={handlePrev}>
                        <S.NavIconLeft src={ArrowIcon} alt="prev" />
                    </S.NavBtn>
                    <S.NavBtn onClick={handleNext}>
                        <S.NavIcon src={ArrowIcon} alt="next" />
                    </S.NavBtn>
                </S.NavButtons>

            </S.Inner>
        </S.Wrapper>
    );
};

export default LogPopularSolution;