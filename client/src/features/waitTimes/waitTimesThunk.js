import axios from 'axios';

export const getParkTimesThunk = async (_, thunkAPI) => {
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
};

export const viewRideInfoThunk = async (name, thunkAPI) => {
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
};
