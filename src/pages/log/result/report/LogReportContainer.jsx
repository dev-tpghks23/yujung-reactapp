import React from 'react';
import LogReportTebMenu from './LogReportTebMenu';
import { Outlet, useOutletContext } from 'react-router-dom';

const LogReportContainer = () => {
    const context = useOutletContext();
    return (
        <div>
            <LogReportTebMenu />
            <div>
                <Outlet context={context} />
            </div>
        </div>
    );
};

export default LogReportContainer;