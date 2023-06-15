import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ReviewElement } from './Reviews.styled';
const Reviews = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState('');
  useEffect(() => {
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '91a00928249c8bc2bbd26dc9aa02f7be';
    const getReviews = async movieId => {
      const results = await fetch(
        `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
      );
      if (!results.ok) {
        throw new Error('Smth went wrong');
      }
      return results.json();
    };

    const fetchReviews = async () => {
      try {
        const data = await getReviews(movieId);
        if (data === {}) {
          throw Error('No matches found');
        }
        setReviews(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchReviews();
  }, [movieId]);
  const authorReviews = reviews.results;
  console.log(error);
  return (
    <ul>
      {authorReviews?.map(({ id, author, content }) => (
        <ReviewElement key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </ReviewElement>
      ))}
    </ul>
  );
};
export default Reviews;
