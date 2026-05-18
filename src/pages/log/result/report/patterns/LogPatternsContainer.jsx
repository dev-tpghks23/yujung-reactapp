import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useTheme } from 'styled-components';
import heartActiveIcon from '../../result_icon/heart_active.svg';
import heartInactiveIcon from '../../result_icon/heart_inactive.svg';
import RadarChart from './RadarChart';
import DoughnutChart from './DoughnutChart';
import patternIcon from '../../result_icon/pattern.svg';
import habitIcon from '../../result_icon/habit.svg';
import flowIcon from '../../result_icon/flow.svg';
import { S } from './LogPatternsContainerStyles';

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
                    <S.HeartIcon>
                        <img src={liked ? heartActiveIcon : heartInactiveIcon} alt="heart" />
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
                                    <S.ContentSubTitle $center>요인별 영향도 비율</S.ContentSubTitle>
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
                                    <S.ContentSubTitle $center>나의 실패 패턴</S.ContentSubTitle>
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

export default LogPatternsContainer;