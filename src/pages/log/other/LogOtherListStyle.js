import styled from 'styled-components';
import theme from '../../../styles/theme';

export const CATEGORY_STYLE = {
    pink:   { bg: theme.PALETTE.fourth.light, color: theme.PALETTE.fourth.main },
    blue:   { bg: theme.PALETTE.primary.light, color: theme.PALETTE.primary.main },
    green:  { bg: theme.PALETTE.secondary.light, color: theme.PALETTE.secondary.main },
    purple: { bg: theme.PALETTE.third.light, color: theme.PALETTE.third.main },
    gray:   { bg: theme.GRAYSCALE[2], color: theme.GRAYSCALE[10] },
};

const S = {};

S.ListWrapper = styled.div`
    width: 100%;
    background-color: #f8f9fa;
    padding: 0 0 100px;
`;

S.CardGrid = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
    row-gap: 50px;
`;

S.Card = styled.div`
    width: 100%;
    height: 500px;
    border-radius: 20px;
    background: ${theme.PALETTE.white};
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s, border 0.2s;
    border: 1px solid transparent;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        transform: translateY(-8px);
        border: 2px solid ${theme.PALETTE.third.main};
        box-shadow: 0 16px 40px rgba(171, 71, 255, 0.15);
    }
`;

S.CardBody = styled.div`
    flex: 1;
    padding: 40px 40px 40px;
    display: flex;
    flex-direction: column;
    gap: 0;
`;

S.CardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;   /* 10px → 30px */
`;

S.Category = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 68px;
    height: 28px;
    border-radius: 8px;
    font-size: ${theme.FONT_SIZE.h9};
    font-weight: ${theme.FONT_WEIGHT.bold};
    background-color: ${({ $variant }) => CATEGORY_STYLE[$variant]?.bg || theme.GRAYSCALE[2]};
    color: ${({ $variant }) => CATEGORY_STYLE[$variant]?.color || theme.GRAYSCALE[10]};
`;

S.Date = styled.span`
    font-size: ${theme.FONT_SIZE.h10};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[9]};
`;

S.Title = styled.p`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.black};
    margin: 0 0 20px 0;    /* 8px → 20px */
    line-height: 1.4;
    word-break: break-word;
    overflow-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

S.Vision = styled.p`
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[10]};
    margin: 0;
    line-height: 1.5;
    flex: 1;
`;

S.CardBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 12px;
`;

S.Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

S.AvatarWrap = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(135deg, ${theme.PALETTE.primary.main}, ${theme.PALETTE.third.main});
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

S.Avatar = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
`;

S.Nickname = styled.span`
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.black};
`;

S.Stats = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

S.Stat = styled.span`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: ${theme.FONT_SIZE.h9};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[10]};
`;

S.Thumbnail = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    flex-shrink: 0;
`;

export default S;