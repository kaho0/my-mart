// src/components/HomePage.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-red-800">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.name}
            className="card w-full bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <figure>
              <img
                src={product.image}
                alt={product.name}
                className="w-full" // Only set width, height is managed in CSS
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-bold text-gray-900">$XX.XX</p>
              <div className="card-actions justify-end">
                <Link to={`/product/${product.name}`}>
                  <button className="btn btn-primary bg-blue-600 text-white hover:bg-blue-700 transition duration-200 mt-2">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
