import { Link } from 'react-router-dom';
const SearchMovie = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, original_title, name }) => (
        <li key={id}>
          <Link to={`${original_title || name}`}>{original_title || name}</Link>
        </li>
      ))}
    </ul>
  );
};
export default SearchMovie;
