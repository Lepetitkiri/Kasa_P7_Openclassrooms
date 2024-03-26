import React from 'react'
import { Routes, Route } from 'react-router-dom';

{/* Importation des routes */ }
import Error from './Pages/Error'
import Home from './Pages/Home'
import Housing from './Pages/Housing'
import About from './Pages/About'

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="" element={<Home />} />
      <Route exact path="housing/:housingId" element={<Housing />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Error" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
