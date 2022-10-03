import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  updateTimeSort,
  sortWaitTimes,
  updateView,
} from '../features/waitTimes/waitTimesSlice';
import { convertRegularTime } from '../utils/hours';
import styled from 'styled-components';

const WaitTimeItem = ({ ride }) => {
  const dispatch = useDispatch();
  const { view, currentPark } = useSelector((store) => store.waitTimes);
  const { name, waitTime, status, time } = ride;
  const time12hr = convertRegularTime(time);
  const urlName = encodeURIComponent(name);

  const timeSort = () => {
    dispatch(updateView({ view: 'ride view', currentSort: 'time' }));
    dispatch(updateTimeSort());
    dispatch(sortWaitTimes());
  };
  return (
    <WaitTimeRow>
      {view === 'time view' ? (
        <Link
          to={`/${currentPark}/${urlName}`}
          className='name'
          onClick={() => timeSort()}
        >
          <span>{name}</span>
        </Link>
      ) : (
        <span className='time'>{time12hr}</span>
      )}
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
  background: var(--white);
  padding: 15px 0;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.8rem;
  :last-child {
    border-bottom: 2px solid var(--primary-600);
  }

  .time {
    width: 40%;
  }

  .name {
    width: 50%;
    color: var(--primary-700);
  }

  .name:hover {
    text-decoration: underline;
  }
  .wait-time {
    width: 20%;
  }
  .status {
    width: 30%;
  }

  @media screen and (min-width: 668px) {
    font-size: 1rem;
  }
`;
