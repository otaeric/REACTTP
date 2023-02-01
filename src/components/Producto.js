import React from "react";

const Producto = ({ data, addToCart }) => {
  const { id, nombre, precio, src, capacidad } = data;

  return (
    <div className="producto">
      <h4>{nombre}</h4>
      <img  src={src} className="prod--imagen"/>
      <h5>Capacidad {capacidad}</h5>
      <h5>Doblones {precio}</h5>
      <button onClick={() => addToCart(id)} className="btn">
        Agregar
      </button>
    </div>
  );
};

export default Producto;
