import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  nameAscending: true,
  timeAscending: false,
  waitAscending: false,
  statusAscending: false,
  currentSort: 'name',
};

const sortSlice = createSlice({
  name: 'sortSlice',
  initialState,
  reducers: {
    updateNameSort: (state) => {
      return {
        ...initialState,
        nameAscending: !state.nameAscending,
      };
    },
    updateTimeSort: (state) => {
      return {
        ...initialState,
        nameAscending: false,
        timeAscending: !state.timeAscending,
        currentSort: 'time',
      };
    },
    updateWaitSort: (state) => {
      return {
        ...initialState,
        nameAscending: false,
        waitAscending: !state.waitAscending,
        currentSort: 'waitTime',
      };
    },
    updateStatusSort: (state) => {
      return {
        ...initialState,
        nameAscending: false,
        statusAscending: !state.statusAscending,
        currentSort: 'status',
      };
    },
  },
});

export const {
  updateNameSort,
  updateWaitSort,
  updateStatusSort,
  updateTimeSort,
} = sortSlice.actions;

export default sortSlice.reducer;