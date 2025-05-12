import React from "react";
import piezas from "../../img/piezas.png";
import tablero from "../../img/tablero.png";
import reglas from "../../img/reglas.png";
import "./Seleccionar.css";

function Seleccionar({ navigate }) {
  const handlePieza = () => navigate("/pieza");
  const handleTablero = () => navigate("/tablero");
  const handleAperturas = () => navigate("/aperturas");

  return (
    <div className="seleccionar">
      <h1 className="text">¿QUÉ TE GUSTARÍA APRENDER?</h1>
      <div className="contenedorImg">
        <div className="arriba">
          <div className="imagen" onClick={handlePieza}>
            <h2 className="textImg">PIEZAS</h2>
            <div className="img">
              <img src={piezas} alt="aprender piezas" className="img" />
            </div>
          </div>
          <div className="imagen" onClick={handleTablero}>
            <h2 className="textImg">TABLERO</h2>
            <div className="img">
              <img src={tablero} alt="aprender piezas" className="img" />
            </div>
          </div>
        </div>
        <div className="abajo">
          <div className="imagen" onClick={handleAperturas}>
            <h2 className="textImg">APERTURAS Y FINALES</h2>
            <div className="img">
              <img src={reglas} alt="aprender piezas" className="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seleccionar;
