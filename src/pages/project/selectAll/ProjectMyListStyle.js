import styled from 'styled-components';
import {
    flexBetweenRow,
    flexStartRow,
    flexCenter,
    h6Bold,
    h7Bold,
    h9Bold,
    h9Regular,
    h10Bold,
} from '../../../styles/common';
import theme from '../../../styles/theme';

const S = {};

S.MyProjectsSection = styled.div`
    position: relative;
    padding: 40px 0 80px;
`;



/* ── 로그별 섹션 ── */
S.LogSection = styled.div`
    margin-bottom: 20px;
`;

S.LogSectionHeader = styled.div`
    ${flexStartRow}
    gap: 12px;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 2px solid ${theme.PALETTE.third.main};
`;

S.LogSectionTitle = styled.h3`
    ${h7Bold}
    color: ${theme.PALETTE.black};
`;

S.LogSectionCount = styled.span`
    ${h10Bold}
    color: ${theme.PALETTE.third.main};
    background: ${theme.PALETTE.third.light};
    padding: 3px 10px;
    border-radius: 20px;
`;

S.EmptyState = styled.p`
    ${h9Regular}
    color: ${theme.GRAYSCALE[6]};
    text-align: center;
    padding: 60px 0;
`;

/*
 * ── 카드 스크롤 래퍼 ──
 * margin-left: -50px + padding-left: 50px 트릭:
 * 카드의 box-shadow가 왼쪽으로 40px 확장되는데,
 * overflow-x: auto는 padding 영역을 클리핑하지 않으므로
 * padding 안으로 그림자를 숨겨 좌측 잘림 현상을 방지.
 */
S.CardScrollWrapper = styled.div`
    overflow-x: auto;
    margin-left: -50px;
    padding-left: 50px;
    padding-right: 35px;
    padding-top: 12px;
    padding-bottom: 65px;

    &::-webkit-scrollbar {
        height: 6px;
    }
    &::-webkit-scrollbar-track {
        background: ${theme.GRAYSCALE[2]};
        border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb {
        background: ${theme.PALETTE.third.main};
        border-radius: 3px;
    }
`;

/* ── 카드 그리드 (가로 배치) ── */
S.CardGrid = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 24px;
    width: max-content;
`;

/*
 * 카드 너비를 Inner 컨테이너 기준으로 3등분 계산.
 * Inner: max-width 1320px, padding 0 60px → content = min(vw, 1320) - 120px
 * 3카드 + 2gap(48px) → card = (content - 48) / 3
 */
S.CardWrapper = styled.div`
    position: relative;
    height: 180px;
    width: calc((min(100vw, 1320px) - 168px) / 3);
    flex-shrink: 0;
`;

S.Card = styled.div`
    display: flex;
    flex-direction: row;
    height: 180px;
    width: 100%;
    box-sizing: border-box;
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

/* ── Pagination Styles ── */
S.PaginationWrapper = styled.div`
    ${flexCenter}
    gap: 8px;
    margin-top: 40px;
`;

S.NavButton = styled.button`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.PALETTE.white};
    border: 1px solid ${theme.GRAYSCALE[3]};
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    &:hover:not(:disabled) {
        border-color: ${theme.PALETTE.third.main};
        svg path {
            stroke: ${theme.PALETTE.third.main};
        }
    }
`;

S.PageButton = styled.button`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ $active }) => ($active ? theme.PALETTE.third.main : theme.PALETTE.white)};
    border: 1px solid ${({ $active }) => ($active ? theme.PALETTE.third.main : theme.GRAYSCALE[3])};
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        border-color: ${theme.PALETTE.third.main};
        span {
            color: ${({ $active }) => ($active ? theme.PALETTE.white : theme.PALETTE.third.main)} !important;
        }
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
    width: 100%;
    box-sizing: border-box;
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
    background: linear-gradient(135deg, #027df0, #ab47ff);
    overflow: hidden;
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
    white-space: normal;
`;

S.TagRow = styled.div`
    ${flexStartRow}
    gap: 8px;
    flex-wrap: nowrap;
    overflow: hidden;
    height: 28px;
    min-height: 28px;
    max-height: 28px;
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
    max-width: 160px;
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
