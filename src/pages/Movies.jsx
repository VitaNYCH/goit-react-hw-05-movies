import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import { FaSearch } from 'react-icons/fa';
import { MovieInput, MovieForm } from './Movie.styled';
const Movies = () => {
  // const [movies, setMovies] = useState(['movie - 1', 'movie - 2', 'movie - 3']);

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const movieId = searchParams.get('movieId') ?? '';
  console.log(movieId);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWEwMDkyODI0OWM4YmMyYmJkMjZkYzlhYTAyZjdiZSIsInN1YiI6IjY0ODcyNTQ3ZTI3MjYwMDE0N2JhZjQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jrQFhg3zIzgrcOgT3KJMhk2fc76vvqhqSwZS0bI1EK4',
      },
    };
    const getMovies = async ({ movieId }) => {
      const results = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieId}&include_adult=false&language=en-US&page=1`,
        options
      );
      if (!results.ok) {
        throw new Error('Smth went wrong');
      }
      return results.json();
    };

    const fetchMovies = async () => {
      try {
        const data = await getMovies({ movieId });
        console.log(data.results);
        if (data.results.length === 0) {
          throw Error('No matches found');
        }
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovies();
  }, [movieId]);

  const updateQueryString = evt => {
    console.log(evt.target.value);
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: evt.target.value });
  };
  console.log(movies);
  console.log(error);
  const handelSubmit = e => {
    e.preventDefault();
    if (movieId.trim() === '') {
      alert('Please enter the name');
      return;
    }
    setSearchParams(movieId);
    setMovies([]);
  };
  // const visibleMovie = results.filter(original_title =>
  //   movie.includes(movieId)
  // );
  console.log(location);
  return (
    <div>
      <MovieForm onSubmit={handelSubmit}>
        <MovieInput
          type="text"
          placeholder="Search by name "
          value={movieId}
          onChange={updateQueryString}
        />
        <button type="submit">
          <FaSearch style={{ width: 24, height: 24 }} />
        </button>
      </MovieForm>
      <SearchMovie movies={movies} />
    </div>
  );
};
export default Movies;
