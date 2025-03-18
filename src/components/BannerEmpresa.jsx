import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BannerEmpresa = ({ noticia }) => {
  const images = [
    { src: "/fotosEmpresas/empresa1.jpg", titulo:` ${noticia.titulo}`, resumen:`${noticia.resumen}` },
    { src: "/fotosEmpresas/empresa2.jpeg", titulo: "Título 2", resumen: "Resumen de la noticia 2" },
    { src: "/fotosEmpresas/empresa3.png", titulo: "Título 3", resumen: "Resumen de la noticia 3" },
    { src: "/fotosEmpresas/empresa4.jpg", titulo: "Título 4", resumen: "Resumen de la noticia 4" },
    { src: "/fotosEmpresas/empresa5.jpg", titulo: "Título 5", resumen: "Resumen de la noticia 5" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      {/* Carrusel */}
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div key={index} className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
            <img src={image.src} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
            {/* Texto Superpuesto */}
            <div className="absolute inset-0 flex flex-row justify-around items-end bg-black/50 text-white p-4">
              <div>
                <h2 className="text-xl font-bold bg-white text-black p-5 w-[50%]">{image.titulo}</h2>
                <p className="text-sm w-[50%]">{image.resumen}</p>
              </div>
              <button className="hover:text-amber-200 cursor-pointer p-2 border-[0.1px] border-x-0 m-2 flex  text-white text-2xl font-bold">
                <Link to={`/${noticia.id}/detalle`}>Ver Noticia →</Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-5 left-1/2 flex space-x-3 -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      {/* Controles */}
      <button onClick={prevSlide} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
        </span>
      </button>

      <button onClick={nextSlide} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default BannerEmpresa;
