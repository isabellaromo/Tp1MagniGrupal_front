import React, { useState } from "react";

const ModalNoticia = ({ isOpen, onClose, onSubmit }) => {
  const noticias = [
    {
      id: 1,
      titulo: "Descubren Ciudad Perdida Bajo el Desierto del Sahara",
      resumen:
        "Arqueólogos afirman haber encontrado una metrópolis oculta bajo las arenas del Sahara, repleta de templos y tecnología avanzada que podría cambiar la historia de la humanidad.",
      imagen:
        "https://resizer.glanacion.com/resizer/v2/el-sahara-se-extiende-a-lo-largo-de-4800-AEPKCH33KZHFZGWCOFTRTHXTEM.jpg?auth=d3cfa3a833cc0fa628c1f499f877071cdc88920d493f02f15a2963fab9c3731f&width=1280&height=854&quality=70&smart=true",
      contenidoHTML: "?",
      publicada: "Y",
      fechaPublicacion: "2024-04-30",
    },
    {
      id: 2,
      titulo: "Científicos crean una fruta que sabe a pizza",
      resumen:
        "Un equipo de biólogos ha desarrollado una fruta híbrida que tiene el sabor exacto de una pizza margarita, revolucionando la industria alimentaria y sorprendiendo a expertos en gastronomía.",
      imagen: " https://imag.bonviveur.com/pizza-margarita.jpg",
      contenidoHTML: "?",
      publicada: "N",
      fechaPublicacion: "2025-01-29",
    },
    {
      id: 8,
      titulo:
        "Un equipo de arqueólogos descubre una antigua nave vikinga en el fondo del mar",
      resumen:
        "Arqueólogos marinos han descubierto una antigua nave vikinga en las profundidades del océano Atlántico, con artefactos que datan de más de mil años.",
      imagen:
        "https://www.cronista.com/files/image/893/893811/669920ea64ca7.jpg",
      contenidoHTML: null, // No se especificó contenido
      publicada: "Y",
      fechaPublicacion: "2025-01-11",
    },
  ];

  const [formData, setFormData] = useState({
    id: "",
    titulo: "",
    resumen: "",
    imagen: "",
    contenidoHTML: "",
    publicada: "",
    fechaPublicacion: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Noticia creada:", formData);
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Crear Nueva Noticia</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="id"
            placeholder="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="titulo"
            placeholder="titulo"
            value={formData.titulo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="resumen"
            placeholder="resumen"
            value={formData.resumen}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="image"
            name="imagen"
            placeholder="imagen"
            value={formData.imagen}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
          type='text'
            name="contenidoHTML"
            placeholder="contenidoHTML"
            value={formData.contenidoHTML}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="boolean"
            name="publicada"
            placeholder="publicada"
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
  );
};

export default ModalNoticia;
