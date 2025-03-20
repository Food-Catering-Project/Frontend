import React from "react";
import { motion } from "framer-motion";

const HousePartyCatering = () => {
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
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        House Party Catering
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Make your house party a memorable experience with our delicious, hassle-free catering services. 
        Enjoy great food while we take care of the rest!
      </motion.p>

      {/* Section Title */}
      <motion.h2
        className="text-3xl font-semibold text-center text-orange-500 mt-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Why Choose Our House Party Catering?
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-700 text-center max-w-4xl mx-auto mt-4 leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Whether it's a small get-together, birthday celebration, or festive occasion, 
        our house party catering service brings the perfect menu to satisfy your guests.
      </motion.p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">
        {/* Customized Menus */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Customized Menus</h2>
          <p className="text-gray-700 leading-relaxed">
            Choose from a variety of cuisines and dishes tailored to your party theme and preferences.
          </p>
        </motion.div>

        {/* Hassle-Free Experience */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Hassle-Free Experience</h2>
          <p className="text-gray-700 leading-relaxed">
            We handle everything from preparation to delivery, so you can focus on enjoying your event.
          </p>
        </motion.div>
      </div>

      {/* Additional Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">
        {/* Live Food Stations */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Live Food Stations</h2>
          <p className="text-gray-700 leading-relaxed">
            Elevate your party with live counters like BBQ grills, pasta stations, and more!
          </p>
        </motion.div>

        {/* Bartender & Drinks Service */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Bartender & Drinks Service</h2>
          <p className="text-gray-700 leading-relaxed">
            Impress your guests with professional bartenders mixing up cocktails, mocktails, and custom drinks!
          </p>
        </motion.div>
      </div>

      {/* Late Night Party Snacks */}
      <motion.div
        className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500 mt-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-orange-500 text-center mb-4">
          Late-Night Party Snacks
        </h2>
        <p className="text-gray-700 text-center leading-relaxed">
          Keep the party going with a special late-night menu featuring:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2 text-center">
          <li>Loaded Nachos & Cheese Fries</li>
          <li>Mini Sliders & Wraps</li>
          <li>Street-Style Tacos</li>
          <li>Gourmet Desserts</li>
          <li>Custom Midnight Snacks</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default HousePartyCatering;
