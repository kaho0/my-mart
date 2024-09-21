import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("../../public/product.json"); // Update the path
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const displayedProducts = showAll ? products : products.slice(0, 8); // Show 8 products by default

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedProducts.map((product) => (
          <div key={product.id} className="border p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>{product.description}</p>
            <p className="font-bold">${product.price}</p>
          </div>
        ))}
      </div>
      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          View All
        </button>
      )}
    </div>
  );
};

export default ProductList;
