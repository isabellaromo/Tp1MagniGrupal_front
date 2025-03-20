import React, { useState, useEffect } from 'react'
import HeaderEmpresa from '../components/headerEmpresa'
import Buscador from './Buscador'
import { useParams } from 'react-router'

const Detalle = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { noticiaId } = useParams()
  const [noticia, setNoticia] = useState(null)

  useEffect(() => {
    if (!noticiaId) return // Evita hacer la petición si noticiaId es undefined

    const getNoticia = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`http://localhost:8080/noticia/get/1`)

        if (!response.ok) {
          throw new Error(
            `Error en la respuesta del servidor: ${response.status}`
          )
        }

        const responseJSON = await response.json()
        console.log('Respuesta del servidor:', responseJSON)

        setNoticia(responseJSON)
      } catch (error) {
        setError(`Error: ${error.message}`)
      } finally {
        setIsLoading(false)
      }
    }

    getNoticia()
  }, [noticiaId])

  useEffect(() => {
    console.log('Noticia actualizada:', noticia)
  }, [noticia])

  if (error) return <p>{error}</p>
  if (isLoading) return <div>Cargando...</div>
  if (!noticia) return <p>No se encontró la noticia</p>

  return (
    <div>
      {/* <p>{`Mostrando información de la noticia con ID ${noticia.id} de la empresa con ID ${noticia.idEmpresa}`}</p>
      <HeaderEmpresa empresa={noticia.idEmpresa} />
      <Buscador />
      <div className="w-full flex justify-center mt-15">
        <div className="w-[70%] flex flex-col justify-center">
          <div className="w-full h-[500px] flex justify-center relative overflow-clip rounded-2xl">
            <p className="w-full p-4 absolute text-white bg-black/40">
              {noticia.titulo}
            </p>
            <img
              className="object-cover w-full"
              src={noticia.imagen}
              alt="Imagen de la Noticia"
            />
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <h1 className="text-4xl font-bold">{noticia.titulo}</h1>
            <p>Fecha de publicación: {noticia.fechaPublicacion}</p>
            <hr className="mt-3 mb-3 text-gray-200" />
            <p className="text-blue-800">{noticia.resumen}</p>
            <hr className="mt-3 mb-3 text-gray-200" />
            <p>{noticia.contenidoHTML}</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Detalle
