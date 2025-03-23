import { Routes, Route } from 'react-router-dom'
import EmpresasProvider from './EmpresasProvider'
import Home from '../pages/Home'
import Noticias from '../pages/ABM/Noticias'
import NoticiasEmpresa from '../pages/ABM/NoticiasEmpresa'

const ContextWrapper = () => (
  <EmpresasProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="abm/noticias" element={<Noticias />} />
      <Route path="abm/noticias/:empresaId" element={<NoticiasEmpresa />} />
    </Routes>
  </EmpresasProvider>
)

export default ContextWrapper
