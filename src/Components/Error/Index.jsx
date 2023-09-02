import React from "react";
import { Link } from 'react-router-dom';
import ErrorStyle from "./Style.jsx";

function ErrorComponent() {
  return (
    <ErrorStyle>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <p className="Link__error"><Link to="/Home">Retourner sur la page d&apos;accueil</Link></p>
    </ErrorStyle>
  );
}

export default ErrorComponent;