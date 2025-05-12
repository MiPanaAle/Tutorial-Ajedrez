//otras importaciones
import React from "react";
import logo from "../../img/logo.png";

//importación de css
import "./Inicio.css";

//importación de componentes
import Boton from "../componentesEnComponentes/boton/Boton";

function Inicio({ navigate }) {
  const handleSeleccion = () => navigate("/seleccion");

  return (
    <div className="contenedorInicio">
      <div className="inicio">
        <div className="img">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="textInicio">
          <h1 className="text abajo">TUTORIAL AJEDREZ</h1>
        </div>
        <div className="botonInicio">
          <Boton onClick={handleSeleccion}>EMPEZAR TUTORIAL</Boton>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
