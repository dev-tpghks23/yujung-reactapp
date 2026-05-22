import styled, { css, keyframes } from 'styled-components';

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;


export const S = {};

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

    img {
        width: 100%;
        height: 100%;
    }
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
    overflow: hidden;
`;

S.ContentRow = styled.div`
    display: flex;
    margin: -30px;
`;

S.ContentCol = styled.div`
    flex: 1;
    padding: 40px;

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
    text-align: ${({ $center }) => ($center ? 'center' : 'left')};
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
    color: ${({ color }) => color};
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
    border: 2px solid ${({ borderColor }) => borderColor};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ theme }) => theme.PALETTE.white};
    opacity: 0;
    animation: ${fadeInUp} 0.5s ease-out forwards;
    animation-delay: ${({ $delay }) => $delay || 0}s;
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
    opacity: 0;
    animation: ${fadeInUp} 0.5s ease-out forwards;
    animation-delay: ${({ $delay }) => $delay || 0}s;
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
