import React from "react";
import "./Caballo.css";
import caballoBlanco from "../../img/piezas/caballoBlanco.svg";
import caballoNegro from "../../img/piezas/caballoNegro.svg";
import Boton from "../componentesEnComponentes/boton/Boton";

function Caballo({ atras }) {
  return (
    <div className="rey">
      <h1 className="text">CABALLO</h1>
      <div className="contenedorRey">
        <img src={caballoBlanco} alt="caballo blanco" className="piezaRey" />
        <iframe
          width="1143"
          height="643"
          src="https://www.youtube.com/embed/IDi-dME4hYE"
          title="5. EL CABALLO - MOVIMIENTOS Y CAPTURA || TUTORIAL INICIACIÓN al AJEDREZ || Tu Profe De Ajedrez"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <img src={caballoNegro} alt="caballo negro" className="piezaRey" />
      </div>
      <Boton onClick={atras}>VOLVER</Boton>
    </div>
  );
}

export default Caballo;
