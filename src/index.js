import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './Utils/GlobalStyle'

// Provider
export const MyContextForBasenameValue = createContext();
const basenameValue = '/Kasa_P7_Openclassrooms';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalStyle >
    <MyContextForBasenameValue.Provider value={basenameValue}>
      <BrowserRouter basename={`/${basenameValue}`} >
        <App />
      </BrowserRouter>
    </MyContextForBasenameValue.Provider>
  </GlobalStyle>
);
