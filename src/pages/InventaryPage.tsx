import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./InventaryPage.css";
import { Product } from "../domains/Product";
import axios from "axios";
import { formatPrice } from "../utils/string.utils";

const InventaryPage = () =>{
  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <div>
      <Navbar />
      <div className="selected-products">
      <h3>Productos Disponibles</h3>
      <ul>
          {products.filter(product => product.existenciasLocal1 > 0).slice(0, 6).map(product => (
            <li key={product.codigo}>{product.nombre} - {product.existenciasLocal1} units - {formatPrice(product.precio)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InventaryPage;