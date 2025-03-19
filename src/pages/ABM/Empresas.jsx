import React, { useState } from "react";
import ModalEmpresa from "./ModalEmpresa";

const Empresas = () => {
  const empresa_info = [
    {
      id: 1,
      denominacion: "El Sol",
      telefono: "+54 11 1234-5678",
      horarioAtencion: "Lun-Vie 8:00-18:00",
      quienesSomos: "Medio digital con noticias en tiempo real.",
      latitud: -34.603722,
      longitud: -58.381592,
      domicilio: "Av. Siempre Viva 742, Buenos Aires",
      email: "contacto@noticiashoy.com",
    },
    {
      id: 2,
      denominacion: "segunda clinica",
      telefono: "+54 12222222222",
      horarioAtencion: "Lun-Vie 9:00-9:00",
      quienesSomos: "Medio digital con noticias en tiempo real.",
      latitud: -34.603722,
      longitud: -58.381592,
      domicilio: "Av. Mendoza",
      email: "asdasd@noticiashoy.com",
    }
  ];

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleFormSubmit = (data) => console.log("Empresa guardada:", data);

  return (
    <div className="overflow-x-auto p-4">
      <div className="flex justify-between items-center">
        <h2 className='text-2xl font-bold'>LISTADO DE EMPRESAS</h2>
        <button
          onClick={handleOpenModal}
          className="bg-green-800 text-white text-2xl px-5 py-1 rounded-2xl shadow-md cursor-pointer shadow-gray-400 m-5"
        >
          Crear Nueva +
        </button>
      </div>
      <ModalEmpresa
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleFormSubmit}
      />
      <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">Teléfono</th>
            <th className="p-2 border">Horario</th>
            <th className="p-2 border">Descripción</th>
            <th className="p-2 border">Dirección</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Editar</th>
            <th className="p-2 border">Remover</th>
          </tr>
        </thead>
        <tbody>
          {empresa_info.map((el, index) => (
            <tr className="text-center border" key={index}>
              <td className="p-2 border">{el.denominacion}</td>
              <td className="p-2 border">{el.telefono}</td>
              <td className="p-2 border">{el.horarioAtencion}</td>
              <td className="p-2 border">{el.quienesSomos}</td>
              <td className="p-2 border">{el.domicilio}</td>
              <td className="p-2 border">{el.email}</td>
              <td className="p-2 border">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                  Editar
                </button>
              </td>
              <td className="p-2 border">
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Empresas;
