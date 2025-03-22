import { createContext, useEffect, useState } from 'react'

export const EmpresasContext = createContext()

export const EmpresasProvider = ({ children }) => {
  const [empresas, setEmpresas] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          'http://localhost:8080/empresa/basic/getAll'
        )
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor')
        }
        const responseJSON = await response.json()
        setEmpresas(responseJSON)
      } catch (error) {
        setError(`Error: ${error.message}`)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [])

  return (
    <EmpresasContext.Provider value={{ empresas, setEmpresas }}>
      {children}
    </EmpresasContext.Provider>
  )
}

export default EmpresasProvider
