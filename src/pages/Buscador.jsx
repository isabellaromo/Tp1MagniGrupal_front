import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderEmpresa from "../components/headerEmpresa";
import NavBuscador from "../components/NavBuscador";

const Buscador = () => {
  const location = useLocation();
  const { empresaId } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const nombreNoticia = queryParams.get("nombreNoticia");

  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      if (!nombreNoticia) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://localhost:8080/noticia/getSearch/${empresaId}?nombreNoticia=${encodeURIComponent(
            nombreNoticia
          )}`
        );
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        console.log(data);
        setResultados(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, [nombreNoticia]);

  return (
    <div>
      <HeaderEmpresa />
      <NavBuscador />
      <h1 className="m-4">Resultados de búsqueda para "{nombreNoticia}"</h1>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && (
        <ul className="gap-3 flex flex-col m-7">
          {resultados.length > 0 ? (
            resultados.map((noticia) => (
              <li key={noticia.id} className="cursor-pointer">
                <div className="border-b-2 hover:bg-gray-300">
                  <div className="flex p-3 gap-1 justify-between">
                    <div className="flex gap-3">
                      <img className="h-[100px]" src={noticia.imagenNoticia} />
                      <h2 className="font-bold w-[50%] text-4xl">
                        {noticia.tituloNoticia}
                      </h2>
                    </div>
                    <h3>{noticia.fechaPublicacion}</h3>
                  </div>
                  <p>{noticia.resumenNoticia}</p>
                </div>
              </li>
            ))
          ) : (
            <p>No se encontraron noticias.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default Buscador;
