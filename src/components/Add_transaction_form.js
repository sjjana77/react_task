import React, { useState } from 'react';
import { TextField, Button, Typography, Container, MenuItem, TextareaAutosize } from '@mui/material';

const Add_transaction_form = () => {
  const [formData, setFormData] = useState({
    date: '',
    name: '',
    email: '',
    message: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />

        <TextareaAutosize
          rowsMin={3}
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 16 }}
        />
        <TextField
          fullWidth
          select
          label="Transaction Type"
          name="transaction_type"
          value={formData.category}
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
          value={formData.category}
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
          value={formData.category}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        >
          <MenuItem value="upi">UPI</MenuItem>
          <MenuItem value="cash">Cash</MenuItem>
          <MenuItem value="bank">Bank Transfer</MenuItem>
          <MenuItem value="cheque">Cheque</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: 16 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Add_transaction_form;
