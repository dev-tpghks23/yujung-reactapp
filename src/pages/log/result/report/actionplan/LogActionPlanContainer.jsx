import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useTheme } from 'styled-components';
import heartActiveIcon from '../../result_icon/heart_active.svg';
import heartInactiveIcon from '../../result_icon/heart_inactive.svg';
import planTargetIcon from './actionplan_icon/plan_target.svg';
import planEnvIcon from './actionplan_icon/plan_env.svg';
import planPartnerIcon from './actionplan_icon/plan_partner.svg';
import planChecklistIcon from './actionplan_icon/plan_checklist.svg';
import { S } from './LogActionPlanContainerStyles';

const LogActionPlanContainer = () => {
    const theme = useTheme();
    const { liked, likeCount, handleLike, selectedLog, aiResult, logActionPlans } = useOutletContext();
    const [openPlanItems, setOpenPlanItems] = useState([]);
    const [openTransformItems, setOpenTransformItems] = useState([]);

    const togglePlan = (id) => {
        setOpenPlanItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    const toggleTransform = (id) => {
        setOpenTransformItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    if (!aiResult) return <S.Container>분석 결과가 없습니다.</S.Container>;

    // Action Plans Classification
    const tryPlans = logActionPlans ? logActionPlans.filter(p => p.logActionPlanType === 'TRY') : [];
    const changePlans = logActionPlans ? logActionPlans.filter(p => p.logActionPlanType === 'CHANGE') : [];

    const actionPlanData = {
        badge: `${aiResult.logResultFailureType} (외부 요인 ${aiResult.logResultExternalRatio || 50}%)`,
        title: aiResult.logResultFailureTitle,
        description: aiResult.logResultFailureDesc,

        attempts: {
            title: "다음에는 이렇게 시도해보자!",
            description: "환경에 휘둘리지 않기 위해 '통제할 수 있는 것'에 집중해야 합니다. 아래의 전략을 다음에 적용해보세요.",
            items: tryPlans.map((plan, idx) => {
                const icons = [planTargetIcon, planEnvIcon, planPartnerIcon, planChecklistIcon];
                return {
                    id: idx + 1,
                    title: plan.logActionPlanTitle,
                    color: "transparent",
                    content: plan.logActionPlanContent,
                    iconSrc: icons[idx % icons.length]
                };
            })
        },

        transformations: {
            title: "이렇게 바뀔 수 있어요!",
            description: "패턴을 발견하는 것만으로도 달라질 수 있어요. 각 항목을 눌러 변화를 확인해보세요.",
            items: changePlans.map((plan, idx) => ({
                id: idx + 1,
                title: plan.logActionPlanTitle,
                color: idx % 2 === 0 ? theme.PALETTE.fourth.main : theme.PALETTE.yellow,
                current: {
                    title: plan.logActionPlanCurrentPattern,
                    desc: plan.logActionPlanCurrentContent
                },
                improved: {
                    title: plan.logActionPlanImprovedPattern,
                    desc: plan.logActionPlanImprovedContent
                }
            }))
        }
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
            {/* Header Section */}
            <S.SummaryHeader>
                <S.Badge>{actionPlanData.badge}</S.Badge>
                <S.MainTitle>{actionPlanData.title}</S.MainTitle>
                <S.Description>{actionPlanData.description}</S.Description>
            </S.SummaryHeader>

            {/* Attempts Section */}
            <S.Section>
                <S.SectionTitle>{actionPlanData.attempts.title}</S.SectionTitle>
                <S.SectionDesc>{actionPlanData.attempts.description}</S.SectionDesc>

                <S.Grid>
                    {actionPlanData.attempts.items.map(item => {
                        const isOpen = openPlanItems.includes(item.id);
                        return (
                            <S.ActionCard key={item.id} $isOpen={isOpen}>
                                <S.CardHeader onClick={() => togglePlan(item.id)}>
                                    <S.IconCircle color={item.color}>
                                        <S.PlanIcon src={item.iconSrc} alt={item.title} />
                                    </S.IconCircle>
                                    <S.CardTitle>{item.title}</S.CardTitle>
                                    <S.Chevron $isOpen={isOpen} />
                                </S.CardHeader>
                                {isOpen && (
                                    <>
                                        <S.Divider />
                                        <S.CardContent>
                                            <p>{item.content}</p>
                                        </S.CardContent>
                                    </>
                                )}
                            </S.ActionCard>
                        );
                    })}
                </S.Grid>
            </S.Section>

            {/* Transformation Section */}
            <S.Section>
                <S.SectionTitle>{actionPlanData.transformations.title}</S.SectionTitle>
                <S.SectionDesc>{actionPlanData.transformations.description}</S.SectionDesc>

                <S.Grid>
                    {actionPlanData.transformations.items.map(item => {
                        const isOpen = openTransformItems.includes(item.id);
                        return (
                            <S.ActionCard key={item.id} $isOpen={isOpen}>
                                <S.CardHeader onClick={() => toggleTransform(item.id)}>
                                    <S.NumberIcon color={item.color}>{item.id}</S.NumberIcon>
                                    <S.CardTitle>{item.title}</S.CardTitle>
                                    <S.Chevron $isOpen={isOpen} />
                                </S.CardHeader>
                                {isOpen && (
                                    <>
                                        <S.Divider />
                                        <S.CardContent>
                                            <S.TransformWrapper>
                                                <S.PatternBox color={theme.PALETTE.fourth.main}>
                                                    <S.PatternLabel color={theme.PALETTE.fourth.main}>현재 패턴</S.PatternLabel>
                                                    <S.PatternMain>{item.current.title}</S.PatternMain>
                                                    <S.PatternDesc>{item.current.desc}</S.PatternDesc>
                                                </S.PatternBox>
                                                <S.ArrowDown>↓</S.ArrowDown>
                                                <S.PatternBox color={theme.PALETTE.secondary.main}>
                                                    <S.PatternLabel color={theme.PALETTE.secondary.main}>변화 패턴</S.PatternLabel>
                                                    <S.PatternMain>{item.improved.title}</S.PatternMain>
                                                    <S.PatternDesc>{item.improved.desc}</S.PatternDesc>
                                                </S.PatternBox>
                                            </S.TransformWrapper>
                                        </S.CardContent>
                                    </>
                                )}
                            </S.ActionCard>
                        );
                    })}
                </S.Grid>
            </S.Section>

        </S.Container>
    );
};

export default LogActionPlanContainer;