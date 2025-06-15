// src/components/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "4rem", color: "#333" }}>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link
        to="/"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#8B4513",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
