import React from "react";
import styled from "styled-components";
import { useMovieModel } from "../models/useMovieModel";
import Navigation from "../component/Navigation";
import Contents from "../component/Contents";
import { useEffect } from "react";
import { useState } from "react";

export default function Main() {
  const { movies, getMovies, getMoviesByIds, searchMovies } = useMovieModel();
  const [moviesToShow, setMoviesToShow] = useState();

  useEffect(() => {
    setMoviesToShow(movies);
  }, [movies]);

  return (
    <Container className="Container">
      <Navigation movies={movies} getMovies={getMovies} getMoviesByIds={getMoviesByIds} searchMovies={searchMovies} />
      <Contents moviesToShow={moviesToShow} />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: red;
`;
