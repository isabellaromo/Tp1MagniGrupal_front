import React from 'react'

const CrearNuevaButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-700 text-white text-2xl px-5 py-1 rounded shadow-md cursor-pointer shadow-gray-400 m-5 mr-0"
    >
      Crear Nueva +
    </button>
  )
}

export default CrearNuevaButton
