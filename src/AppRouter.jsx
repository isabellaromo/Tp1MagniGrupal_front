import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmpresaHome from "./pages/EmpresaHome";
import Buscador from "./pages/Buscador";
import Detalle from "./pages/Detalle";
import Home from "./pages/Home";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":empresaId/empresaHome" element={<EmpresaHome />} />
        <Route path=":empresaId/buscador" element={<Buscador />} />
        <Route path=":empresaId/detalle/:detalleId" element={<Detalle />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
