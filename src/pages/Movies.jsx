import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import MoviesForm from 'components/MoviesForm/MoviesForm';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentQuery = searchParams.get('query') ?? ' ';
  const location = useLocation();

  useEffect(() => {
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '91a00928249c8bc2bbd26dc9aa02f7be';
    const getMovies = async () => {
      const results = await fetch(
        `${BASE_URL}search/movie?api_key=${API_KEY}&&query=${currentQuery}&include_adult=false&language=en-US&page=1`
      );
      if (!results.ok) {
        throw new Error('Smth went wrong');
      }
      return results.json();
    };

    const fetchMovies = async () => {
      try {
        const data = await getMovies(currentQuery);
        if (data.results.length === 0) {
          throw Error('No matches found');
        }
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, [currentQuery]);

  console.log(error);
  console.log(location);
  return (
    <div>
      <MoviesForm setSearchParams={setSearchParams} />
      <SearchMovie movies={movies} />
    </div>
  );
};
export default Movies;
