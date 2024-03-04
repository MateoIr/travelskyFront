import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Hotel } from "./pages/hotel/Hotel";
import UserCreate from "./pages/user/userCreate/UserCreate";
import UserLogin from "./pages/user/userLogin/UserLogin";
import BusTikets from "./pages/services/BusTikets";
import TrainTikets from "./pages/services/TrainTikets";
import PlainTikets from "./pages/services/PlainTikets";
import CarRent from "./pages/services/CarRent";
import ExcursionTikets from "./pages/services/ExcursionTikets";
import EventsTikets from "./pages/services/EventsTikets";
import HotelRent from "./pages/services/HotelRent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/service/hoteles/:id" element={<Hotel />} />
        <Route path="/service/hoteles" element={<HotelRent/>} />avion
        <Route path="/service/lquiler-de-autos/:id" element={<Hotel />} />
        <Route path="/service/alquiler-de-autos" element={<CarRent />} />
        <Route path="/service/pasajes-de-colectivos/:id" element={<Hotel />} />
        <Route path="/service/pasajes-de-colectivos" element={<BusTikets />} />
        <Route path="/service/pasajes-de-avion/:id" element={<Hotel />} />
        <Route path="/service/pasajes-de-avion" element={<PlainTikets />} />
        <Route path="/service/pasajes-de-tren/:id" element={<Hotel />} />
        <Route path="/service/pasajes-de-tren" element={<TrainTikets />} />
        <Route path="/service/excursiones/:id" element={<Hotel />} />
        <Route path="/service/excursiones" element={<ExcursionTikets />} />
        <Route path="/service/entradas-a-eventos/:id" element={<Hotel />} />
        <Route path="/service/entradas-a-eventos" element={<EventsTikets />} />

        <Route path="/user/register" element={<UserCreate />} />
        <Route path="/user/login" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
