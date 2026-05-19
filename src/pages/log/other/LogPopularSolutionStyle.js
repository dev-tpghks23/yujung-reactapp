import styled from 'styled-components';
import theme from '../../../styles/theme';

const S = {};

S.Wrapper = styled.section`
    width: 100%;
    background-color: #f1f0f6;
    padding: 60px 0 80px;
`;

S.Inner = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;

    .solutions-title {
        font-size: ${theme.FONT_SIZE.h3};
        font-weight: ${theme.FONT_WEIGHT.bold};
        color: ${theme.PALETTE.black};
        margin: 0;
    }
`;

S.TitleWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 48px;
`;

S.TrumpetIcon = styled.img`
    width: 52px;
    height: 52px;
    flex-shrink: 0;
`;

S.Viewport = styled.div`
    overflow: hidden;
`;

S.Track = styled.div`
    display: flex;
    gap: 20px;
    transition: transform 0.4s ease;
    align-items: flex-start;
`;

S.Card = styled.div`
    min-width: 280px;
    max-width: 280px;
    border-radius: 20px;
    background: ${theme.PALETTE.white};
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-shrink: 0;
`;

S.Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

S.ProfileCircle = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

S.ProfileImg = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
`;

S.Nickname = styled.span`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.black};
`;

S.FailTextBox = styled.div`
    background: #f1f0f6;
    border-radius: 15px;
    min-height: 88px;
    padding: 14px 16px;
    width: 100%;
`;

S.FailText = styled.p`
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: #7c6faa;
    line-height: 1.6;
    margin: 0;
`;

S.SolLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
`;

S.SolLabelText = styled.span`
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.bold};
    color: ${theme.PALETTE.black};
`;

S.SolIconWrap = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.SolIcon = styled.img`
    width: 32px;
    height: 32px;
    filter: brightness(0) invert(1);
`;

S.SolSummaryBox = styled.div`
    background: #eeeaff;
    border-radius: 15px;
    padding: 14px 16px;
    width: 100%;
`;

S.SolSummary = styled.p`
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: #4419ff;
    line-height: 1.6;
    margin: 0;
`;

S.NavButtons = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 36px;
`;

S.NavBtn = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${theme.PALETTE.white};
    border: 1px solid ${theme.GRAYSCALE[4]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    &:hover {
        background: #ede9f8;
    }
`;

S.NavIcon = styled.img`
    width: 24px;
    color: ${theme.PALETTE.black};
`;

S.NavIconLeft = styled.img`
    width: 24px;
    color: ${theme.PALETTE.black};
    transform: rotate(180deg);
`;

export default S;