import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

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

  if (!product) return <p className="text-center">Loading...</p>;

  return (
    <div className="container mx-auto p-8 my-8 flex justify-center">
      <div className="card w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <figure className="w-full h-72 sm:h-96 bg-gray-200">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body p-6 text-center">
          <h2 className="card-title text-3xl font-semibold text-gray-800 font-serif">
            {product.name}
          </h2>
          <p className="text-gray-600 mb-4 font-sans">{product.description}</p>
          <p className="text-xl font-bold text-gray-900">
            Price: {product.price}
          </p>
          <button className="btn bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-green-400 rounded-full transition duration-300 ease-in-out transform hover:scale-110 inline-flex items-center">
            Add to Cart
            <FaShoppingCart className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
