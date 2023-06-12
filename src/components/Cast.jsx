import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  // useEffect(()=>{
  //     ...HTTP
  // },[])
  return <div>Members of Cast {movieId}</div>;
};
export default Cast;
