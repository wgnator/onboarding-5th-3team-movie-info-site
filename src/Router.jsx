import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import NotFound from "./pages/NotFound";
import Layout from "./component/Layout";
import Favorites from "./component/Favorites";
<<<<<<< HEAD

export const ROUTES = {
  home: "/",
  search: "search/:movie",
  searchTitle: "search/:movieTitle",
=======
import Main from "./pages/Main";
import { getLoggedInUser } from "./utils/useAccount";

export const ROUTES = {
  home: "/",
  search: "search/:movieTitle",
>>>>>>> aec791124333cb7742b621d7e4c8c862e78f1938
  favorite: "favorites",
  login: "/login",
  createAccount: "/account/create",
};
<<<<<<< HEAD
=======

const LOGGED_IN_ROUTER = [
  <Route key={1} path={ROUTES.login} element={<Login />} />,
  <Route key={2} path={ROUTES.createAccount} element={<CreateAccount />} />,
];
>>>>>>> aec791124333cb7742b621d7e4c8c862e78f1938

export default function Router() {
  const isLoggedIn = getLoggedInUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Layout />}>
          <Route index element={<Main />} />
<<<<<<< HEAD
          <Route path={ROUTES.search} element={<Card />} />
          <Route path={ROUTES.searchTitle} element={<Main />} />
          <Route path={ROUTES.favorite} element={<Favorites />} />
        </Route>
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.createAccount} element={<CreateAccount />} />
=======
          <Route path={ROUTES.search} element={<p>search components</p>} />
          <Route path={ROUTES.favorite} element={<Favorites />} />
        </Route>
        {!isLoggedIn && LOGGED_IN_ROUTER}
>>>>>>> aec791124333cb7742b621d7e4c8c862e78f1938
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}