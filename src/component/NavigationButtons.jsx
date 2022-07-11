import React, { useEffect, useState } from "react";
import { Link, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../theme";
import { getLoggedInUser, removeToken } from "../utils/library";

export default function NavigationButtons() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const match = useMatch("search");
  const logout = () => {
    removeToken();
    setLoggedInUser(false);
  };
  const params = useParams();
  console.log(params);
  useEffect(() => {
    setLoggedInUser(getLoggedInUser());
    console.log(match);
  }, []);

  return (
    <Container>
      {loggedInUser && (
        <>
          <Button>
            검색
          </Button>
          <Button>
            즐겨찾기
          </Button>
          <Button hasShow onClick={logout}>
            로그아웃
          </Button>
        </>
      )}
      {!loggedInUser && (
        <Button hasShow>
          <Link to="/login">로그인</Link>
        </Button>
      )}
    </Container>
  );
}

const Container = styled.div`
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
