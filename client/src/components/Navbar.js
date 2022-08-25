import Logo from './Logo';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <div className='nav-center'>
        <div>
          <Logo />
        </div>
        <div className='title'>Disney Wait Times</div>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-1);
  background-color: var(--white);
  position: relative;
  z-index: 20;

  .nav-center {
    width: 90%;
    max-width: var(--maxWidth);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    display: none;
    align-items: center;
    width: 75px;
  }

  .title {
    color: var(--primary-500);
    font-size: 2.5rem;
    font-family: var(--titleFont);
  }

  @media screen and (min-width: 992px) {
    .nav-center {
      width: 90%;
      justify-content: space-between;
    }

    .logo {
      display: flex;
      color: var(--green-600);
    }
  }
`;
