import React from "react";
import { motion } from "framer-motion";

const BirthdayPartyCatering = () => {
  return (
    <motion.div
      className="w-full py-16 px-6 sm:px-16 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-center text-orange-600 mb-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Birthday Party Catering
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Make your birthday party extra special with our delicious catering services. 
        From kids' birthdays to milestone celebrations, we serve the perfect party feast!
      </motion.p>

      {/* Section Title */}
      <motion.h2
        className="text-3xl font-semibold text-center text-orange-500 mt-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Why Choose Our Birthday Party Catering?
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-700 text-center max-w-4xl mx-auto mt-4 leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        A birthday party is incomplete without great food! We offer customized menus, exciting party treats, 
        and high-quality dishes to make your celebration unforgettable.
      </motion.p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">
        {/* Left Section - Kid-Friendly Food */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Kid-Friendly & Fun</h2>
          <p className="text-gray-700 leading-relaxed">
            Our menu includes a variety of kid-friendly options like pizzas, burgers, sandwiches, cupcakes, and desserts!
          </p>
        </motion.div>

        {/* Right Section - Themed Food */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Themed Food Options</h2>
          <p className="text-gray-700 leading-relaxed">
            Planning a themed birthday party? We provide custom food options to match your theme, 
            whether it's superheroes, princesses, cartoon characters, or any creative idea!
          </p>
        </motion.div>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">
        {/* Birthday Packages */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Birthday Party Packages</h2>
          <p className="text-gray-700 leading-relaxed">
            We offer all-inclusive catering packages for birthdays, including food, snacks, drinks, and desserts.
          </p>
        </motion.div>

        {/* Cakes & Desserts */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Custom Cakes & Desserts</h2>
          <p className="text-gray-700 leading-relaxed">
            Choose from a variety of cakes, cupcakes, pastries, and sweets to match your party theme.
          </p>
        </motion.div>
      </div>

      {/* Live Food Counters */}
      <motion.div
        className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500 mt-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-orange-500 text-center mb-4">
          Live Food Counters & Beverages
        </h2>
        <p className="text-gray-700 text-center leading-relaxed">
          Make your birthday unique with live food stations where guests can enjoy freshly prepared snacks!
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2 text-center">
          <li>Live Pizza & Pasta Counters</li>
          <li>Chaat & Golgappa Stations</li>
          <li>Mocktail & Juice Bars</li>
          <li>Chocolate Fountain & Candy Stations</li>
          <li>Ice Cream & Dessert Counters</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default BirthdayPartyCatering;
