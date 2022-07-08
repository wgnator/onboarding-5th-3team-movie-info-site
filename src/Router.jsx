import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Card from "./component/card";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import NotFound from "./pages/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path=":movieId" element={<Card />} />
          <Route path="/favorites" element={<Main favorites={true} />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/account/create" element={<CreateAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
