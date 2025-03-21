import React, { useState } from 'react'
import ModalEmpresaPUT from '../pages/ABM/ModalEmpresaPUT'

const EditButton = ({ idToEdit, type }) => {
  const [isEdit, setIsEdit] = useState(false)
  const hadnleEdit = async () => {
    setIsEdit(true)
  }

  return (
    <button
      onClick={hadnleEdit}
      className={`bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600`}
    >
      Editar
      {isEdit && <ModalEmpresaPUT />}
    </button>
  )
}

export default EditButton
