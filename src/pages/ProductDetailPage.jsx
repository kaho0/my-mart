import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const ProductDetailPage = () => {
  const { name } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch product details
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        const productDetail = data.find((item) => item.name === name);
        setProduct(productDetail);
      });

    // Fetch product reviews (this can be replaced by API call)
    const sampleReviews = [
      {
        reviewer: "John Doe",
        rating: 5,
        comment: "Amazing product! Exceeded my expectations.",
      },
      {
        reviewer: "Jane Smith",
        rating: 4,
        comment: "Good quality but delivery took longer than expected.",
      },
      {
        reviewer: "Mark Turner",
        rating: 3,
        comment: "Product was okay but could be better.",
      },
    ];
    setReviews(sampleReviews);
  }, [name]);

  if (!product) return <p className="text-center">Loading...</p>;

  return (
    <div className="container mx-auto p-8 my-8">
      <div className="flex justify-center mb-12">
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
            <p className="text-gray-600 mb-4 font-sans">
              {product.description}
            </p>
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

      {/* Review Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Customer Reviews
        </h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-4 flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <img
                  src={`https://i.pravatar.cc/50?img=${index + 1}`} // Using random avatars
                  alt={review.reviewer}
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {review.reviewer}
                  </h4>
                  <div className="flex space-x-1 text-yellow-400">
                    {Array(review.rating)
                      .fill()
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </div>
                </div>
                <p className="text-gray-600 mt-1">{review.comment}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
