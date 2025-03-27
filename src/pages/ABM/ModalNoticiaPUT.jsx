import React, { useState } from 'react'
import FormNoticia from '../../components/FormNoticia'

const ModalNoticiaPUT = ({ noticia }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [formData, setFormData] = useState(noticia)
  const [errorMessage, setErrorMessage] = useState('')

  const closeModal = () => {
    setIsOpen(false)
    setErrorMessage('')
    window.location.reload()
  }

  const handleChange = e => {
    const { name, value } = e.target
    console.log('Name: ', name, '. Value: ', value)
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }))
    console.log(formData)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    delete formData.id
    console.log(formData)
    try {
      const response = await fetch(
        `http://localhost:8080/noticia/put/${noticia.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      if (!response.ok) {
        //TIPO DE ERROR
        if (response.status === 409) {
          throw new Error(
            'Ya existe una noticia con un/os de los campos asociados'
          )
        }
        throw new Error(response.statusText)
      }

      alert('Noticia editada correctamente')
      closeModal()
    } catch (error) {
      setErrorMessage(`Error al crear la noticia: ${error}`)
    }
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              Editar Noticia "{noticia.tituloNoticia}"
            </h2>
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

export default ModalNoticiaPUT
