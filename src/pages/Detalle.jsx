import React, { useState } from 'react'
import HeaderEmpresa from '../components/headerEmpresa'
import Buscador from './Buscador'
import { useParams } from 'react-router'

const Detalle = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const { empresaId, noticiaId } = useParams()
  // const [noticia, setNoticia] = useState(null)

  /////////fetch de la noticia
  // useEffect(() => {
  //   const getNoticia = async () => {
  //     try {
  //       setIsLoading(true)
  //       const response = await fetch(`url`)
  //       const responseJSON = await response.json()
  //       if (!response.ok) {
  //         throw new Error('Error en la respuesta del servidor')
  //       }
  //       setNoticia(responseJSON)
  //     } catch (error) {
  //       setError(`Error: ${error.message}`)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }

  //   getNoticia()
  // }, [noticiaId])
  //
  const noticia = {
    id: 1,
    titulo: 'Descubren Ciudad Perdida Bajo el Desierto del Sahara',
    resumen:
      'Arqueólogos afirman haber encontrado una metrópolis oculta bajo las arenas del Sahara, repleta de templos y tecnología avanzada que podría cambiar la historia de la humanidad.',
    imagen:
      'https://resizer.glanacion.com/resizer/v2/el-sahara-se-extiende-a-lo-largo-de-4800-AEPKCH33KZHFZGWCOFTRTHXTEM.jpg?auth=d3cfa3a833cc0fa628c1f499f877071cdc88920d493f02f15a2963fab9c3731f&width=1280&height=854&quality=70&smart=true',
    contenidoHTML: '?',
    publicada: 'Y',
    fechaPublicacion: '2024-04-30',
    idEmpresa: 1,
  }

  if (error) return <p>{error}</p>
  if (isLoading) return <div>Cargando...</div>

  return (
    <div>
      <p>{`Mostrando información de la noticia con ID ${noticia.id} de la empresa con ID ${noticia.idEmpresa}`}</p>
      {/*Corregir el atributo acá abajo */}
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
            ></img>
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <h1 className="text-4xl font-bold">{noticia.titulo}</h1>
            <p className="">Fecha de publicación: {noticia.fechaPublicacion}</p>
            <hr className="mt-3 mb-3 text-gray-200" />
            <p className="text-blue-800">{noticia.resumen}</p>
            <hr className="mt-3 mb-3 text-gray-200" />
            <p>{noticia.contenidoHTML}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detalle
