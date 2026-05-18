import React from 'react';
import { useParams } from 'react-router-dom';
import { S } from './LogReportTebMenuStyles';

const LogReportTebMenu = () => {
    const { id } = useParams();

    return (
        <S.MenuWrapper>
            <S.TabLink to={`/logs/result/${id}/report/patterns`}>
                패턴 분석
            </S.TabLink>
            <S.TabLink to={`/logs/result/${id}/report/action-plan`}>
                행동 계획
            </S.TabLink>
        </S.MenuWrapper>
    );
};

export default LogReportTebMenu;