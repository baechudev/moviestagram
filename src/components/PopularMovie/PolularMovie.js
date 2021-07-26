import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import fetchMovies from '../../apis/fetchMoives';

import DataCard from '../DataCard/DataCard';

const PolularMovie = () => {
  const [pageNum, setPageNum] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [ref, inView] = useInView();

  useEffect(() => {
    setLoading(true);
    fetchMovies(pageNum).then((data) =>
      setMovies((prevMovies) => [...prevMovies, ...data])
    );
    setLoading(false);
  }, [pageNum]);

  useEffect(() => {
    if (inView && !loading) {
      setPageNum((prevState) => prevState + 1);
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
        <div key={movie.id}>
          <DataCard
            title={movie.title}
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            date={movie.release_date}
            overview={movie.overview}
          />
        </div>
      ))}
      <div className="ScrollEndPoint" ref={ref}></div>
    </>
  );
};

export default PolularMovie;
