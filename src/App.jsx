import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Navbar from './components/navbar';
import Mapa from './components/mapa';
import Error404 from './components/error404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ubicacion" element={<Mapa />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
