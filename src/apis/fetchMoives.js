import axios from 'axios';

const fetchMovies = async (pageNum) => {
  let res;
  try {
    res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=1806da7101aaea34974ccb44f321e4bf&language=en-US&page=${pageNum}`
    );
    return res.data.results;
  } catch (e) {
    console.log(e);
  }
};

export default fetchMovies;
