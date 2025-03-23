import React from 'react'
import Input from './Input'
import CancelarButton from './CancelarButton'
import GuardarButton from './GuardarButton'

const FormNoticia = ({
  handleChange,
  handleSubmit,
  formData = {},
  onClose,
  errorMessage,
  empresas,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        type="text"
        name="titulo"
        placeholder="Titulo de la Noticia"
        value={formData.titulo}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="resumen"
        placeholder="Resumen de la Noticia"
        value={formData.resumen}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="imagen"
        placeholder="URL de Imagen de la Noticia"
        value={formData.imagen}
        onChange={handleChange}
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
      <label htmlFor="inputRadio">¿Se encuentra publicada la noticia?</label>
      {formData.publicada && (
        <p>Valor actual:{formData.publicada ? 'Activo' : 'Desactivo'}</p>
      )}
      <Input
        id="inputRadio"
        type="checkbox"
        name="publicada"
        checked={formData.publicada}
        onChange={handleChange}
      />
      <Input
        type="date"
        name="fechaPublicacion"
        placeholder="fechaPublicacion"
        value={formData.fechaPublicacion}
        onChange={handleChange}
      />
      <label htmlFor="selectInput">Empresa: </label>
      <select
        id="selectInput"
        name="idEmpresa"
        className="w-full p-2 border rounded"
        onChange={handleChange}
      >
        {empresas.map(empresa => {
          return (
            <option key={empresa.id} value={empresa.id}>
              {empresa.denominacion}
            </option>
          )
        })}
      </select>
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
