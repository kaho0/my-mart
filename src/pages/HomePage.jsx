import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero"; // Adjust the path if needed
import { FaArrowRight } from "react-icons/fa";
import "../App.css"; // Ensure your CSS file is imported here

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
      {/* First Hero Section for MyMart */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className="w-full lg:w-1/2">
            <img
              src="../../public/images/hero1.png" // Replace with your image link
              alt="Shopping Banner"
              className="max-w-full rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl font-rancho font-bold text-gray-800">
              Welcome to MyMart!
            </h1>
            <p className="py-6 text-lg text-gray-600">
              Discover amazing deals on top-quality products, from electronics
              to fashion. MyMart brings you the best offers with fast delivery
              and a seamless shopping experience. Don't miss out on exclusive
              discounts and new arrivals!
            </p>
            <button className="btn font-mono bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white hover:from-red-500 hover:to-pink-500 transition duration-300 ease-in-out transform hover:scale-110">
              Start Shopping
            </button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <h1 className="text-5xl font-bold p-5 m-8 text-center text-orange-600 font-rancho">
        Shop ‘Til You Drop
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

      {/* Centered View All Button */}
      {!showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-4 py-2 btn bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold hover:from-red-500 hover:to-pink-500 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Explore More
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      )}

      {/* Second Hero Section for Flexible Payments */}
      <div className="hero bg-base-200 my-12">
        <div className="hero-content flex-col lg:flex-row w-full max-w-4xl mx-auto p-6">
          <div className="w-full lg:w-1/2 flex justify-start">
            <img
              src="../../public/images/dis.png" // Replace with the correct image link
              alt="Seamless Shopping Banner"
              className="w-full max-w-md rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center pl-12">
            {" "}
            {/* Increased padding */}
            <h1 className="text-3xl font-pop font-bold text-gray-800 mb-4 text-left">
              Seamless Shopping with Flexible Payments
            </h1>
            <p className="py-2 text-sm text-gray-600 text-left">
              Experience effortless shopping at MyMart with our secure and
              flexible payment options. Whether you prefer paying with cash,
              card, or online methods, we've got you covered. Enjoy a smooth
              checkout process, designed for your convenience!
            </p>
            <div className="flex justify-start"></div>
          </div>
        </div>
      </div>

      {/* Review Section with Ratings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Review Card Example with Heart Rating */}
          <div className="card bg-white shadow-lg p-6 rounded-lg">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="../../public/images/2.jpg"
                alt="Reviewer Avatar"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold">John Doe</h4>
                <div className="rating gap-1">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-heart bg-red-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-heart bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-heart bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-heart bg-lime-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-heart bg-green-400"
                  />
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              "Great shopping experience! The products were exactly as
              described, and the delivery was fast."
            </p>
          </div>

          <div className="card bg-white shadow-lg p-6 rounded-lg">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="../../public/images/1.jpg"
                alt="Reviewer Avatar"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold">Jane Smith</h4>
                <div className="rating gap-1">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-heart bg-red-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-heart bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-heart bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-heart bg-lime-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-heart bg-green-400"
                  />
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              "Excellent customer service and high-quality products."
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats stats-vertical shadow bg-white p-6 rounded-lg">
          <div className="stat">
            <div className="stat-title text-gray-800">Downloads</div>
            <div className="stat-value text-2xl font-bold text-red-600">
              31K
            </div>
            <div className="stat-desc text-gray-500">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title text-gray-800">New Users</div>
            <div className="stat-value text-2xl font-bold text-green-600">
              4,200
            </div>
            <div className="stat-desc text-gray-500">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title text-gray-800">New Registers</div>
            <div className="stat-value text-2xl font-bold text-blue-600">
              1,200
            </div>
            <div className="stat-desc text-gray-500">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
