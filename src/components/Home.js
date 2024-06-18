import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

function Home() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Typography variant="h2" gutterBottom>Welcome to Splitwise Clone</Typography>
      <Button variant="contained" color="primary" component={Link} to="/login">Login</Button>
      <Button variant="outlined" color="secondary" component={Link} to="/signup">Sign Up</Button>
    </Box>
  );
}

export default Home;
