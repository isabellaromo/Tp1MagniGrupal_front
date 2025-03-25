import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { EmpresasContext } from '../contexts/EmpresasProvider'

const Home = () => {
  const { error, isLoading, empresas } = useContext(EmpresasContext)
  console.log(empresas)
  if (error) return <p>{error}</p>
  if (isLoading) return <p>Cargando...</p>

  return (
    <>
      <header>
        <div className="flex justify-around border-b-8 p-7 border-b-[293241] bg-[#3d5a80]">
          <div className="text-[#98c1d9] py-7 w-[20%] flex justify-center items-center">
            <h2 className="text-6xl font-bold text-white">EMPRESAS</h2>
          </div>
          <div className="font-bold text-w flex flex-col items-end">
            <p className="text-2xl">REDES</p>
            <p className="text-5xl text-[#e0fbfc]">@tus_noticias</p>
            <p>tusnoticias@gmail.com</p>
          </div>
        </div>
        <div className="h-[62px] flex justify-center w-full items-center">
          <h1 className="text-5xl text-[#0a2640] font-semibold">
            ¡BIENVENIDO!
          </h1>
        </div>
      </header>
      <section className="relative w-full flex flex-col items-center bg-[#0a2640]  text-white">
        <img
          src="https://themewagon.github.io/boldo/assets/img/hero/hero-bg.png"
          alt=""
          className="absolute top-0 right-0 object-cover w-96"
        />
        <h2 className="text-3xl z-10 text-center mt-2">
          Selecciona una empresa de Noticias
        </h2>
        <ul className="w-[90%] md:w-1/2 flex flex-wrap justify-center z-10">
          {empresas.map((empresa, index) => (
            <li
              key={index}
              className="flex justify-between w-full my-3 items-center h-36 cursor-pointer bg-gray-400 hover:bg-gray-500 rounded-2xl px-4 uppercase hover:scale-[101%] shadow-md shadow-gray-600/30 transition-all duration-300 z-10"
            >
              <h3
                className="text-3xl font-semibold z-10
            "
              >
                {empresa.denominacion}
                <span>{empresa.quienesSomos}</span>
              </h3>

              <Link
                className="bg-[#1c3d5b] rounded-md px-3 py-3 font-semibold hover:bg-[#254e75] z-10"
                to={`/empresa/${empresa.id}`}
              >
                Ver Empresa
              </Link>
            </li>
          ))}
        </ul>
        <img
          src="https://themewagon.github.io/boldo/assets/img/hero/hero-bg.png"
          alt=""
          className="absolute bottom-0 left-0 object-cover w-96 rotate-180"
        />
      </section>
    </>
  )
}

export default Home
