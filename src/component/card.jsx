import React, { useEffect } from "react";
import styled from "styled-components";
import { useMovieModel } from "../models/useMovieModel";
import CloseIcon from "../images/icons/close-icon.png";
import PlusIcon from "../images/icons/plus-icon.png";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function Card({ movieId, closeAction, toggleFavorite }) {
  const { movie, getMovieById } = useMovieModel();

  useEffect(() => {
    getMovieById(movieId);
  }, [movieId]);

  const closeCard = () => closeAction();

  return (
    <Modal>
      <Image src={`${IMAGE_BASE_URL}${movie?.backdrop_path}`} alt="movie image" />
      <MovieInfo>
        <PlusButton src={PlusIcon} onClick={() => toggleFavorite(movieId)} />
        <H1>{movie?.original_title}</H1>
        <H2>{movie?.tagline}</H2>
        <Tag>{movie?.status === "Released" ? new Date(movie?.release_date).getFullYear() : "unreleased"}</Tag>
        <Tag>{movie?.runtime}min</Tag>
        {movie?.genres.map((gnere) => (
          <Tag>{gnere.name}</Tag>
        ))}
        <Description>{movie?.overview}</Description>
        <p>Production Countries : {movie?.production_countries.map((country) => country.name).join(", ")}</p>
        <p>Production Company : {movie?.production_companies.map((company) => company.name).join(", ")}</p>
      </MovieInfo>
      <CloseButton src={CloseIcon} onClick={closeCard} />
    </Modal>
  );
}

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 700px;
  background-color: black;
  color: white;
  z-index: 10;
`;

const Image = styled.img`
  width: 100%;
`;

const PlusButton = styled.img`
  width: 50px;
  position: absolute;
  right: 5px;
  cursor: pointer;
`;

const MovieInfo = styled.div`
  padding: 10px;
`;

const H1 = styled.h1`
  font-size: 50px;
`;

const H2 = styled.h2`
  font-size: 25px;
  padding-left: 20px;
  margin-bottom: 8px;
`;

const Tag = styled.strong`
  margin: 5px;
  padding: 4px;
`;

const Description = styled.p`
  margin: 16px 0;
`;

const CloseButton = styled.img`
  width: 30px;
  position: absolute;
  top: 5px;
  right: 5px;
  background: transparent;
  cursor: pointer;
`;
