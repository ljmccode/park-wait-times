import styled from 'styled-components';
import sampleData from '../sample-data.json';
import WaitTimeItem from '../components/WaitTimeItem';

const WaitByTime = () => {
  return (
    <WaitContainer>
      <div className='wait-time-header'>
        <div className='name-block'>
          <span>Name</span>
        </div>
        <div className='wait-block'>
          <span>Wait Time</span>
        </div>
        <div className='status-block'>
          <span>Status</span>
        </div>
      </div>
      {sampleData.map((ride) => (
        <WaitTimeItem key={ride._id} ride={ride} />
      ))}
    </WaitContainer>
  );
};

export default WaitByTime;

const WaitContainer = styled.div`
  border-top: 1px solid var(--primary-400);
  border-left: 1px solid var(--primary-400);
  border-right: 1px solid var(--primary-400);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-4);
  max-height: 800px;
  overflow: scroll;
  position: relative;

  .wait-time-header {
    position: sticky;
    top: 0;
    background: var(--primary-300);
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