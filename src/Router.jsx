import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Card from "./component/Card";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import NotFound from "./pages/NotFound";
import Layout from "./component/Layout";
import Favorites from "./component/Favorites";

export const ROUTES = {
  home: "/",
  search: "search/:movie",
  searchTitle: "search/:movieTitle",
  favorite: "favorites",
  login: "/login",
  createAccount: "/account/create",
};

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={ROUTES.search} element={<Card />} />
          <Route path={ROUTES.searchTitle} element={<Main />} />
          <Route path={ROUTES.favorite} element={<Favorites />} />
        </Route>
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.createAccount} element={<CreateAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}