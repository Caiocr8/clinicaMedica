import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Consulta from "./pages/Consultas/Consultas";
import MarcarConsulta from "./pages/MarcarConsultas/MarcarConsultas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Homepage/>  } />
        <Route path="/Consulta" element={ <Consulta/>  } />  
        <Route path="/MarcarConsulta" element={ <MarcarConsulta/>  } />
      </Routes>
    </Router>

  );
}

export default App;
