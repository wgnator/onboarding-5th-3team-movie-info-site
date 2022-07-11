import { useState } from "react";
import { movieDataService } from "../services/movieDataService";

export const useMovieModel = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  const getMoviesCallback = (response) => {
    setMovies(response.data);
  };
  const getMovieByIdCallback = (response) => {
    setMovie(response.data);
  };

  const getMoviesByIdsCallback = (response) => {
    setMovies([...movies, response.data]);
  };

  const getMovies = (pageNo) => {
    movieDataService.get(`/movie/popular${pageNo ? "?page=" + pageNo : ""}`, getMoviesCallback);
  };

  const getMovieById = async (id) => {
    movieDataService.get(`/movie/${id}`, getMovieByIdCallback);
  };

  const getMoviesByIds = async (ids) => {
    const promises = ids.map(
      (id) =>
        new Promise(async (resolve, reject) => {
          const results = await movieDataService.get(`/movie/${id}`);
          resolve(results.data);
        })
    );
    Promise.all(promises).then((results) => {
      setMovies(results);
    });
  };
  const searchMovies = (keyword = null) => {
    if (keyword === null) return;
    movieDataService.get(`/search/movie${keyword ? "?query=" + keyword : ""}`, getMoviesCallback);
  };
  return {
    movie,
    movies,
    getMovies,
    getMovieById,
    getMoviesByIds,
    searchMovies,
  };
};
