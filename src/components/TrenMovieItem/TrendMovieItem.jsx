const TrendMovieItem = ({ original_title, name }) => {
  return (
    <>
      <p>{original_title || name}</p>
    </>
  );
};
export default TrendMovieItem;
