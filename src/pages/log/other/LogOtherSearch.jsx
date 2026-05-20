import React, { useState, useRef, useEffect } from 'react';
import S from './LogOtherSearchStyle';
import GeminiIcon from './otherLog_icon/material-icon-theme_gemini-ai.svg';
import ArrowUpIcon from './otherLog_icon/la_arrow-up.svg';
import DownIcon from './otherLog_icon/down.svg';

const CATEGORIES = ['전체', '공부/취업', '사업/창업', '인간관계', '건강/루틴', '기타'];
const SORT_OPTIONS = ['최신순', '좋아요순', '조회순'];

const LogOtherSearch = ({ keyword, setKeyword, category, setCategory, sort, setSort }) => {
    const [query, setQuery] = useState('');  // 입력값 (임시)
    const [sortOpen, setSortOpen] = useState(false);
    const sortRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (sortRef.current && !sortRef.current.contains(e.target)) {
                setSortOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // 검색 버튼 클릭
    const handleSearch = () => {
        setKeyword(query);
    };

    // 엔터키 검색
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setKeyword(query);
        }
    };

    return (
        <S.Wrapper>
            <S.Inner>
                <S.SearchBoxWrap>
                    <S.SearchBox>
                        <S.SearchIcon src={GeminiIcon} alt="search" />
                        <S.SearchInput
                            placeholder="어떤 페일로그를 찾고 계세요?"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <S.SearchBtn onClick={handleSearch}>
                            <S.ArrowIcon src={ArrowUpIcon} alt="submit" />
                        </S.SearchBtn>
                    </S.SearchBox>
                </S.SearchBoxWrap>

                <S.CategoryRow>
                    <S.CategoryList>
                        {CATEGORIES.map((cat) => (
                            <S.CategoryBtn
                                key={cat}
                                $active={category === cat}
                                onClick={() => setCategory(cat)}
                            >
                                {cat}
                            </S.CategoryBtn>
                        ))}
                    </S.CategoryList>

                    <S.SortWrap ref={sortRef}>
                        <S.SortBtn onClick={() => setSortOpen(!sortOpen)}>
                            <span>{sort}</span>
                            <S.DownIcon src={DownIcon} alt="down" $open={sortOpen} />
                        </S.SortBtn>
                        {sortOpen && (
                            <S.DropdownList>
                                {SORT_OPTIONS.map((opt) => (
                                    <S.DropdownItem
                                        key={opt}
                                        $active={sort === opt}
                                        onClick={() => {
                                            setSort(opt);
                                            setSortOpen(false);
                                        }}
                                    >
                                        {opt}
                                    </S.DropdownItem>
                                ))}
                            </S.DropdownList>
                        )}
                    </S.SortWrap>
                </S.CategoryRow>
            </S.Inner>
        </S.Wrapper>
    );
};

export default LogOtherSearch;