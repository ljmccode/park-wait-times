import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import sadMickey from '../assets/images/sadMickey.png';
import {
  changeDate,
  updateParkStatus,
  updateTime,
} from '../features/waitTimes/waitTimesSlice';
import moment from 'moment';
import 'moment-timezone';

const NoData = () => {
  const dispatch = useDispatch();

  const yesterday = moment(new Date())
    .tz('America/New_York')
    .subtract(1, 'day')
    .format('MM/DD/YYYY');

  const yesterdayTimes = () => {
    dispatch(updateTime({ time: '12:00 PM' }));
    dispatch(changeDate(yesterday));
    dispatch(updateParkStatus(true));
  };

  return (
    <Wrapper>
      <p>
        Shucks, the parks are closed!{' '}
        <button onClick={yesterdayTimes}>Check earlier wait times</button>
      </p>
      <img src={sadMickey} alt='Sad Mickey' />
    </Wrapper>
  );
};

export default NoData;

const Wrapper = styled.div`
  p {
    font-weight: 1rem;
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 0;

    button {
      border: none;
      background: none;
      color: var(--primary-600);
      cursor: pointer;
      font-size: 1rem;
    }
    button:hover {
      text-decoration: underline;
    }
  }

  img {
    display: block;
    width: 50vw;
    margin: 0 auto;
    max-width: 300px;
  }

  @media screen and (min-width: 668px) {
    p {
      font-size: 1.5rem;
      button {
        font-size: 1.5rem;
      }
    }
  }
`;
