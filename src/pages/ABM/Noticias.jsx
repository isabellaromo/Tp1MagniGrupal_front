import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

const Noticias = () => {
  const [empresas, setEmpresas] = useState([])
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const basicAllEmpresa = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          'http://localhost:8080/empresa/basic/getAll'
        )
        if (!response.ok) {
          throw Error('Error al obtener las empresas')
        }
        const resoponseJSON = await response.json()
        setEmpresas(resoponseJSON)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    basicAllEmpresa()
  }, [])

  if (isLoading) return <p>Cargando...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="flex flex-col gap-10 items-center justify-center mt-10">
      <h2 className="text-3xl font-bold">ELIGE UNA EMPRESA</h2>
      {empresas.map((el, index) => (
        <Link
          to={`${el.id}/`}
          state={el.denominacion}
          className="text-black bg-green-900 w-[30%] self-center p-5 rounded-3xl cursor-pointer text-center text-2xl "
        >
          <button key={index}>{el.denominacion}</button>
        </Link>
      ))}
    </div>
  )
}

export default Noticias
