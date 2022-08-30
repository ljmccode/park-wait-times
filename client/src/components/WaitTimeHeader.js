import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateNameSort,
  updateTimeSort,
  updateStatusSort,
  updateWaitSort,
} from '../features/waitTimes/sortSlice';
import Caret from './Caret';

import styled from 'styled-components';
import {
  getParkTimes,
  viewRideInfo,
} from '../features/waitTimes/waitTimesSlice';

const WaitTimeHeader = ({ view }) => {
  const dispatch = useDispatch();
  const { currentSort } = useSelector((store) => store.sort);
  const { currentRide } = useSelector((store) => store.waitTimes);
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  const startSortName = () => {
    dispatch(updateNameSort());
    dispatch(getParkTimes());
  };

  const startTimeSort = () => {
    dispatch(updateTimeSort());
    dispatch(viewRideInfo(currentRide));
  };

  const startWaitSort = () => {
    dispatch(updateWaitSort());
    if (view === 'time view') {
      return dispatch(getParkTimes());
    }
    dispatch(viewRideInfo(currentRide));
  };

  return (
    <HeaderStyles className='wait-time-header'>
      {view === 'time view' ? (
        <div className='name-block' onClick={() => startSortName()}>
          <span>Name</span>
          {currentSort === 'name' && <Caret />}
        </div>
      ) : (
        <div className='time-block' onClick={() => startTimeSort()}>
          <span>Time</span>
          {currentSort === 'time' && <Caret />}
        </div>
      )}
      <div className='wait-block' onClick={() => startWaitSort()}>
        <span>Wait {width > 668 && <span>Time</span>}</span>
        {currentSort === 'waitTime' && <Caret />}
      </div>
      <div
        className='status-block'
        onClick={() => dispatch(updateStatusSort())}
      >
        <span>Status</span>
        {currentSort === 'status' && <Caret />}
      </div>
    </HeaderStyles>
  );
};

export default WaitTimeHeader;

const HeaderStyles = styled.div`
  position: sticky;
  top: 0;
  background: var(--primary-600);
  color: var(--white);
  font-weight: bold;
  width: 100%;
  display: flex;
  min-height: 60px;
  border-bottom: 1px solid var(--primary-400);
  align-items: center;
  text-align: center;
  font-size: 1rem;

  .caret {
    margin-left: 5px;
  }

  .time-block {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  .name-block {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
  }
  .wait-block {
    cursor: pointer;
    width: 30%;
  }

  .status-block {
    cursor: pointer;
    width: 25%;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.25rem;
  }
`;
