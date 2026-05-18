import styled from 'styled-components';

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
    width: 36px;
    height: 36px;
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
