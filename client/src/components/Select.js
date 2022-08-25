const Select = ({ name, value, handleChange, options }) => {
  return (
    <div className='select'>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className='select-input'
      >
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
