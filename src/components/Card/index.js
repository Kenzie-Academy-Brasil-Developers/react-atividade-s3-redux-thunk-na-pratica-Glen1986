import {Container} from './style'
import Input from "../Input";
import Button from '../Button'
import Display from '../Display';
const Card = () => {
  return (
    <Container>
      <Display />
      <form >
        <Input />
        <Button
          children={"NewComment"} />
      </form>
    </Container>
  )
}
export default Card;
