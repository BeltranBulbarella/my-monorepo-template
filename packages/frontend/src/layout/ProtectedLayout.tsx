import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const ProtectedLayout: React.FC = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Protected Area
                    </Typography>
                    <Button color="inherit" component={Link} to="/dashboard">
                        Dashboard
                    </Button>
                </Toolbar>
            </AppBar>
            <Container sx={{ marginTop: 4 }}>
                <Outlet />
            </Container>
        </>
    );
};

export default ProtectedLayout;
