import React from 'react';
import { Typography, Container } from '@mui/material';

const NotFound: React.FC = () => {
    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                404 - Not Found
            </Typography>
            <Typography variant="body1">
                The page you are looking for does not exist.
            </Typography>
        </Container>
    );
};

export default NotFound;
