import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import { Home } from './pages/home/Home';
import {List} from './pages/list/List'
import { Hotel } from './pages/hotel/Hotel';
import { Container } from '@mui/material';


function App() {


  return (
    <Container>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/hotels/:id' element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
    </Container>
  );
}

export default App
