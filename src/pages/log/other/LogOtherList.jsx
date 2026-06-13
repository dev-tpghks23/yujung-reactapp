import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import S from './LogOtherListStyle';

import viewIcon from './otherLog_icon/hugeicons--view.svg';
import heartIcon from './otherLog_icon/ph--heart-light.svg';

import DefaultThumb from './otherLog_thumbNail/Group 2956.png';

import Thumb1 from './otherLog_thumbNail/image 277.png';
import Thumb2 from './otherLog_thumbNail/image 340.png';
import Thumb3 from './otherLog_thumbNail/image 343.png';
import Thumb4 from './otherLog_thumbNail/image 352.png';
import Thumb5 from './otherLog_thumbNail/image 342.png';
import Thumb6 from './otherLog_thumbNail/image 351.png';
import Thumb7 from './otherLog_thumbNail/image 350.png';
import Thumb8 from './otherLog_thumbNail/image 348.png';
import Thumb9 from './otherLog_thumbNail/image 354.png';

import ThumbReact from './otherLog_thumbNail/react.png';
import ThumbOpinion from './otherLog_thumbNail/opinion discuss 1.png';
import ThumbDietChicken from './otherLog_thumbNail/diet_chicken 1.png';
import ThumbToic900 from './otherLog_thumbNail/toic_900 1.png';
import ThumbFriendMoney from './otherLog_thumbNail/friend_money 1.png';
import ThumbMorningAlarm from './otherLog_thumbNail/mornig_alram 1.png';
import ThumbGithubGrass from './otherLog_thumbNail/gitHub_grass 1.png';
import ThumbYoutube from './otherLog_thumbNail/youtube 1.png';
import ThumbReadCrewAlone from './otherLog_thumbNail/read_crew_alone 1.png';
import ThumbMillimKing from './otherLog_thumbNail/millim_king 1.png';
import ThumbFreeLancer from './otherLog_thumbNail/free_lancer 1.png';
import ThumbMindSet from './otherLog_thumbNail/mind_set.png';
import ThumbAlgorithm from './otherLog_thumbNail/algorithm_solve 1.png';
import ThumbContactBan from './otherLog_thumbNail/contact_ban 1.png';
import ThumbFriendContact from './otherLog_thumbNail/friend_contact 1.png';
import ThumbSideProject from './otherLog_thumbNail/side_project 1.png';
import ThumbInstaFollow from './otherLog_thumbNail/insta_follow.png';
import ThumbGraduateSchool from './otherLog_thumbNail/graduate_school 1.png';
import ThumbWriteDiary from './otherLog_thumbNail/write_diary 1.png';
import ThumbConvenienceStore from './otherLog_thumbNail/convenience store 1.png';
import ThumbMarathon from './otherLog_thumbNail/marathon complete 1.png';
import ThumbPortfolio from './otherLog_thumbNail/portfolio.jpg';
import ThumbCapitalDown from './otherLog_thumbNail/capital down 1.png';
import ThumbNightPhone from './otherLog_thumbNail/night_phone.jpg';
import ThumbAWS from './otherLog_thumbNail/AWS 1.png';

const THUMBNAIL_MAP = {
    9: Thumb1, 8: Thumb2, 7: Thumb3,
    6: Thumb4, 5: Thumb5, 4: Thumb6,
    3: Thumb7, 2: Thumb8, 1: Thumb9,
    10: ThumbReact,
    11: ThumbOpinion,
    12: ThumbDietChicken,
    // 13: 스마트스토어 - 썸네일 없음 → DefaultThumb으로 폴백
    14: ThumbToic900,
    15: ThumbFriendMoney,
    16: ThumbMorningAlarm,
    17: ThumbGithubGrass,
    18: ThumbYoutube,
    19: ThumbReadCrewAlone,
    20: ThumbMillimKing,
    21: ThumbFreeLancer,
    22: ThumbMindSet,
    23: ThumbAlgorithm,
    24: ThumbContactBan,
    25: ThumbFriendContact,
    26: ThumbSideProject,
    27: ThumbInstaFollow,
    28: ThumbGraduateSchool,
    29: ThumbWriteDiary,
    30: ThumbConvenienceStore,
    31: ThumbMarathon,
    32: ThumbPortfolio,
    33: ThumbOpinion,
    34: ThumbCapitalDown,
    35: ThumbNightPhone,
    36: ThumbAWS,
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
                                                    src={log.memberProfileImageUrl || '/assets/picture/default-profile.png'}
                                                    alt={log.memberNickname}
                                                    onError={(e) => { e.target.onerror = null; e.target.src = '/assets/picture/default-profile.png'; }}
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
                                    src={log.thumbnailUrl || THUMBNAIL_MAP[log.id] || DefaultThumb}
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