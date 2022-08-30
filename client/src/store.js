import { combineReducers, configureStore } from '@reduxjs/toolkit';

import waitTimesSlice from './features/waitTimes/waitTimesSlice';
import sortSlice from './features/waitTimes/sortSlice';

const rootReducer = combineReducers({
  waitTimes: waitTimesSlice,
  sort: sortSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
