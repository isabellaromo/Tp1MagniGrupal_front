import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EmpresasContext } from '../contexts/EmpresasProvider'

const Home = () => {
  const { error, isLoading, empresas } = useContext(EmpresasContext)
  if (error) return <p>{error}</p>
  if (isLoading) return <p>Cargando...</p>

  return (
    <section className="w-full flex justify-center">
      <table className="w-[30%] mt-10 text-center">
        <thead>
          <tr>
            <th width="50%">EMPRESA</th>
            <th>VER PÁGINA</th>
          </tr>
        </thead>
        <tbody>
          {empresas.map((empresa, index) => (
            <tr key={index}>
              <td>{empresa.denominacion}</td>
              <td>
                <Link className="underline" to={`/empresa/${empresa.id}`}>
                  URL PÁGINA HOME
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Home
