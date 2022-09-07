import { useSelector } from 'react-redux';
import styled from 'styled-components';
import WaitTimeItem from './WaitTimeItem';
import WaitTimeHeader from './WaitTimeHeader';
import ChangeViewBtns from './ChangeViewBtns';
import Loader from './Loader';
import Chart from './Chart';

const WaitByRide = () => {
  const { waitTimes, view, isLoading } = useSelector(
    (store) => store.waitTimes
  );

  if (isLoading) {
    return <Loader />;
  }

  return view === 'graph view' ? (
    <>
      <Chart />
      <ChangeViewBtns />
    </>
  ) : (
    <>
      <WaitContainer>
        <WaitTimeHeader view={view} />
        {waitTimes.map((ride) => (
          <WaitTimeItem key={ride._id} ride={ride} />
        ))}
      </WaitContainer>
      <ChangeViewBtns />
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
