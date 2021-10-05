import {useDispatch} from "react-redux";
import {addCommentThunk} from "../../store/modules/user/thunks";
const Button = ({children}) => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(addCommentThunk("primer comentário"))}>{children}</button>

    </>
  )
}
export default Button;
