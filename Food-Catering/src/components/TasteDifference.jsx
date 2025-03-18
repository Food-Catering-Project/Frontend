import React from "react";
import FoodImage from "../assets/FoodDifference/FoodImage.jpg"; // Change to your actual food image
import DishImage from "../assets/FoodDifference/DishImage.jpg";
import OrderImage from "../assets/FoodDifference/OrderImage.jpg";
import CookedImage from "../assets/FoodDifference/CookedImage.jpg";
import EventImage from "../assets/FoodDifference/EventImage.jpg";

const features = [
  {
    title: "Wide Selection of Dishes",
    description:
      "Choose from our wide selection of delicious, crowd-pleasing dishes crafted for every occasion, whether a casual gathering or a grand celebration.",
    image: DishImage,
    position: "left",
  },
  {
    title: "Customize & Order",
    description:
      "Customize a menu that aligns with your event’s theme, dietary preferences, and guest needs.",
    image: OrderImage,
    position: "right",
  },
  {
    title: "Freshly Cooked",
    description:
      "Your food is freshly cooked and carefully prepared by our chefs to ensure flavor and quality, with every dish tailored to delight your guests.",
    image: CookedImage,
    position: "left",
  },
  {
    title: "Hassle-free Events",
    description:
      "Simply set up, serve, and enjoy a hassle-free event! We make it easy with convenient packaging and setup tips, so you can focus on the celebration.",
    image: EventImage,
    position: "right",
  },
];

const TasteDifference = () => {
  return (
    <div className="w-full py-16 bg-gray-100 text-center px-6">
      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8">
      Experience Catering Excellence
      </h1>

      {/* Center Image */}
      <div className="flex justify-center">
        <img
          src={FoodImage}
          alt="Food"
          className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-gray-300 shadow-lg"
        />
      </div>

      {/* Feature Sections */}
      <div className="max-w-6xl mx-auto mt-10 grid gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              feature.position === "left" ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <img
              src={feature.image}
              alt={feature.title}
              className="w-40 h-40 sm:w-52 sm:h-52 object-cover rounded-lg shadow-md"
            />
            
            {/* Text Content */}
            <div className="text-left md:w-2/3 px-6 mt-4 md:mt-0">
              <h2 className="text-2xl font-semibold text-gray-800">{feature.title}</h2>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasteDifference;
