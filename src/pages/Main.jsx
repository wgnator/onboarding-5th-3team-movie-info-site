import React, { useEffect } from 'react';
import { useMovieModel } from '../models/useMovieModel';
import Contents from '../component/Contents';

export default function Main() {
  const { movies, getMovies } = useMovieModel();

  useEffect(() => {
    getMovies();
  }, []);

  return <Contents movies={movies} />;
}
