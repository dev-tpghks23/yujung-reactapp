import React from 'react';
import { Link } from 'react-router-dom';
import S from './LogOtherListStyle';

import viewIcon from './otherLog_icon/hugeicons--view.svg';
import heartIcon from './otherLog_icon/ph--heart-light.svg';

import ProfileImg1 from './otherLog_profile/image 347.png';
import ProfileImg2 from './otherLog_profile/IMAGE.png';
import ProfileImg3 from './otherLog_profile/image 309.png';
import ProfileImg4 from './otherLog_profile/image 338.png';
import ProfileImg5 from './otherLog_profile/image 346.png';
import ProfileImg6 from './otherLog_profile/image 347.png';
import ProfileImg7 from './otherLog_profile/image 337.png';
import ProfileImg8 from './otherLog_profile/image 349.png';
import ProfileImg9 from './otherLog_profile/image 337.png';

import Thumb1 from './otherLog_thumbNail/image 277.png';
import Thumb2 from './otherLog_thumbNail/image 340.png';
import Thumb3 from './otherLog_thumbNail/image 343.png';
import Thumb4 from './otherLog_thumbNail/image 352.png';
import Thumb5 from './otherLog_thumbNail/image 342.png';
import Thumb6 from './otherLog_thumbNail/image 351.png';
import Thumb7 from './otherLog_thumbNail/image 350.png';
import Thumb8 from './otherLog_thumbNail/image 348.png';
import Thumb9 from './otherLog_thumbNail/image 354.png';

const LOGS = [
    {
        id: 1,
        category: '인간관계',
        categoryVariant: 'pink',
        date: '2026.03.03',
        title: '작은 실수로 멀어져버린 우리 사이',
        vision: '말은 언제나 생각하고 조심해서 말하기',
        nickname: '친구가필요한나',
        profileImg: ProfileImg1,
        views: 45,
        likes: 35,
        thumbnail: Thumb1,
    },
    {
        id: 2,
        category: '공부/취업',
        categoryVariant: 'blue',
        date: '2026.03.03',
        title: '정보처리기사 실기, 필기 붙고 나서 방심했다가 또 떨어졌다.',
        vision: '올해 안에 정보처리기사 최종 합격하기',
        nickname: '필기마스터',
        profileImg: ProfileImg2,
        views: 45,
        likes: 35,
        thumbnail: Thumb2,
    },
    {
        id: 3,
        category: '기타',
        categoryVariant: 'gray',
        date: '2026.03.03',
        title: '유럽 배낭여행 혼자 도전기',
        vision: '유럽에서 혼자 1년 살기 성공하기',
        nickname: '유럽탐험가',
        profileImg: ProfileImg3,
        views: 45,
        likes: 35,
        thumbnail: Thumb3,
    },
    {
        id: 4,
        category: '사업/창업',
        categoryVariant: 'purple',
        date: '2026.03.03',
        title: '카페 창업 준비하다가 돈이 먼저 바닥났다.',
        vision: '단골손님이 생기는 내 개인카페 하나 차리기',
        nickname: '하워드슐츠',
        profileImg: ProfileImg4,
        views: 45,
        likes: 35,
        thumbnail: Thumb4,
    },
    {
        id: 5,
        category: '공부/취업',
        categoryVariant: 'blue',
        date: '2026.03.03',
        title: '파이썬 독학하다가 크롤링에서 막혔다.',
        vision: '비전공자지만 직접 뭔가 만들어보기',
        nickname: '비전공의희망',
        profileImg: ProfileImg5,
        views: 45,
        likes: 35,
        thumbnail: Thumb5,
    },
    {
        id: 6,
        category: '인간관계',
        categoryVariant: 'pink',
        date: '2026.03.03',
        title: '모임 나가면 구석에만 있다가 오는 나',
        vision: '사람들과 대화를 편하게 할 수 있는 내가 되기',
        nickname: '대화가필요해',
        profileImg: ProfileImg6,
        views: 45,
        likes: 35,
        thumbnail: Thumb6,
    },
    {
        id: 7,
        category: '건강/루틴',
        categoryVariant: 'green',
        date: '2026.03.03',
        title: '헬스장 3개월 끊었는데 열 번 밖에 안갔다.',
        vision: '꾸준히 운동해서 미래에도 건강한 몸 유지하기',
        nickname: '바디짱짱맨',
        profileImg: ProfileImg7,
        views: 45,
        likes: 35,
        thumbnail: Thumb7,
    },
    {
        id: 8,
        category: '공부/취업',
        categoryVariant: 'blue',
        date: '2026.03.03',
        title: '네이버 백엔드 개발자 취업 도전',
        vision: '국내 대형 IT 기업 개발자로 입사하기',
        nickname: '백엔드로취업하기',
        profileImg: ProfileImg8,
        views: 45,
        likes: 35,
        thumbnail: Thumb8,
    },
    {
        id: 9,
        category: '기타',
        categoryVariant: 'gray',
        date: '2026.03.03',
        title: '엑셀로 짠 여행 계획표가 부른 갈등',
        vision: '여행은 과제가 아니라 휴식처럼 즐기기',
        nickname: '여행을좋아하는가장',
        profileImg: ProfileImg9,
        views: 45,
        likes: 35,
        thumbnail: Thumb9,
    },
];

const LogOtherList = () => {
    return (
        <div>
            <S.ListWrapper>
                <S.CardGrid>
                    {LOGS.map((log) => (
                        <Link to={`/logs/result/${log.id}/detail`} key={log.id} style={{ textDecoration: 'none' }}>
                            <S.Card>
                                <S.CardBody>
                                    <S.CardTop>
                                        <S.Category $variant={log.categoryVariant}>
                                            {log.category}
                                        </S.Category>
                                        <S.Date>{log.date}</S.Date>
                                    </S.CardTop>

                                    <S.Title>{log.title}</S.Title>
                                    <S.Vision>{log.vision}</S.Vision>

                                    <S.CardBottom>
                                        <S.Profile>
                                            <S.AvatarWrap>
                                                <S.Avatar src={log.profileImg} alt={log.nickname} />
                                            </S.AvatarWrap>
                                            <S.Nickname>{log.nickname}</S.Nickname>
                                        </S.Profile>
                                        <S.Stats>
                                            <S.Stat>
                                                <img src={viewIcon} alt="views" width="16" height="16" />
                                                {log.views}
                                            </S.Stat>
                                            <S.Stat>
                                                <img src={heartIcon} alt="likes" width="16" height="16" />
                                                {log.likes}
                                            </S.Stat>
                                        </S.Stats>
                                    </S.CardBottom>
                                </S.CardBody>

                                <S.Thumbnail src={log.thumbnail} alt={log.title} />
                            </S.Card>
                        </Link>
                    ))}
                </S.CardGrid>
            </S.ListWrapper>
        </div>
    );
};

export default LogOtherList;