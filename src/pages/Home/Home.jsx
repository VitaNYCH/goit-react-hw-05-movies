import { useState, useEffect } from 'react';
import TrendMovies from 'components/TrendMovies';
import HomeTitle from './Home.styled';
const Home = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '91a00928249c8bc2bbd26dc9aa02f7be';
    const getTopMovies = async () => {
      const response = await fetch(
        `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Smth went wrong');
      }
      return response.json();
    };
    const fetchHomeMovie = async () => {
      try {
        const data = await getTopMovies();
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

  return (
    <>
      <HomeTitle>Trending Movies</HomeTitle>
      <TrendMovies results={results} />
    </>
  );
};

export default Home;
