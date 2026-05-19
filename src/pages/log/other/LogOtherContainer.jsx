import React from 'react';
import { Outlet } from 'react-router-dom';
import LogPopularSolution from './LogPopularSolution';
import LogOtherHero from './LogOtherHero';
import LogOtherSearch from './LogOtherSearch';
import LogOtherList from './LogOtherList';


const LogOtherContainer = () => {
    return (
        <div>
            <LogPopularSolution />
            <LogOtherHero />
            <LogOtherSearch />
            <LogOtherList />
        </div>
    );
};

export default LogOtherContainer;