import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Product } from "../domains/Product";
import "./InventaryPage.css";

const SellsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://project-lecho-neira.onrender.com/producto?localCode=1", {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.yQBP7hAR4Bw0PZbMsPrSyDxPdQQwUcpU-JTFBVgWwbU"
          }
        });
        setProducts(response.data);
      } catch (error) {
        console.error("There was an error fetching the products!", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCardClick = (product: Product) => {
    setProducts(prevProducts => prevProducts.map(p => 
      p.codigo === product.codigo ? { ...p, existenciasLocal1: p.existenciasLocal1 - 1 } : p
    ));

    setSelectedProducts(prevSelectedProducts => {
      const existingProduct = prevSelectedProducts.find(p => p.codigo === product.codigo);
      if (existingProduct) {
        return prevSelectedProducts.map(p => 
          p.codigo === product.codigo ? { ...p, existenciasLocal1: p.existenciasLocal1 + 1 } : p
        );
      } else {
        return [...prevSelectedProducts, { ...product, existenciasLocal1: 1 }];
      }
    });
  };

  const handleSubmit = async () => {
    const payload = selectedProducts.map(product => ({
      codigo: product.codigo,
      cantidad: product.existenciasLocal1
    }));

    try {
      await axios.post("https://project-lecho-neira.onrender.com/venta?localCode=1&matodoPago=1", payload, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.yQBP7hAR4Bw0PZbMsPrSyDxPdQQwUcpU-JTFBVgWwbU"
        }
      });
      alert("Venta realizada con éxito!");
    } catch (error) {
      console.error("Error al realizar la venta", error);
      alert("Hubo un error al realizar la venta.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="product-list">
        <h3>Productos Disponibles</h3>
        <div className="product-grid">
          {products.filter(product => product.existenciasLocal1 > 0).slice(0, 6).map(product => (
            <div 
              key={product.codigo} 
              className="product-card" 
              onClick={() => handleCardClick(product)}
            >
              <p>{product.nombre}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="selected-products">
        <h3>Selected Products</h3>
        <ul>
          {selectedProducts.map(product => (
            <li key={product.codigo}>{product.nombre} - {product.existenciasLocal1} units</li>
          ))}
        </ul>
      </div>
      {selectedProducts.length > 0 && (<button className="submit-button" onClick={handleSubmit}>Realizar Venta</button>)}
    </div>
  );
}

export default SellsPage;