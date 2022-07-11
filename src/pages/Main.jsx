import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useMovieModel } from "../models/useMovieModel";
import Navigation from "../component/Navigation";
import Thumbnail from "../component/Thumbnail";
import { useState } from "react";
import { FAVORITES_TAP, SEARCH_TAP } from "../const/consts";
import Favorites from "../component/Favorites";
import { getLoggedInUser, saveToken } from "../utils/library";
import AccessUserDB from "../models/AccessUserDB";
import Card from "../component/Card";

export default function Main() {
  const { movies, getMovies, searchMovies } = useMovieModel();
  const [selectedTap, setSelectedTap] = useState(SEARCH_TAP);
  const { movieTitle } = useParams();
  const [hasCard, setHasCard] = useState(false);
  const loggedInUser = getLoggedInUser();
  const { id, favorites } = loggedInUser;

  useEffect(() => {
    if (movieTitle) {
      searchMovies(movieTitle);
    }
  }, [movieTitle]);

  useEffect(() => {
    getMovies();
  }, []);

  const updateFavorite = (movieId) => {
    if (favorites.includes(movieId)) {
      const index = favorites.indexOf(movieId);
      favorites.splice(index, 1);
    } else {
      favorites.push(movieId);
    }
    AccessUserDB.updateUser(`users/${id}`, { favorites: favorites });
    saveToken({ ...loggedInUser, favorites: favorites });
  };

  return (
    <Container className="Container">
      <Navigation selectedTap={selectedTap} setSelectedTap={setSelectedTap} />
      <Contents className="Contents">
        {selectedTap === SEARCH_TAP && (
          <>
            {!movies && <p>영화 목록이 없습니다</p>}
            {movies &&
              movies.results?.map((movie) => (
                <Thumbnail key={movie.id} movie={movie} setCard={setHasCard} />
              ))}
            {hasCard && (
              <Card
                movieId={hasCard}
                closeAction={() => setHasCard(false)}
                toggleFavorite={updateFavorite}
              />
            )}
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
