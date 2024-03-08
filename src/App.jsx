import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import UserCreate from "./pages/user/userCreate/UserCreate";
import UserLogin from "./pages/user/userLogin/UserLogin";
import BusTiketsList from "./pages/services/BusTiketsList";
import TrainTiketsList from "./pages/services/TrainTiketsList";
import PlaneTiketsList from "./pages/services/PlaneTiketsList";
import CarRentList from "./pages/services/CarRentList";
import ExcursionTiketsList from "./pages/services/ExcursionTiketsList";
import EventsTiketsList from "./pages/services/EventsTiketsList";
import HotelRentList from "./pages/services/HotelRentList";
import BusTikets from "./pages/services/BusTikets";
import HotelRent from "./pages/services/HotelRent";
import CarRent from "./pages/services/CarRent";
import PlaneTikets from "./pages/services/PlaneTikets";
import TrainTikets from "./pages/services/TrainTikets";
import ExcursionTikets from "./pages/services/ExcursionTikets";
import EventsTikets from "./pages/services/EventsTikets";
import EmployeeCreate from "./pages/user/userCreate/EmployeeCreate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/service/hotels/:id" element={<HotelRent />} />
        <Route path="/service/hotels" element={<HotelRentList />} />
        <Route path="/service/car-rent/:id" element={<CarRent />} />
        <Route path="/service/car-rent" element={<CarRentList />} />
        <Route path="/service/bus-tikets/:id" element={<BusTikets />} />
        <Route path="/service/bus-tikets" element={<BusTiketsList />} />
        <Route path="/service/plane-tikts/:id" element={<PlaneTikets />} />
        <Route path="/service/plane-tikts" element={<PlaneTiketsList />} />
        <Route path="/service/train-tikets/:id" element={<TrainTikets />} />
        <Route path="/service/train-tikets" element={<TrainTiketsList />} />
        <Route path="/service/excursion/:id" element={<ExcursionTikets />} />
        <Route path="/service/excursion" element={<ExcursionTiketsList/>} />
        <Route path="/service/events-tikets/:id" element={<EventsTikets />} />
        <Route path="/service/events-tikets" element={<EventsTiketsList />} />

        <Route path="/user/register" element={<UserCreate />} />
        <Route path="/user/register/employee" element={<EmployeeCreate/>} />
        <Route path="/user/login" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
