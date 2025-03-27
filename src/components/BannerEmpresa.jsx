import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BannerEmpresa = ({ noticias = [], empresaId }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // // Verificación: Si no hay noticias, no renderizar el componente
  // if (!noticias || noticias.length === 0) {
  //   return (
  //     <div className="text-center text-white">No hay noticias disponibles</div>
  //   )
  // }

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % noticias.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + noticias.length) % noticias.length
    )
  }

  return (
    <div className="relative w-full">
      {/* Carrusel */}
      <div className="relative h-[70vh] lg:h-[60vh] overflow-hidden rounded-lg">
        {noticias.map((noticia, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Imagen de fondo */}
            <img
              src={noticia.imagenNoticia}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}

        {/* Texto Superpuesto - Siempre Visible */}
        <div className="z-10 absolute bottom-3 flex flex-col gap-4 lg:gap-0 lg:flex-row w-full justify-between lg:items-center text-white p-4">
          <div className="md:w-[60%]">
            <h2 className="text-xl font-bold bg-white text-black p-5">
              {noticias[currentIndex]?.tituloNoticia || 'Sin título'}
            </h2>
            <p className="hidden lg:block">
              {noticias[currentIndex]?.resumenNoticia || 'Sin resumen'}
            </p>
          </div>
          <button className="md:w-[40%] cursor-pointer flex justify-center text-white text-2xl font-bold h-max">
            <Link
              to={`/empresa/${empresaId}/noticia/${
                noticias[currentIndex]?.id || '0'
              }`}
              className="w-max hover:text-amber-200 border-y-[0.1px] p-2"
            >
              Ver Noticia →
            </Link>
          </button>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-2 lg:bottom-5 z-10 left-1/2 flex space-x-3 -translate-x-1/2">
        {noticias.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute top-0 start-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>

      {/* Efecto de imagen oscura */}
      <div className="absolute inset-0 w-full h-full bg-black/50"></div>
    </div>
  )
}

export default BannerEmpresa
