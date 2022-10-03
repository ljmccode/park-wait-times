import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Caret = () => {
  const { nameAscending, waitAscending, statusAscending, timeAscending } =
    useSelector((store) => store.waitTimes);
  return nameAscending || waitAscending || statusAscending || timeAscending ? (
    <AiFillCaretUp className='caret' />
  ) : (
    <AiFillCaretDown className='caret' />
  );
};

export default Caret;
