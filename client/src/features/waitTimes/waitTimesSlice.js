import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getParkTimesThunk, getCurrentWaitTimesThunk } from './waitTimesThunk';
import { getDateAndTime } from '../../utils/hours';

const { date } = getDateAndTime();

const initialFilterState = {
  date,
  militaryTime: '12:00',
  time: 'Current Time',
};

const initialSortState = {
  nameAscending: true,
  timeAscending: false,
  waitAscending: false,
  statusAscending: false,
  currentSort: 'name',
};

const initialState = {
  currentPark: 'magic-kingdom',
  currentRide: '',
  view: 'time view',
  isLoading: false,
  waitTimes: [],
  sortedWaitTimes: [],
  currentWait: [],
  availableTimes: [],
  isParkOpen: true,
  ...initialFilterState,
  ...initialSortState,
};

export const getParkTimes = createAsyncThunk(
  'waitTimes/getParkTimes',
  getParkTimesThunk
);
export const getCurrentWaitTimes = createAsyncThunk(
  'waitTimes/getCurrentWaitTimes',
  getCurrentWaitTimesThunk
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
      const { view, currentSort } = payload;
      state.view = view;
      state.currentSort = currentSort;
    },
    changeDate: (state, { payload }) => {
      state.date = payload;
    },
    updateParkStatus: (state, { payload }) => {
      state.isParkOpen = payload;
    },
    setCurrentRide: (state, { payload }) => {
      state.currentRide = payload;
    },
    updateNameSort: (state, { payload }) => {
      return {
        ...state,
        ...initialSortState,
        nameAscending: payload ? true : !state.nameAscending,
      };
    },
    updateTimeSort: (state) => {
      return {
        ...state,
        ...initialSortState,
        nameAscending: false,
        timeAscending: !state.timeAscending,
        currentSort: 'time',
      };
    },
    updateWaitSort: (state) => {
      return {
        ...state,
        ...initialSortState,
        nameAscending: false,
        waitAscending: !state.waitAscending,
        currentSort: 'waitTime',
      };
    },
    updateStatusSort: (state) => {
      return {
        ...state,
        ...initialSortState,
        nameAscending: false,
        statusAscending: !state.statusAscending,
        currentSort: 'status',
      };
    },
    restartSort: (state) => {
      return {
        ...state,
        ...initialSortState,
      };
    },
    sortWaitTimes: (state) => {
      const {
        waitTimes,
        nameAscending,
        timeAscending,
        waitAscending,
        statusAscending,
        currentSort,
        currentWait,
        view,
        time,
      } = state;
      let tempWaits;
      if (time === 'Current Time' && view === 'time view') {
        tempWaits = [...currentWait];
      } else {
        tempWaits = [...waitTimes];
      }
      if (currentSort === 'name') {
        nameAscending === true
          ? (tempWaits = tempWaits.sort((a, b) => a.name.localeCompare(b.name)))
          : (tempWaits = tempWaits.sort((a, b) =>
              b.name.localeCompare(a.name)
            ));
      }
      if (currentSort === 'time') {
        timeAscending === true
          ? (tempWaits = tempWaits.sort(
              (a, b) => Number(a.time.slice(0, 2)) - Number(b.time.slice(0, 2))
            ))
          : (tempWaits = tempWaits.sort(
              (a, b) => Number(b.time.slice(0, 2)) - Number(a.time.slice(0, 2))
            ));
      }
      if (currentSort === 'status') {
        statusAscending === true
          ? (tempWaits = tempWaits.sort((a, b) =>
              a.status.localeCompare(b.status)
            ))
          : (tempWaits = tempWaits.sort((a, b) =>
              b.status.localeCompare(a.status)
            ));
      }
      if (currentSort === 'waitTime') {
        waitAscending === true
          ? (tempWaits = tempWaits.sort((a, b) => a.waitTime - b.waitTime))
          : (tempWaits = tempWaits.sort((a, b) => b.waitTime - a.waitTime));
      }
      state.sortedWaitTimes = tempWaits;
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
      if (state.time !== 'Current Time' || state.view === 'ride view') {
        state.sortedWaitTimes = payload.rides;
      }
    },
    [getParkTimes.rejected]: (state) => {
      state.isLoading = false;
    },
    [getCurrentWaitTimes.pending]: (state) => {
      state.isLoading = true;
    },
    [getCurrentWaitTimes.fulfilled]: (state, { payload }) => {
      const dataWithTime = payload
        .map((ride) => {
          ride.time = 'Current Time';
          return ride;
        })
        .sort((a, b) => a.name.localeCompare(b.name));
      let tempData = {
        ...state,
        isLoading: false,
        currentWait: dataWithTime,
      };
      if (state.view !== 'ride view') {
        tempData.sortedWaitTimes = dataWithTime;
      }
      return tempData;
    },
    [getCurrentWaitTimes.rejected]: (state) => {
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
  updateNameSort,
  updateWaitSort,
  updateStatusSort,
  updateTimeSort,
  restartSort,
  sortWaitTimes,
  setCurrentRide,
} = waitTimesSlice.actions;

export default waitTimesSlice.reducer;
