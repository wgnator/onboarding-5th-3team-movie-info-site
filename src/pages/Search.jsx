import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useMovieModel } from "../models/useMovieModel";
import Contents from "../component/Contents";
import styled from "styled-components";
import useIntersectionObserver from "../utils/useIntersectionObserver";

export default function Search() {
  const { movies, searchMovies } = useMovieModel();
  const [pageNo, setPageNo] = useState(1);
  const endOfPageRef = useRef();
  const { movieTitle } = useParams();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [hasReachedLastPage, setHasReachedLastPage] = useState(false);

  useEffect(() => {
    if (movieTitle) setIsDataLoaded(false);
    searchMovies(movieTitle, pageNo).then((response) => {
      !response.data.results.length && setHasReachedLastPage(true);
      setIsDataLoaded(true);
    });
  }, [movieTitle, pageNo]);

  const [ref] = useIntersectionObserver(
    endOfPageRef,
    () => {
      if (isDataLoaded) setPageNo(pageNo + 1);
    },
    [movies]
  );
  return (
    <>
      <Contents movies={movies} />
      {hasReachedLastPage ? "" : <EndOfPageDetector ref={ref} />}
    </>
  );
}

const EndOfPageDetector = styled.div`
  width: 100%;
  height: 30px;
`;
