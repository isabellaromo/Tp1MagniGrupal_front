import React from 'react'

const DeleteButton = ({ idToDelete, type }) => {
  const hadleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/${type}/delete/${idToDelete}`,
        {
          method: 'DELETE',
        }
      )
      if (!response.ok) {
        throw new Error(
          `Error al eliminar ${type} con id ${idToDelete}. No se encontro la empresa o contiene empresas asociadas.`
        )
      }
      console.log(`Se eliminó correctamente ${type} con id ${idToDelete}`)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <button
      onClick={hadleDelete}
      className={`bg-red-500 text-white px-2 py-1 rounded hover:bg-blue-600`}
    >
      Delete
    </button>
  )
}

export default DeleteButton
