import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

{/* Importation des routes */ }
import Error from './Pages/Error'
import Home from './Pages/Home'
import Housing from './Pages/Housing'
import About from './Pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="housing/:housingId" element={<Housing />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
