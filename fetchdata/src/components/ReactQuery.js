import React from 'react';
import { useQuery } from 'react-query';
import getFetch from './GetFetch';

export default function ReactQuery({ client }) {
  const { data, isError, isLoading } = useQuery('quote', () => getFetch(), {
    onSuccess: (data) => {
      console.log('data', data);
    },
  });

  if (isLoading) {
    return <h1>loading</h1>;
  }

  if (isError) {
    return <h1>error</h1>;
  }

  return (
    <div>
      <h1>React Query</h1>
      <hr />

      <div>
        <strong>author:</strong> {data.author}{' '}
      </div>
    </div>
  );
}
