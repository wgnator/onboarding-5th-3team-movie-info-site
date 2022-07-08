import { useState } from "react";
import { movieDataService } from "../services/movieDataService";

export const useMovieModel = () => {
  const [movies, setMovies] = useState(null);
  const [movie, setMovie] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState(null);

  const getMoviesCallback = (response) => {
    setMovies(response.data);
  };
  const getMovieByIdCallback = (response) => {
    setMovie(response.data);
  };

  const getMovies = (pageNo) => {
    movieDataService.get(
      `/movie/popular${pageNo ? "?page=" + pageNo : ""}`,
      getMoviesCallback
    );
  };

  const getMovieById = async (id) => {
    movieDataService.get(`/movie/${id}`, {}, getMovieByIdCallback);
  };

  // 작동안됨
  const getFavoriteMoviesById = async (ids) => {
    console.log("ids", ids);
    const results = await Promise.all(
      ids.map(async (id) => movieDataService.get(`/movie/${id}`))
    );
    setFavoriteMovies(results);
  };

  const searchMovies = (keyword = null) => {
    if (keyword === null) return;
    movieDataService.get(
      `/search/movie${keyword ? "?query=" + keyword : ""}`,
      getMoviesCallback
    );
  };
  return {
    movie,
    movies,
    getMovies,
    getMovieById,
    searchMovies,
    getFavoriteMoviesById,
    favoriteMovies,
  };
};
