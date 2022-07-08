import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { useMovieModel } from '../models/useMovieModel';

import Thumbnail from '../component/Thumbnail';

export default function Main() {
  const { movies, searchMovies } = useMovieModel();

  const { movieTitle } = useParams();

  useEffect(() => {
    searchMovies(movieTitle);
  }, [movieTitle]);

  if (!movies?.results.length) {
    return <div>없음</div>;
  }

  return (
    <ThumbnailList>
      {movies?.results.map((movie) => (
        <Thumbnail key={movie.id} movie={movie} />
      ))}
    </ThumbnailList>
  );
}

const ThumbnailList = styled.ul`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;
