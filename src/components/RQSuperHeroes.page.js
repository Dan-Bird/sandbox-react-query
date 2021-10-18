import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes');

const onSuccess = data => console.log('side effect after data fetching', data);

const onError = error =>
  console.log('side effect after encountering error', error);

export const RQSuperHeroesPage = () => {
  const { isLoading, isFetching, data, isError, error, refetch } = useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      enabled: false,
      // cacheTime: 5000,
      // staleTime: 30_000,
      // refetchInterval: 2000,
      // refetchIntervalInBackground: true,
      onSuccess,
      onError,
    }
  );

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map(hero => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
