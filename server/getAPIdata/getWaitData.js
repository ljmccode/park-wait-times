import { getHollywoodWaitTimes } from './hollywoodWaitTimes.js';
import { getEpcotWaitTimes } from './epcotWaitTimes.js';

export const getWaitTimeData = () => {
  console.log('data pulled!');
  getHollywoodWaitTimes();
  getEpcotWaitTimes();
};
