import React, { useState, useEffect } from "react";
import happycustomer from "../assets/happycustomer.jpg";


const feedbacks = [
  "The food was absolutely delicious! Fresh ingredients and amazing taste.",
  "Great service! The staff was very friendly and quick.",
  "Loved the hygiene! The restaurant maintains top cleanliness standards.",
  "Perfect balance of spices in every dish. A must-try!",
  "Fast delivery and neatly packed food. Highly recommended!",
];

const CustomerFeedback = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 2000); // Change feedback every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-16 bg-gray-100 px-4 sm:px-10">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-orange-600 text-center mb-4">
        OUR CUSTOMER FEEDBACK
      </h1>
      <p className="text-center text-gray-600 text-lg mb-10">
        Here is why people liked us
      </p>

      {/* Feedback & Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
        {/* Feedback (Left Side) */}
        <div className="flex-1 text-center md:text-left px-6 md:px-12">
          <p className="text-2xl font-semibold text-gray-800 italic transition-opacity duration-500">
            "{feedbacks[index]}"
          </p>
        </div>

        {/* Image (Right Side) */}
        <div className="flex-1 flex justify-center mt-6 md:mt-0">
          <img
            src={happycustomer} // Replace with your image path
            alt="Happy Customer"
            className="w-80 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
