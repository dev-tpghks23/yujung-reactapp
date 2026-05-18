import React, { useState } from 'react';
import PostForm from './components/PostForm';
import styled from 'styled-components';
import { flexCenterColumn, flexCenterRow } from '../../../styles/common';
import { useNavigate } from 'react-router-dom';
// import HtmlContent from '../detail/components/HtmlContent';

const CommunityCreateContainer = () => {
    const navigate = useNavigate();
    // const [html, setHtml] = useState("");

    const handleSubmit = (data) => {
        console.log(data);
        navigate('/community/detail/3');
        // setHtml(data.content)
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