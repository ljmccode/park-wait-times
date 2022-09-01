import moment from 'moment';
import { getHollywoodWaitTimes } from './hollywoodWaitTimes.js';
import { getEpcotWaitTimes } from './epcotWaitTimes.js';
import { getMKWaitTimes } from './magicKingdomWaitTimes.js';
import { getAKWaitTimes } from './animalKingdomWaitTimes.js';
import { connectDB } from '../db.js';

export const getWaitTimeData = async () => {
  await connectDB(process.env.MONGO_URI);
  console.log('connected!');
  let currentTime = new Date().getTime();
  let formattedTime = Number(
    moment(currentTime).tz('America/New_York').format('HH')
  );
  if (formattedTime < 7) {
    console.log(
      `parks are closed at ${new Date().toLocaleTimeString()} Central Time`
    );
    return;
  }
  getHollywoodWaitTimes();
  getEpcotWaitTimes();
  getMKWaitTimes();
  getAKWaitTimes();
  console.log(
    `data pulled at ${moment(new Date()).tz('America/Chicago')} Central Time`
  );
};

getWaitTimeData();
