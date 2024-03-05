import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import UserCreate from "./pages/user/userCreate/UserCreate";
import UserLogin from "./pages/user/userLogin/UserLogin";
import BusTikets from "./pages/services/BusTikets";
import TrainTikets from "./pages/services/TrainTikets";
import PlaneTikets from "./pages/services/PlaneTikets";
import CarRent from "./pages/services/CarRent";
import ExcursionTikets from "./pages/services/ExcursionTikets";
import EventsTikets from "./pages/services/EventsTikets";
import HotelRent from "./pages/services/HotelRent";
import { Service } from "./pages/services/servicesComponents/Service";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/service/hotels/:id" element={<Service/>} />
        <Route path="/service/hotels" element={<HotelRent/>} />
        <Route path="/service/car-rent/:id" element={<Service />} />
        <Route path="/service/car-rent" element={<CarRent />} />
        <Route path="/service/bus-tikets/:id" element={<Service />} />
        <Route path="/service/bus-tikets" element={<BusTikets />} />
        <Route path="/service/plane-tikts/:id" element={<Service />} />
        <Route path="/service/plane-tikts" element={<PlaneTikets />} />
        <Route path="/service/train-tikets/:id" element={<Service />} />
        <Route path="/service/train-tikets" element={<TrainTikets />} />
        <Route path="/service/excursion/:id" element={<Service />} />
        <Route path="/service/excursion" element={<ExcursionTikets />} />
        <Route path="/service/events-tikets/:id" element={<Service />} />
        <Route path="/service/events-tikets" element={<EventsTikets />} />

        <Route path="/user/register" element={<UserCreate />} />
        <Route path="/user/login" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
