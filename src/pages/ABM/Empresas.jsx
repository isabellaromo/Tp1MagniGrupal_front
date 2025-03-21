import React, { useEffect, useState } from 'react'
import ModalEmpresa from './ModalEmpresa'
import DeleteButton from '../../components/DeleteButton'

const Empresas = () => {
  const [isModalOpen, setModalOpen] = useState(false)
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

  const handleOpenModal = () => setModalOpen(true)
  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleFormSubmit = data => {
    console.log('Empresa guardada:', data)
  }

  if (isLoading) return <p>Cargando...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="overflow-x-auto p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">LISTADO DE EMPRESAS</h2>
        <button
          onClick={handleOpenModal}
          className="bg-green-800 text-white text-2xl px-5 py-1 rounded-2xl shadow-md cursor-pointer shadow-gray-400 m-5"
        >
          Crear Nueva +
        </button>
      </div>
      <ModalEmpresa
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleFormSubmit}
      />
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
              <td className="p-2 border">Editar</td>
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
