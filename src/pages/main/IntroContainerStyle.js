import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';

const scrollDotAnim = keyframes`
    0%   { opacity: 1; transform: translateY(0); }
    50%  { opacity: 0.4; transform: translateY(6px); }
    100% { opacity: 1; transform: translateY(0); }
`;

const fadeUpAnim = keyframes`
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const gradientText = `
    background: linear-gradient(90deg, #027df0, #ab47ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

export const STEP_COLOR = { 1: '#027df0', 2: '#ab47ff', 3: '#ff34c5', 4: '#f53102' };
export const STEP_BG    = { 1: '#dbeafe', 2: '#ede9fe', 3: '#fce7f3', 4: '#ffe4e6' };
export const CATEGORY_STYLES = {
    blue:   { bg: '#dbeafe', color: '#027df0' },
    orange: { bg: '#ede9fe', color: '#ab47ff' },
    pink:   { bg: '#ffe4e6', color: '#f53102' },
};

const S = {};

// ── 전체 래퍼
S.Wrap = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(160deg, #eaf3ff 0%, #ffffff 40%, #f5eeff 100%);
`;

S.ColorGradient = styled.span`
    ${gradientText}
`;

// ── SECTION 1
S.Section1Wrapper = styled.section`
    width: 100%;
    height: 900px;
    background: linear-gradient(160deg, #eaf3ff 0%, #ffffff 40%, #f5eeff 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .intro-section1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 60px;
        width: 100%;
    }

    .intro-section1-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .intro-section1-heading {
        font-size: ${theme.FONT_SIZE.h1};
        font-weight: ${theme.FONT_WEIGHT.bold};
        color: ${theme.PALETTE.black};
        line-height: 1.35;
        margin: 0;
        letter-spacing: -1.5px;
    }

    .intro-section1-sub {
        font-size: ${theme.FONT_SIZE.h3_2};
        font-weight: ${theme.FONT_WEIGHT.regular};
        color: ${theme.GRAYSCALE[10]};
        line-height: 1.7;
        margin: 0;
    }

    .intro-section1-sub:first-of-type {
        margin-top: 28px;
    }

    .intro-section1-scroll-arrows {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
    }
`;

S.StartButton = styled.button`
    margin-top: 36px;
    width: 200px;
    height: 60px;
    border-radius: 10px;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    background-size: 200% 200%;
    background-position: 0% 50%;
    transition: background-position 0.6s ease;
    color: ${theme.PALETTE.white};
    font-size: ${theme.FONT_SIZE.h5};
    font-weight: ${theme.FONT_WEIGHT.bold};
    border: none;
    cursor: pointer;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);

    &:hover {
        background-position: 100% 50%;
    }
`;

S.Section1Scroll = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

S.ScrollMouse = styled.div`
    width: 22px;
    height: 36px;
    border: 2px solid ${theme.GRAYSCALE[4]};
    border-radius: 12px;
    display: flex;
    justify-content: center;
    padding-top: 6px;
    box-sizing: border-box;
`;

S.ScrollDot = styled.div`
    width: 4px;
    height: 8px;
    background-color: ${theme.GRAYSCALE[4]};
    border-radius: 2px;
    animation: ${scrollDotAnim} 1.6s ease-in-out infinite;
`;

// ── SECTION 2
S.Section2Wrapper = styled.section`
    width: 100%;
    height: 1000px;
    background-color: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .intro-section2 {
        display: flex;
        align-items: center;
        gap: 24px;
    }

    .intro-section2-title {
        font-size: ${theme.FONT_SIZE.h4};
        font-weight: ${theme.FONT_WEIGHT.bold};
        color: ${theme.PALETTE.black};
        line-height: 1.45;
        margin: 0 0 24px;
        letter-spacing: -0.3px;
    }

    .intro-section2-sub {
        font-size: ${theme.FONT_SIZE.h7};
        font-weight: ${theme.FONT_WEIGHT.regular};
        color: ${theme.GRAYSCALE[10]};
        line-height: 1.7;
        margin: 0;
    }

    .intro-section2-sub-mt {
        margin-top: 20px;
    }
`;

S.Section2Left = styled.div`
    width: 536px;
    height: 442px;
    background-color: ${theme.PALETTE.white};
    border: 1px solid ${theme.GRAYSCALE[4]};
    border-radius: 15px;
    padding: 48px 44px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
    opacity: 0;
    transform: translateY(40px);

    &[data-visible='true'] {
        animation: ${fadeUpAnim} 0.6s ease forwards;
    }
`;

S.Section2BadgeWrap = styled.div`
    width: 112px;
    height: 40px;
    padding: 0 16px;
    background-color: ${theme.PALETTE.primary.light};
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

S.Section2Badge = styled.span`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    ${gradientText}
`;

S.Section2Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

S.StatCard = styled.div`
    width: 536px;
    height: 184px;
    background-color: ${theme.PALETTE.white};
    border: 1px solid ${theme.GRAYSCALE[4]};
    border-radius: 20px;
    padding: 20px 36px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
    opacity: 0;
    transform: translateY(40px);
    animation-delay: ${({ $delay }) => $delay || '0s'};

    &[data-visible='true'] {
        animation: ${fadeUpAnim} 0.6s ease forwards;
    }
`;

S.StatCardIcon = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
    flex-shrink: 0;

    background-color: ${({ $variant }) => {
        if ($variant === 'red')   return theme.PALETTE.fourth.light;
        if ($variant === 'blue')  return theme.PALETTE.primary.light;
        if ($variant === 'green') return theme.PALETTE.secondary.light;
        return 'transparent';
    }};

    img { width: 24px; height: 24px; }
`;

S.StatCardStat = styled.p`
    font-size: ${theme.FONT_SIZE.h4};
    font-weight: ${theme.FONT_WEIGHT.bold};
    margin: 0;
    line-height: 1.2;

    color: ${({ $variant }) => {
        if ($variant === 'red')   return theme.PALETTE.fourth.main;
        if ($variant === 'blue')  return theme.PALETTE.primary.main;
        if ($variant === 'green') return theme.PALETTE.secondary.main;
        return theme.PALETTE.black;
    }};
`;

S.StatCardLabel = styled.p`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.PALETTE.black};
    margin: 0;
`;

// ── SECTION 3
S.Section3Wrapper = styled.section`
    width: 100%;
    height: 800px;
    background-color: ${theme.PALETTE.white};
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .intro-section3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 60px;
        width: 100%;
    }

    .intro-section3-header {
        text-align: center;
    }

    .intro-section3-title {
        font-size: ${theme.FONT_SIZE.h3};
        font-weight: ${theme.FONT_WEIGHT.bold};
        color: ${theme.PALETTE.black};
        line-height: 1.4;
        margin: 0;
        letter-spacing: -0.5px;
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.6s ease, transform 0.6s ease;

        &[data-visible='true'] {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

S.Section3Cards = styled.div`
    display: flex;
    align-items: center;
    gap: 26px;
`;

S.MethodCard = styled.div`
    width: 424px;
    height: 279px;
    background-color: ${theme.PALETTE.white};
    border: 1px solid ${theme.GRAYSCALE[4]};
    border-radius: 20px;
    padding: 37px 32px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 12px;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
    opacity: 0;
    transform: translateY(40px);
    animation-delay: ${({ $delay }) => $delay || '0s'};

    &[data-visible='true'] {
        animation: ${fadeUpAnim} 0.6s ease forwards;
    }
`;

S.MethodCardIcon = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    background: ${({ $variant }) => {
        if ($variant === 'left')   return 'linear-gradient(135deg, #027df0, #ab47ff)';
        if ($variant === 'center') return 'linear-gradient(135deg, #ab47ff, #ff34c5)';
        if ($variant === 'right')  return 'linear-gradient(135deg, #ff34c5, #f53102)';
        return 'transparent';
    }};

    img { width: 50px; height: 50px; }
`;

S.MethodCardTitle = styled.div`
    font-size: ${theme.FONT_SIZE.h5};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.black};
    margin: 0;
    letter-spacing: -0.5px;
    line-height: 1.3;
`;

S.MethodCardDesc = styled.div`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[10]};
    margin: 0;
    line-height: 1.6;
    word-break: keep-all;
`;

// ── SECTION 4
S.Section4Wrapper = styled.section`
    width: 100%;
    height: 1512px;
    background-color: #f8f9fa;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
    padding-top: 100px;

    .intro-section4 {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 80px;
    }

    .intro-section4-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .intro-section4-title {
        font-size: ${theme.FONT_SIZE.h3};
        font-weight: ${theme.FONT_WEIGHT.bold};
        color: ${theme.PALETTE.black};
        text-align: center;
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.6s ease, transform 0.6s ease;

        &[data-visible='true'] {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

S.Section4BadgeWrap = styled.div`
    width: 136px;
    height: 40px;
    background-color: ${theme.PALETTE.primary.light};
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.6s ease, transform 0.6s ease;

    &[data-visible='true'] {
        opacity: 1;
        transform: translateY(0);
    }
`;

S.Section4Badge = styled.span`
    font-size: ${theme.FONT_SIZE.h6};
    font-weight: ${theme.FONT_WEIGHT.bold};
    ${gradientText}
`;

S.StepByStep = styled.div`
    position: relative;
    width: 1038px;
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

S.TimelineLine = styled.div`
    position: absolute;
    top: 12px;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    background: linear-gradient(to bottom, #027df0 0%, #ab47ff 33%, #ff34c5 66%, #f53102 100%);
    z-index: 0;
`;

S.StepRow = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    z-index: 1;

    ${({ $side }) =>
        $side === 'left'
            ? 'justify-content: flex-start; padding-right: calc(50% + 48px);'
            : 'justify-content: flex-end;  padding-left:  calc(50% + 48px);'}
`;

S.StepDot = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.white};
    z-index: 2;
    flex-shrink: 0;
    background: ${({ $step }) => STEP_COLOR[$step] || '#333'};
`;

S.StepCard = styled.div`
    background-color: ${theme.PALETTE.white};
    border: 1px solid ${theme.GRAYSCALE[4]};
    border-radius: 15px;
    padding: 28px 32px;
    box-sizing: border-box;
    width: 312px;
    height: 210px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
    opacity: 0;
    transform: translateY(40px);
    animation-delay: ${({ $delay }) => $delay || '0s'};

    &[data-visible='true'] {
        animation: ${fadeUpAnim} 0.6s ease forwards;
    }
`;

S.StepCardTop = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: ${({ $side }) => ($side === 'left' ? 'flex-end' : 'flex-start')};
`;

S.StepLabel = styled.span`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${({ $step }) => STEP_COLOR[$step] || '#333'};
`;

S.StepCardIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: ${({ $step }) => STEP_COLOR[$step] || '#333'};

    img { width: 20px; height: 20px; filter: brightness(0) invert(1); }
`;

S.StepCardName = styled.p`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.black};
    margin: 0;
    text-align: ${({ $side }) => ($side === 'left' ? 'right' : 'left')};
`;

S.StepCardDesc = styled.p`
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[10]};
    margin: 0;
    text-align: ${({ $side }) => ($side === 'left' ? 'right' : 'left')};
    line-height: 1.5;
`;

S.StepTags = styled.div`
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: ${({ $side }) => ($side === 'left' ? 'flex-end' : 'flex-start')};
`;

S.StepTag = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 48px;
    height: 28px;
    padding: 0 10px;
    border-radius: 14px;
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.bold};
    background-color: ${({ $step }) => STEP_BG[$step] || '#f0f0f0'};
    color: ${({ $step }) => STEP_COLOR[$step] || '#333'};
`;

// ── SECTION 5
S.Section5Wrapper = styled.section`
    width: 100%;
    height: 980px;
    background-color: ${theme.PALETTE.white};
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .intro-section5 {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        width: 100%;
    }

    .intro-section5-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        text-align: center;
    }

    .intro-section5-title {
        font-size: 40px;
        font-weight: ${theme.FONT_WEIGHT.bold};
        color: ${theme.PALETTE.black};
        margin: 0;
        line-height: 1.4;
        letter-spacing: -0.5px;
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.6s ease, transform 0.6s ease;

        &[data-visible='true'] {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .intro-section5-sub {
        font-size: ${theme.FONT_SIZE.h7};
        font-weight: ${theme.FONT_WEIGHT.regular};
        color: ${theme.GRAYSCALE[10]};
        margin: 0;
    }
`;

S.Section5Badges = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.6s ease, transform 0.6s ease;

    &[data-visible='true'] {
        opacity: 1;
        transform: translateY(0);
    }
`;

S.Section5Badge = styled.div`
    width: 136px;
    height: 40px;
    border-radius: 10px;
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.PALETTE.primary.light};

    span {
        background: linear-gradient(90deg, #027df0, #ab47ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`;

S.Section5Cards = styled.div`
    display: flex;
    gap: 24px;
`;


S.LogCard = styled.div`
    width: 352px;
    background-color: ${theme.PALETTE.white};
    border: 1px solid ${theme.GRAYSCALE[4]};
    border-radius: 16px;
    padding: 20px 24px 18px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    transition: transform 0.22s ease, box-shadow 0.22s ease;
    opacity: 0;
    transform: translateY(40px);
    animation-delay: ${({ $delay }) => $delay || '0s'};

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.11);
    }

    &[data-visible='true'] {
        animation: ${fadeUpAnim} 0.6s ease forwards;
    }
`;

S.LogQuoteMark = styled.div`
    width: 32px;
    height: 32px;
    flex-shrink: 0;

    img {
        width: 100%;
        height: 100%;
    }
`;

S.LogCategory = styled.span``;

S.LogCardTitle = styled.p``;

S.LogCardDesc = styled.p`
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.PALETTE.black};
    margin: 0;
    line-height: 1.6;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

S.LogCardBottom = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding-top: 12px;
    border-top: 1px solid ${theme.GRAYSCALE[3]};
`;

S.LogProfile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

S.LogAvatarWrap = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

S.LogAvatar = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`;

S.LogNickname = styled.span`
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.black};
`;

S.LogRole = styled.span`
    font-size: ${theme.FONT_SIZE.h9};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[8]};
`;

S.LogStats = styled.div``;

S.LogStat = styled.span``;

export default S;