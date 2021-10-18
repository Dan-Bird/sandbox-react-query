import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => axios.get(`http://localhost:4000/superheroes`);
const fetchFriends = () => axios.get(`http://localhost:4000/friends`);

export const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes);
  const { data: friends } = useQuery('super-heroes', fetchFriends);

  console.log(`superHeroes`, superHeroes);
  console.log(`friends`, friends);

  return <div>Parallel Queries</div>;
};
