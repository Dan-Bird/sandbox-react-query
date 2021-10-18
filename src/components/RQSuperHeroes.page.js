import { Link } from 'react-router-dom';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

const onSuccess = data => console.log('side effect after data fetching', data);

const onError = error =>
  console.log('side effect after encountering error', error);

export const RQSuperHeroesPage = () => {
  const { isLoading, isFetching, data, isError, error, refetch } =
    useSuperHeroesData(onSuccess, onError);

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
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data.map(name => (
        <div key={name}>{name}</div>
      ))} */}
    </>
  );
};
