import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Sobre from "./componentes/Sobre";
import Historia from "./componentes/Historia";
import Secao1 from "./componentes/Secao1";
import Secao2 from "./componentes/Secao2";
import Equipe from "./componentes/Equipe";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Início</Link> | 
        <Link to="/sobre">Sobre</Link> | 
        <Link to="/historia">História</Link> | 
        <Link to="/secao1">Seção 1</Link> | 
        <Link to="/secao2">Seção 2</Link> | 
        <Link to="/equipe">Equipe</Link>
      </nav>

      {/* as rotas para cada componente */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/secao1" element={<Secao1 />} />
        <Route path="/secao2" element={<Secao2 />} />
        <Route path="/equipe" element={<Equipe />} />
      </Routes>
    </div>
  );
}

export default App;
