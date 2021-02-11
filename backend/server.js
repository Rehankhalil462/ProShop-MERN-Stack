import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB();
//initializing express server
const app = express();

//what to do when someone asks or target homepage or '/' route
app.get('/', (req, res) => {
  res.send('API is running');
});
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

//backend server will serve on this port
app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
