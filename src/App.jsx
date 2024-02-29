import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { HotelList } from "./pages/list/HotelList";
import { Hotel } from "./pages/hotel/Hotel";
import { Container } from "@mui/material";
import UserCreate from "./pages/user/userCreate/UserCreate";
import UserLogin from "./pages/user/userLogim/UserLogin";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<HotelList />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/user/create" element={<UserCreate />} />
          <Route path="/user/login" element={<UserLogin />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
