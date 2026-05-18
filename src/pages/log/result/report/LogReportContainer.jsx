import React from 'react';
import LogReportTebMenu from './LogReportTebMenu';
import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';
import { S } from './LogReportContainerStyles';

const LogReportContainer = () => {
    const context = useOutletContext();
    const navigate = useNavigate();

    return (
        <S.Container>
            <LogReportTebMenu />
            <S.ContentArea>
                <Outlet context={context} />
            </S.ContentArea>
            
            <S.BottomLinkWrapper>
                <S.BottomLink onClick={() => navigate('/projects')}>
                    프로젝트 작성하러 가기
                    <S.ArrowIcon />
                </S.BottomLink>
            </S.BottomLinkWrapper>
        </S.Container>
    );
};

export default LogReportContainer;