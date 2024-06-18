// src/components/ExpenseForm.js
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const ExpenseForm = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description.trim() || !amount.trim()) {
      setError('Please enter both description and amount');
      return;
    }
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('Please enter a valid positive amount');
      return;
    }
    const expense = {
      description,
      amount: parsedAmount,
      createdAt: new Date(),
    };
    try {
      await addDoc(collection(db, 'expenses'), expense);
      onSubmit(expense);
      setDescription('');
      setAmount('');
      setError('');
    } catch (err) {
      setError('Failed to add expense');
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Add Expense</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Amount"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          fullWidth
          margin="normal"
          type="number"
        />
        {error && (
          <Typography variant="body2" color="error" gutterBottom>{error}</Typography>
        )}
        <Button type="submit" variant="contained" color="primary">Add Expense</Button>
      </form>
    </Box>
  );
};

export default ExpenseForm;
