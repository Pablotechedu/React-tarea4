import React, { useState, useEffect } from "react";
import "./Products.css";

function Products({ addToCart }) {
  // Estado para almacenar los productos de la API
  const [products, setProducts] = useState([]);
  // Estado para manejar si está cargando
  const [loading, setLoading] = useState(true);
  // Estado para manejar las cantidades seleccionadas
  const [quantities, setQuantities] = useState({});

  // useEffect se ejecuta cuando el componente se monta
  useEffect(() => {
    fetchProducts();
  }, []); // El array vacío [] significa que solo se ejecuta una vez

  // Función para obtener productos de la API
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://api.sampleapis.com/coffee/hot");
      const data = await response.json();

      // Agregamos precio aleatorio a cada producto
      const productsWithPrice = data.map((product) => ({
        ...product,
        price: Math.floor(Math.random() * 201) + 100, // Entre 100 y 300
      }));

      setProducts(productsWithPrice);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  // Función para manejar cambios en la cantidad
  const handleQuantityChange = (productId, quantity) => {
    setQuantities({
      ...quantities,
      [productId]: quantity,
    });
  };

  // Función para agregar al carrito
  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    addToCart(product, quantity);
    // Resetear cantidad después de agregar
    setQuantities({
      ...quantities,
      [product.id]: 1,
    });
  };

  // Mostrar loading mientras carga
  if (loading) {
    return <div className="loading">Cargando productos...</div>;
  }

  return (
    <div className="products-container">
      <h1>Nuestros Cafés</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>

              <div className="product-actions">
                <label>
                  Cantidad:
                  <input
                    type="number"
                    min="1"
                    value={quantities[product.id] || 1}
                    onChange={(e) =>
                      handleQuantityChange(product.id, parseInt(e.target.value))
                    }
                    className="quantity-input"
                  />
                </label>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="add-to-cart-btn"
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
