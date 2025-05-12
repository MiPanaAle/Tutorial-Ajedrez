import React from "react";
import "./Peon.css";
import peonBlanco from "../../img/piezas/peonBlanco.svg";
import peonNegro from "../../img/piezas/peonNegro.svg";
import Boton from "../componentesEnComponentes/boton/Boton";

function Peon({ atras, navigate }) {
  const paso = () => navigate("/pieza/peón/PeónAlPaso");
  const coronacion = () => navigate("/pieza/peón/coronación");

  return (
    <div className="rey">
      <h1 className="text">PEÓN</h1>
      <div className="contenedorRey">
        <img src={peonBlanco} alt="peón blanco" className="piezaRey" />

        <iframe
          width="1143"
          height="643"
          src="https://www.youtube.com/embed/u8YmPSbZgGA"
          title="2. EL PEÓN - MOVIMIENTO Y CAPTURA || TUTORIAL INICIACIÓN || Tu Profe De Ajedrez"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
        <img src={peonNegro} alt="peón negro" className="piezaRey" />
      </div>
      <div className="contenedorBTN">
        <Boton onClick={atras}>VOLVER</Boton>
        <Boton onClick={paso}>MOVIMIENTO ESPECIAL</Boton>
        <Boton onClick={coronacion}>CORONACIÓN</Boton>
      </div>
    </div>
  );
}

export default Peon;
