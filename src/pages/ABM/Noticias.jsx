import React, { useState } from 'react'
import { Link } from 'react-router'

const Noticias = () => {
  const empresas = [
    { Denominación: 'El Sol', id: 12312 },
    { Denominación: 'Diario Uno', id: 12314 },
    { Denominación: 'La Nacion', id: 423423 },
    { Denominación: 'MDZ', id: 3334 },
    { Denominación: 'Clarin', id: 23235 },
  ]

  return (
    <div className="flex flex-col gap-10 items-center justify-center mt-10">
      <h2 className="text-3xl font-bold">ELIGE UNA EMPRESA</h2>
      {empresas.map((el, index) => (
        <Link
          to={`${el.id}/`}
          state={el.Denominación}
          className="text-black bg-green-900 w-[30%] self-center p-5 rounded-3xl cursor-pointer text-center text-2xl "
        >
          <button key={index}>{el.Denominación}</button>
        </Link>
      ))}
    </div>
  )
}

export default Noticias
