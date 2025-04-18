import React, { useState } from 'react'
import FormEmpresa from '../../components/FormEmpresa'
import CrearNuevaButton from '../../components/CrearNuevaButton'

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
  const [errorMessage, setErrorMessage] = useState('')

  const openModal = () => setIsOpen(true)
  const closeModal = () => {
    setIsOpen(false)
    setErrorMessage('')
    window.location.reload()
  }

  const handleChange = e => {
    const { name, value } = e.target

    //ACA PARSEO PORQUE LA API RECIBE latitud Y longitud COMO NUMBERS 🤫 //Juan: Son floats chaval
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]:
        name === 'latitud' || name === 'longitud'
          ? parseFloat(value) || ''
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
        //TIPO DE ERROR
        if (response.status === 409) {
          throw new Error(
            'Ya existe una empresa con un/os de los campos asiciados'
          )
        }
        throw new Error(response.statusText)
      }
      alert('Empresa creada correctamente:', formData.denominacion)
    } catch (error) {
      setErrorMessage(`Error al crear la empresa: ${error.message}`)
    }

    setFormData(initialForm)
  }

  return (
    <>
      <CrearNuevaButton onClick={openModal} />
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Crear Nueva Empresa</h2>
            <FormEmpresa
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              formData={formData}
              onClose={closeModal}
              errorMessage={errorMessage}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ModalEmpresaPOST
