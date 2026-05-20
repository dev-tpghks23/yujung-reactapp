import React, { useState } from 'react';
import LogPopularSolution from './LogPopularSolution';
import LogOtherHero from './LogOtherHero';
import LogOtherSearch from './LogOtherSearch';
import LogOtherList from './LogOtherList';

const LogOtherContainer = () => {
    const [keyword, setKeyword] = useState('');      // 검색 키워드
    const [category, setCategory] = useState('전체'); // 카테고리
    const [sort, setSort] = useState('최신순');        // 정렬

    return (
        <div>
            <LogPopularSolution />
            <LogOtherHero />
            <LogOtherSearch
                keyword={keyword}
                setKeyword={setKeyword}
                category={category}
                setCategory={setCategory}
                sort={sort}
                setSort={setSort}
            />
            <LogOtherList
                keyword={keyword}
                category={category}
                sort={sort}
            />
        </div>
    );
};

export default LogOtherContainer;