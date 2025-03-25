import React, { useState } from 'react'
import ModalEmpresaPUT from '../pages/ABM/ModalEmpresaPUT'

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
