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
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        >
          <MenuItem value="category1">Category 1</MenuItem>
          <MenuItem value="category2">Category 2</MenuItem>
          <MenuItem value="category3">Category 3</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: 16 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Add_transaction_form;
