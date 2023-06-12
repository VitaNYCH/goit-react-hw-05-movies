import { Link } from 'react-router-dom';
import TrendMovieItem from 'components/TrenMovieItem/TrendMovieItem';
const TrendMovies = ({ results }) => {
  return (
    <ul>
      {results.map(({ id, original_title, name }) => (
        <Link key={id}>
          <TrendMovieItem original_title={original_title} name={name} />
        </Link>
      ))}
    </ul>
  );
};
export default TrendMovies;
