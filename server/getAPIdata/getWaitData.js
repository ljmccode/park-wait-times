import moment from 'moment';
import dotenv from 'dotenv';
import { getHollywoodWaitTimes } from './hollywoodWaitTimes.js';
import { getEpcotWaitTimes } from './epcotWaitTimes.js';
import { getMKWaitTimes } from './magicKingdomWaitTimes.js';
import { getAKWaitTimes } from './animalKingdomWaitTimes.js';
import { connectDB } from '../db.js';
import mongoose from 'mongoose';

dotenv.config();

const getWaitTimeData = async () => {
  await connectDB(process.env.MONGO_URI);
  let currentTime = new Date().getTime();
  let formattedTime = Number(
    moment(currentTime).tz('America/New_York').format('HH')
  );
  if (formattedTime < 7) {
    console.log(
      `parks are closed at ${moment(new Date())
        .tz('America/Chicago')
        .format('hh:mm')} Central Time`
    );
    return;
  }
  await getHollywoodWaitTimes();
  await getEpcotWaitTimes();
  await getMKWaitTimes();
  await getAKWaitTimes();
  console.log(
    `data pulled at ${moment(new Date())
      .tz('America/Chicago')
      .format('hh:mm')} Central Time`
  );
  mongoose.connection.close(function () {
    console.log('connection closed successfully');
    process.exit(1);
  });
};

getWaitTimeData();
