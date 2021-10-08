import {Container} from './style'
import {useState} from 'react';
import Input from "../Input";
import {useDispatch} from "react-redux";
import Button from '../Button'
import Display from '../Display';
import {addCommentThunk} from '../../store/modules/user/thunks';
const Card = () => {
  const [comment, setComment] = useState()
  const dispatch = useDispatch();
  return (
    <Container>
      <Display />
      <div>
        <Input
          onChange={(e) => setComment(e.target.value)}
          placeholder={"Name"}
        />
        <Button
          onClick={() => dispatch(addCommentThunk(comment))}
          children={"NewComment"}
          comment={comment} />
      </div>
    </Container>
  )
}
export default Card;
