import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const NavBuscador = () => {
  const [query, setQuery] = useState("");
  const { empresaId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    if (location.pathname !== "/buscador") {
      navigate(`/empresa/${empresaId}/buscador?nombreNoticia=${encodeURIComponent(query)}`);
    } else {
      console.log("estamos en buscador")
    }
  };

  return (
    <div className="flex justify-around w-[100%] ">
      <div className="flex justify-between w-[20%]">
        <button className="underline border-b-2 p-2 bg-gray-300 font-bold">
          <Link to={`/${empresaId}/empresaHome`}>INICIO</Link>
        </button>
        <button className="hover:bg-gray-200 cursor-pointer">
          <Link to={`/`}>LISTA EMPRESAS</Link>
        </button>
      </div>
      <div className="w-[20%] mt-2">
        <form className="w-[100%] mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Buscador
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
            <input
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              id="default-search"
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buscar Noticia"
              required
            />
            <button
              type="submit"
              onClick={handleSubmitSearch}
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NavBuscador;
