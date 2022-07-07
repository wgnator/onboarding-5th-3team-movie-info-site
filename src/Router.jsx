import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./component/card";
import Main from "./pages/main";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path=":movieId" element={<Card />} />
          <Route path="/favorites" element={<Main favorites={true} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
