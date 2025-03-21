import React, { useEffect, useState } from 'react'
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

const ModalEmpresaPUT = ({ empresa }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState(initialForm)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  //CARGA DE DATOS YA EXISTENTES
  useEffect(() => {
    const getCurrentdata = async () => {
      const response = await fetch(
        `http://localhost:8080/empresa/get/${empresa.id}`
      )

      if (!response.ok) {
        throw new Error(response.status, ' - ', response.statusText)
      }
      const data = await response.json()

      const parsedData = {
        ...data,
        telefono: Number.parseInt(
          data.telefono.replace(/[^0-9]/g, '').slice(2) //LE SACO EL +54 Y LO HAGO NUMBER XD
        ),
      }

      setFormData(parsedData)
    }
    getCurrentdata()
  }, [empresa.id])

  const handleChange = e => {
    const { name, value } = e.target

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
    //PORQUE ASÍ LO RECIBE EL ENDPOINT
    const newFormData = { ...formData, telefono: `+54 ${formData.telefono}` }
    delete newFormData.listaNoticia
    delete newFormData.id
    console.log(newFormData)

    try {
      const response = await fetch(
        `http://localhost:8080/empresa/put/${empresa.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFormData),
        }
      )

      if (!response.ok) {
        throw new Error(response.statusText)
      }
      alert('Empresa editada correctamente:', formData.denominacion)
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
        className="bg-green-700 text-white px-2 py-1 rounded hover:bg-green-600 shadow-md cursor-pointer shadow-gray-400"
      >
        Editar
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              Editar {empresa.denominacion}
            </h2>
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

export default ModalEmpresaPUT
