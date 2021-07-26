import { useState, useEffect } from 'react';

import DataCard from '../DataCard/DataCard';

import './UpcomingMovie.css';

const UpcomingMovie = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return null;
  }

  if (!movies) {
    return null;
  }

  return (
    <div>
      {movies.map((movie) => (
        <DataCard
          title={movie.title}
          poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          date={movie.release_date}
          overview={movie.overview}
          key={movie.id}
        />
      ))}
    </div>
  );
};

export default UpcomingMovie;
