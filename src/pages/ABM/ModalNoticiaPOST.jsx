import React, { useContext, useState } from 'react'
import FormNoticia from '../../components/FormNoticia'
import CrearNuevaButton from '../../components/CrearNuevaButton'
import { EmpresasContext } from '../../contexts/EmpresasProvider'
import { useParams } from 'react-router'

const initialForm = {
  tituloNoticia: '',
  resumenNoticia: '',
  imagenNoticia: '',
  contenidoHtml: '',
  publicada: '',
  fechaPublicacion: '',
}

const ModalNoticiaPOST = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState(initialForm)
  const [isOpen, setIsOpen] = useState(false)
  const { empresas } = useContext(EmpresasContext)
  const { empresaId } = useParams()

  const openModal = () => setIsOpen(true)
  const closeModal = () => {
    setIsOpen(false)
    setErrorMessage('')
    window.location.reload()
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }))
    console.log(formData)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      console.log(empresaId)
      const formattedFormData = {
        ...formData,
        fechaPublicacion: new Date(formData.fechaPublicacion)
          .toISOString()
          .split('T')[0], // Asegurarse de que esté formateada correctamente
      }
      const response = await fetch(
        `http://localhost:8080/noticia/post?empresaId=${empresaId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      if (!response.ok) {
        if (response.status === 409) {
          throw new Error(
            'Ya existe una noticia con un/os de los campos asiciados'
          )
        }
        throw new Error(response.statusText)
      }
      alert('Noticia creada correctamente:', formData.denominacion)
    } catch (error) {
      setErrorMessage(`Error al crear la noticia: ${error.message}`)
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
              empresas={empresas}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ModalNoticiaPOST
