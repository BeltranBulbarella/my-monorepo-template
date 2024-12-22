import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore.ts';

const PublicRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

export default PublicRoute;
