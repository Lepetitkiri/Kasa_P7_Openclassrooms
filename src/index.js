import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './Utils/GlobalStyle'

// Provider
export const MyContextForBasenameValue = createContext();
const basenameValue = '/Kasa_P7_Openclassrooms';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalStyle>
    <MyContextForBasenameValue.Provider value={basenameValue}>
      <App />
    </MyContextForBasenameValue.Provider>
  </GlobalStyle>
);
