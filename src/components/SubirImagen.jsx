import React, { useState } from 'react';

const SubirImagen = ({ name, value, onChange }) => {
  const [image, setImage] = useState(value || '');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const MAX_SIZE = 1 * 1024 * 1024; // 1 MB
      if (file.size > MAX_SIZE) {
        setErrorMessage('El archivo es demasiado grande. El tamaño máximo permitido es 1 MB.');
        setImage('');
        // Enviar el evento con value vacío
        onChange({ target: { name, value: '' } });
      } else {
        setErrorMessage('');
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          const base64Image = reader.result;
          setImage(base64Image);
          // Enviar el evento con el mismo formato que los inputs normales
          onChange({ target: { name, value: base64Image } });
        };
      }
    }
  };

  return (
    <div>
      <label>
        Subir foto:
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </label>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {image && (
        <div>
          <h3>Vista previa:</h3>
          <img src={image} alt="Vista previa" style={{ width: '200px' }} />
        </div>
      )}
    </div>
  );
};

export default SubirImagen;
