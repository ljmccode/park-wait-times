import styled from 'styled-components';
import Select from './Select';
import { openHours } from '../utils/hours';

const PageHeader = () => {
  return (
    <Header>
      <Select
        name={'time'}
        value={'07:00 AM'}
        options={openHours}
        onChange='handleChange'
      />
      <button type='button' className='btn btn-hipster filter-btn'>
        filter
      </button>
    </Header>
  );
};

export default PageHeader;

const Header = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 2rem;

  .filter-btn {
    border-radius: 1rem;
    padding: 0.5rem 2rem;
    font-size: 1rem;
  }

  .select-input {
    cursor: pointer;
    color: var(--primary-600);
    background-color: var(--grey-100);
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.5rem 1.5rem;
    box-shadow: var(--shadow-2);
    border-radius: 1rem;
  }
  .select-input:hover {
    box-shadow: var(--shadow-3);
  }

  @media screen and (min-width: 668px) {
    width: 80vw;
    max-width: 1120px;
    .filter-btn {
      font-size: 1.25rem;
    }
  }
`;
