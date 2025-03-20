import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [empresas, setEmpresas] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('http://localhost:8080/empresa/getAll')
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

  if (error) return <p>{error}</p>
  if (isLoading) return <p>Cargando...</p>

  return (
    <table width="50%" align="center">
      <thead>
        <tr>
          <th width="50%">EMPRESA</th>
          <th>VER PÁGINA</th>
        </tr>
      </thead>
      <tbody>
        {empresas.map((empresa, index) => (
          <tr key={index}>
            <td>{empresa.denominacion}</td>
            <td>
              <Link className="underline" to={`/${empresa.id}/empresaHome`}>
                URL PÁGINA HOME
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Home
