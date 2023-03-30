import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from './Select';
import {
  handleChange,
  updateMilitaryTime,
} from '../features/waitTimes/waitTimesSlice';
import {
  convertMilitary,
  convertRegularTime,
  getDateAndTime,
} from '../utils/hours';

const TimeDropdown = () => {
  const dispatch = useDispatch();
  const { time, availableTimes, date } = useSelector(
    (store) => store.waitTimes
  );
  const dropdownTimes =
    availableTimes && availableTimes.map((time) => convertRegularTime(time));
  const dropdownWithCurrent = ['Current Time'].concat(dropdownTimes);
  const { date: currentDate } = getDateAndTime();

  const handleTimeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    if (time !== 'Current Time') {
      const militaryTime = convertMilitary(time);
      dispatch(updateMilitaryTime(militaryTime));
    }
  }, [time]);

  return (
    <Select
      name={'time'}
      value={
        dropdownWithCurrent.includes(time)
          ? time
          : "8:00 AM"
      }
      handleChange={handleTimeInput}
      options={currentDate === date ? dropdownWithCurrent : dropdownTimes}
    />
  );
};

export default TimeDropdown;
