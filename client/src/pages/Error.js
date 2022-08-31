import nemo from '../assets/images/nemo.png';
import styled from 'styled-components';

const Error = () => {
  return (
    <ErrorContainer>
      <p className='error'>404</p>
      <h3 className='lost'>Uh oh! You must be lost.</h3>
      <div className='image-container'>
        <img src={nemo} alt='Lost Nemo' className='img' />
      </div>
      <p>
        We can't find the page you're looking for. <br /> Just keep swimming
        back <a href='/magic-kingdom'>home</a>
      </p>
    </ErrorContainer>
  );
};

export default Error;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: lightblue;
  text-align: center;

  .error {
    font-size: 3rem;
    margin-bottom: 0;
  }

  .lost {
    font-family: var(--bodyFont);
    color: var(--grey-700);
  }

  .image-container {
    width: 80vw;

    img {
      width: 100%;
      height: auto;
    }
  }

  p {
    font-size: 1.1rem;
    margin-top: 2rem;

    a {
      color: var(--primary-600);
      font-weight: bold;
    }
  }

  @media screen and (min-width: 668px) {
    .image-container {
      width: 50vw;
      max-width: 440px;
    }
  }
`;
