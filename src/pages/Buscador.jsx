import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderEmpresa from "../components/headerEmpresa";
import NavBuscador from "../components/NavBuscador";

const Buscador = () => {
  const location = useLocation();
  const { empresaId } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const nombreNoticia = queryParams.get("nombreNoticia");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resultados, setResultados] = useState([]);
  const [pagina, setPagina] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    const fetchNoticias = async () => {
      setLoading(true);
      setError(null);

      try {
        let url = `http://localhost:8080/noticia/${empresaId}?page=${pagina}&size=5&palabraClave=${nombreNoticia}`;
        let response = await fetch(url);

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error ${response.status}: ${errorText}`);
        }

        let data = await response.json();

        // Si no hay resultados y se envió una palabra clave, buscar noticias recientes
        if (data.content.length === 0 && nombreNoticia) {
          console.log("No se encontraron noticias, buscando recientes...");
          response = await fetch(
            `http://localhost:8080/noticia/getRecent?idEmpresa=${empresaId}&quantity=20`
          );

          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error ${response.status}: ${errorText}`);
          }

          data = await response.json();
        }

        setResultados(data.content || []);
        setTotalPaginas(data.totalPages || 1);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, [nombreNoticia, pagina]);

  return (
    <div>
      <HeaderEmpresa />
      <NavBuscador />

      {loading && <p>Cargando...</p>}

      {!loading && !error && resultados.length > 0 ? (
        <div>
          {nombreNoticia != '' && (<h1 className="m-4">Resultados de búsqueda para "{nombreNoticia}"</h1>)}
        
          <ul className="gap-3 flex flex-col m-7">
            {resultados.map((noticia) => (
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
            ))}
          </ul>
          <div className="flex justify-center gap-4 m-4">
            <button
              onClick={() => setPagina((prev) => Math.max(prev - 1, 0))}
              disabled={pagina === 0}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Anterior
            </button>

            <span>
              Página {pagina + 1} de {totalPaginas}
            </span>

            <button
              onClick={() =>
                setPagina((prev) => (prev + 1 < totalPaginas ? prev + 1 : prev))
              }
              disabled={pagina + 1 >= totalPaginas}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        </div>
      ) : (
        <p className="m-4">No se encontraron noticias que contengan "{nombreNoticia}"</p>
      ) }
    </div>
  );
};
export default Buscador;
