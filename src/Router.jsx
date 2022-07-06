import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "./pages/favorites";
import Main from './pages/main';

export default function Router() {
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>
      </BrowserRouter>
    );
  
}