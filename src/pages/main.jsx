import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getLoggedInUser, removeToken } from "../utils/library";

export default function Main() {
  const [loggedInUser, setLoggedInUser] = useState(false);

  const logout = () => {
    removeToken();
    setLoggedInUser(false);
  };
  useEffect(() => {
    setLoggedInUser(getLoggedInUser());
  }, []);

  return (
    <div>
      main
      <div>
        {loggedInUser ? (
          <button onClick={logout}>logout</button>
        ) : (
          <button>
            <Link to="login">login</Link>
          </button>
        )}
      </div>
    </div>
  );
}
