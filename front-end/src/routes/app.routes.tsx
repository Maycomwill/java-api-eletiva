import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Pokemon from "../pages/pokemon";
import Nasa from "../pages/nasa";
import { useAuth } from "../hooks/useAuth";
import Login from "../pages/login";
import Register from "../pages/register";

function AppRoutes() {
  const { auth } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={auth ? <Home /> : <Login />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/nasa" element={<Nasa />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
