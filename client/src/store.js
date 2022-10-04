import { combineReducers, configureStore } from '@reduxjs/toolkit';

import waitTimesSlice from './features/waitTimes/waitTimesSlice';

const rootReducer = combineReducers({
  waitTimes: waitTimesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
