import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getFloridaTime } from '../../utils/hours';
import moment from 'moment';
import 'moment-timezone';

const getDateAndTime = () => {
  const { hour, amPm } = getFloridaTime();
  const today = moment(new Date()).tz('America/New_York');
  const yesterday = moment(new Date())
    .tz('America/New_York')
    .subtract(1, 'day');

  if (amPm === 'AM' && hour < 7) {
    return {
      time: '9:00 PM',
      date: yesterday.format('MM/DD/YYYY'),
    };
  }
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
  ...initialFilterState,
};

export const getParkTimes = createAsyncThunk(
  'waitTimes/getParkTimes',
  async (_, thunkAPI) => {
    let { currentSort, waitAscending, nameAscending, statusAscending } =
      thunkAPI.getState().sort;

    switch (currentSort) {
      case 'name':
        currentSort = nameAscending ? currentSort : `-${currentSort}`;
        break;
      case 'waitTime':
        currentSort = waitAscending ? `-${currentSort}` : currentSort;
        break;
      case 'status':
        currentSort = statusAscending ? currentSort : `-${currentSort}`;
        break;
      default:
        currentSort = 'name';
    }
    const { militaryTime, date, currentPark } = thunkAPI.getState().waitTimes;
    let url = `/api/v1/${currentPark}?time=${militaryTime}&date=${date}&sort=${currentSort}`;
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
    let { currentSort, waitAscending, timeAscending, statusAscending } =
      thunkAPI.getState().sort;

    switch (currentSort) {
      case 'time':
        currentSort = timeAscending ? currentSort : `-${currentSort}`;
        break;
      case 'waitTime':
        currentSort = waitAscending ? `-${currentSort}` : currentSort;
        break;
      case 'status':
        currentSort = statusAscending ? currentSort : `-${currentSort}`;
        break;
      default:
        currentSort = 'time';
    }
    const { date, currentPark } = thunkAPI.getState().waitTimes;
    const urlName = encodeURIComponent(name);
    let url = `/api/v1/${currentPark}/${urlName}?date=${date}&sort=${currentSort}`;
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
      console.log(payload.availableTimes);
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
} = waitTimesSlice.actions;

export default waitTimesSlice.reducer;
