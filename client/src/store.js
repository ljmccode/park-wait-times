import { configureStore } from '@reduxjs/toolkit';

import waitTimesSlice from './features/waitTimes/waitTimesSlice';

export const store = configureStore({
  reducer: waitTimesSlice,
});
