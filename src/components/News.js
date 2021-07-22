import { useState, useEffect } from 'react';
import axios from 'axios';

import Datacard from './Datacard';

import './News.css';

const News = () => {
  // const [page, setPage] = useState(1);
  // const [movies, setMovies] = useState(null);

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=1806da7101aaea34974ccb44f321e4bf&language=en-US&page=${page}`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setMovies(res.results);
  //     })
  //     .catch((err) => {
  //       console.error('Unable to load data: ', err);
  //     });
  // }, [page]);

  // return (
  //   <div>
  //     {movies.map((movie) => (
  //       <Datacard
  //         title={movie.title}
  //         poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
  //         date={movie.release_date}
  //         overview={movie.overview}
  //       />
  //     ))}
  //   </div>
  // );
  return null;
};

export default News;
