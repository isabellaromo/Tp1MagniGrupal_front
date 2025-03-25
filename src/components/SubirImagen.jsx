import React, { useState } from 'react';

const SubirImagen = () => {
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Función para manejar la subida de archivos
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Verificar el tamaño del archivo (1 MB = 1024 * 1024 bytes)
      const MAX_SIZE = 1 * 1024 * 1024; // 1 MB en bytes
      if (file.size > MAX_SIZE) {
        setErrorMessage('El archivo es demasiado grande. El tamaño máximo permitido es 1 MB.');
        setImage(null); // Limpiar la imagen cargada
      } else {
        setErrorMessage('');
        
        // Convertir la imagen a base64
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImage(reader.result); // Guardamos la cadena base64
        };
      }
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Asegurarse de que la imagen esté disponible
    if (image) {
      // Aquí enviarías el string base64 al backend
      // Suponiendo que tu backend tenga una API para guardar la imagen
      // await fetch('/api/saveImage', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ image }),
      // });
      console.log(image); // Muestra el string base64 completo
      alert('Imagen subida correctamente');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Subir foto:
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </label>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Mostrar mensaje de error si el archivo es demasiado grande */}
      <button type="submit" className='bg-gray-300 text-black p-2 rounded-xl cursor-pointer hover:bg-gray-600 hover:text-white'>Enviar</button>

      {image && (
        <div>
          <h3>Vista previa:</h3>
          <img src={image} alt="Vista previa" style={{ width: '200px' }} />
        </div>
      )}
    </form>
  );
};

export default SubirImagen;
