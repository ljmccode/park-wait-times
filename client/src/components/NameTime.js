import TimeDropdown from './TimeDropdown';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const NameTime = () => {
  const { view, currentRide } = useSelector((store) => store.waitTimes);
  return (
    <NameTimeContainer>
      {view === 'time view' ? (
        <TimeDropdown />
      ) : (
        <p className='ride-name'>{currentRide}</p>
      )}
    </NameTimeContainer>
  );
};

export default NameTime;

const NameTimeContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: var(--pink-500);
  width: 100vw;
  margin: 0 auto;
  display: grid;
  justify-content: center;
`;
