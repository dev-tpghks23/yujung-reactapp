import styled from 'styled-components';
import {
    flexBetweenRow,
    flexStartRow,
    flexCenter,
    h6Bold,
    h9Bold,
} from '../../../styles/common';
import theme from '../../../styles/theme';

const S = {};

S.MyProjectsSection = styled.div`
    position: relative;
    padding: 40px 0 120px;
`;

S.CarouselWrap = styled.div`
    position: relative;
`;

S.CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
    row-gap: 50px;
    align-items: start;    // 추가 - 각 카드가 독립적인 높이를 가지도록
`;

S.ArrowBtn = styled.button`
    ${flexCenter}
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid ${theme.GRAYSCALE[3]};
    background: ${theme.PALETTE.white};
    color: ${theme.GRAYSCALE[10]};
    font-size: 40px;
    z-index: 1;
    transition: all 0.15s ease;
    &:first-child { left: -100px; }
    &:last-child { right: -100px; }
    &:hover:not(:disabled) {
        background: ${theme.GRAYSCALE[1]};
        border-color: ${theme.GRAYSCALE[6]};
    }
    &:disabled { opacity: 0.3; cursor: default; }
`;

S.CardWrapper = styled.div`
    position: relative;
    height: 180px;  // 높이 고정
`;

S.Card = styled.div`
    display: flex;
    flex-direction: row;
    height: 180px;
    max-height: 180px;   // 추가
    background: ${theme.PALETTE.white};
    border-radius: 15px;
    border: 1px solid ${theme.GRAYSCALE[4]};
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 16px 40px rgba(171, 71, 255, 0.15);
    }
`;

S.AccentBar = styled.div`
    width: 4px;
    min-width: 4px;
    background: ${({ $color }) => $color};
    flex-shrink: 0;
`;

S.CardContent = styled.div`
    flex: 1;
    min-width: 0;
    width: 100%;             // 추가: 텍스트가 길어져도 100% 이상 늘어나지 않도록 방어
    box-sizing: border-box;  // 추가
    padding: 18px 30px 16px 26px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
`;

S.CardTop = styled.div`
    ${flexBetweenRow}
`;

S.OwnerRow = styled.div`
    ${flexStartRow}
    gap: 7px;
    min-width: 0;
    overflow: hidden;
`;

S.OwnerAvatar = styled.div`
    ${flexCenter}
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 50%;
    border: 2px solid ${({ $color }) => $color};
    color: ${({ $color }) => $color};
    font-size: ${theme.FONT_SIZE.h11};
    font-weight: 700;
    background: ${theme.PALETTE.white};
`;

S.OwnerName = styled.span`
    ${h9Bold}
    color: ${theme.PALETTE.black};
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
`;

S.DDay = styled.span`
    ${h6Bold}
    color: ${theme.PALETTE.black};
    flex-shrink: 0;
    margin-left: 8px;
`;

S.CardTitle = styled.p`
    ${h6Bold}
    color: ${theme.PALETTE.black};
    line-height: 1.4;
    margin: 0;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: normal; // nowrap 대신 normal을 써야 카드가 팽창하지 않음
`;

S.TagRow = styled.div`
    ${flexStartRow}
    gap: 8px;
    flex-wrap: nowrap;
    overflow: hidden;
    height: 28px;        // 추가 - 태그 높이 고정
    min-height: 28px;    // 추가
    max-height: 28px;    // 추가
`;

S.Tag = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    height: 28px;
    padding: 0 8px;
    border-radius: 5px;
    background: ${theme.GRAYSCALE[1]};
    font-size: ${theme.FONT_SIZE.h10};
    color: ${theme.GRAYSCALE[10]};
    flex-shrink: 1;
    min-width: 0;
    max-width: 160px;    // 태그 최대 너비 고정
    box-sizing: border-box;
    & > img, & > svg { flex-shrink: 0; }
    .text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 0;
    }
`;

export default S;