import TrendMovieLink from './TrendMovieItem.styled';
const TrendMovieItem = ({ original_title, name }) => {
  return (
    <>
      <TrendMovieLink>{original_title || name}</TrendMovieLink>
    </>
  );
};
export default TrendMovieItem;
