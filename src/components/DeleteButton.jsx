import React from 'react'

const DeleteButton = ({ idToDelete, type }) => {
  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      `¿Estás seguro de que deseas eliminar este ${type}? Esta acción no se puede deshacer.`
    )

    if (!isConfirmed) return

    try {
      const response = await fetch(
        `http://localhost:8080/${type}/delete/${idToDelete}`,
        {
          method: 'DELETE',
        }
      )

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(
            `${type} con id ${idToDelete} no encontrado o contiene empresas asociadas.`
          )
        }
        throw new Error(`Error al eliminar ${type} con id ${idToDelete}.`)
      }

      alert(`Se eliminó correctamente ${type} con id ${idToDelete}`)
      window.location.reload()
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 shadow-md cursor-pointer shadow-gray-400"
    >
      Eliminar
    </button>
  )
}

export default DeleteButton
