import { useSelector, useDispatch } from 'react-redux';
import epcotLogo from '../assets/images/epcot-logo-grey.png';
import hsLogo from '../assets/images/hs-logo-grey.png';
import mkLogo from '../assets/images/magic-kingdom-grey.png';
import akLogo from '../assets/images/animal-kingdom-grey.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  updatePark,
  updateView,
} from '../features/waitTimes/waitTimesSlice';

const Parks = () => {
  const dispatch = useDispatch();
  const { currentPark, view } = useSelector((store) => store.waitTimes);

  const startUpdatePark = (parkName) => {
    if (view !== 'time view') {
      dispatch(updateView({ view: 'time view', currentSort: 'name' }));
    }
    dispatch(updatePark(parkName));
  };

  return (
    <ParksContainer>
      <div className='parks-center'>
        <Link
          to='/magic-kingdom'
          className='park-logo-container'
          onClick={() => startUpdatePark('magic-kingdom')}
        >
          <img src={mkLogo} alt='Magic Kingdom Logo' className='park-icon' />
          <p className={currentPark === 'magic-kingdom' ? 'active' : ''}>
            <span>Magic&nbsp;</span>
            <span>Kingdom</span>
          </p>
        </Link>
        <Link
          to='/hollywood-studios'
          className='park-logo-container'
          onClick={() => startUpdatePark('hollywood-studios')}
        >
          <img
            src={hsLogo}
            alt='Hollywood Studios Logo'
            className='park-icon'
          />
          <p className={currentPark === 'hollywood-studios' ? 'active' : ''}>
            <span>Hollywood&nbsp;</span>
            <span>Studios</span>
          </p>
        </Link>
        <Link
          to='epcot'
          className='park-logo-container'
          onClick={() => startUpdatePark('epcot')}
        >
          <img src={epcotLogo} alt='Epcot Logo' className='park-icon' />
          <p className={currentPark === 'epcot' ? 'active' : ''}>Epcot</p>
        </Link>
        <Link
          to='animal-kingdom'
          className='park-logo-container'
          onClick={() => startUpdatePark('animal-kingdom')}
        >
          <img src={akLogo} alt='Animal Kingdom Logo' className='park-icon' />
          <p className={currentPark === 'animal-kingdom' ? 'active' : ''}>
            <span>Animal&nbsp;</span>
            <span>Kingdom</span>
          </p>
        </Link>
      </div>
    </ParksContainer>
  );
};

export default Parks;

const ParksContainer = styled.div`
  height: 7rem;
  background-color: var(--gold-300);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-2);
  position: relative;
  z-index: 10;

  .parks-center {
    /* height: 6rem; */
    width: 90%;
    max-width: var(--maxWidth);
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
  }

  .park-logo-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      margin: 0;
      color: red;
      color: var(--grey-600);
      text-align: center;
      font-size: 0.8rem;
      display: flex;
      flex-direction: column;
    }

    img {
      height: 45px;
      width: 45px;
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

  @media screen and (min-width: 668px) {
    .parks-center {
      align-items: center;
    }

    .park-logo-container p {
      font-size: 1rem;
      flex-direction: row;
    }

    .park-logo-container img {
      height: 60px;
      width: 60px;
    }
  }
`;
