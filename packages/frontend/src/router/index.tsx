import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import useAuthStore from '../store/authStore.ts';
import PublicLayout from "../layout/PublicLayout.tsx";
import Home from "../pages/Home.tsx";
import ProtectedLayout from "../layout/ProtectedLayout.tsx";
import Dashboard from "../pages/Dashboard.tsx";

// ProtectedRoute Component
const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        children: [
            { index: true, element: <Home /> },
            // { path: 'login', element: <Login /> },
        ],
    },
    {
        path: '/',
        element: <ProtectedLayout />,
        children: [
            {
                path: 'dashboard',
                element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
            },
        ],
    },
    { path: '*', element: <NotFound /> },
]);

export default router;
