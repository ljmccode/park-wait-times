import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import WaitTimeItem from './WaitTimeItem';
import WaitTimeHeader from './WaitTimeHeader';
import NoData from './NoData';
import { updateView } from '../features/waitTimes/waitTimesSlice';
import { updateNameSort } from '../features/waitTimes/sortSlice';

const WaitByRide = () => {
  const dispatch = useDispatch();
  const { waitTimes, time, view } = useSelector((store) => store.waitTimes);

  const setTimeView = () => {
    dispatch(updateView('time view'));
    dispatch(updateNameSort());
  };

  return waitTimes.length === 0 ? (
    <>
      <NoData time={time} />
      <button type='button'>Back to Park</button>
    </>
  ) : (
    <>
      <WaitContainer>
        <WaitTimeHeader view={view} />
        {waitTimes.map((ride) => (
          <WaitTimeItem key={ride._id} ride={ride} />
        ))}
      </WaitContainer>
      <ReturnButton>
        <button
          type='button'
          className='btn-hipster btn return-btn'
          onClick={() => setTimeView()}
        >
          Back to Park
        </button>
      </ReturnButton>
    </>
  );
};

export default WaitByRide;

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

  .time-block {
    width: 33.3%;
  }
  .wait-block {
    width: 33.3%;
  }
  .status-block {
    width: 33.3%;
  }

  @media screen and (min-width: 992px) {
    .wait-time-header {
      font-size: 1.25rem;
    }
  }
`;

const ReturnButton = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  .return-btn {
    border-radius: 1rem;
    padding: 0.5rem 2rem;
    font-size: 1rem;
    margin: 0 auto;
  }
`;
