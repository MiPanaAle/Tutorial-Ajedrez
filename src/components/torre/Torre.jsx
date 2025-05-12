import React from "react";
import "./Torre.css";
import torreBlanca from "../../img/piezas/torreBlanca.svg";
import torreNegra from "../../img/piezas/torreNegra.svg";
import Boton from "../componentesEnComponentes/boton/Boton";

function Torre({ atras }) {
  return (
    <div className="rey">
      <h1 className="text">TORRE</h1>
      <div className="contenedorRey">
        <img src={torreBlanca} alt="rey blanco" className="piezaRey" />
        <iframe
          width="1143"
          height="643"
          src="https://www.youtube.com/embed/vFS51YiGcEs"
          title="3. LA TORRE - MOVIMIENTOS Y CAPTURA || TUTORIAL INICIACIÓN || CHESSCUELA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <img src={torreNegra} alt="rey negro" className="piezaRey" />
      </div>
      <Boton onClick={atras}>VOLVER</Boton>
    </div>
  );
}

export default Torre;

/*
  https://chesscul.com/rey-ajedrez/
  https://ajedrez.fandom.com/es/wiki/Rey
 */
