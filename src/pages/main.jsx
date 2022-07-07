import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import LoginForm from "./LoginForm";
import { getToken } from "../utils/library";

export default function Main() {
  const [users, setUsers] = useState();
  const loggedInUser = getToken();

  const getUsers = async () => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log("users", loggedInUser);

  return (
    <div>
      main
      {loggedInUser ? null : <LoginForm users={users} />}
    </div>
  );
}
