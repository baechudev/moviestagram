import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const useInfinteScroll = (query, page) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=1806da7101aaea34974ccb44f321e4bf&language=en-US&page=${page}`
      );
      setMovies((prev) => {
        return [...prev, ...res.data.results];
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
};

export default useInfinteScroll;
