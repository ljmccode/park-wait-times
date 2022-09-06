import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import DatePickerComponent from './DatePicker';
import TimeDropdown from './TimeDropdown';
import {
  getParkTimes,
  viewRideInfo,
} from '../features/waitTimes/waitTimesSlice';

const PageHeader = () => {
  const dispatch = useDispatch();
  const { view, currentRide, date, time, currentPark } = useSelector(
    (store) => store.waitTimes
  );

  useEffect(() => {
    view === 'time view'
      ? dispatch(getParkTimes())
      : dispatch(viewRideInfo(currentRide));
  }, [date, time, currentPark]);

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
