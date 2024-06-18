// src/components/FriendsExpenses.js
import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const FriendsExpenses = () => {
  const [friends, setFriends] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchFriendsAndExpenses = async () => {
      const friendsCollection = collection(db, 'friends');
      const friendsSnapshot = await getDocs(friendsCollection);
      const friendsList = friendsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFriends(friendsList);

      const expensesCollection = collection(db, 'expenses');
      const expensesSnapshot = await getDocs(expensesCollection);
      const expensesList = expensesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setExpenses(expensesList);
    };

    fetchFriendsAndExpenses();
  }, []);

  const getDistributedExpenses = () => {
    if (friends.length === 0 || expenses.length === 0) return [];

    const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
    const perFriend = totalAmount / friends.length;

    return friends.map(friend => ({
      name: friend.name,
      amount: perFriend.toFixed(2),
    }));
  };

  const distributedExpenses = getDistributedExpenses();

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Distributed Expenses</Typography>
      <List>
        {distributedExpenses.map((friendExpense, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${friendExpense.name}: $${friendExpense.amount}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FriendsExpenses;
