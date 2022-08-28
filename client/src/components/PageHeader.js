import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TimeDropdown from './TimeDropdown';

const PageHeader = () => {
  const { view, currentRide } = useSelector((store) => store.waitTimes);
  return (
    <Header>
      {view === 'time view' ? (
        <TimeDropdown />
      ) : (
        <h3 className='ride-name'>{currentRide}</h3>
      )}
      <button type='button' className='btn btn-hipster filter-btn'>
        filter
      </button>
    </Header>
  );
};

export default PageHeader;

const Header = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 2rem;

  .ride-name {
    margin-bottom: 0;
    /* color: #a77a7a; */
  }

  .filter-btn {
    border-radius: 1rem;
    padding: 0.5rem 2rem;
    font-size: 1rem;
  }

  .select-input {
    cursor: pointer;
    color: var(--primary-600);
    background-color: var(--grey-100);
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.5rem 1.5rem;
    box-shadow: var(--shadow-2);
    border-radius: 1rem;
  }
  .select-input:hover {
    box-shadow: var(--shadow-3);
  }

  @media screen and (min-width: 668px) {
    width: 80vw;
    max-width: 1120px;
    .filter-btn {
      font-size: 1.25rem;
    }
  }
`;
