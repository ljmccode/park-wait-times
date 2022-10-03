import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Caret from './Caret';

import styled from 'styled-components';
import {
  updateNameSort,
  updateTimeSort,
  updateStatusSort,
  updateWaitSort,
  sortWaitTimes,
} from '../features/waitTimes/waitTimesSlice';

const WaitTimeHeader = ({ view }) => {
  const dispatch = useDispatch();
  const { currentSort } = useSelector((store) => store.waitTimes);
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
    dispatch(sortWaitTimes());
  };

  const startTimeSort = () => {
    dispatch(updateTimeSort());
    dispatch(sortWaitTimes());
  };

  const startWaitSort = () => {
    dispatch(updateWaitSort());
    dispatch(sortWaitTimes());
  };

  const startStatusSort = () => {
    dispatch(updateStatusSort());
    dispatch(sortWaitTimes());
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
      <div className='status-block' onClick={() => startStatusSort()}>
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
    width: 45%;
  }

  .name-block {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  .wait-block {
    cursor: pointer;
    width: 20%;
  }

  .status-block {
    cursor: pointer;
    width: 30%;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.25rem;
  }
`;
