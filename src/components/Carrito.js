import { clear } from "@testing-library/user-event/dist/clear";
import React, { useContext, useEffect } from "react";
import { useReducer} from "react";
import { TYPES } from "./actions";
import { carritoInitialState, carritoReducer } from "./carritoReducer";
import ItemCarrito from "./ItemCarrito";
import Producto from "./Producto";
import axios from "axios";  

const Carrito = () => {
  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);

  const actualizarEstado = async() => {
    const productosURL="http://localhost:8080/productos"
    const carritoURL="http://localhost:8080/carrito"

    const listaProductos =await axios.get(productosURL);
    const carrito =await axios.get(carritoURL);

    const nuevosProductos= listaProductos.data;
    const nuevoCarrito= carrito.data;


    dispatch({ type: TYPES.READ_STATE, payload: [nuevosProductos, nuevoCarrito] });
  };

  useEffect(() => {
    actualizarEstado();
  }, [])

  
  

  const { productos, carrito } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id, eliminarTodos) => {
    if (eliminarTodos) {
      dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ITEM, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div >
      <h1>Barcos de Segunda Mano</h1>
      <h2>Modelos</h2>
      <div className="row">
        {productos.map((producto) => (
          <Producto key={producto.id} data={producto} addToCart={addToCart} />
        ))}
      </div>
      <div className="carrito">
      <h2>Carrito</h2>
     
        {carrito.map((item, index) => (
          <ItemCarrito
            key={index}
            data={item}
            deleteFromCart={deleteFromCart}
          />
        ))}
      
      <button onClick={clearCart} className="btn">
        Limpiar Carrito
      </button>
      </div>
      
    </div>
  );
};

export default Carrito;
