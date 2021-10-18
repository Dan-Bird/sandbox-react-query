import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes');

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery('super-heroes', fetchSuperHeroes, {
    // enabled: false,
    // cacheTime: 5000,
    // staleTime: 30_000,
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
    onSuccess,
    onError,
    select: data => data.data.map(hero => hero.name),
  });
};
