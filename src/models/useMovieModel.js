import React from "react";
import { movieDataService } from "../services/movieDataService";

export const useMovieModel = () => {
  const [movies, setMovies] = React.useState(null);
  const [movie, setMovie] = React.useState(null);

  const getMoviesCallback = (response) => {
    setMovies(response.data);
  };
  const getMovieByIdCallback = (response) => {
    setMovie(response.data);
  };

  const getMovies = (pageNo) => {
    movieDataService.get("/popular", { page: pageNo }, getMoviesCallback);
  };

  const getMovieById = async (id) => {
    movieDataService.get(`/${id}`, {}, getMovieByIdCallback);
  };

  return { movie, movies, getMovies, getMovieById };
};
