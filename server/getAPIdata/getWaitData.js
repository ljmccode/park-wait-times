import moment from 'moment';
import { getHollywoodWaitTimes } from './hollywoodWaitTimes.js';
import { getEpcotWaitTimes } from './epcotWaitTimes.js';
import { getMKWaitTimes } from './magicKingdomWaitTimes.js';
import { getAKWaitTimes } from './animalKingdomWaitTimes.js';

export const getWaitTimeData = () => {
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
    `data pulled at ${moment(new Date())
      .tz('America/Chicago')
      .format('hh:mm')} Central Time`
  );
};
