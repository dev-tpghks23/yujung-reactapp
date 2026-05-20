import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

const MyPageContainer = () => {
    const { isAuthenticated } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) navigate('/login', { replace: true });
    }, [isAuthenticated]);

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default MyPageContainer;