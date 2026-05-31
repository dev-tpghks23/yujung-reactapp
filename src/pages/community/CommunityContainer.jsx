import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import CommunityMainHeader from './list/components/CommunityMainHeader';
import CommunityBestPost from './list/components/CommunityBestPost';
import CommunityPopularPostContainer from './list/components/CommunityPopularPostContainer';
import CommunityPostSearchContainer from './list/components/CommunityPostSearchContainer';
import myStyle from './styles/CommunityContainerStyle'
import CommunityListContainer from './list/CommunityListContainer'
import S from './style'
import AiPostListContainer from './list/components/AiPostListContainer';

const stripHtml = (html) => {
    if (!html) return '';
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
};

const extractFirstImage = (html) => {
    if (!html) return null;
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const img = doc.querySelector('img');
    return img ? img.getAttribute('src') : null;
};

const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return dateStr.slice(0, 10).replace(/-/g, '.');
};

const mapPost = (p) => ({
    id: p.id,
    category: p.categoryId - 1,
    title: p.postTitle,
    content: stripHtml(p.postContent),
    date: formatDate(p.postCreatedAt),
    profile: p.memberProfileImageUrl,
    author: p.memberNickname,
    views: p.postReadCount,
    likes: p.likeCount,
    isLiked: p.isLiked === 1,
    comments: p.replyCount,
    thumbnail: extractFirstImage(p.postContent),
});

const CommunityContainer = () => {
    const [mainData, setMainData] = useState(null);
    const memberId = useAuthStore((state) => state.user?.id ?? 0);

    useEffect(() => {
        // console.log(memberId);
        const fetchMain = async () => {
            const res = await fetch(`http://localhost:10000/api/posts/main?id=${memberId}`, { method: 'POST' });
            if (!res.ok) return;
            const json = await res.json();
            if (!json.success) return;
            setMainData(json.data);
        };
        fetchMain();
    }, []);

    if (!mainData) return null;

    const bestPost = mainData.postMonth ? mapPost(mainData.postMonth) : null;
    const popularPostsMapped = (mainData.popularPosts || []).map(mapPost);
    const postListMapped = (mainData.post?.posts || []).map(mapPost);
    const initialMaxPage = Math.ceil((mainData.post?.total || 0) / 6) || 1;

    return (
        <div>
            <CommunityMainHeader />

            {bestPost && (
                <CommunityBestPost
                    id={bestPost.id}
                    title={bestPost.title}
                    content={bestPost.content}
                    date={bestPost.date}
                    thumbnail={bestPost.thumbnail}
                    profile={bestPost.profile}
                    author={bestPost.author}
                    views={bestPost.views}
                    likes={bestPost.likes}
                    isLike={bestPost.isLiked}
                    comments={bestPost.comments}
                />
            )}

            {popularPostsMapped.length > 0 && (
                <CommunityPopularPostContainer posts={popularPostsMapped} />
            )}

            <myStyle.ListBgWrap>
                <CommunityPostSearchContainer />
                <S.Wrapper margintop={"55px"}>
                    <myStyle.PostListAndAiRecommandPostWrapper>
                        <CommunityListContainer initialPostList={postListMapped} initialMaxPage={initialMaxPage} />
                        <AiPostListContainer />
                    </myStyle.PostListAndAiRecommandPostWrapper>
                </S.Wrapper>
            </myStyle.ListBgWrap>
        </div>
    );
};

export default CommunityContainer;
