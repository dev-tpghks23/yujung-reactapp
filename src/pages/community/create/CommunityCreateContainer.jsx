import React from 'react';
import PostForm from './components/PostForm';
import styled from 'styled-components';
import { flexCenterColumn } from '../../../styles/common';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../../store/authStore';

// TODO: 로그인 구현 후 auth context에서 가져올 것
const CURRENT_MEMBER_ID = 1;

const CommunityCreateContainer = () => {
    const navigate = useNavigate();

    const memberId = useAuthStore((state) => state.user?.id ?? 0);
    // console.log(memberId);

    const handleSubmit = async (data) => {
        const res = await fetch('http://localhost:10000/api/posts/write', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                postTitle: data.title,
                postContent: data.content,
                categoryId: data.category + 1,
                memberId,
            }),
        });
        if (!res.ok) return;
        const json = await res.json();
        if (json.success) {
            navigate(`/community/detail/${json.data.postId}`);
        }
    };

    const handleCancel = () => {
        navigate('/community');
    };

    return (
        <Wrapper>
            <PostForm onSubmit={handleSubmit} onCancel={handleCancel} />
            {/* <HtmlContent content={html}/> */}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding-top: 31px;
    padding-bottom: 31px;
    width: 100%;
    ${flexCenterColumn}
`

export default CommunityCreateContainer;