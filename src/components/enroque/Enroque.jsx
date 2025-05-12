import React from "react";
import reyBlanco from "../../img/piezas/reyBlanco.svg";
import torreNegra from "../../img/piezas/torreNegra.svg";
import Boton from "../componentesEnComponentes/boton/Boton";

function Enroque({ atras }) {
  return (
    <div className="rey">
      <h1 className="text">MOVIMIENTO ESPECIAL DEL REY (ENROQUE)</h1>
      <div className="contenedorRey">
        <img src={reyBlanco} alt="" className="piezaRey" />
        <iframe
          width="1143"
          height="643"
          src="https://www.youtube.com/embed/xc3lWM3EVPE"
          title="12. el ENROQUE || CÓMO ENROCARSE en AJEDREZ || APRENDE PASO a PASO || Tu Profe De Ajedrez"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
        <img src={torreNegra} alt="" className="piezaRey" />
      </div>
      <Boton onClick={atras}>VOLVER</Boton>
    </div>
  );
}

export default Enroque;

// width="518" height="291"
// width="1143" height="643"
