import React from "react";
import "./Alfil.css";
import alfilBlanco from "../../img/piezas/alfilBlanco.svg";
import alfilNegro from "../../img/piezas/alfilNegro.svg";
import Boton from "../componentesEnComponentes/boton/Boton";

function Alfil({atras}) {
  return (
    <div className="rey">
      <h1 className="text">ALFIL</h1>
      <div className="contenedorRey">
        <img src={alfilBlanco} alt="alfil blanco" className="piezaRey" />
        <iframe
          width="1143"
          height="643"
          src="https://www.youtube.com/embed/RrDqceKbo74"
          title="4. EL ALFIL - MOVIMIENTOS y CAPTURA || TUTORIAL INICIACIÓN al AJEDREZ || CHESSCUELA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <img src={alfilNegro} alt="alfil negro" className="piezaRey" />
      </div>
      <div className="contenedorBtn">
        <Boton onClick={atras}>VOLVER</Boton>
      </div>
    </div>
  );
}

export default Alfil;
