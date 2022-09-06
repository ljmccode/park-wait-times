import moment from 'moment';
import dotenv from 'dotenv';
import { getHollywoodWaitTimes } from './hollywoodWaitTimes.js';
import { getEpcotWaitTimes } from './epcotWaitTimes.js';
import { getMKWaitTimes } from './magicKingdomWaitTimes.js';
import { getAKWaitTimes } from './animalKingdomWaitTimes.js';
import { connectDB } from '../db.js';
import mongoose from 'mongoose';

dotenv.config();

// const getWaitTimeData = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     let currentTime = new Date().getTime();
//     let formattedTime = Number(
//       moment(currentTime).tz('America/New_York').format('HH')
//     );
//     if (formattedTime < 7) {
//       console.log(
//         `parks are closed at ${moment(new Date())
//           .tz('America/Chicago')
//           .format('hh:mm')} Central Time`
//       );
//       return;
//     }
//     console.log('about to call APIs');
//     await getHollywoodWaitTimes();
//     await getEpcotWaitTimes();
//     await getMKWaitTimes();
//     await getAKWaitTimes();
//     console.log(
//       `data pulled at ${moment(new Date())
//         .tz('America/Chicago')
//         .format('hh:mm')} Central Time`
//     );
//   }
// };

// getWaitTimeData();

const checkIfOpen = () => {
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
  console.log('open for business!');
};

const connection = connectDB(process.env.MONGO_URI);
connection
  .then(checkIfOpen)
  .then(getHollywoodWaitTimes)
  .then(getEpcotWaitTimes)
  .then(getAKWaitTimes)
  .then(getMKWaitTimes)
  .catch((error) => console.log(error));
