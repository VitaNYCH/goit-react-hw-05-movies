import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CastMember } from './Cast.styled';
const Cast = () => {
  const PIC_URL = 'https://image.tmdb.org/t/p/w500/';
  const PLACEHOLDER = 'https://via.placeholder.com/182x273';
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const [members, setMembers] = useState('');

  useEffect(() => {
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '91a00928249c8bc2bbd26dc9aa02f7be';

    const getCast = async movieId => {
      const results = await fetch(
        `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
      );
      if (!results.ok) {
        throw new Error('Smth went wrong');
      }
      return results.json();
    };

    const fetchCast = async () => {
      try {
        const data = await getCast(movieId);
        if (data === {}) {
          throw Error('No matches found');
        }
        setMembers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCast();
  }, [movieId]);
  console.log(error);
  const castMembers = members.cast;
  return (
    <ul>
      {castMembers?.map(({ name, character, profile_path, id }) => (
        <CastMember key={id}>
          <img
            src={`${
              profile_path
                ? PIC_URL + profile_path
                : PLACEHOLDER + '?text= no image found'
            } `}
            width={120}
            alt="member of cast"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </CastMember>
      ))}
    </ul>
  );
};
export default Cast;
