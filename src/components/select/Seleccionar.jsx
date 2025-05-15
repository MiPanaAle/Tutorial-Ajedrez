import React from "react";
import piezas from "../../img/piezas.png";
import tablero from "../../img/tablero.png";
import reglas from "../../img/aperturasyfinales.png";
import "./Seleccionar.css";

function Seleccionar({ navigate }) {
  const handlePieza = () => navigate("/pieza");
  const handleTablero = () => navigate("/tablero");
  const handleAperturas = () => navigate("/Aperturas-Finales");

  return (
    <div className="seleccionar">
      <h1 className="text">¿QUÉ TE GUSTARÍA APRENDER?</h1>
      <div className="contenedorImg">
        <div className="arriba">
          <div className="imagen" onClick={handlePieza}>
            <h2 className="textImg">PIEZAS</h2>
            <div className="contenedorimgSelect">
              <img src={piezas} alt="aprender piezas" className="imgSelect" />
            </div>
          </div>
          <div className="imagen" onClick={handleTablero}>
            <h2 className="textImg">TABLERO</h2>
            <div className="contenedorimgSelect">
              <img src={tablero} alt="aprender piezas" className="imgSelect" />
            </div>
          </div>
        </div>
        <div className="abajo">
          <div className="imagen" onClick={handleAperturas}>
            <h2 className="textImg">APERTURAS Y FINALES</h2>
            <div className="contenedorimgSelect">
              <img src={reglas} alt="aprender piezas" className="imgSelect" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seleccionar;
