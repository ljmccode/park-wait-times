import { createSlice } from '@reduxjs/toolkit';

const currentDate = new Date();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const date = currentDate.getDate().toString().padStart(2, '0');
const year = currentDate.getFullYear();

const formattedDate = `${month}/${date}/${year}`;

const initialFilterState = {
  date: formattedDate,
  militaryTime: '12:49',
  time: '12:00 PM',
};

const initialState = {
  isLoading: false,
  waitTimes: [],
  ...initialFilterState,
};

const waitTimesSlice = createSlice({
  name: 'waitTimes',
  initialState,
});

export default waitTimesSlice.reducer;
