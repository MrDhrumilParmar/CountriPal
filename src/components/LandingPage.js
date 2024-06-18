// src/components/LandingPage.js
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Box sx={{ padding: 2, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>Welcome to Expense Manager</Typography>
      <Button component={Link} to="/signup" variant="contained" color="primary">Get Started</Button>
    </Box>
  );
};

export default LandingPage;
