import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Posts from './components/Posts';
import Page from './components/Page';
import { colorCSS } from '../style';
import { flexCenterRow } from '../../../styles/common';
import useSearchStore from './useSearchStore';
import useAuthStore from '../../../store/authStore';

const myStyle = {}

myStyle.wrapper = styled.div`
    width: 984px;
`

myStyle.pageWrapper = styled.div`
    width: 100%;
    height: 136px;
    ${flexCenterRow}
`

//api에서 받은 content는 html태그로되어있다.
//게시글 내용에 html태그를 보이면 안되므로 html태그를 제거하고 내용만 보이도록 변환
const stripHtml = (html) => {
    if (!html) return '';
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
};

//게시글 내용의 첫 img태그의 경로가 썸네일 이미지로 보이도록 구현
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

const CommunityListContainer = ({ initialPostList = [], initialMaxPage = 1 }) => {

    const {order1, order2, category, page, content, setPage, resetSearch} = useSearchStore();
    const [postList, setPostList] = useState(initialPostList);
    const [maxPage, setMaxPage] = useState(initialMaxPage);

    const isMounted = useRef(false);
    const memberId = useAuthStore((state) => state.user?.id ?? 0);

    const fetchPosts = async ({ order, order2Val, cat, pg, cont }) => {
        const query = new URLSearchParams({memberId, order, order2: order2Val, page: pg, category: cat });
        if (cont) query.set('content', cont);
        const res = await fetch(`http://localhost:10000/api/posts?${query}`);
        if (!res.ok) return;
        const json = await res.json();
        if (!json.success) return;
        const mapped = json.data.posts.map(p => ({
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
        }));
        setPostList(mapped);
        setMaxPage(Math.ceil(json.data.total / 6) || 1);
    };

    const b = () => {
        fetchPosts({ order: order1, order2Val: order2, cat: category, pg: page, cont: content });
    };

    useEffect(() => {
        resetSearch();
    }, []);

    useEffect(() => {
        if (!isMounted.current) { isMounted.current = true; return; }
        b();
    }, [order1, order2, category, page, content]);

    const handleChange = (pg) => {
        setPage(pg);
    };

    return (
        <myStyle.wrapper>
            <Posts postData={postList} search={content} />
            <myStyle.pageWrapper>
                <Page minPage={1} maxPage={maxPage} onPageChange={handleChange} page={page}/>
            </myStyle.pageWrapper>
        </myStyle.wrapper>
    );

};

export default CommunityListContainer;
