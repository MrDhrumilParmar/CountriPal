// src/components/Dashboard.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import ExpenseForm from './ExpenseForm';
import Friends from './Friends';
import FriendsExpenses from './FriendsExpenses';

const Dashboard = () => {
  const handleExpenseSubmit = (expense) => {
    console.log(expense);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Friends />
      <ExpenseForm onSubmit={handleExpenseSubmit} />
      <FriendsExpenses />
    </Box>
  );
};

export default Dashboard;
