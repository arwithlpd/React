import React, { useEffect, useState } from 'react';

export default function Quote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data);
    };
    fetchQuote();
  }, []);

  // useEffect(() => {
  //   fetch('https://api.quotable.io/random')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setQuote(data);
  //     });
  // }, []);

  return (
    <div>
      <h1> Get Quotes using FETCH API </h1>
      <div>{quote?.content}</div>
    </div>
  );
}
