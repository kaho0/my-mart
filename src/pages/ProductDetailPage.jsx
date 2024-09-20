// src/components/ProductDetailPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { name } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        const productDetail = data.find((item) => item.name === name);
        setProduct(productDetail);
      });
  }, [name]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="card w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <figure>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-3xl font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-bold text-gray-900">Price: $XX.XX</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
