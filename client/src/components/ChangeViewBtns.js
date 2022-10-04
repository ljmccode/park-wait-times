import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  updateView,
  updateNameSort,
} from '../features/waitTimes/waitTimesSlice';
import styled from 'styled-components';

const ChangeViewBtns = () => {
  const dispatch = useDispatch();
  const { view, currentPark } = useSelector((store) => store.waitTimes);

  const setTimeView = () => {
    dispatch(updateView({ view: 'time view', currentSort: 'name' }));
    dispatch(updateNameSort(true));
  };

  const setTableView = () => {
    dispatch(updateView({ view: 'ride view', currentSort: 'time' }));
  };

  const setGraphView = () => {
    dispatch(updateView({ view: 'graph view', currentSort: 'time' }));
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ReturnButton>
      {view === 'ride view' && (
        <button
          type='button'
          className='btn-hipster btn return-btn'
          onClick={() => setGraphView()}
        >
          Graph View
        </button>
      )}
      {view === 'graph view' && (
        <button
          type='button'
          className='btn-hipster btn return-btn'
          onClick={() => setTableView()}
        >
          Table View
        </button>
      )}
      <Link
        to={`/${currentPark}`}
        className='btn-hipster btn return-btn'
        onClick={() => setTimeView()}
      >
        Back to Park
      </Link>
    </ReturnButton>
  );
};

export default ChangeViewBtns;

const ReturnButton = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  .return-btn {
    border-radius: 1rem;
    padding: 0.5rem 1.1rem;
    font-size: 1rem;
    margin: 0 auto;
  }
`;
