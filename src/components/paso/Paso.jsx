import React from "react";
import peonBlanco from "../../img/piezas/peonBlanco.svg";
import peonNegro from "../../img/piezas/peonNegro.svg";
import Boton from "../componentesEnComponentes/boton/Boton";

export default function Paso({ atras }) {
  return (
    <div>
      <div className="rey">
        <h1 className="text">MOVIMIENTO ESPECIAL DEL PEÓN (CAPTURA AL PASO)</h1>
        <div className="contenedorpeón">
          <img src={peonBlanco} alt="peón blanco" className="piezaRey" />
          <iframe
            width="1296"
            height="729"
            src="https://www.youtube.com/embed/T5iis0QnWtQ"
            title="13. CAPTURA AL PASO en AJEDREZ ||  HACER CAPTURA al PASO ||APRENDE PASO a PASO - Tu Profe De Ajedrez"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <img src={peonNegro} alt="peón negro" className="piezaRey" />
        </div>
        <div className="contenedorBTN">
          <Boton onClick={atras}>VOLVER</Boton>
        </div>
      </div>
    </div>
  );
}
