import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Caret = () => {
  const { nameAscending, waitAscending, statusAscending, timeAscending } =
    useSelector((store) => store.sort);
  return nameAscending || waitAscending || statusAscending || timeAscending ? (
    <AiFillCaretDown className='caret' />
  ) : (
    <AiFillCaretUp className='caret' />
  );
};

export default Caret;
