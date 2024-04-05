import React, { useContext, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import ErrorStyle from "./Style.jsx";

import { MyContextForBasenameValue } from '../../index.js';

function ErrorComponent() {

  const basename = useContext(MyContextForBasenameValue);

  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Fonction pour dessiner l'image sur le canvas
    /**
     * @param {MouseEvent} e - L'événement de déplacement de la souris.
     */
    const drawImage = () => {
      if (imageRef.current) {
        ctx.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height);
      }
    };

    // Chargement de l'image
    const image = new Image();
    image.src = `${basename}/Pictures/Error_Color.png`;
    image.onload = () => {
      imageRef.current = image;
      drawImage(); // Dessiner l'image initiale
    };

    /**
   * Fonction pour gérer le déplacement de la souris sur le canvas.
   * @param {MouseEvent} e - L'événement de déplacement de la souris.
   */
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left; // Coordonnée X relative au canvas
      const y = e.clientY - rect.top; // Coordonnée Y relative au canvas

      // Effacer une partie du canvas à l'emplacement du curseur
      ctx.clearRect(x - 10, y - 10, 80, 80);
    };

    /**
   * Fonction pour gérer le déplacement du toucher sur le canvas.
   * @param {TouchEvent} e - L'événement de déplacement du toucher.
   */
    const handleTouchMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left; // Coordonnée X relative au canvas
      const y = touch.clientY - rect.top; // Coordonnée Y relative au canvas

      // Effacer une partie du canvas à l'emplacement du toucher
      ctx.clearRect(x - 10, y - 10, 80, 80);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, []); // Utilisation d'un tableau vide pour exécuter useEffect une seule fois après le montage du composant

  return (
    <ErrorStyle>
      <p className="Link__error"><Link to="/">Retour à la page d&apos;accueil</Link></p>
      <p className="Error-Game__Instructions">Grattez ci-dessous</p>
      <div className="Error-Game__Container" id="Error-Game__Js-Container" >
        <p className="Error-Game__First-Hidden-Text">Oups, on dirait qu&apos;il y a une erreur 404 sur cette page</p>
        <p className="Link__error Error-Game__Second-Hidden-Text"><Link to="/">Cliquez ici pour retourner à l&apos;accueil</Link></p>
        <canvas className="Error-Game__Canvas" ref={canvasRef} width={300} height={300} />
      </div>
    </ErrorStyle>
  );
}

export default ErrorComponent;
