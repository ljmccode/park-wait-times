import styled from 'styled-components';

const WaitTimeItem = ({ ride }) => {
  const { name, waitTime, status } = ride;
  return (
    <WaitTimeRow>
      <span className='name'>{name}</span>
      <span className='wait-time'>{waitTime}</span>
      <span className='status'>{status}</span>
    </WaitTimeRow>
  );
};

export default WaitTimeItem;

const WaitTimeRow = styled.div`
  width: 100%;
  display: flex;
  min-height: 50px;
  border-bottom: 1px solid var(--primary-300);
  background: var(--grey-100);
  padding: 15px 0;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.8rem;

  .name {
    width: 50%;
  }
  .wait-time {
    width: 20%;
  }
  .status {
    width: 30%;
  }

  @media screen and (min-width: 992px) {
    font-size: 1rem;
  }
`;
