import {useSelector} from 'react-redux';

const Display = () => {
  const result = useSelector((store) => store.user)

  return (
    <>
      <section>{result.name}</section>
      <section>{result.comments.map((item) => (
        <tr>
          <td>{item}</td>
        </tr>
      ))}</section>

    </>
  )
}
export default Display;
