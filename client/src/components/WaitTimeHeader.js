import styled from 'styled-components';

const WaitTimeHeader = ({ view }) => {
  return (
    <HeaderStyles className='wait-time-header'>
      {view === 'time view' ? (
        <div className='name-block'>
          <span>Name</span>
        </div>
      ) : (
        <div className='time-block'>
          <span>Time</span>
        </div>
      )}
      <div className='wait-block'>
        <span>Wait Time</span>
      </div>
      <div className='status-block'>
        <span>Status</span>
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

  .time-block {
    width: 50%;
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
    font-size: 1.25rem;
  }
`;
