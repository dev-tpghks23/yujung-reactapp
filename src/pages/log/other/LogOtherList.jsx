import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import S from './LogOtherListStyle';

import viewIcon from './otherLog_icon/hugeicons--view.svg';
import heartIcon from './otherLog_icon/ph--heart-light.svg';

import Thumb1 from './otherLog_thumbNail/image 277.png';
import Thumb2 from './otherLog_thumbNail/image 340.png';
import Thumb3 from './otherLog_thumbNail/image 343.png';
import Thumb4 from './otherLog_thumbNail/image 352.png';
import Thumb5 from './otherLog_thumbNail/image 342.png';
import Thumb6 from './otherLog_thumbNail/image 351.png';
import Thumb7 from './otherLog_thumbNail/image 350.png';
import Thumb8 from './otherLog_thumbNail/image 348.png';
import Thumb9 from './otherLog_thumbNail/image 354.png';

import Profile1 from './otherLog_profile/image 347.png';
import Profile2 from './otherLog_profile/IMAGE.png';
import Profile3 from './otherLog_profile/image 309.png';
import Profile4 from './otherLog_profile/image 338.png';
import Profile5 from './otherLog_profile/image 346.png';
import Profile6 from './otherLog_profile/image 347.png';
import Profile7 from './otherLog_profile/image 337.png';
import Profile8 from './otherLog_profile/image 349.png';
import Profile9 from './otherLog_profile/image 337.png';

const THUMBNAIL_MAP = {
    9: Thumb1, 8: Thumb2, 7: Thumb3,
    6: Thumb4, 5: Thumb5, 4: Thumb6,
    3: Thumb7, 2: Thumb8, 1: Thumb9,
};

const PROFILE_MAP = {
    9: Profile1, 8: Profile2, 7: Profile3,
    6: Profile4, 5: Profile5, 4: Profile6,
    3: Profile7, 2: Profile8, 1: Profile9,
};

const CATEGORY_VARIANT = {
    '인간관계': 'pink',
    '공부/취업': 'blue',
    '기타': 'gray',
    '사업/창업': 'purple',
    '건강/루틴': 'green',
};

const getCategoryVariant = (categoryName) => CATEGORY_VARIANT[categoryName] || 'gray';

const LogOtherList = ({ keyword, category, sort }) => {
    const [logs, setLogs] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const SIZE = 9;

    // keyword, category, sort 바뀌면 목록 초기화
    useEffect(() => {
        setLogs([]);
        setPage(0);
        setHasMore(true);
    }, [keyword, category, sort]);

    // page, keyword, category, sort 바뀔 때마다 데이터 불러오기
    useEffect(() => {
        const fetchLogs = async () => {
            if (!hasMore) return;

            setLoading(true);
            try {
                let url;

                if (keyword) {
                    url = `http://localhost:10000/api/logs/search?keyword=${keyword}&page=${page}&size=${SIZE}&sort=${encodeURIComponent(sort)}`;
                } else if (category && category !== '전체') {
                    url = `http://localhost:10000/api/logs/category?category=${encodeURIComponent(category)}&page=${page}&size=${SIZE}&sort=${encodeURIComponent(sort)}`;
                } else {
                    url = `http://localhost:10000/api/logs?page=${page}&size=${SIZE}&sort=${encodeURIComponent(sort)}`;
                }

                const res = await fetch(url);
                const data = await res.json();
                const newLogs = data.data;

                if (newLogs.length < SIZE) setHasMore(false);
                setLogs((prev) => [...prev, ...newLogs]);
            } catch (err) {
                console.error('로그 목록 조회 실패:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchLogs();
    }, [page, keyword, category, sort, hasMore]);

    // 스크롤 이벤트
    useEffect(() => {
        const handleScroll = () => {
            if (loading || !hasMore) return;
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                setPage((prev) => prev + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore]);

    return (
        <div>
            <S.ListWrapper>
                <S.CardGrid>
                    {logs.map((log) => (
                        <Link to={`/logs/result/${log.id}/detail`} key={log.id} style={{ textDecoration: 'none' }}>
                            <S.Card>
                                <S.CardBody>
                                    <S.CardTop>
                                        <S.Category $variant={getCategoryVariant(log.categoryName)}>
                                            {log.categoryName}
                                        </S.Category>
                                        <S.Date>{log.logCreatedAt}</S.Date>
                                    </S.CardTop>

                                    <S.Title>{log.logTitle}</S.Title>
                                    <S.Vision>{log.visionTitle}</S.Vision>

                                    <S.CardBottom>
                                        <S.Profile>
                                            <S.AvatarWrap>
                                                <S.Avatar
                                                    src={log.memberProfileImageUrl || PROFILE_MAP[log.id]}
                                                    alt={log.memberNickname}
                                                />
                                            </S.AvatarWrap>
                                            <S.Nickname>{log.memberNickname}</S.Nickname>
                                        </S.Profile>
                                        <S.Stats>
                                            <S.Stat>
                                                <img src={viewIcon} alt="views" width="16" height="16" />
                                                {log.readCount}
                                            </S.Stat>
                                            <S.Stat>
                                                <img src={heartIcon} alt="likes" width="16" height="16" />
                                                {log.likeCount}
                                            </S.Stat>
                                        </S.Stats>
                                    </S.CardBottom>
                                </S.CardBody>

                                <S.Thumbnail
                                    src={log.thumbnailUrl || THUMBNAIL_MAP[log.id]}
                                    alt={log.logTitle}
                                />
                            </S.Card>
                        </Link>
                    ))}
                </S.CardGrid>

                {loading && <div style={{ textAlign: 'center', padding: '20px' }}>로딩 중...</div>}
                {!hasMore && <div style={{ textAlign: 'center', padding: '20px' }}>모든 로그를 불러왔습니다.</div>}
            </S.ListWrapper>
        </div>
    );
};

export default LogOtherList;