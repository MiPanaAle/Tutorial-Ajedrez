import React from "react";
import "./Rey.css";
import reyBlanco from "../../img/piezas/reyBlanco.svg";
import reyNegro from "../../img/piezas/reyNegro.svg";
import Boton from "../componentesEnComponentes/boton/Boton";

function Rey({ atras, navigate }) {
  const handleRey = () => navigate("/pieza/rey/enroque");

  return (
    <div className="rey">
      <h1 className="text">REY</h1>
      <div className="contenedorRey">
        <img src={reyBlanco} alt="rey blanco" className="piezaRey" />
        <iframe
          width="1143"
          height="643"
          src="https://www.youtube.com/embed/ryG-c_8tZq0"
          title="7. EL REY - MOVIMIENTOS Y CAPTURA || TUTORIALES INICIACIÓN al AJEDREZ || Tu Profe De Ajedrez"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <img src={reyNegro} alt="rey negro" className="piezaRey" />
      </div>
      <div className="contenedorBTN">
        <Boton onClick={atras}>VOLVER</Boton>
        <Boton onClick={handleRey}>MOVIMIENTO ESPECIAL</Boton>
      </div>
    </div>
  );
}

export default Rey;
