import express from 'express';
import cors from 'cors';
import configRoutes from './src/routes';

require('dotenv').config();

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configRoutes(app);

export default app;
