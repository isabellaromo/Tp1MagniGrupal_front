import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import DeleteButton from '../../components/DeleteButton'
import ModalNoticiaPOST from './ModalNoticiaPOST'

//Esta es la tabla con todas las noticias
const NoticiasEmpresa = () => {
  const [noticias, setNoticias] = useState([])
  const location = useLocation()
  const empresa = location.state

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch('http://localhost:8080/noticia/getAll')
        if (!response.ok) {
          throw new Error(response.status, ' Error al obtener las noticias')
        }
        const data = await response.json()
        setNoticias(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchNoticias()
  }, [])

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Noticias empresa {empresa}</h2>
        <ModalNoticiaPOST />
      </div>
      <div className="overflow-auto max-w-full">
        <table className="min-w-full table-fixed border border-gray-300 bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-2 border w-1/9">Id</th>
              <th className="p-2 border w-1/9">Titulo</th>
              <th className="p-2 border w-1/9">Resumen</th>
              <th className="p-2 border w-1/9">Imagen</th>
              <th className="p-2 border w-1/9">Contenido HTML</th>
              <th className="p-2 border w-1/9">Publicada</th>
              <th className="p-2 border w-1/9">Fecha Publicacion</th>
              <th className="p-2 border w-1/9">Editar</th>
              <th className="p-2 border w-1/9">Remover</th>
            </tr>
          </thead>
          <tbody>
            {noticias.map((noticia, index) => (
              <tr className="text-center border" key={index}>
                <td className="p-2 border w-1/9">{noticia.id}</td>
                <td className="p-2 border w-1/9 max-h-[100px] overflow-auto">
                  {noticia.tituloNoticia}
                </td>
                <td className="p-2 border w-1/9 max-h-[100px] overflow-auto">
                  {noticia.resumenNoticia}
                </td>
                <td className="p-2 border w-1/9 max-h-[100px] overflow-auto">
                  <img
                    src={noticia.imagenNoticia}
                    alt="Noticia"
                    className="w-full h-auto max-h-[80px] object-cover"
                  />
                </td>
                <td className="p-2 border w-1/9 max-h-[100px] overflow-auto">
                  {noticia.contenidoHtml}
                </td>
                <td className="p-2 border w-1/9">
                  {noticia.publicada ? 'Y' : 'N'}
                </td>
                <td className="p-2 border w-1/9">{noticia.fechaPublicacion}</td>
                <td className="p-2 border w-1/9">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                    Editar
                  </button>
                </td>
                <td className="p-2 border w-1/9">
                  <DeleteButton idToDelete={noticia.id} type="noticia" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default NoticiasEmpresa
