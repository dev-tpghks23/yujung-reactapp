import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenterRow } from '../../../styles/common';
import { useNavigate } from 'react-router-dom';
import PostForm from '../create/components/PostForm';

const CommunityEditContainer = () => {
    const {id} = useParams()
    const navigate = useNavigate();

    const handleSubmit = (data) => {
        console.log(data);
        navigate(`/community/detail/${id}`);
    };

    const handleCancel = () => {
        navigate('/community/detail/${id}');
    };

    return (
        <Wrapper>
            <PostForm onSubmit={handleSubmit} onCancel={handleCancel} isCreate={false} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding-top: 31px;
    padding-bottom: 31px;
    width: 100%;
    ${flexCenterRow}
`

export default CommunityEditContainer;