import React, { useState } from 'react';
import Counter from './components/Counter';
import Stats from './components/Stats';

const initialState = [
  { id: 1, count: 0 },
  { id: 2, count: 0 },
];

export default function App() {
  const [state, setState] = useState(initialState);

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  };

  const increment = (id) => {
    const updatedCounter = state.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return { ...item };
    });
    setState(updatedCounter);
  };

  const decrement = (id) => {
    const updatedCounter = state.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count - 1 };
      }
      return { ...item };
    });
    setState(updatedCounter);
  };

  return (
    <div>
      {state.map((count) => (
        <Counter key={count.id} id={count.id} count={count.count} increment={increment} decrement={decrement} />
      ))}
      <br />
      <Stats count={totalCount()} />
    </div>
  );
}
