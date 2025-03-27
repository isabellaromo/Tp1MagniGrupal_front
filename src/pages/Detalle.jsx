import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Buscador from './Buscador'
import HeaderEmpresa from '../components/headerEmpresa'
import NavBuscador from '../components/NavBuscador'

const Detalle = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const { detalleId } = useParams()
  const [noticia, setNoticia] = useState(null)

  useEffect(() => {
    const getNoticia = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/noticia/get/${detalleId}`
        )

        if (!response.ok) {
          throw new Error(
            `Error en la respuesta del servidor: ${response.status}`
          )
        }

        const responseJSON = await response.json()

        // Verificar si la respuesta contiene datos válidos
        if (!responseJSON || Object.keys(responseJSON).length === 0) {
          setNoticia(null) // Noticia no encontrada
        } else {
          setNoticia(responseJSON)
        }
      } catch (error) {
        setError(`Error: ${error.message}`)
      } finally {
        setIsLoading(false)
      }
    }

    getNoticia()
  }, [detalleId])

  if (isLoading) return <div>Cargando...</div>
  if (error) return <p>{error}</p>
  if (!noticia) return <p>No se encontró la noticia</p>

  return (
    <div>
      {/* <p>{`Mostrando información de la noticia con ID ${noticia.id} de la empresa con ID ${noticia.idEmpresa}`}</p> */}
      <HeaderEmpresa id={noticia.idEmpresa} />
      <NavBuscador />
      <div className="w-full flex justify-center mt-15">
        <div className="w-[70%] flex flex-col justify-center">
          <div className="w-full h-[500px] flex justify-center relative overflow-clip rounded-2xl">
            <p className="w-full p-4 absolute text-white bg-black/40">
              {noticia.tituloNoticia}
            </p>
            <img
              className="object-cover w-full"
              src={noticia.imagenNoticia}
              alt="Imagen de la Noticia"
            />
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <h1 className="text-4xl font-bold">{noticia.tituloNoticia}</h1>
            <p>Fecha de publicación: {noticia.fechaPublicacion}</p>
            <hr className="mt-3 mb-3 text-gray-200" />
            <p className="text-blue-800">{noticia.resumenNoticia}</p>
            <hr className="mt-3 mb-3 text-gray-200" />
            <div
              className="bg-gray-200 rounded-2xl flex justify-start items-center px-4 py-2"
              dangerouslySetInnerHTML={{ __html: noticia.contenidoHtml }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detalle
