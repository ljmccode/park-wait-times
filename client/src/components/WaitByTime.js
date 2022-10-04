import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCurrentWaitTimes,
  sortWaitTimes,
} from '../features/waitTimes/waitTimesSlice';
import WaitTimeItem from '../components/WaitTimeItem';
import WaitTimeHeader from '../components/WaitTimeHeader';
import Loader from './Loader';
import NoData from '../components/NoData';
import styled from 'styled-components';
import { convertMilitary } from '../utils/hours';

const WaitByTime = () => {
  const dispatch = useDispatch();
  const { sortedWaitTimes, currentWait, time, view, isLoading, isParkOpen } =
    useSelector((store) => store.waitTimes);
  const military = convertMilitary(time);

  const filteredWaitTimes = () => {
    if (time === 'Current Time') {
      return sortedWaitTimes;
    } else {
      return sortedWaitTimes.filter((ride) => ride.time === military);
    }
  };

  useEffect(() => {
    if (time === 'Current Time' && currentWait.length !== 0) {
      const fetchData = async () => {
        try {
          await dispatch(getCurrentWaitTimes());
          dispatch(sortWaitTimes());
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    } else {
      dispatch(sortWaitTimes());
    }
  }, [time]);

  if (isLoading || !sortedWaitTimes) {
    return <Loader />;
  }

  return !isParkOpen ? (
    <NoData />
  ) : (
    <WaitContainer>
      <WaitTimeHeader view={view} />
      {filteredWaitTimes().map((ride, index) => (
        <WaitTimeItem key={index} ride={ride} />
      ))}
    </WaitContainer>
  );
};

export default WaitByTime;

const WaitContainer = styled.div`
  border-top: 2px solid var(--primary-600);
  border-left: 2px solid var(--primary-600);
  border-right: 2px solid var(--primary-600);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-4);
  max-height: 800px;
  overflow: scroll;
  position: relative;

  .wait-time-header {
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
  }

  .name-block {
    width: 50%;
  }
  .wait-block {
    width: 20%;
  }
  .status-block {
    width: 30%;
  }

  @media screen and (min-width: 992px) {
    .wait-time-header {
      font-size: 1.25rem;
    }
  }
`;
