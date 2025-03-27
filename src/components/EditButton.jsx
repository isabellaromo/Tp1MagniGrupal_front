import React from 'react'

const EditButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white px-2 py-1 rounded shadow-gray-400 hover:bg-blue-600`}
    >
      Editar
    </button>
  )
}

export default EditButton
