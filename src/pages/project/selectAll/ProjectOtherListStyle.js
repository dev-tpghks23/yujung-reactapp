import styled from 'styled-components';
import {
    flexBetweenRow,
    flexStartRow,
    flexCenterRow,
    flexCenter,
    h6Bold,
    h9Bold,
} from '../../../styles/common';
import theme from '../../../styles/theme';

const S = {};

S.CommunityGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
    row-gap: 50px;
    margin-bottom: 50px;
    align-items: start;
`;
S.CardWrapper = styled.div`
    position: relative;
    height: 180px;
    min-width: 0;
`;

S.Card = styled.div`
    display: flex;
    flex-direction: row;
    height: 180px;
    width: 100%;             // 추가: 카드 가로 크기 100% 고정
    box-sizing: border-box;  // 추가: 테두리/패딩 포함 크기 유지
    background: ${theme.PALETTE.white};
    border-radius: 15px;
    border: 1px solid ${theme.GRAYSCALE[4]};
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
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
    padding: 4px 8px;
    margin-left: -8px;
    border-radius: 8px;
    transition: all 0.2s ease;
    cursor: pointer;
    
    &:hover span {
        text-decoration: underline;
    }
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

S.PaginationWrapper = styled.div`
    ${flexCenterRow}
    gap: 8px;
`;

S.NavButton = styled.button`
    ${flexCenter}
    width: 36px;
    height: 36px;
    &:disabled { opacity: 0.3; }
`;

S.PageButton = styled.button`
    ${flexCenter}
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background-color: ${({ $active }) => $active ? theme.PALETTE.third.main : 'transparent'};
`;

export default S;