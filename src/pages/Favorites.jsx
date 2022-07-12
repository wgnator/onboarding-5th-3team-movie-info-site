import React, { useEffect } from "react";
import { useMovieModel } from "../models/useMovieModel";
import { getLoggedInUser } from "../utils/useAccount";

import Contents from "../component/Container";

export default function Favorites() {
  const loggenInUser = getLoggedInUser();
  const { getMoviesByIds, movies } = useMovieModel();
  const { favorites, likes } = loggenInUser;

  useEffect(() => {
    getMoviesByIds(favorites);
  }, []);

  return <Contents movies={movies} />;
}
