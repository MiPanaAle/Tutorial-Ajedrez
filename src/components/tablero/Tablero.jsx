import React from "react";
import "./Tablero.css";
import Boton from "../componentesEnComponentes/boton/Boton";

function Tablero({atras}) {
  return (
    <div className="tablero">
      <h1 className="text">TABLERO</h1>
      <iframe
        width="877"
        height="493"
        src="https://www.youtube.com/embed/2Me2OTjwv6M"
        title="1. CONOCEMOS EL TABLERO de AJEDREZ || TUTORIALES INICIACIÓN || Tu Profe De Ajedrez"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      />
      <Boton onClick={atras}>VOLVER</Boton>
    </div>
  );
}

export default Tablero;
