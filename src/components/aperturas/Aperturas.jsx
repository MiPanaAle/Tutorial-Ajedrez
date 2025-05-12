import React from 'react'
import aperturas from '../../img/aperturas.png'
import finales from '../../img/finales.png'
import Boton from '../componentesEnComponentes/boton/Boton'

function Aperturas({atras, navigate}) {
  const handleAperturas = () => navigate('/apertura')
  const handleFinales = () => navigate('/finales')
  return (
    <div className="seleccionar">
      <h1 className="text">¿QUÉ TE GUSTARÍA APRENDER?</h1>
      <div className="contenedorImg">
        <div className="imagen" onClick={handleAperturas}>
          <h2 className="textImg">APERTURAS</h2>
          <div className="img">
            <img src={aperturas} alt="aprender piezas" className="img" />
          </div>
        </div>
        <div className="imagen" onClick={handleFinales}>
          <h2 className="textImg">FINALES</h2>
          <div className="img">
            <img src={finales} alt="aprender piezas" className="img" />
          </div>
        </div>
      </div>
      <Boton onClick={atras}>VOLVER</Boton>
    </div>
  )
}

export default Aperturas
