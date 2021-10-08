const Button = ({children, comment, onClick}) => {
  return (
    <>
      <button onClick={() => onClick(comment)}>{children}</button>

    </>
  )
}
export default Button;
