import { useSelector, useDispatch } from 'react-redux';
import { updateView } from '../features/waitTimes/waitTimesSlice';
import { updateNameSort } from '../features/waitTimes/sortSlice';
import styled from 'styled-components';

const ChangeViewBtns = () => {
  const dispatch = useDispatch();
  const { view } = useSelector((store) => store.waitTimes);

  const setTimeView = () => {
    dispatch(updateView('time view'));
    dispatch(updateNameSort());
  };

  const setTableView = () => {
    dispatch(updateView('ride view'));
  };

  const setGraphView = () => {
    dispatch(updateView('graph view'));
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
      <button
        type='button'
        className='btn-hipster btn return-btn'
        onClick={() => setTimeView()}
      >
        Back to Park
      </button>
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
