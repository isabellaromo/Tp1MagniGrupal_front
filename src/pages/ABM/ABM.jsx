import React from "react";
import { Link } from "react-router";

const ABM = () => {
  return (
    <div className="flex flex-col w-[100%] h-full justify-center items-center">
      <h2 className='text-4xl font-bold m-12'>ADMINISTRACION</h2>
      <div className="flex gap-10 ">
      <Link to={"empresas"}><button className=" cursor-pointer bg-amber-900 rounded-4xl text-white w-[400px] p-4 corner hover:bg-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black">ABM DE EMPRESAS</button></Link>
      <Link to={"noticias"}> <button className="cursor-pointer bg-amber-900 rounded-4xl text-white w-[400px] p-4 corner hover:bg-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black">ABM DE NOTICIAS</button></Link>
      </div>
    </div>
  );
};

export default ABM;
