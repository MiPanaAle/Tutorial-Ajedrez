import React from "react";
import "./Piezas.css";
import alfilBlanco from "../../img/piezas/alfilBlanco.svg";
import alfilNegro from "../../img/piezas/alfilNegro.svg";
import caballoBlanco from "../../img/piezas/caballoBlanco.svg";
import caballoNegro from "../../img/piezas/caballoNegro.svg";
import damaBlanca from "../../img/piezas/damaBlanca.svg";
import damaNegra from "../../img/piezas/damaNegra.svg";
import peonBlanco from "../../img/piezas/peonBlanco.svg";
import peonNegro from "../../img/piezas/peonNegro.svg";
import reyBlanco from "../../img/piezas/reyBlanco.svg";
import reyNegro from "../../img/piezas/reyNegro.svg";
import torreBlanca from "../../img/piezas/torreBlanca.svg";
import torreNegra from "../../img/piezas/torreNegra.svg";
import Boton from "../componentesEnComponentes/boton/Boton";

function Piezas({ atras, navigate }) {
  const handleRey = () => navigate("/pieza/rey");
  const handleDama = () => navigate("/pieza/dama");
  const handleTorre = () => navigate("/pieza/torre");
  const handleAlfil = () => navigate("/pieza/alfil");
  const handleCaballo = () => navigate("/pieza/caballo");
  const handlePeon = () => navigate("/pieza/peon");

  return (
    <div className="piezas">
      <h1 className="text">¿DE QUÉ PIEZA QUIERES APRENDER?</h1>
      <div className="div">
        <div className="contenedorpieza" onClick={handleRey}>
          <div className="piexas">
            <img src={reyBlanco} alt="Rey Blanco" className="pieza" />
            <img src={reyNegro} alt="Rey Nagro" className="pieza" />
          </div>
          <div className="textPieza">
            <h2 className="textImg">REY</h2>
          </div>
        </div>
        <div className="contenedorpieza" onClick={handleDama}>
          <div className="piexas">
            <img src={damaBlanca} alt="Dama Blanca" className="pieza" />
            <img src={damaNegra} alt="Dama Negra" className="pieza" />
          </div>
          <div className="textPieza">
            <h2 className="textImg">DAMA</h2>
          </div>
        </div>
        <div className="contenedorpieza" onClick={handleTorre}>
          <div className="piexas">
            <img src={torreBlanca} alt="" className="pieza" />
            <img src={torreNegra} alt="" className="pieza" />
          </div>
          <div className="textPieza">
            <h2 className="textImg">TORRE</h2>
          </div>
        </div>
        <div className="contenedorpieza" onClick={handleAlfil}>
          <div className="piexas">
            <img src={alfilBlanco} alt="" className="pieza" />
            <img src={alfilNegro} alt="" className="pieza" />
          </div>
          <div className="textPieza">
            <h2 className="textImg">ALFIL</h2>
          </div>
        </div>
        <div className="contenedorpieza" onClick={handleCaballo}>
          <div className="piexas">
            <img src={caballoBlanco} alt="" className="pieza" />
            <img src={caballoNegro} alt="" className="pieza" />
          </div>
          <div className="textPieza">
            <h2 className="textImg">CABALLO</h2>
          </div>
        </div>
        <div className="contenedorpieza" onClick={handlePeon}>
          <div className="piexas">
            <img src={peonBlanco} alt="" className="pieza" />
            <img src={peonNegro} alt="" className="pieza" />
          </div>
          <div className="textPieza">
            <h2 className="textImg">PEÓN</h2>
          </div>
        </div>
      </div>
      <Boton onClick={atras}>VOLVER</Boton>
    </div>
  );
}

export default Piezas;
