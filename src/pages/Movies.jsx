import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  // useEffect(()=>{
  //     ...HTTP
  // },[])
  return (
    <div>
      <input type="text" />
      <ul>
        {['movie-1', 'movie-2', 'movie-3', 'movie-4'].map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`}>{movie}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Movies;
