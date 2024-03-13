import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MyContextForBasenameValue } from './index';

{/* Importation des routes */ }
import Error from './Pages/Error'
import Home from './Pages/Home'
import Housing from './Pages/Housing'
import About from './Pages/About'

function App() {

  const basename = useContext(MyContextForBasenameValue);

  return (
    <BrowserRouter basename={basename}>
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
