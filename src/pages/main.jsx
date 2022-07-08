import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { removeToken, getLoggedInUser } from "../utils/library";
import { useMovieModel } from "../models/useMovieModel";
import Thumbnail from "../component/thumbnail";
import Card from "../component/card";

export default function Main() {
  const { movies, searchMovies } = useMovieModel();
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const { movieTitle } = useParams();
  // 이성진
  const [loggedInUser, setLoggedInUser] = useState(false);

  const logout = () => {
    removeToken();
    setLoggedInUser(false);
  };
  useEffect(() => {
    setLoggedInUser(getLoggedInUser());
  }, []);
  //
  useEffect(() => {
    searchMovies(movieTitle);
  }, [movieTitle]);

  if (!movies?.results.length) {
    return <div>없음</div>;
  }

  return (
    <>
      <ThumbnailList>
        {movies?.results.map((movie) => (
          <Thumbnail key={movie.id} movie={movie} setSelectedMovieId={setSelectedMovieId} />
        ))}
      </ThumbnailList>
      {selectedMovieId && <Card movieId={selectedMovieId} setSelectedMovieId={setSelectedMovieId}/>}
    </>
  );
}

const ThumbnailList = styled.ul`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;
