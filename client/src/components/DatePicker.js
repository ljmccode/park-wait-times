import { useDispatch, useSelector } from 'react-redux';
import { changeDate } from '../features/waitTimes/waitTimesSlice';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const DatePickerComponent = () => {
  const dispatch = useDispatch();
  const { date } = useSelector((store) => store.waitTimes);
  const displayDate = new Date(date);
  const startDate = new Date('August, 23, 2022');

  const setChangeDate = (date) => {
    const formattedDate = moment(date).format('MM/DD/YYYY');
    dispatch(changeDate(formattedDate));
  };

  return (
    <DateDropdown>
      <DatePicker
        selected={displayDate}
        onChange={(date) => setChangeDate(date)}
        minDate={startDate}
        maxDate={new Date()}
      />
    </DateDropdown>
  );
};

export default DatePickerComponent;

const DateDropdown = styled.div`
  z-index: 20;
`;
