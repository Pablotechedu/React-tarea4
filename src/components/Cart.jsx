// src/components/Cart.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart({ cartItems }) {
  // Función para calcular el total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  // Si el carrito está vacío
  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1>Tu Carrito</h1>
        <div className="empty-cart">
          <p>Tu carrito está vacío</p>
          <Link to="/" className="continue-shopping-btn">
            Continuar Comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Resumen de tu Compra</h1>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p>Precio unitario: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p className="subtotal">
                Subtotal: ${item.price * item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="total">
          <h2>Total: ${calculateTotal()}</h2>
        </div>

        <div className="cart-actions">
          <Link to="/" className="continue-shopping-btn">
            Continuar Comprando
          </Link>
          <button className="pay-now-btn">Pagar Ahora</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
