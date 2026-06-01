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
    const { liked, likeCount, handleLike, selectedLog, aiResult, radarScores, logPatterns } = useOutletContext();
    const [openItems, setOpenItems] = useState([]); // 모든 항목 닫힌 상태로 시작

    const toggleAccordion = (index) => {
        setOpenItems(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index) 
                : [...prev, index]
        );
    };

    const isOpen = (index) => openItems.includes(index);

    if (!aiResult) return <S.Container>분석 결과가 없습니다.</S.Container>;

    // 1. Radar Chart Data
    const userPatterns = radarScores ? radarScores.map(score => ({
        label: score.radarComponent,
        value: score.radarScore
    })) : [];

    // 2. Factor Impact Data
    const factorImpact = {
        external: aiResult.logResultExternalRatio || 50,
        internal: aiResult.logResultInternalRatio || 50
    };

    // 3. Patterns & Habits Data
    const habits = logPatterns ? logPatterns.filter(p => p.patternType === 'HABIT') : [];
    const internalPatterns = logPatterns ? logPatterns.filter(p => p.patternType === 'INTERNAL') : [];
    const externalPatterns = logPatterns ? logPatterns.filter(p => p.patternType === 'EXTERNAL') : [];

    // 4. Failure Flow Data
    const failureReport = {
        flow: [
            { label: '상황', value: aiResult.logResultFlowSituation, color: theme.PALETTE.fourth.main },
            { label: '결정 패턴', value: aiResult.logResultFlowDecision, color: theme.PALETTE.secondary.main },
            { label: '반복 결과', value: aiResult.logResultFlowResult, color: theme.PALETTE.third.main }
        ],
        logAnalysis: [
            { label: '주요 결정', content: aiResult.logResultLogKeyDecision, color: theme.PALETTE.third.main },
            { label: '외부 요인', content: aiResult.logResultLogExternalFactor, color: theme.PALETTE.fourth.main },
            { label: '내부 요인', content: aiResult.logResultLogInternalFactor, color: theme.PALETTE.primary.main }
        ]
    };

    // 5. Summary Section Data
    const higherImpactFactor = factorImpact.internal > factorImpact.external 
        ? `내부 요인 ${factorImpact.internal}%` 
        : `외부 요인 ${factorImpact.external}%`;

    const summaryData = {
        badge: `${aiResult.logResultFailureType} (${higherImpactFactor})`,
        title: aiResult.logResultFailureTitle,
        description: aiResult.logResultFailureDesc,
        quote: aiResult.logResultOneLineSummary,
        quoteSubText: aiResult.logResultOneLineSub
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
                                    {habits.map((habit, idx) => (
                                        <S.ListItem key={`habit-${idx}`}>
                                            <S.ListNum color={theme.PALETTE.fourth.main}>{idx + 1}.</S.ListNum>
                                            <S.ListBody>
                                                <S.ListTitle>{habit.patternTitle}</S.ListTitle>
                                                <S.ListDesc>{habit.patternContent}</S.ListDesc>
                                            </S.ListBody>
                                        </S.ListItem>
                                    ))}
                                </S.ContentCol>
                                <S.ContentCol>
                                    <S.ContentSubTitle>요인에 따른 실패 분류</S.ContentSubTitle>
                                    {/* 내부 요인 출력 */}
                                    {internalPatterns.map((item, idx) => (
                                        <S.ListItem key={`internal-${idx}`}>
                                            <S.ListNum color={theme.PALETTE.fourth.main}>{idx + 1}.</S.ListNum>
                                            <S.ListBody>
                                                <S.ListTitle>{item.patternTitle}</S.ListTitle>
                                                <S.ListDesc>{item.patternContent}</S.ListDesc>
                                            </S.ListBody>
                                        </S.ListItem>
                                    ))}
                                    {/* 외부 요인 출력 (내부 요인 개수 이후부터 번호 시작) */}
                                    {externalPatterns.map((item, idx) => {
                                        const startNum = internalPatterns.length;
                                        return (
                                            <S.ListItem key={`external-${idx}`}>
                                                <S.ListNum color={theme.PALETTE.fourth.main}>{startNum + idx + 1}.</S.ListNum>
                                                <S.ListBody>
                                                    <S.ListTitle>{item.patternTitle}</S.ListTitle>
                                                    <S.ListDesc>{item.patternContent}</S.ListDesc>
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
                                                <S.FlowStep borderColor={step.color} $delay={idx * 0.4}>
                                                    <S.StepLabel>{step.label}</S.StepLabel>
                                                    <S.StepValue>{step.value}</S.StepValue>
                                                </S.FlowStep>
                                                {idx < failureReport.flow.length - 1 && <S.ArrowDown $delay={idx * 0.4 + 0.2}>∨</S.ArrowDown>}
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