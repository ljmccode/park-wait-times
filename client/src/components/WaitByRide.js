import { useSelector } from 'react-redux';
import styled from 'styled-components';
import WaitTimeItem from './WaitTimeItem';
import WaitTimeHeader from './WaitTimeHeader';
import NoData from './NoData';

const WaitByRide = () => {
  const { waitTimes, time, view } = useSelector((store) => store.waitTimes);

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
