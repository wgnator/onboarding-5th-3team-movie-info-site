import React, { useState } from "react";
import styled from "styled-components";
import Details from "./Details";

export default function Card({ movie }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [isShowingDetails, setIsShowingDetails] = useState(false);

  const toggleShowingDetails = () => {
    setIsShowingDetails(!isShowingDetails);
  };

  return (
    <CardContainer isShowingDetails={isShowingDetails} onClick={toggleShowingDetails}>
      {isShowingDetails ? (
        <Details movieId={movie.id} toggleShowingDetails={toggleShowingDetails} />
      ) : (
        <>
          <Title>{movie.title}</Title>
          <Poster alt="poster" src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
        </>
      )}
    </CardContainer>
  );
}

const CardContainer = styled.li`
  position: relative;
  width: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;

  ${(props) =>
    props.isShowingDetails
      ? `
      padding:0;
&:before {
  position: absolute;
  border-radius:5px;
  content:'';
  width:100%;
  height:100%;
  background-color: rgba(0,0,0,0.5)
}
`
      : `  &:hover {
    transform: scale(1.05);
    transition: transform 0.25s ease-out; 
  }`}
`;

const Title = styled.h1`
  white-space: nowrap;
  overflow: hidden;
  font-size: 1.5rem;
  text-overflow: ellipsis;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
