import React from "react";
import "./Coronacion.css";
import peonBlanco from "../../img/piezas/peonBlanco.svg";
import Boton from "../componentesEnComponentes/boton/Boton";
import damaBlanca from "../../img/piezas/damaBlanca.svg";
import torreBlanca from "../../img/piezas/torreBlanca.svg";
import alfilBlanca from "../../img/piezas/alfilBlanco.svg";
import caballoBlanca from "../../img/piezas/caballoBlanco.svg";

function Coronacion({ atras }) {
  return (
    <div className="rey">
      <h1 className="text">CORONACIÓN (DE PEÓN A ...)</h1>
      <div className="contenedorRey">
        <img src={peonBlanco} alt="peón blanco" className="piezaRey" />
        <iframe
          width="1143"
          height="643"
          src="https://www.youtube.com/embed/ZkqbegeGxaY"
          title="11. CORONACIÓN || CORONACIÓN del PEÓN en AJEDREZ || APRENDE PASO A PASO || Tu Profe De Ajedrez"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="contenedorPiezas">
          <div className="contenedorPiezaCoronacion">
            <img
              src={damaBlanca}
              alt="dama blanca"
              className="piezaCoronacion"
            />
          </div>
          <div className="contenedorPiezaCoronacion">
            <img
              src={torreBlanca}
              alt="torre blanca"
              className="piezaCoronacion"
            />
          </div>
          <div className="contenedorPiezaCoronacion">
            <img
              src={alfilBlanca}
              alt="alfil blanco"
              className="piezaCoronacion"
            />
          </div>
          <div className="contenedorPiezaCoronacion">
            <img
              src={caballoBlanca}
              alt="caballo blanco"
              className="piezaCoronacion"
            />
          </div>
        </div>
      </div>
      <Boton onClick={atras}>VOLVER</Boton>
    </div>
  );
}

export default Coronacion;
