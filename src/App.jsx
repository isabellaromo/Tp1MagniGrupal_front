import './App.css'
import AppRouter from './AppRouter'
import EmpresasProvider from './contexts/EmpresasProvider'

function App() {
  return (
    <EmpresasProvider>
      <AppRouter />
    </EmpresasProvider>
  )
}

export default App
