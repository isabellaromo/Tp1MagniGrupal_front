import React from "react";
import { useParams } from "react-router-dom";
import HeaderEmpresa from "../components/headerEmpresa";
import Buscador from "./Buscador";
import BannerEmpresa from "../components/BannerEmpresa";
const EmpresaHome = () => {
  const { empresaId } = useParams();

  const empresa_info = {
    id:1,
    denominacion: "El Sol",
    telefono: "+54 11 1234-5678",
    horarioAtencion: "Lunes a Viernes de 8:00 a 18:00 hs",
    quienesSomos: "Somos un medio de comunicación digital comprometido con la verdad y la objetividad, brindando noticias en tiempo real sobre política, economía, tecnología y más.",
    latitud: -34.603722,
    longitud: -58.381592,
    domicilio: "Av. Siempre Viva 742, Buenos Aires, Argentina",
    email: "contacto@noticiashoy.com"
  };

  const noticia = {
    id:1,
    titulo: "Descubren Ciudad Perdida Bajo el Desierto del Sahara",
    resumen:
      "Arqueólogos afirman haber encontrado una metrópolis oculta bajo las arenas del Sahara, repleta de templos y tecnología avanzada que podría cambiar la historia de la humanidad.",
    imagen:
      "https://resizer.glanacion.com/resizer/v2/el-sahara-se-extiende-a-lo-largo-de-4800-AEPKCH33KZHFZGWCOFTRTHXTEM.jpg?auth=d3cfa3a833cc0fa628c1f499f877071cdc88920d493f02f15a2963fab9c3731f&width=1280&height=854&quality=70&smart=true",
    contenidoHTML: "?",
    publicada: "Y",
    fechaPublicacion: "2024-04-30",
  };

  return (
    <div>
      <p>Mostrando información de la empresa con ID: {empresaId}</p>
      <HeaderEmpresa empresa={empresa_info}/>
      <Buscador />
      <BannerEmpresa noticia={noticia} />
      <div className="border-b-10 border-[#98c1d9] flex flex-col justify-center items-center h-[50%] w-full py-10 bg-[#e0fbfc]">
        <h2 className="font-bold text-6xl text-[#ee6c4d]">QUIENES SOMOS</h2>
        <p className="w-[50%] text-xl py-5">{empresa_info.quienesSomos}</p>
      </div>
      <div className="border-b-10 border-[#98c1d9] flex flex-col justify-center items-center h-[50%] w-full py-10 bg-[#e0fbfc]">
      <h2 className="font-bold text-6xl text-[#ee6c4d] mb-10">DONDE ESTAMOS</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11270.125646913215!2d-68.83492456656404!3d-32.88154997304907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1615335513448!5m2!1ses-419!2sar" width="1600" height="400" className="border:0;" allowFullScreen="" loading="lazy"></iframe>
    </div>	
      </div>

  );
};

export default EmpresaHome;
