import React from 'react'
import aperturas from '../../img/aperturas.png'
import finales from '../../img/finales.png'
import Boton from '../componentesEnComponentes/boton/Boton'
import './Aperturas.css'

function Aperturas({atras, navigate}) {
  const handleAperturas = () => navigate('/apertura')
  const handleFinales = () => navigate('/finales')
  return (
    <div className="seleccionar">
      <h1 className="text">¿QUÉ TE GUSTARÍA APRENDER?</h1>
      <div className="contenedorImg">
        <div className="texto-imagen" onClick={handleAperturas}>
          <h2 className="textImg">APERTURAS</h2>
          <div className="contenedorImgAperturas">
            <img src={aperturas} alt="aprender piezas" className="imgAperturas" />
          </div>
        </div>
        <div className="texto-imagen" onClick={handleFinales}>
          <h2 className="textImg">FINALES</h2>
          <div className="contenedorImgAperturas">
            <img src={finales} alt="aprender piezas" className="imgAperturas" />
          </div>
        </div>
      </div>
      <Boton onClick={atras}>VOLVER</Boton>
    </div>
  )
}

export default Aperturas
