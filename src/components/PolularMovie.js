import { useState, useEffect } from 'react';
import axios from 'axios';

import Datacard from './Datacard';

import './PolularMovie.css';

const PolularMovie = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=1806da7101aaea34974ccb44f321e4bf&language=en-US&page=${page}`
        );
        setMovies(res.data.results);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return null;
  }

  if (!movies) {
    return null;
  }

  return (
    <div>
      {movies.map((movie) => (
        <Datacard
          title={movie.title}
          poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          date={movie.release_date}
          overview={movie.overview}
        />
      ))}
    </div>
  );
};

export default PolularMovie;
