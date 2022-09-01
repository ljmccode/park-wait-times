import dotenv from 'dotenv';
import express from 'express';
// import cron from 'node-cron';
import cors from 'cors';

import { connectDB } from './db.js';
// import { getWaitTimeData } from './getAPIdata/getWaitData.js';
import parkRouter from './routes/parkWaitTime.js';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/v1', parkRouter);

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // await cron.schedule('0 * * * *', () => getWaitTimeData());
    app.listen(port, () => {
      console.log(`Now listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
