import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './components/home';
import Navbar from './components/navbar';
import Mapa from './components/mapa';
import Menu from './components/menu';
import Footer from './components/footer';
import Error404 from './components/error404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path='/ubicacion' element={(
              <>
                <MapResources />
                <Mapa />
              </>
            )} />
          <Route path="*" element={<><Error404 /><Navigate to="/not-found" replace /></>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

// Componente que carga los recursos solo para la ruta /map
const MapResources = () => (
  <>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossOrigin="" />
    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossOrigin=""></script>
  </>
);

export default App;
