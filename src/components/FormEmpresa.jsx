import React from 'react'
import Input from './Input'
import CancelarButton from './CancelarButton'
import GuardarButton from './GuardarButton'

const FormEmpresa = ({
  handleChange,
  handleSubmit,
  formData = {},
  onClose,
  errorMessage,
}) => {
  //A FORM DATA LE SETEO UN VALOR POR DEFECTO PARA EL MODAL POST, YA QUE NO TRAEMOS LOS DATOS AHI 🤓
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        type="text"
        name="denominacion"
        placeholder="Nombre"
        value={formData?.denominacion}
        onChange={handleChange}
      />
      <Input
        type="number"
        name="telefono"
        placeholder="Teléfono"
        value={formData?.telefono}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="horarioAtencion"
        placeholder="Horario"
        value={formData?.horarioAtencion}
        onChange={handleChange}
      />
      <textarea
        name="quienesSomos"
        placeholder="Descripción"
        value={formData?.quienesSomos}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <Input
        type="number"
        name="latitud"
        placeholder="Latitud (Ej: 11,11111)"
        value={formData.latitud}
        onChange={handleChange}
      />
      <Input
        type="number"
        name="longitud"
        placeholder="Longitud (Ej: 11,11111)"
        value={formData?.longitud}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="domicilio"
        placeholder="Domicilio"
        value={formData?.domicilio}
        onChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData?.email}
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

export default FormEmpresa
