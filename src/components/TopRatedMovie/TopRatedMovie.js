import { useState, useEffect } from 'react';

import DataCard from '../DataCard/DataCard';

import './TopRatedMovie.css';

const TopRatedMovie = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setPage(1);
  };

  return (
    <>
      <input type="text" onChange={handleChange}></input>
    </>
  );
};

export default TopRatedMovie;
