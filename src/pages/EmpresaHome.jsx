import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBuscador from '../components/NavBuscador'
import BannerEmpresa from '../components/BannerEmpresa'
import HeaderEmpresa from '../components/headerEmpresa'
import Footer from '../components/Footer'

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
}

const EmpresaHome = () => {
  const { empresaId } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [empresa, setEmpresa] = useState(initialEmpresas)
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const fetchEmpresaYNoticias = async () => {
      try {
        setIsLoading(true)

        // Obtener empresa
        const empresaResponse = await fetch(
          `http://localhost:8080/empresa/simple/${empresaId}`
        )
        if (!empresaResponse.ok) {
          throw new Error('Error al obtener la empresa')
        }
        const empresaData = await empresaResponse.json()
        setEmpresa(empresaData)

        // Obtener noticias
        const noticiasResponse = await fetch(
          `http://localhost:8080/noticia/getRecent?idEmpresa=${empresaId}&quantity=5`
        )
        if (!noticiasResponse.ok) {
          throw new Error('Error al obtener las noticias')
        }
        const noticiasData = await noticiasResponse.json()
        setNoticias(noticiasData)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchEmpresaYNoticias()
  }, [empresaId])

  if (isLoading) return <p>Cargando...</p>
  // if (error) return <p className="text-red-500">Error: {error}</p>

  return (
    <div>
      <HeaderEmpresa id={empresaId} />
      <NavBuscador />
      {noticias.length !== 0 ? (
        <BannerEmpresa empresaId={empresaId} noticias={noticias} />
      ) : (
        <p className="text-red-500 text-center m-3">
          No hay noticias disponibles
        </p>
      )}
      <div className="border-b-10 border-[#98c1d9] flex flex-col justify-center items-center h-[50%] w-full py-10 bg-[#e0fbfc]">
        <h2 className="font-bold text-6xl text-[#ee6c4d]">QUIENES SOMOS</h2>
        <p className="w-[50%] text-xl py-5">{empresa.quienesSomos}</p>
      </div>
      <div className="border-b-10 border-[#98c1d9] flex flex-col justify-center items-center h-[50%] w-full py-10 bg-[#e0fbfc]">
        <h2 className="font-bold text-6xl text-[#ee6c4d] mb-10">
          DONDE ESTAMOS
        </h2>
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1000!2d${empresa.longitud}!3d${empresa.latitud}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1615335513448`}
          height="400"
          className="border:0; w-[95%]"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Footer nombreEmpresa={empresa.denominacion} />
    </div>
  )
}

export default EmpresaHome
