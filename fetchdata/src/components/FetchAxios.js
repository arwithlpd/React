import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function FetchAxios() {
  const [axiosData, setAxiosData] = useState(null);

  useEffect(() => {
    const fetchAxiosData = async () => {
      const response = await axios.get('https://api.quotable.io/random');
      setAxiosData(response.data);
    };
    fetchAxiosData();
  }, []);

  return (
    <div>
      <h1> Get Quotes using FETCH API </h1>
      <div>ID: {axiosData?._id}</div>
      <div>Content: {axiosData?.content}</div>
      <div>author: {axiosData?.author}</div>
    </div>
  );
}
