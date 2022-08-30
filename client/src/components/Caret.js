import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Caret = () => {
  const { nameAscending, waitAscending, statusAscending } = useSelector(
    (store) => store.sort
  );
  return nameAscending || waitAscending || statusAscending ? (
    <AiFillCaretDown className='caret' />
  ) : (
    <AiFillCaretUp className='caret' />
  );
};

export default Caret;
