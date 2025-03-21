import React from 'react'

const FormEmpresa = ({
  handleChange,
  handleSubmit,
  formData = {},
  onClose,
}) => {
  //A FORM DATA LE SETEO UN VALOR POR DEFECTO PARA EL MODAL POST, YA QUE NO TRAEMOS LOS DATOS AHI
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        name="denominacion"
        placeholder="Nombre"
        value={formData?.denominacion}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        name="telefono"
        placeholder="Teléfono"
        value={formData?.telefono}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="horarioAtencion"
        placeholder="Horario"
        value={formData?.horarioAtencion}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="quienesSomos"
        placeholder="Descripción"
        value={formData?.quienesSomos}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        name="latitud"
        placeholder="Latitud"
        value={formData.latitud}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="longitud"
        placeholder="Longitud"
        value={formData?.longitud}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="domicilio"
        placeholder="Domicilio"
        value={formData?.domicilio}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData?.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          className="bg-gray-400 text-white px-4 py-2 rounded cursor-pointer"
          onClick={onClose}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Guardar
        </button>
      </div>
    </form>
  )
}

export default FormEmpresa
