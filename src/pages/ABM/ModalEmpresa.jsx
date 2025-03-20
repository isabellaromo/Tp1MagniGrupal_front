import React, { useState } from "react";

const initialForm = {
  denominacion: "",
  telefono: "",
  horarioAtencion: "",
  quienesSomos: "",
  domicilio: "",
  email: ""
}

const ModalEmpresa = ({ isOpen, onClose, onSubmit }) => {

  const [formData, setFormData] = useState({initialForm});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Empresa creada:", formData);
    onSubmit(formData);
    onClose(initialForm);
    setFormData(initialForm)
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-bold mb-4">Crear Nueva Empresa</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="denominacion"
          placeholder="Nombre"
          value={formData.denominacion}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="horarioAtencion"
          placeholder="Horario"
          value={formData.horarioAtencion}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="quienesSomos"
          placeholder="Descripción"
          value={formData.quienesSomos}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="domicilio"
          placeholder="Domicilio"
          value={formData.domicilio}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
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
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
            Guardar
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default ModalEmpresa;
