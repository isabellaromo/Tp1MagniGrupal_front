import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EmpresaHome from './pages/EmpresaHome'
import Buscador from './pages/Buscador'
import Detalle from './pages/Detalle'
import Home from './pages/Home'
import ABM from './pages/ABM/ABM'
import Empresas from './pages/ABM/Empresas'
import Noticias from './pages/ABM/Noticias'
import NoticiasEmpresa from './pages/ABM/NoticiasEmpresa'

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="empresa/:empresaId" element={<EmpresaHome />} />
        <Route path="empresa/:empresaId/buscador" element={<Buscador />} />
        <Route
          path="empresa/:empresaId/noticia/:detalleId"
          element={<Detalle />}
        />
        <Route path="abm" element={<ABM />} />
        <Route path="abm/empresas" element={<Empresas />} />
        <Route path="abm/noticias" element={<Noticias />} />

        <Route path="abm/noticias/:empresaId" element={<NoticiasEmpresa />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
