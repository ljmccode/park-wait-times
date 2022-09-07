import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getParkTimesThunk, viewRideInfoThunk } from './waitTimesThunk';
import { getFloridaTime } from '../../utils/hours';
import moment from 'moment';
import 'moment-timezone';

const getDateAndTime = () => {
  const { hour, amPm } = getFloridaTime();
  const today = moment(new Date()).tz('America/New_York');
  return {
    time: `${hour}:00 ${amPm}`,
    date: today.format('MM/DD/YYYY'),
  };
};

const { date, time } = getDateAndTime();

const initialFilterState = {
  date,
  militaryTime: '12:00',
  time,
};

const initialState = {
  currentPark: 'magic-kingdom',
  currentRide: '',
  view: 'time view',
  isLoading: false,
  waitTimes: [],
  availableTimes: [],
  isParkOpen: true,
  ...initialFilterState,
};

export const getParkTimes = createAsyncThunk(
  'waitTimes/getParkTimes',
  getParkTimesThunk
);

export const viewRideInfo = createAsyncThunk(
  'waitTimes/viewRideInfo',
  viewRideInfoThunk
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
    updateParkStatus: (state, { payload }) => {
      state.isParkOpen = payload;
    },
  },
  extraReducers: {
    [getParkTimes.pending]: (state) => {
      state.isLoading = true;
    },
    [getParkTimes.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.waitTimes = payload.rides;
      state.availableTimes = payload.times;
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
  },
});

export const {
  handleChange,
  updateTime,
  updateMilitaryTime,
  updatePark,
  updateView,
  changeDate,
  updateParkStatus,
} = waitTimesSlice.actions;

export default waitTimesSlice.reducer;
