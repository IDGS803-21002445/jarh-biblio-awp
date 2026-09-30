import React, { useState, useEffect } from 'react';

function Encabezado({ titulo }) {
  return <h1>{titulo}</h1>;
}

function Buscador({ valor, alBuscar }) {
  return (
    <input
      type="text"
      placeholder="Filtrar por título..."
      value={valor}
      onChange={(e) => alBuscar(e.target.value)}
    />
  );
}

function TarjetaImagen({ foto, alHacerClic }) {
  return (
    <div style={{ margin: '10px 0' }}>
      <img src={foto.thumbnailUrl} alt={foto.title} width="150" />
      <p>{foto.title}</p>
      <button className="btn btn-primary" onClick={() => alHacerClic(foto.title)}>
        Ver nombre
      </button>
    </div>
  );
}

export function App() {
  const [fotos, setFotos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [filtro, setFiltro] = useState('');

  const consultarFotosAPI = async () => {
    setCargando(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const respuesta = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=8');
    const datos = await respuesta.json();
    setFotos(datos);
    setCargando(false);
  };

  useEffect(() => {
    consultarFotosAPI();
  }, []);

  const filtrarFotos = (texto) => {
    return fotos.filter((f) => f.title.toLowerCase().includes(texto.toLowerCase()));
  };

  const mostrarDetalle = (nombre) => {
    alert('Seleccionaste: ' + nombre);
  };

  const limpiarBuscador = () => {
    setFiltro('');
  };

  const fotosFiltradas = filtrarFotos(filtro);

  return (
    <div style={{ padding: '20px' }}>
      <Encabezado titulo="BIBLIOTECA UTL" />

      <Buscador valor={filtro} alBuscar={setFiltro} />
      {' '}
      <button className="btn btn-secondary" onClick={limpiarBuscador}>
        Limpiar
      </button>

      <hr />

      {cargando ? (
        <p>Cargando imágenes (espera 3 segundos)...</p>
      ) : (
        <div>
          {fotosFiltradas.map((foto) => (
            <TarjetaImagen
              key={foto.id}
              foto={foto}
              alHacerClic={mostrarDetalle}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
