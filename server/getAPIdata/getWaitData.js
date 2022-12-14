import moment from 'moment';
import dotenv from 'dotenv';
import { getHollywoodWaitTimes } from './hollywoodWaitTimes.js';
import { getEpcotWaitTimes } from './epcotWaitTimes.js';
import { getMKWaitTimes } from './magicKingdomWaitTimes.js';
import { getAKWaitTimes } from './animalKingdomWaitTimes.js';
import { connectDB } from '../db.js';

dotenv.config();

const exitProcess = () => {
  setTimeout(() => process.exit(0), 5000);
};

const getWaitTimeData = async () => {
  try {
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
    exitProcess();
  } catch (error) {
    console.log(error);
  }
};

getWaitTimeData();
