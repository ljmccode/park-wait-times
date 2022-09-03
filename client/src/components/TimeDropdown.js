import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from './Select';
import {
  handleChange,
  updateMilitaryTime,
} from '../features/waitTimes/waitTimesSlice';
import { convertMilitary, convertRegularTime } from '../utils/hours';

const TimeDropdown = () => {
  const dispatch = useDispatch();
  const { time, availableTimes } = useSelector((store) => store.waitTimes);
  const dropdownTimes = availableTimes
    ? availableTimes.map((time) => convertRegularTime(time))
    : ['11:00 AM'];

  const handleTimeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    const militaryTime = convertMilitary(time);
    dispatch(updateMilitaryTime(militaryTime));
  }, [time]);

  return (
    <>
      <Select
        name={'time'}
        value={
          dropdownTimes.includes(time)
            ? time
            : dropdownTimes[dropdownTimes.length - 1]
        }
        handleChange={handleTimeInput}
        options={dropdownTimes}
      />
    </>
  );
};

export default TimeDropdown;
