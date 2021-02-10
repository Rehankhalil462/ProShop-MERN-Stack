import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import products from './data/products.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();
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

const PORT = process.env.PORT || 5000;

//backend server will serve on this port
app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
