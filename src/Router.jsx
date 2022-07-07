import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "./component/favorites";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Main from "./pages/main";
import NotFound from "./pages/NotFound";
import { getToken } from "./utils/library";

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
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
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
