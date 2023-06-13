import { useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  console.log({ movieId });
  // useEffect(()=>{
  //     ...HTTP
  // },[])
  console.log(location);

  return (
    <>
      <h1>MovieDetails {movieId}</h1>
      <Link to={backLinkLocationRef.current}>Back to Movies</Link>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
