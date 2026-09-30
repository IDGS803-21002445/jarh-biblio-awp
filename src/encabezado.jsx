import React from 'react';

export function Encabezado({ titulo }) {
  return (
    <header>
      <h1>{titulo}</h1>
      <p>Biblioteca UTL - Galería Fotográfica</p>
      <hr />
    </header>
  );
}