import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaEye } from "react-icons/fa"; // Importing a new icon for "View All"

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const displayedProducts = showAll ? products : products.slice(0, 8);

  return (
    <div className="container mx-auto p-8 my-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-red-800">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayedProducts.map((product) => (
          <div
            key={product.name}
            className="card w-full bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <figure className="w-full h-64 bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-xl font-semibold text-gray-800 font-mono">
                {product.name}
              </h2>
              <p className="text-gray-600 font-sans">{product.description}</p>
              <p className="text-lg font-bold text-gray-900">
                Price: {product.price}
              </p>
              <div className="card-actions justify-center mt-4">
                <Link to={`/product/${product.name}`}>
                  <button className="btn bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold hover:from-red-500 hover:to-pink-500 rounded-full transition duration-300 ease-in-out transform hover:scale-110 inline-flex items-center">
                    View Details
                    <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-4 py-2 btn bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold hover:from-red-500 hover:to-pink-500 rounded-full transition duration-300 ease-in-out transform hover:scale-110 inline-flex items-center"
          >
            <FaEye className="mr-2" /> {/* Added icon here */}
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
