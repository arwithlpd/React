import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactQuery from './components/ReactQuery';

export default function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: false,
      },
    },
  });

  return (
    <div>
      <QueryClientProvider client={client}>
        <Suspense fallback={<h1> loading </h1>}>
          <ReactQuery />
          <ReactQuery />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}
