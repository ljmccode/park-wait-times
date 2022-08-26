import React from 'react';
import styled from 'styled-components';
import sadMickey from '../assets/images/sadMickey.png';

const NoData = ({ time }) => {
  return (
    <Wrapper>
      <p>No wait time data available for {time}</p>
      <img src={sadMickey} alt='Sad Mickey' />
    </Wrapper>
  );
};

export default NoData;

const Wrapper = styled.div`
  p {
    font-weight: 1rem;
    text-align: center;
    margin-bottom: 3rem;
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
    }
  }
`;
