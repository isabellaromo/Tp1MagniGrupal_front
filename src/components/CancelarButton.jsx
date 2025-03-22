import React from 'react'

const CancelarButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="bg-gray-400 text-white px-4 py-2 rounded cursor-pointer"
      onClick={onClick}
    >
      Cancelar
    </button>
  )
}

export default CancelarButton
