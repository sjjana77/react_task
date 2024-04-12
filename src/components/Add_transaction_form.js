import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, MenuItem, TextareaAutosize } from '@mui/material';

const Add_transaction_form = () => {
  const [formData, setFormData] = useState({
    date: '',
    amount: '',
    message: '',
    transaction_type: '',
    mode: '',
    source: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(()=>{
    console.log(formData);
  }, [formData])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
       Add Transaction
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          type="date"
          label="Date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />
        
        <TextField
          fullWidth
          label="Amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          inputProps={{
            type: 'number',
            pattern: '[0-9]*', // Optional, for browsers that support it
          }}
        />

        <TextField
          multiline
          name='message'
          rows={4}
          style={{ width: '100%' }}
          maxRows={4}
          value={formData.message}
          onChange={handleChange}
        />

        
        <TextField
          fullWidth
          select
          label="Transaction Type"
          name="transaction_type"
          value={formData.transaction_type}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        >
          <MenuItem value="expense">Expense</MenuItem>
          <MenuItem value="income">Income</MenuItem>
        </TextField>
        <TextField
          fullWidth
          select
          label="Mode of Payment"
          name="mode"
          value={formData.mode}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        >
          <MenuItem value="upi">UPI</MenuItem>
          <MenuItem value="cash">Cash</MenuItem>
          <MenuItem value="bank">Bank Transfer</MenuItem>
          <MenuItem value="cheque">Cheque</MenuItem>
        </TextField>
        <TextField
          fullWidth
          select
          label="Source"
          name="source"
          value={formData.source}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        >
          <MenuItem value="home">Home</MenuItem>
          <MenuItem value="office">Office</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: 16 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Add_transaction_form;
