import React from "react";
const HeaderEmpresa = ({empresa}) => {


  return (
    <div className="flex justify-around border-b-8 p-7 border-b-[293241] bg-[#3d5a80]">
      <div className="text-[#98c1d9] py-7 w-[20%] flex justify-center items-center">
        <h2 className="text-6xl font-bold text-white">{empresa.denominacion}</h2>
      </div>
      <div className="font-bold text-w flex flex-col items-end">
        <p className="text-2xl">TELEFONO:</p>
        <p className="text-5xl text-[#e0fbfc]">{empresa.telefono}</p>
        <p>Horario: {empresa.horarioAtencion}</p>
      </div>
    </div>
  );
};

export default HeaderEmpresa;
