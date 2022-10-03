import axios from 'axios';

export const getParkTimesThunk = async (_, thunkAPI) => {
  const { date, currentPark } = thunkAPI.getState().waitTimes;
  let url = `/api/v1/${currentPark}?date=${date}`;
  try {
    const { data } = await axios(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentWaitTimesThunk = async (_, thunkAPI) => {
  const { currentPark } = thunkAPI.getState().waitTimes;
  let url = `/api/v1/currentWait/${currentPark}`;
  try {
    const { data } = await axios(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
