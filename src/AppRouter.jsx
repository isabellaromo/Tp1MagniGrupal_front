import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EmpresaHome from './pages/EmpresaHome'
import Buscador from './pages/Buscador'
import Detalle from './pages/Detalle'
import ABM from './pages/ABM/ABM'
import Empresas from './pages/ABM/Empresas'
import ContextWrapper from './contexts/ContextWrapper'

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/*Rutas que necesitan el contexto de empresas */}
        <Route path="/*" element={<ContextWrapper />} />

        {/*Rutas que no necesitan el contexto*/}
        <Route path="empresa/:empresaId" element={<EmpresaHome />} />
        <Route path="empresa/:empresaId/buscador" element={<Buscador />} />
        <Route
          path="empresa/:empresaId/noticia/:detalleId"
          element={<Detalle />}
        />
        <Route path="abm" element={<ABM />} />
        <Route path="abm/empresas" element={<Empresas />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
