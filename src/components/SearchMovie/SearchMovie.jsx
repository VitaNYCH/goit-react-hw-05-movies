import TrendMovieItem from 'components/TrenMovieItem/TrendMovieItem';
import { Link } from 'react-router-dom';
const SearchMovie = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, original_title, name }) => (
        <li key={id}>
          <Link>
            <TrendMovieItem original_title={original_title} name={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default SearchMovie;
