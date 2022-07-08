import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Thumbnail({ movie }) {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

  const navigate = useNavigate();

  const handleThumbnailClick = (movieId) => {
    navigate(`/detail/${movieId}`);
  };

  return (
    <ThumbnailContainer onClick={() => handleThumbnailClick(movie.id)}>
      <Title>{movie.title}</Title>
      <Poster alt="poster" src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
    </ThumbnailContainer>
  );
}

const ThumbnailContainer = styled.li`
  display: flex;
  flex-direction: column;
  background-color: gray;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
`;
