import './Boton.css';

function Boton({ onClick, children }) {
  

  return (
    <div className='contenedorBoton'>
      <button 
        className='boton'
        onClick={onClick}
        type="button"
      >
        <strong>{children}</strong>
      </button>
    </div>
  )
}

export default Boton;