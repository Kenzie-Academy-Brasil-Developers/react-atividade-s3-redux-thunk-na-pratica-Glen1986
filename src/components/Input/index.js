const Input = ({value, placeholder, ...rest}) => {
  return (
    <>
      <input
        value={value}
        placeholder={placeholder}
        {...rest} />
    </>
  )
}
export default Input;
