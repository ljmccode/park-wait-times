import moment from 'moment';
import { getHollywoodWaitTimes } from './hollywoodWaitTimes.js';
import { getEpcotWaitTimes } from './epcotWaitTimes.js';

export const getWaitTimeData = () => {
  let currentTime = new Date().getTime();
  let formattedTime = Number(
    moment(currentTime).tz('America/New_York').format('HH')
  );
  if (formattedTime < 7) {
    console.log('parks are closed');
    return;
  }
  getHollywoodWaitTimes();
  getEpcotWaitTimes();
  console.log('data pulled!');
};
