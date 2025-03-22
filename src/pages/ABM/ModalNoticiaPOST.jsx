import React, { useState } from 'react'
import FormNoticia from '../../components/FormNoticia'
import CrearNuevaButton from '../../components/CrearNuevaButton'

const initialForm = {
  titulo: '',
  resumen: '',
  imagen: '',
  contenidoHTML: '',
  publicada: '',
  fechaPublicacion: '',
}

const ModalNoticiaPOST = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState(initialForm)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => {
    setIsOpen(false)
    setErrorMessage('')
    window.location.reload()
  }

  const handleChange = e => {
    const { name, type, checked, value } = e.target
    const newValue = type === 'checkbox' ? checked : value
    setFormData({ ...formData, [name]: newValue })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(formData)
    try {
      const response = await fetch(`http://localhost:8080/noticia/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFormData),
      })

      if (!response.ok) {
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
            <h2 className="text-xl font-bold mb-4">Crear Nueva Noticia</h2>
            <FormNoticia
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

export default ModalNoticiaPOST
