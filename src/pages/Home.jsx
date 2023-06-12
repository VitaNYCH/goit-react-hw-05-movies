import { useState, useEffect } from 'react';
import TrendMovies from 'components/TrendMovies';

const Home = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWEwMDkyODI0OWM4YmMyYmJkMjZkYzlhYTAyZjdiZSIsInN1YiI6IjY0ODcyNTQ3ZTI3MjYwMDE0N2JhZjQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jrQFhg3zIzgrcOgT3KJMhk2fc76vvqhqSwZS0bI1EK4',
      },
    };
    const getTopMovies = async () => {
      const response = await fetch(
        'https://api.themoviedb.org/3/trending/all/day?language=en-US',
        options
      );
      if (!response.ok) {
        throw new Error('Smth went wrong');
      }
      return response.json();
    };
    const fetchHomeMovie = async () => {
      try {
        const data = await getTopMovies();
        console.log(data);
        if (data.results.length === 0) {
          throw Error('No matches found');
        }
        setResults(data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchHomeMovie();
  }, []);
  console.log(error);

  return <TrendMovies results={results} />;
};

export default Home;
