import { useLocation, Link } from 'react-router-dom';
import TrendMovieItem from 'components/TrenMovieItem/TrendMovieItem';

const TrendMovies = ({ results }) => {
  const location = useLocation();
  return (
    <ul>
      {results.map(({ id, original_title, name }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            <TrendMovieItem original_title={original_title} name={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default TrendMovies;
