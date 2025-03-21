import React, { useState } from 'react'
import ModalEmpresaPUT from '../pages/ABM/ModalEmpresaPUT'

const EditButton = () => {
  const [isEdit, setIsEdit] = useState(false)
  const hadnleEdit = async () => {
    setIsEdit(true)
  }

  //NADA QUE EXPLICAR, UN COMPONENTE CHIQUITO, OSEA PROMEDIO, TIRANDO A GRANDE 👶
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
