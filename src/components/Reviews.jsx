import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  // useEffect(()=>{
  //     ...HTTP
  // },[])
  return <div>Subscribtion {movieId}</div>;
};
export default Reviews;
