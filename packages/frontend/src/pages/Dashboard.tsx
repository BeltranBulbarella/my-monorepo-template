import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import useAuthStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Dashboard Protected Route
            </Typography>
            <Typography variant="body1">Welcome to your dashboard!</Typography>
            <Button variant="contained" color="secondary" onClick={handleLogout} sx={{ mt: 2 }}>
                Logout
            </Button>
        </Container>
    );
};

export default Dashboard;
