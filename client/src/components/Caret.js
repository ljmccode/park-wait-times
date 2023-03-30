import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

const Caret = ({ascending}) => {
  return ascending ? (
    <AiFillCaretUp className='caret' />
  ) : (
    <AiFillCaretDown className='caret' />
  );
};

export default Caret;
