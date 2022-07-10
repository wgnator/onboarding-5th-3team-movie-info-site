import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../theme";
import { getLoggedInUser, removeToken } from "../utils/library";

export default function NavBarButtons({ getMoviesByIds }) {
  const [loggedInUser, setLoggedInUser] = useState();

  const logout = () => {
    removeToken();
    setLoggedInUser(false);
  };
  useEffect(() => {
    setLoggedInUser(getLoggedInUser());
  }, []);

  const getFavorites = () => {
    const { favorites } = loggedInUser;
    getMoviesByIds(favorites);
  };
  return (
    <ButtonsContainer>
      {loggedInUser ? (
        <>
          <Button hasShow onClick={getFavorites}>
            즐겨찾기
          </Button>
          <Button hasShow onClick={logout}>
            로그아웃
          </Button>
        </>
      ) : (
        <Button hasShow>
          <Link to="/login">로그인</Link>
        </Button>
      )}
    </ButtonsContainer>
  );
}

const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
const Button = styled.button`
  display: ${(props) => (props.hasShow ? "block" : "none")};
  background-color: ${theme.backColor};
  border: 1px solid white;
  border-radius: 6px;
  padding: 0.3rem 1rem;
  color: ${theme.fontColor};
  :hover {
    font-weight: 600;
    cursor: pointer;
  }
`;
