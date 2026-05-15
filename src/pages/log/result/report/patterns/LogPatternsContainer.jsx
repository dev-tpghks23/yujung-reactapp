import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import styled, { css, useTheme } from 'styled-components';
import theme from '../../../../../styles/theme';
import RadarChart from './RadarChart';
import DoughnutChart from './DoughnutChart';
import patternIcon from '../../result_icon/pattern.svg';
import habitIcon from '../../result_icon/habit.svg';
import flowIcon from '../../result_icon/flow.svg';

const LogPatternsContainer = () => {
    const theme = useTheme();
    const { liked, likeCount, handleLike, selectedLog } = useOutletContext();
    const [openItems, setOpenItems] = useState([]); // 모든 항목 닫힌 상태로 시작

    const toggleAccordion = (index) => {
        setOpenItems(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index) 
                : [...prev, index]
        );
    };

    const isOpen = (index) => openItems.includes(index);

    // Dynamic data for the radar chart
    // In a real app, this would come from props or an API call
    const userPatterns = [
        { label: '조급함', value: 85 },
        { label: '실행력', value: 45 },
        { label: '타인 의존도', value: 70 },
        { label: '정보 수집량', value: 90 },
        { label: '환경 통제력', value: 40 },
        { label: '비현실적 목표', value: 75 },
    ];

    // Dynamic data for factor impact
    const factorImpact = {
        external: 70,
        internal: 30
    };

    // Dynamic data for habits and classification
    const analysisDetails = {
        habits: [
            { title: '정보 수집에만 시간을 과도하게 쏟음', description: '결정을 미루고 타인의 의견(커뮤니티 등)을 맹신하는 경향이 발생함.' },
            { title: '비현실적인 단기 목표', description: '마감 기한 압박(외부요인)을 받을 때, 자신의 역량을 초과하는 계획을 세움.' }
        ],
        classification: {
            internal: [
                { title: '의욕 과다 및 조급함', description: '스스로를 몰아붙이는 성격이 실패의 주요 원인' }
            ],
            external: [
                { title: '환경적 압박', description: '타이트한 마감 기한과 주변의 기대치' }
            ]
        }
    };

    // Dynamic data for failure flow and log content
    const failureReport = {
        flow: [
            { label: '상황', value: '외부 압박 증가', color: theme.PALETTE.fourth.main },
            { label: '결정 패턴', value: '회피 또는 포기', color: theme.PALETTE.secondary.main },
            { label: '반복 결과', value: '목표 미달성', color: theme.PALETTE.third.main }
        ],
        logAnalysis: [
            { label: '주요 결정', content: '팀원과 갈등이 생겨서 팀원과의 상의를 하지 않고 혼자 방향을 정해서 맘대로 바꾸었다.', color: theme.PALETTE.third.main },
            { label: '외부 요인', content: '마감 일정 압박, 팀원과 다른 의견과 그로 인한 의견 충돌', color: theme.PALETTE.fourth.main },
            { label: '내부 요인', content: '갈등을 해결하려하지 않고 회피하려는 심리, 혼자서도 다 해결할 수 있다는 과신', color: theme.PALETTE.primary.main }
        ]
    };

    // Dynamic data for the top summary section
    const summaryData = {
        badge: `환경 적응형 실패 (외부 요인 ${factorImpact.external}%)`,
        title: '외부 환경 변화에 휩쓸린 실패',
        description: `시장 상황이나 타인의 압박 같은 외부 요인에 영향을 많이 받았습니다. 스스로 주도권을 잡지 못하고 환경에 적응하지 못한 채 내린 결정들이 반복적인 실패 패턴을 만들고 있습니다.`,
        quote: '환경이 어려워질 때, 당신은 주로 집중력을 잃고 회피하는 결정을 내립니다.',
        quoteSubText: '이 로그에서 찾은 핵심 실패 근거였어요. 다음 실천에서 내리는 결정을 한 번 더 점검해보세요.'
    };

    return (
        <S.Container>
            {/* Profile & Like Row */}
            <S.MetaRow>
                <S.AuthorInfo>
                    <S.AuthorName>{selectedLog.author.name}</S.AuthorName>
                </S.AuthorInfo>
                <S.LikeButton onClick={handleLike}>
                    <S.HeartIcon $liked={liked}>
                        <svg width="18" height="16" viewBox="0 0 25 22" fill={liked ? "#FF4B4B" : "none"} xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.19401 0.777345C3.65026 0.777345 0.777344 3.65026 0.777344 7.19401C0.777344 13.6107 8.36068 19.444 12.444 20.8008C16.5273 19.444 24.1107 13.6107 24.1107 7.19401C24.1107 3.65026 21.2378 0.777345 17.694 0.777345C15.524 0.777345 13.6048 1.85476 12.444 3.50384C11.8522 2.66115 11.0661 1.97342 10.1523 1.49883C9.23846 1.02424 8.22374 0.776763 7.19401 0.777345Z"
                                stroke="#FF4B4B"
                                strokeWidth="1.55556"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </S.HeartIcon>
                    <span>{likeCount}</span>
                </S.LikeButton>
            </S.MetaRow>
            {/* Main Header / Summary Section */}
            <S.SummaryHeader>
                <S.Badge>{summaryData.badge}</S.Badge>
                <S.MainTitle>{summaryData.title}</S.MainTitle>
                <S.Description>{summaryData.description}</S.Description>
            </S.SummaryHeader>

            {/* One Line Summary */}
            <S.SectionHeader>한 줄 요약</S.SectionHeader>
            <S.QuoteBox>
                <S.QuoteText>"{summaryData.quote}"</S.QuoteText>
                <S.QuoteSubText>{summaryData.quoteSubText}</S.QuoteSubText>
            </S.QuoteBox>

            {/* Detailed Analysis Section */}
            <S.SectionHeader>분석 세부 사항</S.SectionHeader>
            <S.AccordionList>
                {/* ITEM 1 */}
                <S.AccordionItem $isOpen={isOpen(0)}>
                    <S.AccordionHeader onClick={() => toggleAccordion(0)}>
                        <S.IconWrapper>
                            <S.IconImg src={patternIcon} alt="pattern" />
                        </S.IconWrapper>
                        <S.AccordionTitle>요인별 영향도 & 나의 실패 패턴</S.AccordionTitle>
                        <S.Chevron $isOpen={isOpen(0)} />
                    </S.AccordionHeader>
                    {isOpen(0) && (
                        <S.AccordionContent>
                            <S.ContentRow>
                                <S.ContentCol>
                                    <S.ContentSubTitle>요인별 영향도 비율</S.ContentSubTitle>
                                    <S.DoughnutWrapper>
                                        <S.ChartHeaderInfo>
                                            <S.InfoItem>외부요인 <span style={{ color: theme.PALETTE.primary.main }}>{factorImpact.external}%</span></S.InfoItem>
                                            <S.InfoItem>내부요인 <span style={{ color: theme.PALETTE.third.main }}>{factorImpact.internal}%</span></S.InfoItem>
                                        </S.ChartHeaderInfo>
                                        
                                        <DoughnutChart 
                                            externalValue={factorImpact.external} 
                                            internalValue={factorImpact.internal} 
                                            size={220} 
                                        />

                                        <S.LegendWrapper>
                                            <S.LegendItem>
                                                <S.Dot color={theme.PALETTE.primary.main} />
                                                외부요인 (환경/타인)
                                            </S.LegendItem>
                                            <S.LegendItem>
                                                <S.Dot color={theme.PALETTE.third.main} />
                                                내부요인 (마인드/지식)
                                            </S.LegendItem>
                                        </S.LegendWrapper>
                                    </S.DoughnutWrapper>
                                </S.ContentCol>
                                <S.ContentCol>
                                    <S.ContentSubTitle>나의 실패 패턴</S.ContentSubTitle>
                                    <S.ChartWrapper>
                                        <RadarChart data={userPatterns} size={320} />
                                    </S.ChartWrapper>
                                </S.ContentCol>
                            </S.ContentRow>
                        </S.AccordionContent>
                    )}
                </S.AccordionItem>

                {/* ITEM 2 */}
                <S.AccordionItem $isOpen={isOpen(1)}>
                    <S.AccordionHeader onClick={() => toggleAccordion(1)}>
                        <S.IconWrapper>
                            <S.IconImg src={habitIcon} alt="habit" />
                        </S.IconWrapper>
                        <S.AccordionTitle>자주 반복되는 습관 & 요인에 따른 실패 분류</S.AccordionTitle>
                        <S.Chevron $isOpen={isOpen(1)} />
                    </S.AccordionHeader>
                    {isOpen(1) && (
                        <S.AccordionContent>
                            <S.ContentRow>
                                <S.ContentCol>
                                    <S.ContentSubTitle>자주 반복되는 위험한 습관</S.ContentSubTitle>
                                    {analysisDetails.habits.map((habit, idx) => (
                                        <S.ListItem key={`habit-${idx}`}>
                                            <S.ListNum color={theme.PALETTE.fourth.main}>{idx + 1}.</S.ListNum>
                                            <S.ListBody>
                                                <S.ListTitle>{habit.title}</S.ListTitle>
                                                <S.ListDesc>{habit.description}</S.ListDesc>
                                            </S.ListBody>
                                        </S.ListItem>
                                    ))}
                                </S.ContentCol>
                                <S.ContentCol>
                                    <S.ContentSubTitle>요인에 따른 실패 분류</S.ContentSubTitle>
                                    {/* 내부 요인 출력 */}
                                    {analysisDetails.classification.internal.map((item, idx) => (
                                        <S.ListItem key={`internal-${idx}`}>
                                            <S.ListNum color={theme.PALETTE.fourth.main}>{idx + 1}.</S.ListNum>
                                            <S.ListBody>
                                                <S.ListTitle>{item.title}</S.ListTitle>
                                                <S.ListDesc>{item.description}</S.ListDesc>
                                            </S.ListBody>
                                        </S.ListItem>
                                    ))}
                                    {/* 외부 요인 출력 (내부 요인 개수 이후부터 번호 시작) */}
                                    {analysisDetails.classification.external.map((item, idx) => {
                                        const startNum = analysisDetails.classification.internal.length;
                                        return (
                                            <S.ListItem key={`external-${idx}`}>
                                                <S.ListNum color={theme.PALETTE.fourth.main}>{startNum + idx + 1}.</S.ListNum>
                                                <S.ListBody>
                                                    <S.ListTitle>{item.title}</S.ListTitle>
                                                    <S.ListDesc>{item.description}</S.ListDesc>
                                                </S.ListBody>
                                            </S.ListItem>
                                        );
                                    })}
                                </S.ContentCol>
                            </S.ContentRow>
                        </S.AccordionContent>
                    )}
                </S.AccordionItem>

                {/* ITEM 3 */}
                <S.AccordionItem $isOpen={isOpen(2)}>
                    <S.AccordionHeader onClick={() => toggleAccordion(2)}>
                        <S.IconWrapper>
                            <S.IconImg src={flowIcon} alt="flow" />
                        </S.IconWrapper>
                        <S.AccordionTitle>나의 실패 흐름 & 로그에 나타난 내용</S.AccordionTitle>
                        <S.Chevron $isOpen={isOpen(2)} />
                    </S.AccordionHeader>
                    {isOpen(2) && (
                        <S.AccordionContent>
                            <S.ContentRow>
                                <S.ContentCol>
                                    <S.ContentSubTitle>나의 실패 흐름</S.ContentSubTitle>
                                    <S.FlowWrapper>
                                        {failureReport.flow.map((step, idx) => (
                                            <React.Fragment key={`flow-${idx}`}>
                                                <S.FlowStep borderColor={step.color}>
                                                    <S.StepLabel>{step.label}</S.StepLabel>
                                                    <S.StepValue>{step.value}</S.StepValue>
                                                </S.FlowStep>
                                                {idx < failureReport.flow.length - 1 && <S.ArrowDown>∨</S.ArrowDown>}
                                            </React.Fragment>
                                        ))}
                                    </S.FlowWrapper>
                                </S.ContentCol>
                                <S.ContentCol>
                                    <S.ContentSubTitle>이 로그에서 나타난 내용</S.ContentSubTitle>
                                    {failureReport.logAnalysis.map((item, idx) => (
                                        <S.LogSection key={`log-${idx}`}>
                                            <S.LogLabel color={item.color}>{item.label}</S.LogLabel>
                                            <S.LogText>{item.content}</S.LogText>
                                        </S.LogSection>
                                    ))}
                                </S.ContentCol>
                            </S.ContentRow>
                        </S.AccordionContent>
                    )}
                </S.AccordionItem>
            </S.AccordionList>

        </S.Container>
    );
};

const S = {};

S.Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1096px;
    margin: 0 auto;
`;
S.MetaRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-top: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
    border-bottom: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
    margin-bottom: 50px;
`;

S.AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

S.AuthorName = styled.span`
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.LikeButton = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;

    span {
        font-size: ${({ theme }) => theme.FONT_SIZE.h8};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
        color: ${({ theme }) => theme.TEXT_COLOR.basic};
    }
`;

S.HeartIcon = styled.div`
    width: 18px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.SummaryHeader = styled.div`
    margin-bottom: 45px;
`;

S.Badge = styled.span`
    height: 40px;
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    background-color: transparent;
    color: ${({ theme }) => theme.PALETTE.fourth.main};
    border: 2px solid ${({ theme }) => theme.PALETTE.fourth.main};
    border-radius: 10px;
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    margin-bottom: 20px;
`;


S.MainTitle = styled.h2`
    margin: 0;
    margin-bottom: 13px;
    font-size: ${({ theme }) => theme.FONT_SIZE.h5};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.Description = styled.p`
    margin: 0;
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    line-height: 1.6;
`;

S.SectionHeader = styled.h3`
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    margin-bottom: 16px;

    &::before {
        content: '';
        display: block;
        width: 4px;
        height: 30px;
        background-color: ${({ theme }) => theme.PALETTE.third.main};
        margin-right: 10px;
    }
`;

S.QuoteBox = styled.div`
    background-color: ${({ theme }) => theme.PALETTE.white};
    border: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
    border-radius: 12px;
    padding: 24px 28px;
    margin-bottom: 45px;
`;

S.QuoteText = styled.p`
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    margin-bottom: 8px;
    text-align: left;
`;

S.QuoteSubText = styled.p`
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    color: ${({ theme }) => theme.PALETTE.fourth.main};
    text-align: left;
`;

S.AccordionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const openStyle = css`
    border: 2px solid ${({ theme }) => theme.PALETTE.third.main};
    box-shadow: 0px 4px 20px rgba(171, 71, 255, 0.1);
`;

const closedStyle = css`
    border: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
    box-shadow: none;
`;

S.AccordionItem = styled.div`
    ${({ $isOpen }) => ($isOpen ? openStyle : closedStyle)}
    border-radius: 12px;
    background-color: ${({ theme }) => theme.PALETTE.white};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        border-color: ${({ theme }) => theme.PALETTE.third.main};
    }
`;

S.AccordionHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 0 28px;
    height: 120px;
`;

S.IconWrapper = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    background-color: transparent;
`;

S.IconImg = styled.img`
    width: 100%;
    height: 100%;
`;

S.AccordionTitle = styled.span`
    flex: 1;
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.Chevron = styled.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-right: 2px solid ${({ $isOpen, theme }) => 
        $isOpen ? theme.PALETTE.third.main : theme.GRAYSCALE[5]};
    border-bottom: 2px solid ${({ $isOpen, theme }) => 
        $isOpen ? theme.PALETTE.third.main : theme.GRAYSCALE[5]};
    transform: ${({ $isOpen }) => 
        $isOpen ? 'rotate(-135deg) translateY(3px)' : 'rotate(45deg) translateY(-3px)'};
    transition: transform 0.3s ease, border-color 0.2s;
    flex-shrink: 0;
    margin-bottom: ${({ $isOpen }) => ($isOpen ? '-4px' : '4px')};
`;

S.AccordionContent = styled.div`
    padding: 30px;
    background: ${({ theme }) => theme.PALETTE.white};
    border-top: 1px solid ${({ theme }) => theme.GRAYSCALE[2]};
    overflow: hidden; /* 삐져나옴 방지 */
`;

S.ContentRow = styled.div`
    display: flex;
    margin: -30px; /* padding과 동일하게 설정하여 선을 끝까지 연결 */
`;

S.ContentCol = styled.div`
    flex: 1;
    padding: 40px; /* 내부 여백 확보 */

    &:first-child {
        padding-right: 50px;
        border-right: 1px solid ${({ theme }) => theme.GRAYSCALE[4]};
    }

    &:last-child {
        padding-left: 50px;
    }
`;

S.ContentSubTitle = styled.h4`
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    margin-bottom: 24px;
    text-align: left;
`;

S.PlaceholderImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.GRAYSCALE[1]};
    border-radius: 8px;
    padding: 20px;
`;

S.DoughnutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 20px;
    background-color: ${({ theme }) => theme.PALETTE.white};
    border-radius: 12px;
`;

S.ChartHeaderInfo = styled.div`
    position: absolute;
    top: 20px;
    right: 0px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

S.InfoItem = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.GRAYSCALE[8]};
    text-align: right;

    span {
        margin-left: 8px;
    }
`;

S.LegendWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 30px;
`;

S.LegendItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: ${({ theme }) => theme.GRAYSCALE[10]};
    font-weight: 600;
`;

S.Dot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
`;

S.ChartWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${({ theme }) => theme.PALETTE.white};
    border-radius: 12px;
`;

S.ListItem = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
`;

S.ListNum = styled.span`
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ color }) => color || theme.PALETTE.fourth.main};
`;

S.ListBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

S.ListTitle = styled.div`
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.ListDesc = styled.div`
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    color: ${({ theme }) => theme.GRAYSCALE[10]};
    line-height: 1.5;
`;

S.FlowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

S.FlowStep = styled.div`
    width: 120px;
    height: 60px;
    border: 2px solid ${({ borderColor }) => borderColor || theme.GRAYSCALE[2]};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ theme }) => theme.PALETTE.white};
`;

S.StepLabel = styled.div`
    font-size: 12px;
    color: ${({ theme }) => theme.GRAYSCALE[6]};
    margin-bottom: 4px;
`;

S.StepValue = styled.div`
    font-size: 14px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

S.ArrowDown = styled.div`
    color: ${({ theme }) => theme.GRAYSCALE[4]};
    font-size: 12px;
`;

S.LogSection = styled.div`
    margin-bottom: 24px;
`;

S.LogLabel = styled.div`
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ color }) => color};
    margin-bottom: 8px;
`;

S.LogText = styled.div`
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    line-height: 1.6;
`;

export default LogPatternsContainer;