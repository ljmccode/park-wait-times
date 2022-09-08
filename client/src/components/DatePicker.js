import { useDispatch, useSelector } from 'react-redux';
import { changeDate } from '../features/waitTimes/waitTimesSlice';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { getDateAndTime } from '../utils/hours';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const DatePickerComponent = () => {
  const dispatch = useDispatch();
  const { date } = useSelector((store) => store.waitTimes);
  const displayDate = new Date(date);
  const startDate = new Date('September, 6, 2022');
  const todayDate = getDateAndTime().date;

  const setChangeDate = (date) => {
    const formattedDate = moment(date).format('MM/DD/YYYY');
    dispatch(changeDate(formattedDate));
  };

  return (
    <DateDropdown>
      <DatePicker
        className='date-picker'
        selected={displayDate}
        onChange={(date) => setChangeDate(date)}
        minDate={startDate}
        maxDate={todayDate}
      />
    </DateDropdown>
  );
};

export default DatePickerComponent;

const DateDropdown = styled.div`
  z-index: 20;
  margin: 0 auto;

  .date-picker {
    cursor: pointer;
    border: 1px solid var(--grey-300);
    border-radius: 1rem;
    padding: 0.5rem 0;
    color: var(--primary-600);
    font-weight: bold;
    text-align: center;
    font-size: 1rem;
    box-shadow: var(--shadow-2);
    letter-spacing: var(--letterSpacing);
    width: 135px;
  }

  @media screen and (min-width: 668px) {
    width: 150px;
  }
`;
