import { useQueries } from 'react-query';
import axios from 'axios';

const fetchSuperHero = heroId =>
  axios.get(`http://localhost:4000/superheroes/${heroId}`);

export const DynamicParallelPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map(id => ({
      queryKey: ['super-hero', id],
      queryFn: () => fetchSuperHero(id),
    }))
  );

  console.log(`queryResults`, queryResults);

  return <div>Dynamic Parallel</div>;
};
