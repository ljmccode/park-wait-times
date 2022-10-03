import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import DatePickerComponent from './DatePicker';
import TimeDropdown from './TimeDropdown';
import { useLocation } from 'react-router-dom';
import {
  getDateAndTime,
  convertMilitary,
  convertRegularTime,
} from '../utils/hours';
import {
  getParkTimes,
  updateParkStatus,
  getCurrentWaitTimes,
  updatePark,
  updateTime,
  sortWaitTimes,
} from '../features/waitTimes/waitTimesSlice';

const PageHeader = () => {
  const dispatch = useDispatch();
  const {
    view,
    currentRide,
    date,
    time,
    isParkOpen,
    currentWait,
    availableTimes,
  } = useSelector((store) => store.waitTimes);

  const location = useLocation();
  const url = location.pathname;
  const park = url.split('/')[1];

  useEffect(() => {
    dispatch(updatePark(park));
  }, [park]);

  useEffect(() => {
    const { date: currentDate } = getDateAndTime();
    const fetchData = async () => {
      try {
        await dispatch(getParkTimes());
        if (date !== currentDate) {
          const newTime = convertRegularTime(availableTimes[0]);
          await dispatch(updateTime({ time: newTime }));
        }
        if (currentWait.length === 0 || time === 'Current Time') {
          await dispatch(getCurrentWaitTimes());
        }
        dispatch(sortWaitTimes());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [date, park]);

  useEffect(() => {
    if (time === 'Current Time') {
      const { time: currentTime } = getDateAndTime();
      const military = convertMilitary(currentTime);
      const hour = Number(military.slice(0, 2));
      hour < 7
        ? dispatch(updateParkStatus(false))
        : dispatch(updateParkStatus(true));
    }
  }, [time]);

  if (isParkOpen) {
    return (
      <Header>
        {view === 'time view' ? (
          <TimeDropdown />
        ) : (
          <p className='ride-name'>{currentRide}</p>
        )}
        <DatePickerComponent />
      </Header>
    );
  }
};

export default PageHeader;

const Header = styled.div`
  padding-top: 2rem;
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  .ride-name {
    margin: 0 auto;
    color: var(--primary-600);
    font-weight: bold;
    letter-spacing: var(--letterSpacing);
    font-size: 0.9rem;
    text-align: center;
  }

  .button-div {
    margin: 0 auto;
  }

  .filter-btn {
    border-radius: 1rem;
    padding: 0.5rem 2rem;
    font-size: 1rem;
    width: 150px;
  }

  .select-input {
    cursor: pointer;
    color: var(--primary-600);
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.5rem 0.8rem;
    box-shadow: var(--shadow-2);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .select-input:hover {
    box-shadow: var(--shadow-3);
  }
  .select {
    margin: 0 auto;
  }

  @media screen and (min-width: 668px) {
    .filter-btn {
      font-size: 1.25rem;
    }
    .select-input {
      padding: 0.5rem 1.5rem;
    }
    .ride-name {
      font-size: 1.2rem;
    }
  }
`;
