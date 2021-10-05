import {useSelector} from 'react-redux';

const Display = () => {
  const result = useSelector((store)=>store.user)
  return (
    <>
      {result.name}

    </>
  )
}
export default Display;
