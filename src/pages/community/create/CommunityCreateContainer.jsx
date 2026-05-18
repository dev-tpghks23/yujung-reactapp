import React from 'react';
import PostForm from './components/PostForm';
import styled from 'styled-components';
import { flexCenterRow } from '../../../styles/common';
import { useNavigate } from 'react-router-dom';

const CommunityCreateContainer = () => {
    const navigate = useNavigate();

    const handleSubmit = (data) => {
        console.log(data);
        navigate('/community/detail/3');
    };

    const handleCancel = () => {
        navigate('/community');
    };

    return (
        <Wrapper>
            <PostForm onSubmit={handleSubmit} onCancel={handleCancel} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding-top: 31px;
    padding-bottom: 31px;
    width: 100%;
    ${flexCenterRow}
`

export default CommunityCreateContainer;