import React from "react";
import "./Dama.css";
import damaBlanca from "../../img/piezas/damaBlanca.svg";
import damaNegra from "../../img/piezas/damaNegra.svg";
import Boton from "../componentesEnComponentes/boton/Boton";

function Dama({ atras }) {
  return (
    <div className="rey">
      <h1 className="text">DAMA</h1>
      <div className="contenedorRey">
        <img src={damaBlanca} alt="dama blanco" className="piezaRey" />
        <iframe
          width="1143"
          height="643"
          src="https://www.youtube.com/embed/_al4aY9H_zQ"
          title="6. LA DAMA - CAPTURA y MOVIMIENTOS || TUTORIALES INICIACIÓN al AJEDREZ || Tu Profe De Ajedrez"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <img src={damaNegra} alt="dama negro" className="piezaRey" />
      </div>
      <Boton onClick={atras}>VOLVER</Boton>
    </div>
  );
}

export default Dama;

/*
  https://chesscul.com/rey-ajedrez/
  https://ajedrez.fandom.com/es/wiki/Rey
 */
