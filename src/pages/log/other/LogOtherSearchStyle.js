import styled from 'styled-components';
import theme from '../../../styles/theme';

const S = {};

S.Wrapper = styled.div`
    width: 100%;
    background-color: #f8f9fa;
    padding: 100px 0;
`;

S.Inner = styled.div`
    max-width: 1320px;  /* 1200px → 1320px */
    margin: 0 auto;
    padding: 0 20px;    /* 0 60px → 0 20px */
    display: flex;
    flex-direction: column;
    gap: 100px;
`;

/* ── 검색창 그라데이션 테두리 래퍼 */
S.SearchBoxWrap = styled.div`
    width: 872px;
    height: 60px;
    border-radius: 15px;
    padding: 2px;
    background: linear-gradient(90deg, ${theme.PALETTE.primary.main}, ${theme.PALETTE.third.main});
    box-sizing: border-box;
    align-self: center;
`;

S.SearchBox = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 13px;
    background: ${theme.PALETTE.white};
    display: flex;
    align-items: center;
    padding: 0 12px 0 16px;
    gap: 10px;
    box-sizing: border-box;
`;

S.SearchIcon = styled.img`
    width: 20px;
    height: 20px;
    flex-shrink: 0;
`;

S.SearchInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: ${theme.FONT_SIZE.h7};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${theme.GRAYSCALE[10]};
    font-family: inherit;

    &::placeholder {
        color: ${theme.GRAYSCALE[10]};
    }
`;

S.SearchBtn = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${theme.PALETTE.primary.main}, ${theme.PALETTE.third.main});
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

S.ArrowIcon = styled.img`
    width: 18px;
    height: 18px;
    filter: brightness(0) invert(1);
`;

/* ── 카테고리 */
S.CategoryRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

S.CategoryList = styled.div`
    display: flex;
    gap: 24px;
`;

S.CategoryBtn = styled.button`
    width: 88px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid ${({ $active }) => ($active ? theme.PALETTE.third.main : theme.GRAYSCALE[4])};
    background: ${({ $active }) => ($active ? theme.PALETTE.third.main : theme.PALETTE.white)};
    color: ${({ $active }) => ($active ? theme.PALETTE.white : theme.GRAYSCALE[9])};
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: inherit;
    cursor: pointer;

    &:hover {
        border: 1.5px solid ${theme.PALETTE.third.main};
    }
`;

/* ── 정렬 드롭다운 */
S.SortWrap = styled.div`
    position: relative;
`;

S.SortBtn = styled.button`
    width: 88px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid ${theme.GRAYSCALE[4]};
    background: ${theme.PALETTE.white};
    color: ${theme.GRAYSCALE[10]};
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.regular};
    font-family: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    white-space: nowrap;

    &:hover {
        border: 1.5px solid ${theme.PALETTE.third.main};
    }
`;

S.DownIcon = styled.img`
    width: ${theme.FONT_SIZE.h8};
    height: ${theme.FONT_SIZE.h8};
    transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.2s;
    filter: brightness(0) saturate(100%) invert(35%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%);
`;

S.DropdownList = styled.ul`
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    width: 88px;
    background: ${theme.PALETTE.white};
    border: 1px solid ${theme.GRAYSCALE[4]};
    border-radius: 10px;
    overflow: hidden;
    z-index: 10;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    list-style: none;
    padding: 0;
    margin: 0;
`;

S.DropdownItem = styled.li`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.FONT_SIZE.h8};
    font-weight: ${theme.FONT_WEIGHT.regular};
    color: ${({ $active }) => ($active ? theme.PALETTE.third.main : theme.GRAYSCALE[10])};
    cursor: pointer;

    &:hover {
        color: ${theme.PALETTE.third.main};
        background: ${theme.PALETTE.third.light};
    }
`;

export default S;