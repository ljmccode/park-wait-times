import styled from 'styled-components';

const Loader = () => {
  return (
    <LoaderComponent>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
    </LoaderComponent>
  );
};

export default Loader;

const LoaderComponent = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
  margin-left: 10%;
  margin-top: 1rem;
  transform: translate3d(-50%, -50%, 0);

  .dot {
    width: 24px;
    height: 24px;
    background: #3ac;
    border-radius: 100%;
    display: inline-block;
    animation: slide 1s infinite;
  }

  .dot:nth-child(1) {
    animation-delay: 0.1s;
    background: rgb(50, 170, 204);
  }
  .dot:nth-child(2) {
    animation-delay: 0.2s;
    background: rgb(100, 170, 204);
  }
  .dot:nth-child(3) {
    animation-delay: 0.3s;
    background: rgb(150, 170, 204);
  }
  .dot:nth-child(4) {
    animation-delay: 0.4s;
    background: rgb(200, 170, 204);
  }
  .dot:nth-child(5) {
    animation-delay: 0.5s;
    background: rgb(250, 170, 204);
  }

  @keyframes slide {
    0% {
      transform: scale(1);
    }
    50% {
      opacity: 0.3;
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
