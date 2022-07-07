import { useState, useEffect } from "react";
import Router from "./Router";
import { useMovieModel } from "./models/useMovieModel";
import Main from "./pages/main";

function App() {
  const { movies, getMovies } = useMovieModel();
  const { movie, getMovieById } = useMovieModel();

  useEffect(() => {
    getMovies(0);
    console.log(movies);
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
