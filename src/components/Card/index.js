import {Container} from './style'
import Input from "../Input";
import Button from '../Button'
import Display from '../Display';
const Card = () => {
  return (
    <Container>
      <Display />
      <div>
        <Input
          placeholder={"Name"}
        />
        <Button
          children={"NewComment"} />
      </div>
    </Container>
  )
}
export default Card;
