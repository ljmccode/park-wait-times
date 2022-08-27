import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from './Select';
import {
  handleChange,
  updateTime,
  updateMilitaryTime,
} from '../features/waitTimes/waitTimesSlice';
import { openHours, getFloridaTime, convertMilitary } from '../utils/hours';

const TimeDropdown = () => {
  const dispatch = useDispatch();
  const { time } = useSelector((store) => store.waitTimes);

  const handleTimeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    const currentFloridaTime = getFloridaTime();
    dispatch(updateTime(currentFloridaTime));
  }, []);

  useEffect(() => {
    const militaryTime = convertMilitary(time);
    dispatch(updateMilitaryTime(militaryTime));
  }, [time]);

  return (
    <>
      <Select
        name={'time'}
        value={time}
        handleChange={handleTimeInput}
        options={openHours}
      />
    </>
  );
};

export default TimeDropdown;
