import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ascendTime, ascendName } from './sortSlice';

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
  currentPark: 'hollywood-studios',
  currentRide: '',
  view: 'time view',
  isLoading: false,
  waitTimes: [],
  ...initialFilterState,
};

export const getParkTimes = createAsyncThunk(
  'waitTimes/getParkTimes',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(ascendName());
    const { militaryTime, date, currentPark } = thunkAPI.getState().waitTimes;
    let url = `/api/v1/${currentPark}?time=${militaryTime}&date=${date}&sort=name`;
    try {
      const { data } = await axios(url);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const viewRideInfo = createAsyncThunk(
  'waitTimes/viewRideInfo',
  async (name, thunkAPI) => {
    thunkAPI.dispatch(ascendTime());
    const { date, currentPark } = thunkAPI.getState().waitTimes;
    const urlName = encodeURIComponent(name);
    let url = `/api/v1/${currentPark}/${urlName}?date=${date}&sort=time`;
    try {
      const { data } = await axios(url);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const sortName = createAsyncThunk(
  'waitTimes/sortName',
  async (_, thunkAPI) => {
    try {
      const { nameAscending } = thunkAPI.getState().sort;
      const { currentPark, militaryTime, date } = thunkAPI.getState().waitTimes;
      let url = `/api/v1/${currentPark}?time=${militaryTime}&date=${date}`;

      nameAscending === true ? (url += '&sort=name') : (url += '&sort=-name');
      const { data } = await axios(url);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const sortTime = createAsyncThunk(
  'waitTimes/sortTime',
  async (name, thunkAPI) => {
    try {
      const { timeAscending } = thunkAPI.getState().sort;
      const { date, currentPark } = thunkAPI.getState().waitTimes;
      const urlName = encodeURIComponent(name);
      let url = `/api/v1/${currentPark}/${urlName}?date=${date}`;

      timeAscending === true ? (url += '&sort=time') : (url += '&sort=-time');
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
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    updateTime: (state, { payload }) => {
      state.time = payload.time;
    },
    updateMilitaryTime: (state, { payload }) => {
      state.militaryTime = payload;
    },
    updatePark: (state, { payload }) => {
      state.currentPark = payload;
    },
    updateView: (state, { payload }) => {
      state.view = payload;
      state.currentSort = 'name';
    },
    changeDate: (state, { payload }) => {
      state.date = payload;
    },
  },
  extraReducers: {
    [getParkTimes.pending]: (state) => {
      state.isLoading = true;
    },
    [getParkTimes.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.waitTimes = payload;
    },
    [getParkTimes.rejected]: (state) => {
      state.isLoading = false;
    },
    [viewRideInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [viewRideInfo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.waitTimes = payload;
      state.view = 'ride view';
      state.currentRide = payload[0].name;
    },
    [viewRideInfo.rejected]: (state) => {
      state.isLoading = false;
    },
    [sortName.pending]: (state) => {
      state.isLoading = true;
    },
    [sortName.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.waitTimes = payload;
    },
    [sortName.rejected]: (state) => {
      state.isLoading = false;
    },
    [sortTime.pending]: (state) => {
      state.isLoading = true;
    },
    [sortTime.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.waitTimes = payload;
    },
    [sortTime.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  handleChange,
  updateTime,
  updateMilitaryTime,
  updatePark,
  updateView,
  changeDate,
} = waitTimesSlice.actions;

export default waitTimesSlice.reducer;
