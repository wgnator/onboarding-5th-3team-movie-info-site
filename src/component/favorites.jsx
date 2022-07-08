import React from "react";
import { getLoggedInUser } from "../utils/library";
import { useMovieModel } from "../models/useMovieModel";
import { useEffect } from "react";
export default function Favorites() {
  const { getFavoriteMoviesById, favoriteMovies } = useMovieModel();
  const loggenInUser = getLoggedInUser();

  const { favorites, likes } = loggenInUser;

  useEffect(() => {
    getFavoriteMoviesById(favorites);
  }, []);
  console.log("favoriteMovies", favoriteMovies);
  return <div>favorites</div>;
}
