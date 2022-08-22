import dotenv from 'dotenv';
import express from 'express';
import cron from 'node-cron';
import { connectDB } from './db.js';
import { getWaitTimeData } from './controllers/getWaitData.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await cron.schedule('0 * * * *', () => getWaitTimeData());
    // getWaitTimeData();
    app.listen(port, () => {
      console.log(`Now listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
