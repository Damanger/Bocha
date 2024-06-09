import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Error404 from './components/error404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
