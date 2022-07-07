import { useState, useEffect } from "react";
import Router from "./Router";
import { useMovieModel } from "./models/useMovieModel";

function App() {
  const { movies, getMovies } = useMovieModel();
  // const { movie, getMovieById } = useMovieModel();

  return (
    <>
      <div>{JSON.stringify(movies)}</div>
      <hr />
      {/* <div>{JSON.stringify(movie)}</div> */}
      <Router />
    </>
  );
}

export default App;
