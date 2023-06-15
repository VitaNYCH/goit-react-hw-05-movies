import { useRef, Suspense, useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import { AditionalTitle } from './MovieDetails.styled';

const MovieDetails = () => {
  const [error, setError] = useState(null);
  const [movieDetails, setMovieDetails] = useState('');
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();

  useEffect(() => {
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '91a00928249c8bc2bbd26dc9aa02f7be';

    const getMovieDetails = async movieId => {
      const results = await fetch(
        `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
      );
      if (!results.ok) {
        throw new Error('Something went wrong');
      }
      return results.json();
    };

    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        if (data === {}) {
          throw Error('No matches found');
        }
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovieDetails();
  }, [movieId]);
  console.log(error);
  console.log(location);
  return (
    <>
      <Link to={backLinkLocationRef.current}>Back to Movies</Link>
      <MovieCard movieDetails={movieDetails} />
      <AditionalTitle>Aditional information</AditionalTitle>
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
