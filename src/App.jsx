import { Route, Routes, useNavigate } from "react-router-dom";


//importaciones de estilos
import "./App.css";

//importaciones de componentes
import Tablerofondo from "./components/componentesEnComponentes/tablero/Tablero";
import Inicio from "./components/inicio/Inicio"
import Seleccionar from "./components/select/Seleccionar";
import Piezas from "./components/piezas/Piezas";
import Rey from "./components/rey/Rey";
import Dama from "./components/dama/Dama"
import Torre from "./components/torre/Torre";
import Alfil from "./components/alfil/Alfil";
import Caballo from "./components/caballo/Caballo";
import Peon from "./components/peon/Peon";
import Tablero from "./components/tablero/Tablero";
import Enroque from "./components/enroque/Enroque";
import Paso from "./components/paso/Paso";
import Coronacion from "./components/coronacion/Coronacion";
import Aperturas from "./components/aperturas/Aperturas";

function App() {
  const navigate = useNavigate();

  const atras = () => navigate(-1);

  return (
    <>
      <Tablerofondo className="tablero" />
      <div className="app">
        <Routes>
          <Route path="/" element={<Inicio navigate={navigate} />} />
          <Route path="/seleccion" element={<Seleccionar atras={atras} navigate={navigate} />} />
          <Route path="/pieza" element={<Piezas atras={atras} navigate={navigate} />} />
          <Route path="/aperturas" element={<Aperturas atras={atras} navigate={navigate} />} />
          <Route path="/tablero" element={<Tablero atras={atras} navigate={navigate} />} />
          <Route path="/pieza/rey" element={<Rey atras={atras} navigate={navigate} />} />
          <Route path="/pieza/dama" element={<Dama atras={atras} />} />
          <Route path="/pieza/torre" element={<Torre atras={atras} />} />
          <Route path="/pieza/alfil" element={<Alfil atras={atras} />} />
          <Route path="/pieza/caballo" element={<Caballo atras={atras} />} />
          <Route path="/pieza/peon" element={<Peon atras={atras} navigate={navigate} />} />
          <Route path="/pieza/rey/enroque" element={<Enroque atras={atras} />} />
          <Route path="/pieza/peón/PeónAlPaso" element={<Paso atras={atras} />} />
          <Route path="/pieza/peón/coronación" element={<Coronacion atras={atras} />} />
          <Route path="/apertura" element={<Aperturas atras={atras} navigate={navigate} />} />
          <Route path="/finales" element={<Aperturas atras={atras} navigate={navigate} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
