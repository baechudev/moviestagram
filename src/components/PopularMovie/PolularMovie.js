import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

import DataCard from '../DataCard/DataCard';

const PolularMovie = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1806da7101aaea34974ccb44f321e4bf&language=en-US&page=${page}`
      );
      setMovies((prev) => [...prev, ...res.data.results]);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);

  if (loading) {
    return null;
  }

  if (!movies) {
    return null;
  }

  return (
    <>
      {movies.map((movie) => (
        <div className="card" ref={ref} key={movie.id}>
          <DataCard
            title={movie.title}
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            date={movie.release_date}
            overview={movie.overview}
          />
        </div>
      ))}
    </>
  );
};

export default PolularMovie;
