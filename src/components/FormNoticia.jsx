import React, { useContext } from 'react'
import Input from './Input'
import CancelarButton from './CancelarButton'
import GuardarButton from './GuardarButton'

const FormNoticia = ({
  handleChange,
  handleSubmit,
  formData = {},
  onClose,
  errorMessage,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        type="text"
        name="tituloNoticia"
        placeholder="Titulo de la Noticia"
        value={formData?.tituloNoticia}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="resumenNoticia"
        placeholder="Resumen de la Noticia"
        value={formData?.resumenNoticia}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="imagenNoticia"
        placeholder="URL de Imagen de la Noticia"
        value={formData?.imagenNoticia}
        onChange={handleChange}
      />
      <textarea
        type="text"
        name="contenidoHtml"
        placeholder="Contenido HTML de la Noticia"
        value={formData?.contenidoHtml}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <p className='border-gray-400-2 text-gray-400'>Para crear tu HTML ingresa <a href="/tiny.html" target='_blank' className='text-blue-700 underline'>AQUI</a></p>
      <label htmlFor="inputRadio">¿Se encuentra publicada la noticia?</label>
      {formData?.publicada && (
        <p>Valor actual:{formData?.publicada ? 'Activo' : 'Desactivo'}</p>
      )}
      <Input
        id="inputRadio"
        type="checkbox"
        name="publicada"
        checked={formData?.publicada}
        onChange={handleChange}
      />
      <Input
        type="date"
        name="fechaPublicacion"
        placeholder="fechaPublicacion"
        value={formData?.fechaPublicacion}
        onChange={handleChange}
      />
      {/* Muestra el mensaje de error si existe */}
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      <div className="flex justify-end space-x-2">
        <CancelarButton onClick={onClose} />
        <GuardarButton />
      </div>
    </form>
  )
}

export default FormNoticia
