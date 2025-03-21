import React, { useState } from 'react'

const ModalNoticia = ({ isOpen, onClose, type }) => {
  const [error, setError] = useState(null)

  const [formData, setFormData] = useState({
    titulo: '',
    resumen: '',
    imagen: '',
    contenidoHTML: '',
    publicada: '',
    fechaPublicacion: '',
  })

  const handleChange = e => {
    const { name, type, checked, value } = e.target
    const newValue = type === 'checkbox' ? checked : value
    setFormData({ ...formData, [name]: newValue })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(formData)
    try {
      const response = await fetch(`http://localhost:8080/${type}/post`, {
        method: 'POST',
        body: { formData },
        'Content-Type': 'application/json',
      })

      if (!response.ok) {
        throw new Error(
          `Error: ${response.status}. Error al postear la noticia`
        )
      }
      const responseJSON = response.json()
      alert('Noticia creada:', responseJSON)
    } catch (error) {
      setError(error)
    }
    onClose()
  }

  if (!isOpen) return null
  if (error) return <p>{error}</p>
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Crear Nueva Noticia</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="titulo"
            placeholder="Titulo de la Noticia"
            value={formData.titulo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="resumen"
            placeholder="Resumen de la Noticia"
            value={formData.resumen}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="imagen"
            placeholder="URL de Imagen de la Noticia"
            value={formData.imagen}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            type="text"
            name="contenidoHTML"
            placeholder="Contenido HTML de la Noticia"
            value={formData.contenidoHTML}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <label for="inputRadio">¿Se encuentra publicada la noticia?</label>
          {formData.publicada && (
            <p>Valor actual:{formData.publicada ? 'Activo' : 'Desactivo'}</p>
          )}
          <input
            id="inputRadio"
            type="checkbox"
            name="publicada"
            value={formData.publicada}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="date"
            name="fechaPublicacion"
            placeholder="fechaPublicacion"
            value={formData.fechaPublicacion}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalNoticia
