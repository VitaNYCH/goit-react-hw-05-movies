import { useRef, Suspense, useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
const MovieDetails = () => {
  const [error, setError] = useState(null);
  const [movieDetails, setMovieDetails] = useState('');
  const [id, setId] = useState('');
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  console.log({ movieId });
  useEffect(() => {
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '91a00928249c8bc2bbd26dc9aa02f7be';
    const getMovieDetails = async () => {
      const results = await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
      if (!results.ok) {
        throw new Error('Smth went wrong');
      }
      return results.json();
    };

    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        console.log(data.results.id);
        if (data.results.length === 0) {
          throw Error('No matches found');
        }
        setMovieDetails(data.results);
        setId(data.results.id);
        console.log(id);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovieDetails();
  }, [movieId, id]);
  console.log(error);
  console.log(location);
  console.log(movieDetails);
  const { backdrop_path, original_title } = movieDetails;
  return (
    <>
      <Link to={backLinkLocationRef.current}>Back to Movies</Link>
      <h1>{movieId}</h1>
      <img src={backdrop_path} alt={original_title} />
      <ul>
        <li>
          <h3>Overview</h3>
          <p></p>
        </li>
        <li>
          <h3>Genres</h3>
          <p></p>
        </li>
      </ul>

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
