import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useMovieModel } from "../models/useMovieModel";
import Navigation from "../component/navigation";
import Thumbnail from "../component/thumbnail";
import { useState } from "react";
import Card from "../component/card";
import { FAVORITES_TAP, SEARCH_TAP } from "../const/consts";
import Favorites from "../component/favorites";

export default function Main() {
  const { movies, getMovies, searchMovies } = useMovieModel();
  const [selectedTap, setSelectedTap] = useState(SEARCH_TAP);
  const { movieTitle } = useParams();
  const [card, setCard] = useState(false);

  useEffect(() => {
    if (movieTitle) {
      searchMovies(movieTitle);
    }
  }, [movieTitle]);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      <Navigation selectedTap={selectedTap} setSelectedTap={setSelectedTap} />
      <Contents>
        {selectedTap === SEARCH_TAP && (
          <>
            {!movies && <p>영화 목록이 없습니다</p>}
            {movies &&
              movies.results?.map((movie) => (
                <Thumbnail key={movie.id} movie={movie} setCard={setCard} />
              ))}
            {card && <Card movieId={card} closeAction={() => setCard(false)} />}
          </>
        )}
        {selectedTap === FAVORITES_TAP && <Favorites />}
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: red;
`;
export const Contents = styled.div`
  overflow-y: scroll;
  padding: 0 2rem;
  gap: 2rem;
  height: 100%;
  padding-top: 80px;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
