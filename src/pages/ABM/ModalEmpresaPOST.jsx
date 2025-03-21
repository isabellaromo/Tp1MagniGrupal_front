import React, { useState } from 'react'
import FormEmpresa from '../../components/FormEmpresa'

//TRATAR DE COMPONETIZAR LOS INPUTS

const initialForm = {
  denominacion: '',
  telefono: '',
  horarioAtencion: '',
  quienesSomos: '',
  latitud: '',
  longitud: '',
  domicilio: '',
  email: '',
}

const ModalEmpresaPOST = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState(initialForm)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const handleChange = e => {
    const { name, value } = e.target

    //ACA PARSEO PORQUE LA pAPI RECIBE latitud Y longitud COMO NUMBERS 🤫
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]:
        name === 'latitud' || name === 'longitud'
          ? Number.parseInt(value)
          : value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    //ACA LO QUE HAGO ES AGREGARLE UN +54 AL NUMERO, APARTE DE QUE AHORA SE HACE UN STRING
    //PORQUE ASÍ LO RECIBE EL ENDPOINT 💆 💅
    console.log(formData)
    const newFormData = { ...formData, telefono: `+54 ${formData.telefono}` }

    try {
      const response = await fetch(`http://localhost:8080/empresa/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFormData),
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }
      alert('Empresa creada correctamente:', formData.denominacion)
    } catch (error) {
      alert('Error al crear la empresa:', error)
    }

    setFormData(initialForm)
    closeModal()
  }

  return (
    <>
      <button
        onClick={openModal}
        className="bg-green-700 text-white text-2xl px-5 py-1 rounded shadow-md cursor-pointer shadow-gray-400 m-5 mr-0"
      >
        Crear Nueva +
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Crear Nueva Empresa</h2>
            <FormEmpresa
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              formData={formData}
              onClose={closeModal}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ModalEmpresaPOST
