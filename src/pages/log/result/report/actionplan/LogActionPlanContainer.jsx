import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import theme from '../../../../../styles/theme';
import planTargetIcon from './actionplan_icon/plan_target.svg';
import planEnvIcon from './actionplan_icon/plan_env.svg';
import planPartnerIcon from './actionplan_icon/plan_partner.svg';
import planChecklistIcon from './actionplan_icon/plan_checklist.svg';

const LogActionPlanContainer = () => {
    const theme = useTheme();
    const { liked, likeCount, handleLike, selectedLog } = useOutletContext();
    const [openPlanItems, setOpenPlanItems] = useState([]);
    const [openTransformItems, setOpenTransformItems] = useState([]);

    const togglePlan = (id) => {
        setOpenPlanItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    const toggleTransform = (id) => {
        setOpenTransformItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    // Dynamic data for the Action Plan
    const actionPlanData = {
        badge: "환경 적응형 실패 (외부 요인 70%)",
        title: "외부 환경 변화에 휩쓸린 실패",
        description: `시장 상황이나 타인의 압박 같은 외부 요인에 영향을 많이 받았습니다. 스스로 주도권을 잡지 못하고 환경에 적응하지 못한 채 내린 결정들이 반복적인 실패 패턴을 만들고 있습니다.`,

        attempts: {
            title: "다음에는 이렇게 시도해보자!",
            description: "환경에 휘둘리지 않기 위해 '통제할 수 있는 것'에 집중해야 합니다. 아래의 전략을 다음에 적용해보세요.",
            items: [
                {
                    id: 1,
                    title: "목표 크기 줄이기",
                    color: "transparent",
                    content: "처음부터 거창한 목표를 세우기보다, 당장 실천 가능한 아주 작은 단위로 목표를 쪼개어 시작해보세요. 작은 성공의 경험이 큰 변화를 만듭니다.",
                    iconSrc: planTargetIcon
                },
                {
                    id: 2,
                    title: "환경 또는 공간에 변화 주기",
                    color: "transparent",
                    content: "집중이 잘 되지 않는 환경이라면 장소를 옮기거나, 주변 물건을 정리하여 시각적 자극을 줄여보세요. 낯선 공간이 새로운 영감을 줍니다.",
                    iconSrc: planEnvIcon
                },
                {
                    id: 3,
                    title: "동료에게 피드백 요청하기",
                    color: "transparent",
                    content: "실패의 원인을 혼자 찾기 어려울 때는 주변 동료나 멘토에게 솔직한 피드백을 구해보세요. 다른 사람의 시선에서 본 나의 행동 패턴이 예상치 못한 해결책을 제시해 줄 수 있습니다.",
                    iconSrc: planPartnerIcon
                },
                {
                    id: 4,
                    title: "체크리스트 설정 및 관리하기",
                    color: "transparent",
                    content: "매일 해야 할 일들을 명확하게 체크리스트로 작성하고 관리해보세요. 해야 할 일이 시각적으로 확인되면 막연한 부담감이 줄어들고, 하나씩 완료해 나가는 과정에서 확실한 성취감을 느낄 수 있습니다.",
                    iconSrc: planChecklistIcon
                }
            ]
        },

        transformations: {
            title: "이렇게 바뀔 수 있어요!",
            description: "패턴을 발견하는 것만으로도 달라질 수 있어요. 각 항목을 눌러 변화를 확인해보세요.",
            items: [
                {
                    id: 1,
                    title: "갈등 상황에서의 결정",
                    color: theme.PALETTE.fourth.main,
                    current: {
                        title: "갈등 상황 → 즉시 회피 결정",
                        desc: "압박이 생기면 바로 혼자 결정하거나 포기해버려요. 감정이 판단을 앞서고 있어요."
                    },
                    improved: {
                        title: "갈등 상황 → 24시간 후 결정",
                        desc: "즉각 반응 대신 하루 뒤 다시 생각하는 규칙을 만들면 감정적인 판단이 줄어 이성적인 판단을 할 수 있어요."
                    }
                },
                {
                    id: 2,
                    title: "일을 처리하는 방식",
                    color: theme.PALETTE.yellow,
                    current: {
                        title: "남들의 속도 → 즉시 처리 압박",
                        desc: "타인의 피드백이나 속도에 예민하게 반응하여, 내 페이스를 잃고 서두르다 실수가 발생합니다."
                    },
                    improved: {
                        title: "나만의 페이스 → 핵심 업무 집중",
                        desc: "불필요한 주변 상황에 에너지를 뺏기지 않고, 우선순위에 따라 핵심적인 업무에 몰입할 수 있게 됩니다."
                    }
                }
            ]
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
    color: ${({ theme }) => theme.PALETTE.black};
    line-height: 1.6;
    max-width: 900px;
`;

S.Section = styled.div`
    margin-bottom: 60px;
`;

S.SectionTitle = styled.h3`
    font-size: ${({ theme }) => theme.FONT_SIZE.h6};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    margin-bottom: 12px;
`;

S.SectionDesc = styled.p`
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    color: ${({ theme }) => theme.GRAYSCALE[9]};
    margin-bottom: 18px;
`;

S.Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-items: start;
`;

S.ActionCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 536px;
    min-height: 60px;
    background-color: ${({ theme }) => theme.PALETTE.white};
    border: 1px solid ${({ theme, $isOpen }) => $isOpen ? theme.PALETTE.third.main : theme.GRAYSCALE[3]};
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
    overflow: hidden;

    &:hover {
        border-color: ${({ theme }) => theme.PALETTE.third.main};
    }
`;

S.CardHeader = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    padding: 12px 20px;
`;

S.Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.GRAYSCALE[3]};
`;

S.CardContent = styled.div`
    padding: 16px 58px;
    display: flex;
    justify-content: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
    color: ${({ theme }) => theme.PALETTE.black};
    line-height: 1.6;
    word-break: keep-all;

    p {
        margin: 0;
        text-align: left;
        width: fit-content;
        max-width: 100%;
    }
`;

S.IconCircle = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background-color: ${({ color }) => color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-right: 14px;
    color: white;
`;

S.PlanIcon = styled.img`
    width: 24px;
    height: 24px;
`;

S.CardTitle = styled.span`
    flex: 1;
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
`;

S.NumberIcon = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background-color: ${({ color }) => color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: white;
    margin-right: 14px;
`;

S.Chevron = styled.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-right: 2px solid ${({ theme }) => theme.GRAYSCALE[5]};
    border-bottom: 2px solid ${({ theme }) => theme.GRAYSCALE[5]};
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(-135deg)' : 'rotate(45deg)'};
    transition: transform 0.3s ease;
    margin-left: 10px;
`;

S.TransformWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
`;

S.PatternBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    max-width: 400px;
`;

S.PatternLabel = styled.span`
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${props => props.color};
    margin-bottom: 12px;
`;

S.PatternMain = styled.div`
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    color: ${({ theme }) => theme.TEXT_COLOR.basic};
    margin-bottom: 8px;
`;

S.PatternDesc = styled.div`
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
    color: ${({ theme }) => theme.GRAYSCALE[6]};
    line-height: 1.5;
`;

S.ArrowDown = styled.div`
    color: ${({ theme }) => theme.PALETTE.secondary.main};
    font-size: 20px;
    font-weight: bold;
    margin: 4px 0;
`;

export default LogActionPlanContainer;