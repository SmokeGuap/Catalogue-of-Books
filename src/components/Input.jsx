import Error from './Error';

const Input = ({
  labelName,
  value,
  inputId,
  type = 'text',
  placeholder = null,
  maxLength = null,
  max = null,
  min = null,
  error,
  handleChange,
}) => {
  return (
    <div className='mb-4'>
      <label className='block text-sm font-bold mb-2' htmlFor={inputId}>
        {labelName}
      </label>
      <input
        value={value}
        id={inputId}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={handleChange}
        min={min}
        max={max}
        className='border rounded w-full py-2 px-3 focus:outline-none'
      />
      <Error error={error} />
    </div>
  );
};
export default Input;
