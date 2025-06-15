// src/components/Nav.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

// Recibimos cartItemsCount como prop desde App
function Nav({ cartItemsCount }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Link es como <a> pero para React Router */}
        <Link to="/" className="nav-brand">
          CoffeeShopWorld
        </Link>

        <div className="nav-menu">
          <Link to="/" className="nav-link">
            Productos
          </Link>

          <Link to="/finish-shop" className="nav-link cart-link">
            🛒 Finalizar compra
            {/* Mostramos el contador solo si hay items */}
            {cartItemsCount > 0 && (
              <span className="cart-badge">{cartItemsCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
