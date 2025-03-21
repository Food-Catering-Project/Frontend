import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaUsers, FaClock, FaCheckCircle, FaHandshake, FaLeaf, FaTruck, FaTools } from "react-icons/fa"; 
import FoodImage from "../assets/FoodDifference/FoodImage.jpg";

const AboutUs = () => {
  return (
    <motion.div
      className="w-full py-16 px-6 sm:px-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* WHY CHOOSE US - Title */}
      <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-6">
        WHY CHOOSE US
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed font-medium mb-12">
        Because we believe good food builds good relations.
      </p>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
        {/* Left Side Content */}
        <motion.div
          className="md:w-1/3 text-gray-700 leading-relaxed space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-orange-500">
            30 Years Of Experience in Catering Services
          </h2>
          <p>
            Food Caterers is an expert outdoor catering service provider in Pune & Hyderabad.
            We serve events from small to large crowds with the most comfortable buffet setups 
            at your location. Be it a family reunion, colleagues gathering, family function, 
            Indian wedding, birthday, housewarming, cradle ceremony, anniversaries, we are just a call away. 
            From Welcome drinks to non-veg specials, we offer packages as per your budget.
          </p>
        </motion.div>

        {/* Middle Image */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={FoodImage} alt="About Us" className="rounded-lg shadow-lg" />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          className="md:w-1/3 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-orange-500">
            What We Offer:
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500" /> Perfectly set up Buffets at your location.
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500" /> Good Food & Beverages.
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500" /> Professionals & Skilled Chefs.
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500" /> Affordable Prices & Best Packages.
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500" /> Any Size Guest List Served.
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500" /> Serves Hot & Fresh.
            </li>
          </ul>

          {/* Customer Count */}
          <div className="flex items-center gap-3 text-lg font-semibold text-orange-600 mt-4">
            <FaUsers className="text-3xl" />
            <span>200,000+ Satisfied Customers</span>
          </div>
        </motion.div>
      </div>

      {/* Statistics Section */}
      <motion.div
        className="flex flex-wrap justify-center gap-10 mt-16 bg-orange-500 text-white py-12 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Professional Chefs */}
        <div className="flex flex-col items-center text-center">
          <FaUtensils className="text-5xl mb-2" />
          <h3 className="text-3xl font-bold">30</h3>
          <p className="text-lg">Professional Chefs</p>
        </div>

        {/* Items of Food */}
        <div className="flex flex-col items-center text-center">
          <FaUtensils className="text-5xl mb-2" />
          <h3 className="text-3xl font-bold">453</h3>
          <p className="text-lg">Items Of Foods</p>
        </div>

        {/* Years of Experience */}
        <div className="flex flex-col items-center text-center">
          <FaClock className="text-5xl mb-2" />
          <h3 className="text-3xl font-bold">30+</h3>
          <p className="text-lg">Years Of Experience</p>
        </div>

        {/* Satisfied Customers */}
        <div className="flex flex-col items-center text-center">
          <FaUsers className="text-5xl mb-2" />
          <h3 className="text-3xl font-bold">200,000</h3>
          <p className="text-lg">Satisfied Customers</p>
        </div>
      </motion.div>

      {/* Additional Section - Our Commitment */}
      <motion.div
        className="flex flex-wrap justify-center gap-8 mt-16 bg-gray-100 py-12 px-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Commitment Cards */}
        <div className="flex flex-col items-center text-center w-64">
          <FaHandshake className="text-5xl text-orange-500 mb-3" />
          <h3 className="text-xl font-bold">Quality Assurance</h3>
          <p className="text-gray-700">We use only the best ingredients for our dishes.</p>
        </div>

        <div className="flex flex-col items-center text-center w-64">
          <FaTruck className="text-5xl text-orange-500 mb-3" />
          <h3 className="text-xl font-bold">Timely Delivery</h3>
          <p className="text-gray-700">Always on time, ensuring your event runs smoothly.</p>
        </div>

        <div className="flex flex-col items-center text-center w-64">
          <FaTools className="text-5xl text-orange-500 mb-3" />
          <h3 className="text-xl font-bold">Customization</h3>
          <p className="text-gray-700">Tailored menus to suit your preferences.</p>
        </div>

        <div className="flex flex-col items-center text-center w-64">
          <FaLeaf className="text-5xl text-orange-500 mb-3" />
          <h3 className="text-xl font-bold">Hygienic Preparation</h3>
          <p className="text-gray-700">Maintaining cleanliness and hygiene standards.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
