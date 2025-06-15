// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  // Estado para manejar los productos del carrito
  // Usamos useState porque necesitamos que React re-renderice cuando cambie
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product, quantity) => {
    // Buscamos si el producto ya existe en el carrito
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // Si existe, actualizamos la cantidad
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // Si no existe, lo agregamos como nuevo item
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  // Función para calcular el total de items en el carrito
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Router>
      <div className="App">
        {/* Nav se muestra en todas las páginas */}
        <Nav cartItemsCount={getTotalItems()} />

        {/* Routes define qué componente mostrar según la URL */}
        <Routes>
          <Route path="/" element={<Products addToCart={addToCart} />} />
          <Route path="/finish-shop" element={<Cart cartItems={cartItems} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
