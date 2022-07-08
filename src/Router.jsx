import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getToken } from "./utils/library";
import Main from "./pages/main";
import Card from "./component/card";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import NotFound from "./pages/NotFound";

export default function Router() {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path=":movieId" element={<Card />} />
          <Route path="/favorites" element={<Main favorites={true} />} />
          <Route path="/search/:movie" element={<Card />} />
        </Route>
        {!loggedInUser && (
          <>
            <Route path="/login" element={<Login users={users} />} />
            <Route
              path="/account/create"
              element={<CreateAccount users={users} />}
            />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
