import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './db.js';
import { getHollywoodWaitTimes } from './controllers/hollywoodWaitTimes.js';
import { getEpcotWaitTimes } from './controllers/epcotWaitTimes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await getHollywoodWaitTimes();
    await getEpcotWaitTimes();
    app.listen(port, () => {
      console.log(`Now listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
