import { useLocation, useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HeaderEmpresa from '../components/headerEmpresa'
import NavBuscador from '../components/NavBuscador'

const Buscador = () => {
  const location = useLocation()
  const { empresaId } = useParams()
  const navigate = useNavigate()

  const queryParams = new URLSearchParams(location.search)
  const nombreNoticia = queryParams.get('nombreNoticia')
  const newSearch = queryParams.get('newSearch')
  const page = parseInt(queryParams.get('page')) || 0 // Usamos el parámetro de la URL

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [resultados, setResultados] = useState([])
  const [totalPaginas, setTotalPaginas] = useState(1)

  // Resetear la página a 0 solo cuando haya un nuevo término de búsqueda
  useEffect(() => {
    if (newSearch === 'true') {
      navigate(
        `/empresa/${empresaId}/buscador?nombreNoticia=${encodeURIComponent(
          nombreNoticia
        )}&newSearch=false&page=0`,
        { replace: true }
      )
    }
  }, [newSearch, nombreNoticia, empresaId, navigate])

  // Hacer la petición a la API cada vez que cambien nombreNoticia, page o empresaId
  useEffect(() => {
    const fetchNoticias = async () => {
      setLoading(true)
      setError(null)
      try {
        let url = `http://localhost:8080/noticia/${empresaId}?page=${page}&size=5&palabraClave=${nombreNoticia}`
        console.log('URL: ', url)

        let response = await fetch(url)
        if (!response.ok) {
          const errorText = await response.text()
          throw new Error(`Error ${response.status}: ${errorText}`)
        }

        const data = await response.json().catch(() => null)
        if (!data) {
          throw new Error('Respuesta de la API no es válida')
        }

        if (data.content.length === 0 && nombreNoticia) {
          response = await fetch(
            `http://localhost:8080/noticia/getRecent?idEmpresa=${empresaId}&quantity=20`
          )
          if (!response.ok) {
            const errorText = await response.text()
            throw new Error(`Error ${response.status}: ${errorText}`)
          }
          const recentData = await response.json()
          setResultados(recentData.content || [])
          setTotalPaginas(recentData.totalPages || 1)
        } else {
          setResultados(data.content || [])
          setTotalPaginas(data.totalPages || 1)
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchNoticias()
  }, [nombreNoticia, page, empresaId])

  // Sincronizar la URL con el estado de la búsqueda y la página
  useEffect(() => {
    if (nombreNoticia) {
      navigate(
        `/empresa/${empresaId}/buscador?nombreNoticia=${encodeURIComponent(
          nombreNoticia
        )}&newSearch=false&page=${page}`,
        { replace: true }
      )
    }
  }, [nombreNoticia, page, navigate, empresaId])

  const handleDecrementPage = () => {
    if (page > 0) {
      const newPage = page - 1
      queryParams.set('page', newPage)
      navigate(`${location.pathname}?${queryParams.toString()}`)
    }
  }

  const handleIncrementPage = () => {
    if (page < totalPaginas - 1) {
      const newPage = page + 1
      queryParams.set('page', newPage)
      navigate(`${location.pathname}?${queryParams.toString()}`)
    }
  }

  return (
    <div>
      <HeaderEmpresa />
      <NavBuscador />
      {loading && <p>Cargando...</p>}
      {!loading && !error && resultados.length > 0 ? (
        <div>
          {nombreNoticia !== '' && (
            <h1 className="m-4">
              Resultados de búsqueda para "{nombreNoticia}"
            </h1>
          )}
          <ul className="gap-3 flex flex-col m-7">
            {resultados.map(noticia => (
              <Link to={`/empresa/${empresaId}/noticia/${noticia.id}`}>
                <li key={noticia.id} className="cursor-pointer">
                  <div className="border-b-2 hover:bg-gray-300">
                    <div className="flex p-3 gap-1 justify-between">
                      <div className="flex gap-3">
                        <img
                          className="h-[100px]"
                          src={noticia.imagenNoticia}
                          alt="Noticia"
                        />
                        <h2 className="font-bold w-[50%] text-4xl">
                          {noticia.tituloNoticia}
                        </h2>
                      </div>
                      <h3>{noticia.fechaPublicacion}</h3>
                    </div>
                    <p>{noticia.resumenNoticia}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex justify-center gap-4 m-4">
            <button
              onClick={handleDecrementPage}
              disabled={page === 0}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Anterior
            </button>

            <span>
              Página {page + 1} de {totalPaginas}
            </span>

            <button
              onClick={handleIncrementPage}
              disabled={page + 1 >= totalPaginas}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        </div>
      ) : (
        <p className="m-4">
          No se encontraron noticias que contengan "{nombreNoticia}"
        </p>
      )}
    </div>
  )
}

export default Buscador
