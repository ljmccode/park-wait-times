import epcotLogo from '../assets/images/epcot-logo-grey.png';
import { Link } from 'react-router-dom';
import hsLogo from '../assets/images/hs-logo-grey.png';
import styled from 'styled-components';

const Parks = () => {
  return (
    <ParksContainer>
      <div className='parks-center'>
        <Link to='/hollywood-studios' className='park-logo-container'>
          <img
            src={hsLogo}
            alt='Hollywood Studios Logo'
            className='park-icon'
          />
          <p className='active'>Hollywood Studios</p>
        </Link>
        <Link to='epcot' className='park-logo-container'>
          <img src={epcotLogo} alt='Epcot Logo' className='park-icon' />
          <p>Epcot</p>
        </Link>
      </div>
    </ParksContainer>
  );
};

export default Parks;

const ParksContainer = styled.div`
  height: 6rem;
  background-color: var(--gold-300);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-2);
  position: relative;
  z-index: 10;

  .parks-center {
    height: 6rem;
    width: 90%;
    max-width: var(--maxWidth);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .park-logo-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      margin: 0;
      color: red;
      color: var(--grey-500);
    }

    .active {
      color: var(--primary-600);
      font-weight: bold;
    }
  }

  .park-logo-container:hover {
    font-weight: bold;

    p {
      color: var(--primary-600);
    }
  }

  .park-icon {
    align-items: center;
    width: 60px;
  }
`;
