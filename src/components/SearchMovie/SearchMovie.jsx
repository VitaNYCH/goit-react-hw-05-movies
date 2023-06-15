import { Link, useLocation } from 'react-router-dom';
const SearchMovie = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, original_title, name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default SearchMovie;
