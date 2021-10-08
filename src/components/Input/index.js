
const Input = ({onChange, value, placeholder, ...rest}) => {
  return (
    <>
      <input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        {...rest} />
    </>
  )
}
export default Input;
