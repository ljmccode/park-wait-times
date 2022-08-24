import epcotLogo from '../assets/images/epcot-logo.png';
import hsLogo from '../assets/images/hs-logo.png';
import styled from 'styled-components';

const Parks = () => {
  return (
    <ParksContainer>
      <div className='parks-center'>
        <div>
          <img
            src={hsLogo}
            alt='Hollywood Studios Logo'
            className='park-icon'
          />
        </div>
        <div>
          <img src={epcotLogo} alt='Epcot Logo' className='park-icon' />
        </div>
      </div>
    </ParksContainer>
  );
};

export default Parks;

const ParksContainer = styled.div`
  height: 6rem;
  background-color: var(--pink-100);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-1);
  border-top: 1px solid var(--pink-200);

  .parks-center {
    width: 90%;
    max-width: var(--maxWidth);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .park-icon {
    align-items: center;
    width: 75px;
  }
`;
