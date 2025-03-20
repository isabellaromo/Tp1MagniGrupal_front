import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Buscador from './Buscador'
import BannerEmpresa from '../components/BannerEmpresa'
import HeaderEmpresa from '../components/headerEmpresa'

const initialEmpresas = {
  id: null,
  denominacion: '',
  telefono: '',
  horarioAtencion: '',
  quienesSomos: '',
  latitud: null,
  longitud: null,
  domicilio: '',
  email: '',
  listaNoticia: [],
}

const EmpresaHome = () => {
  const { empresaId } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [empresaYNoticias, setEmpresaYNoticias] = useState(initialEmpresas)

  useEffect(() => {
    const getEmpresaYNoticias = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          `http://localhost:8080/empresa/get/${empresaId}`
        )
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor')
        }
        const responseJSON = await response.json()
        setEmpresaYNoticias(responseJSON)
      } catch (error) {
        setError(`Error: ${error.message}`)
      } finally {
        setIsLoading(false)
      }
    }

    getEmpresaYNoticias()
  }, [])

  if (isLoading) return <p>Cargando...</p>
  return (
    <div>
      <p>Mostrando información de la empresa con ID: {empresaId}</p>
      <HeaderEmpresa empresa={empresaYNoticias} />
      <Buscador />
      <BannerEmpresa
        noticias={empresaYNoticias.listaNoticia}
        empresaId={empresaId}
      />
      <div className="border-b-10 border-[#98c1d9] flex flex-col justify-center items-center h-[50%] w-full py-10 bg-[#e0fbfc]">
        <h2 className="font-bold text-6xl text-[#ee6c4d]">QUIENES SOMOS</h2>
        <p className="w-[50%] text-xl py-5">{empresaYNoticias.quienesSomos}</p>
      </div>
      <div className="border-b-10 border-[#98c1d9] flex flex-col justify-center items-center h-[50%] w-full py-10 bg-[#e0fbfc]">
        <h2 className="font-bold text-6xl text-[#ee6c4d] mb-10">
          DONDE ESTAMOS
        </h2>
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1000!2d${empresaYNoticias.longitud}!3d${empresaYNoticias.latitud}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1615335513448`}
          height="400"
          className="border:0; w-[95%]"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default EmpresaHome
