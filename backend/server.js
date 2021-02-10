const express = require('express');
const products = require('./data/products');

//initializing express server
const app = express();

//what to do when someone asks or target homepage or '/' route
app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

//backend server will serve on this port
app.listen(5000, console.log('Server Running on port 5000'));
