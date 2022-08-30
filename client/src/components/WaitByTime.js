import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getParkTimes, updatePark } from '../features/waitTimes/waitTimesSlice';
import WaitTimeItem from '../components/WaitTimeItem';
import WaitTimeHeader from '../components/WaitTimeHeader';
import Loader from './Loader';
import NoData from '../components/NoData';
import styled from 'styled-components';

const WaitByTime = () => {
  const dispatch = useDispatch();
  const { waitTimes, time, currentPark, view, isLoading } = useSelector(
    (store) => store.waitTimes
  );
  const { park } = useParams();

  useEffect(() => {
    dispatch(getParkTimes());
  }, [time, currentPark]);

  useEffect(() => {
    dispatch(updatePark(park));
  }, [park]);

  if (isLoading) {
    return <Loader />;
  }

  return waitTimes.length === 0 ? (
    <NoData time={time} />
  ) : (
    <WaitContainer>
      <WaitTimeHeader view={view} />
      {waitTimes.map((ride) => (
        <WaitTimeItem key={ride._id} ride={ride} />
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
