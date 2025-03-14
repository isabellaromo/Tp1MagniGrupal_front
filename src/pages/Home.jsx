import React, { useEffect, useState } from 'react'

const Home = () => {
  const [empresas, setEmpresas] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('https://localhost:8080/empresas/getAll')
        const responseJSON = await response.json()

        setEmpresas(...empresas, responseJSON)
      } catch (error) {
        setError(`Error: ', ${error}`)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [])

  if (error) return <p>{error}</p>
  if (isLoading) return <p>Cargando...</p>
  return <div>{empresas}</div>
}

export default Home
