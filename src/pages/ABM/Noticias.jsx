import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router'
import { EmpresasContext } from '../../contexts/EmpresasProvider'

//Esta es la lista de Empresas para la tabla de noticias
const Noticias = () => {
  const { empresas, isLoading, error } = useContext(EmpresasContext)

  if (isLoading) return <p>Cargando...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="flex flex-col gap-10 items-center justify-center mt-10">
      <h2 className="text-3xl font-bold">ELIGE UNA EMPRESA</h2>
      {empresas.map((empresa, index) => (
        <Link
          to={`${empresa.id}/`}
          state={empresa.denominacion}
          className="text-white bg-green-900 w-[30%] self-center p-5 rounded-3xl cursor-pointer text-center text-2xl "
        >
          <button key={index}>{empresa.denominacion}</button>
        </Link>
      ))}
    </div>
  )
}

export default Noticias
