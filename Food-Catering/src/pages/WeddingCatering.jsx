import React from "react";
import { motion } from "framer-motion";

const WeddingCatering = () => {
  return (
    <div className="w-full py-16 px-6 sm:px-16 bg-gray-50">
      {/* Heading */}
      <motion.h1 
        className="text-5xl font-extrabold text-center text-orange-600 mb-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Wedding Catering
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Celebrate your special day with delicious food that captures the essence of tradition and culture. 
        Our wedding catering service ensures every dish is crafted to perfection.
      </motion.p>

      {/* Section Title */}
      <motion.h2 
        className="text-3xl font-semibold text-center text-orange-500 mt-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Food Caterers at Your Wedding
      </motion.h2>

      {/* Description */}
      <motion.p 
        className="text-lg text-gray-700 text-center max-w-4xl mx-auto mt-4 leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Food at a wedding is more than just a meal; it’s a reflection of culture, a celebration of regional and state heritage, 
        and a culmination of family customs. The culinary choices made for a wedding feast speak volumes about the traditions and families. 
        As your wedding caterer in Pune and Hyderabad, Food Caterers is here to assist you in curating your wedding menu just perfectly 
        for your tastes and choices.
      </motion.p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">
        {/* Left Section */}
        <motion.div 
          className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Why Food Caterers?</h2>
          <p className="text-gray-700 leading-relaxed">
            Food caterers in Pune and Hyderabad specialize in traditional food for weddings. We offer:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Traditional Puneri Food</li>
            <li>Traditional Regional Food</li>
            <li>Traditional North Indian Food</li>
            <li>Veg & Non-Veg Traditional Dishes</li>
            <li>Affordable Catering Services</li>
          </ul>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">On-Time Delivery</h2>
          <p className="text-gray-700 leading-relaxed">
            Our transit manager ensures timely food delivery despite a busy schedule. 
            The food will be as fresh as when it was prepared.
          </p>

          <h2 className="text-2xl font-semibold text-orange-500 mt-6 mb-3">Health and Hygiene</h2>
          <p className="text-gray-700 leading-relaxed">
            Food Caterers prioritize hygiene, making us one of the most trusted caterers in Pune and Hyderabad. 
            Your wedding will have high-quality, hygienic food.
          </p>
        </motion.div>
      </div>

      {/* Additional Section: Custom Menus & Live Counters */}
      <motion.div 
        className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500 mt-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-orange-500 text-center mb-4">
          Custom Menus & Live Counters
        </h2>
        <p className="text-gray-700 text-center leading-relaxed">
          Make your wedding unique with our custom-designed menus and live food counters.  
          We offer on-spot preparation of fresh dishes, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2 text-center">
          <li>Live Dosa Counters</li>
          <li>Chaat & Golgappa Stations</li>
          <li>BBQ & Grill Counters</li>
          <li>Fresh Fruit & Dessert Stations</li>
          <li>Mocktail & Beverage Bars</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default WeddingCatering;
