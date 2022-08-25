import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Parks from '../components/Parks';
import PageHeader from '../components/PageHeader';
import styled from 'styled-components';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Navbar />
      <Parks />
      <div className='park-page'>
        <PageHeader />
        <div className='park-info'>
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
};

export default SharedLayout;

const Wrapper = styled.div`
  height: 100%;
  .park-page {
    background: var(--grey-200);
  }
  .park-info {
    width: 85vw;
    margin: 0 auto;
    padding: 2rem 0;
    min-height: 100vh;
    overflow: hidden;
  }
  .select-input {
    font-weight: bold;
    font-size: 1rem;
  }

  @media screen and (min-width: 992px) {
    .park-info {
      width: 80vw;
      max-width: 1120px;
    }
  }
`;
