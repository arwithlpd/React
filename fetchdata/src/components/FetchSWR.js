import React from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function FetchSWR() {
  const { data, error } = useSWR('https://api.quotable.io/random', fetcher, {
    refreshInterval: 1000,
    suspense: true,
  });

  if (error) return 'Error!';
  if (!data) return 'Loading...';

  return (
    <div>
      <h1>Fetch SWR</h1>
      <div>Content: {data.content}</div>
    </div>
  );
}
