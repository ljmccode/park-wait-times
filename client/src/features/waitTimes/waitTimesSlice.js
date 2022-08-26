import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const currentDate = new Date();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const date = currentDate.getDate().toString().padStart(2, '0');
const year = currentDate.getFullYear();

const formattedDate = `${month}/${date}/${year}`;

const initialFilterState = {
  date: formattedDate,
  militaryTime: '12:00',
  time: '12:00 PM',
};

const initialState = {
  isLoading: false,
  waitTimes: [],
  ...initialFilterState,
};

export const getHSTimes = createAsyncThunk(
  'waitTimes/getHSTimes',
  async (_, thunkAPI) => {
    const { militaryTime, date } = thunkAPI.getState().waitTimes;
    let url = `/api/v1/hollywood-studios?time=${militaryTime}&date=${date}`;
    try {
      const { data } = await axios(url);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const waitTimesSlice = createSlice({
  name: 'waitTimes',
  initialState,
  extraReducers: {
    [getHSTimes.pending]: (state) => {
      state.isLoading = true;
    },
    [getHSTimes.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.waitTimes = payload;
    },
    [getHSTimes.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default waitTimesSlice.reducer;
