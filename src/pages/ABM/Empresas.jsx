import React, { useEffect, useState } from 'react'
import DeleteButton from '../../components/DeleteButton'
import ModalEmpresaPOST from './ModalEmpresaPOST'
import ModalEmpresaPUT from './ModalEmpresaPUT'
import { Link } from 'react-router'
import VolverABMButton from '../../components/VolverABMButton'

//Esta es la TABLA EMPRESAS
const Empresas = () => {
  const [empresas, setEmpresas] = useState([])
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getEmpresaYNoticias = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`http://localhost:8080/empresa/getAll`)
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

    getEmpresaYNoticias()
  }, [])

  if (isLoading) return <p>Cargando...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="overflow-x-auto p-4">
      <div className="flex justify-between items-center">
        <VolverABMButton />
        <h2 className="text-2xl font-bold">LISTADO DE EMPRESAS</h2>
        <ModalEmpresaPOST />
      </div>
      <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">Teléfono</th>
            <th className="p-2 border">Horario</th>
            <th className="p-2 border">Descripción</th>
            <th className="p-2 border">Dirección</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Editar</th>
            <th className="p-2 border">Remover</th>
          </tr>
        </thead>
        <tbody>
          {empresas.map((empresa, index) => (
            <tr className="text-center border" key={index}>
              <td className="p-2 border">{empresa.denominacion}</td>
              <td className="p-2 border">{empresa.telefono}</td>
              <td className="p-2 border">{empresa.horarioAtencion}</td>
              <td className="p-2 border">{empresa.quienesSomos}</td>
              <td className="p-2 border">{empresa.domicilio}</td>
              <td className="p-2 border">{empresa.email}</td>
              <td className="p-2 border">
                <ModalEmpresaPUT empresa={empresa} />
              </td>
              <td className="p-2 border">
                <DeleteButton idToDelete={empresa.id} type="empresa" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Empresas
