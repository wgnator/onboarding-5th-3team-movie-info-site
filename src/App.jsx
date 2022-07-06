import React from 'react';
import { useMovieModel } from './models/useMovieModel';
import Router from './Router'

function App() {
  const { movies , getMovies} = useMovieModel();
  React.useEffect(()=>{
    getMovies()
  },[])
  return (
        <Router />
  );
}

export default App;
