import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { boxShadow, colorCSS } from '../style';
import PostHeader from './components/PostHeader';
import icon04 from '../resources/icon04.png';
import Content from './components/Content';
import ImagesContainer from './components/ImagesContainer';
import AuthorInfo from './components/AuthorInfo';
import Middle from './components/Middle';
import ReplySubmit from './components/ReplySubmit';
import ReplyContainer from './components/ReplyContainer';
import BeforeAfterPost from './components/BeforeAfterPost';
import AiPostContainer from './components/AiPostContainer';
import ReportPopup from './components/ReportPopup';
import { ReportContext } from './components/ReportContext';

const replyList = [
    {
        isOwner: false,
        profileImg: icon04,
        createdAt: '3분 전',
        author: '해랑이',
        content: '진짜 공감됩니다. 저도 집에서는 잘 되는데 시험장만 가면 아는 것도 막히더라고요.',
        isLiked: true,
        likeCount: 3,
        rereplyList: [
            {
                isOwner: false,
                profileImg: icon04,
                author: '취준마스터',
                content: '저도 완전히 같았어요. 환경 적응이 생각보다 훨씬 중요하더라고요.',
                createdAt: '2분전',
            },
            {
                isOwner: true,
                profileImg: icon04,
                author: '해랑이',
                content: '맞아요. 특히 첫 시험은 긴장감 자체가 너무 낯설더라고요.',
                createdAt: '방금',
            },
        ],
    },
    {
        isOwner: true,
        profileImg: icon04,
        createdAt: '10분 전',
        author: '취준마스터',
        content: '저도 비슷한 경험이 있어요. 환경을 바꾸고 나서 확실히 집중력이 달라졌습니다. 사실 처음에는 환경 탓이 아니라 제 의지력 문제인 줄 알았어요. 그런데 막상 도서관에서 공부해보니 집에서와는 집중력 자체가 달랐어요. 주변 소음이 오히려 도움이 되는 경우도 있더라고요. 화이트 노이즈 효과인지 뭔지는 모르겠지만 확실히 효율이 올라갔습니다. 이걸 진작 알았더라면 좋았을 텐데 싶었어요.',
        isLiked: false,
        likeCount: 1,
        rereplyList: [
            {
                isOwner: false,
                profileImg: icon04,
                author: '해랑이',
                content: '도서관 효과 진짜인 것 같아요. 저도 카페 가면 이상하게 더 잘 되더라고요. 집에서는 침대가 자꾸 눈에 밟혀서요.',
                createdAt: '7분 전',
            },
        ],
    },
    {
        isOwner: false,
        profileImg: icon04,
        createdAt: '22분 전',
        author: '노력왕',
        content: '공부 환경이 이렇게까지 중요할 줄은 몰랐는데 이 글 보고 진짜 공감 많이 됐어요. 저는 원래 방에서만 공부했는데 어느 순간부터 방 자체가 쉬는 공간으로 인식이 되어버린 건지 책상 앞에 앉아도 머리가 공부 모드로 안 전환되더라고요. 결국 독서실 끊었는데 정말 신세계였습니다. 장소가 바뀌면 뇌도 바뀌는 것 같아요. 심리적인 공간 분리가 이렇게 중요한 거였구나 싶었어요. 다들 한번이라도 환경 바꿔보는 걸 강추합니다.',
        isLiked: true,
        likeCount: 7,
        rereplyList: [
            // {
            //     isOwner: true,
            //     profileImg: icon04,
            //     author: '취준마스터',
            //     content: '독서실 진짜 효과 있죠. 저도 처음 갔을 때 이게 뭐야 싶을 정도로 집중이 잘 됐어요.',
            //     createdAt: '20분 전',
            // },
            // {
            //     isOwner: false,
            //     profileImg: icon04,
            //     author: '해랑이',
            //     content: '저도 독서실 고민 중인데 이 댓글들 보고 결심했어요. 바로 끊으러 가야겠습니다. 사실 돈이 아까워서 망설이고 있었는데 효율이 올라간다면 오히려 이득이겠죠. 시험까지 얼마 안 남았으니까 지금이라도 바꿔봐야겠어요.',
            //     createdAt: '18분 전',
            // },
            // {
            //     isOwner: false,
            //     profileImg: icon04,
            //     author: '노력왕',
            //     content: '결제하면 본전 뽑으려고 더 열심히 하게 되는 심리도 있어요. 일종의 매몰비용 효과를 긍정적으로 활용하는 거죠.',
            //     createdAt: '15분 전',
            // },
        ],
    },
    {
        isOwner: false,
        profileImg: icon04,
        createdAt: '35분 전',
        author: '시험준비생',
        content: '기출만 푸는 게 정답인 줄 알았는데 실전에서 응용 문제 하나에 멘탈 터진 경험이 있어요. 그 이후로 공부법을 완전히 바꿨습니다. 기출은 유형 파악용으로만 쓰고, 실제로는 개념을 완전히 이해하는 데 더 집중했어요. 시간이 더 오래 걸리지만 실전에서 처음 보는 문제도 논리적으로 풀어낼 수 있게 됐어요. 점수도 그때부터 꾸준히 올랐고요. 기출 회독수보다 이해도가 훨씬 중요하다는 걸 뼈저리게 배웠습니다.',
        isLiked: false,
        likeCount: 12,
        rereplyList: [
            // {
            //     isOwner: false,
            //     profileImg: icon04,
            //     author: '취준마스터',
            //     content: '완전 공감이에요. 기출 10회독보다 개념 1번 제대로 이해하는 게 낫다는 말이 처음엔 이해가 안 됐는데 직접 겪어보니 맞는 말이더라고요. 특히 응용 문제나 복합 개념이 섞인 문제는 암기로는 절대 못 풀어요. 저도 비슷한 시기에 공부법을 바꿨는데 처음 한두 달은 점수가 오히려 떨어지는 것 같아서 불안했지만 결국 안정적으로 올라왔어요. 장기적으로는 무조건 이해 위주가 맞는 것 같습니다.',
            //     createdAt: '30분 전',
            // },
            // {
            //     isOwner: false,
            //     profileImg: icon04,
            //     author: '노력왕',
            //     content: '맞아요. 기출은 어디까지나 도구일 뿐이죠. 목적이 되어선 안 된다고 생각해요.',
            //     createdAt: '28분 전',
            // },
        ],
    },
];

const aiPostList = [
    {
        date: '2026년 03월 03일',
        category: 0,
        title: '시험 직전 불안이 심해질 때 내가 했던 복기 루틴 3가지를 소개합니다',
        profile: icon04,
        author: '필기마스터',
        views: 45,
        likes: 35,
        comments: 6,
    },
    {
        date: '2026년 03월 03일',
        category: 0,
        title: '도서관 루틴으로 바꾸고 나서 집중력이 유지된 기록',
        profile: icon04,
        author: '필기마스터',
        views: 45,
        likes: 35,
        comments: 6,
    },
    {
        date: '2026년 03월 03일',
        category: 1,
        title: '공부 환경을 바꾸고 나서 성적이 오른 실제 경험담',
        profile: icon04,
        author: '필기마스터',
        views: 45,
        likes: 35,
        comments: 6,
    },
    {
        date: '2026년 03월 03일',
        category: 2,
        title: '기출 회독보다 개념 이해가 먼저다 – 내 공부법 변화기',
        profile: icon04,
        author: '필기마스터',
        views: 45,
        likes: 35,
        comments: 6,
    },
];

const postData = {
    category: 0,
    title: '기출만 파다가 실전에서 백지 된 썰. 공부 환경부터 바꾸고 나서니 변화가 생긴 썰',
    profile: icon04,
    author: '취준마스터',
    views: 4579,
    date: '2026-03-05',
    timeAgo: '10분 전',
};

const CommunityDetailContainer = () => {
    const {id} = useParams()
    const [reportState, setReportState] = React.useState(null);

    const openReport = (type, reportId, profileImg, author, content) => {
        setReportState({ type, id: reportId, profileImg, author, content });
    };
    const closeReport = () => setReportState(null);

    return (
    <ReportContext.Provider value={{ openReport }}>
    <Container>
        <Wrapper>
            {/* 제목 헤더 */}
            <PostHeader
                category={postData.category}
                title={postData.title}
                profile={postData.profile}
                author={postData.author}
                views={postData.views}
                date={postData.date}
                timeAgo={postData.timeAgo}
            />
            <Divider />

            {/* 내용 */}
            <Content />

            {/* 첨부이미지 목록 */}
            <ImagesContainer />
            <Divider />

            {/* 작성자 정보 */}
            <AuthorInfo
                profile={postData.profile}
                author="취준마스터"
                postCount={24}
                faillogCount={18}
                commentCount={136}
            />
            <Divider />

            {/* 중앙(목록으로,좋아요,메뉴버튼컨테이너) */}
            <Middle
                id={id}
                isOwner={true}
                isLiked={true}
                likeCount={24}
                postAuthor={postData.author}
                postProfileImg={postData.profile}
                postContent={postData.title}
            />

            {/* 댓글 컨테이너 */}
            <ReplyContainer replyList={replyList} />

            {/* 이전글/다음글 컨테이너 */}
            <BeforeAfterPost
                prevTitle="시험 직전 불안이 심해질 때 내가 했던 복기 루틴 3가지"
                prevId={2}
                nextTitle="도서관 루틴으로 바꾸고 나서 집중력이 유지된 기록"
                // nextId={4}
            />
            
            <AiPostContainer aiPostList={aiPostList} />
        </Wrapper>
    </Container>
    {reportState && (
        <ReportPopup
            type={reportState.type}
            id={reportState.id}
            profileImg={reportState.profileImg}
            author={reportState.author}
            content={reportState.content}
            onClose={closeReport}
        />
    )}
    </ReportContext.Provider>
    );
};

const Container = styled.div`
    width: 100%;
    background-color: ${colorCSS["faillog-sector-gray"]};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Divider = styled.hr`
    width: 1268px;
    border: none;
    border-top: 1px solid ${colorCSS["faillog_gray4"]};
    margin: 0;
`

const Wrapper = styled.div`
    width: 1320px;
    margin-top: 63px;
    margin-bottom: 101px;
    padding-bottom: 43px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colorCSS["faillog_white"]};
    border-radius: 15px;
    ${boxShadow["boxBasic"]}
`

export default CommunityDetailContainer;