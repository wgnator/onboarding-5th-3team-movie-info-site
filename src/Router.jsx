import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Card from "./component/Card";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import NotFound from "./pages/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          {/* <Route path="search/:movieTitle" element={<Main />} /> */}
          <Route path="/favorites" element={<Main favorites={true} />} />
          {/* <Route path="/search/:movie" element={<Card />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/account/create" element={<CreateAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
