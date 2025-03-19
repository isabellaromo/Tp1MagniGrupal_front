import React from "react";
import { useLocation } from "react-router";

const NoticiasEmpresa = () => {
  const location = useLocation();
  const empresa = location.state;

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
        titulo: "Un equipo de arqueólogos descubre una antigua nave vikinga en el fondo del mar",
        resumen: "Arqueólogos marinos han descubierto una antigua nave vikinga en las profundidades del océano Atlántico, con artefactos que datan de más de mil años.",
        imagen: "https://www.cronista.com/files/image/893/893811/669920ea64ca7.jpg",
        contenidoHTML: null, // No se especificó contenido
        publicada: "Y",
        fechaPublicacion: "2025-01-11",
        idEmpresa: null, // No se especificó idEmpresa
      },
      {
        id: 9,
        titulo: "Un dinosaurio vivo es encontrado en una isla remota del Pacífico",
        resumen: "Un equipo de exploradores ha reportado el hallazgo de una especie de dinosaurio viviente en una isla remota del Pacífico, lo que desafía todo lo que se sabía sobre la extinción de estos reptiles.",
        imagen: "https://static.nationalgeographicla.com/files/styles/image_3200/public/sidersaura-2.webp?w=1600&h=900&p=left",
        contenidoHTML: null,
        publicada: "N",
        fechaPublicacion: "2023-12-13",
        idEmpresa: null,
      }
  ];

  return (
    <div className='p-4'>
        <div className="flex justify-between items-center">
            <h2 className='text-2xl font-bold'>Noticias empresa {empresa}</h2>
          <button
            // onClick={handleOpenModal}
            className="bg-green-800 text-white text-2xl px-5 py-1 rounded-2xl shadow-md cursor-pointer shadow-gray-400 m-5"
          >
            Crear Nueva +
          </button>
        </div>
      <div className="overflow-auto max-w-full">
      <table className="min-w-full table-fixed border border-gray-300 bg-white shadow-md rounded-lg">
  <thead>
    <tr className="bg-gray-200 text-gray-700">
      <th className="p-2 border w-1/9">Id</th>
      <th className="p-2 border w-1/9">Titulo</th>
      <th className="p-2 border w-1/9">Resumen</th>
      <th className="p-2 border w-1/9">Imagen</th>
      <th className="p-2 border w-1/9">Contenido HTML</th>
      <th className="p-2 border w-1/9">Publicada</th>
      <th className="p-2 border w-1/9">Fecha Publicacion</th>
      <th className="p-2 border w-1/9">Editar</th>
      <th className="p-2 border w-1/9">Remover</th>
    </tr>
  </thead>
  <tbody>
    {noticias.map((el, index) => (
      <tr className="text-center border" key={index}>
        <td className="p-2 border w-1/9">{el.id}</td>
        <td className="p-2 border w-1/9 max-h-[100px] overflow-auto">{el.titulo}</td>
        <td className="p-2 border w-1/9 max-h-[100px] overflow-auto">{el.resumen}</td>
        <td className="p-2 border w-1/9 max-h-[100px] overflow-auto">
          <img src={el.imagen} alt="Noticia" className="w-full h-auto max-h-[80px] object-cover" />
        </td>
        <td className="p-2 border w-1/9 max-h-[100px] overflow-auto">{el.contenidoHTML}</td>
        <td className="p-2 border w-1/9">{el.publicada}</td>
        <td className="p-2 border w-1/9">{el.fechaPublicacion}</td>
        <td className="p-2 border w-1/9">
          <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
            Editar
          </button>
        </td>
        <td className="p-2 border w-1/9">
          <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
            Remover
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
};

export default NoticiasEmpresa;
