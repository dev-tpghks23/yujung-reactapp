import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { boxShadow, colorCSS } from '../style';
import PostHeader from './components/PostHeader';
import icon04 from '../resources/default.png';
import Content from './components/Content';
import ImagesContainer from './components/ImagesContainer';
import AuthorInfo from './components/AuthorInfo';
import Middle from './components/Middle';
import ReplyContainer from './components/ReplyContainer';
import BeforeAfterPost from './components/BeforeAfterPost';
import AiPostContainer from './components/AiPostContainer';
import ReportPopup from './components/ReportPopup';
import { ReportContext } from './components/ReportContext';
import { formatRelativeTime } from '../../../utils/relativeTime';
import PopupComponent from '../../../components/commons/PopupComponent';
import useAuthStore from '../../../store/authStore';

// TODO: 로그인 구현 후 auth context에서 가져올 것
// const CURRENT_MEMBER_ID = 1;

const formatTimeAgo = (dateStr) => {
    if (!dateStr) return '';
    // const date = new Date(dateStr.replace(' ', 'T'));
    const date = new Date(dateStr);
    const diff = Math.floor((Date.now() - date.getTime()) / 1000);
    if (diff < 60) return '방금';
    if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
    if (diff < 2592000) return `${Math.floor(diff / 86400)}일 전`;
    if (diff < 31536000) return `${Math.floor(diff / 2592000)}개월 전`;
    return `${Math.floor(diff / 31536000)}년 전`;
};

const CommunityDetailContainer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [reportState, setReportState] = useState(null);
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);

    const memberId = useAuthStore((state) => state.user?.id ?? 0);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const res = await fetch('http://localhost:10000/api/posts/read', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ memberId, postId: Number(id) }),
                });
                const json = await res.json();
                if (json.success) {
                    setPageData(json.data);
                } else {
                    setError(json.message);
                }
            } catch {
                setError('서버 연결에 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id, refreshKey]);

    const openReport = (type, reportId, profileImg, author, content) => {
        if (memberId === 0) {
            alert('로그인이 필요한 서비스입니다.');
            navigate('/login');
            return;
        }
        setReportState({ type, id: reportId, profileImg, author, content });
    };
    const closeReport = () => setReportState(null);

    if (loading) return <StatusText>불러오는 중...</StatusText>;
    if (error || !pageData) return <StatusText>{error ?? '게시글을 찾을 수 없습니다.'}</StatusText>;

    const { post, replies, beforePost, afterPost, postAiList,
        memberPostCount, memberLogCount, memberReplyCount } = pageData;

    // API categoryId는 1-indexed, getCategoryInfo는 0-indexed
    const categoryIndex = (post.categoryId ?? 1) - 1;

    const profileImg = post.memberProfileImageUrl ?? icon04;
    const dateStr = post.postCreatedAt?.slice(0, 10) ?? '';
    const timeAgo = formatTimeAgo(post.postCreatedAt);

    // post.postContent에있는 이미지들의 주소들을 images에저장
    const doc = new DOMParser().parseFromString(post.postContent, 'text/html');
    const docImageUrls = Array.from(doc.querySelectorAll('img')).map(img => img.getAttribute('src'));

    const images = (docImageUrls ?? []).map((url) => ({
        src: url,
        name: url.split('/').pop().split('?')[0],
    }));

    const replyList = (replies ?? []).map((r) => ({
        loginId: memberId,
        memberId: r.memberId,
        replyId: r.id,
        profileImg: r.memberProfileImageUrl ?? icon04,
        createdAt: formatTimeAgo(r.replyCreatedAt),
        author: r.memberNickname,
        content: r.replyContent,
        isLiked: r.isLiked === 1,
        likeCount: r.likeCount ?? 0,
        rereplyList: (r.replies ?? []).map((rr) => ({
            loginId: memberId,
            memberId: rr.memberId,
            rereplyId: rr.id,
            profileImg: rr.memberProfileImageUrl ?? icon04,
            author: rr.memberNickname,
            content: rr.rereplyContent,
            createdAt: formatTimeAgo(rr.rereplyCreatedAt),
        })),
    }));

    return (
    <ReportContext.Provider value={{ openReport }}>
    <Container>
        <Wrapper>
            <PostHeader
                memberId={post.memberId}
                category={categoryIndex}
                title={post.postTitle}
                profile={profileImg}
                author={post.memberNickname}
                views={post.postReadCount}
                date={dateStr}
                timeAgo={timeAgo}
            />
            <Divider />

            <Content htmlContent={post.postContent} />

            <ImagesContainer images={images} />

            <Divider />

            <AuthorInfo
                memberId={post.memberId}
                profile={profileImg}
                author={post.memberNickname}
                postCount={memberPostCount ?? 0}
                faillogCount={memberLogCount ?? 0}
                commentCount={memberReplyCount ?? 0}
            />
            <Divider />

            <Middle
                loginId={memberId}
                isOwner={post.memberId === memberId}
                isLiked={post.isLiked === 1}
                likeCount={post.likeCount}
                postId={post.id}
                postAuthor={post.memberNickname}
                postProfileImg={profileImg}
                postContent={post.postTitle}
            />

            <ReplyContainer
                replyList={replyList}
                postId={post.id}
                loginId={memberId}
            />

            <BeforeAfterPost
                prevTitle={beforePost?.postTitle}
                prevId={beforePost?.id}
                nextTitle={afterPost?.postTitle}
                nextId={afterPost?.id}
            />

            <AiPostContainer memberId={memberId} postId={post.id} />
        </Wrapper>
    </Container>
    {reportState && (
        <ReportPopup
            type={reportState.type}
            id={reportState.id}
            profileImg={reportState.profileImg}
            author={reportState.author}
            content={reportState.content}
            memberId={memberId}
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

const StatusText = styled.div`
    width: 100%;
    padding: 100px 0;
    text-align: center;
    font-size: 16px;
    color: ${colorCSS["faillog_gray9"]};
`

export default CommunityDetailContainer;
