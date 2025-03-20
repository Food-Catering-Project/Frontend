import React from "react";
import { motion } from "framer-motion";

const BulkFoodDelivery = () => {
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
        Bulk Food Delivery
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Get fresh, delicious meals delivered in bulk for corporate events, family gatherings, and special occasions. 
        Our catering service ensures top-quality food at affordable prices.
      </motion.p>

      {/* Section Title */}
      <motion.h2
        className="text-3xl font-semibold text-center text-orange-500 mt-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Why Choose Our Bulk Food Delivery?
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-700 text-center max-w-4xl mx-auto mt-4 leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Whether it's a corporate event, large gathering, or a family function, 
        our bulk food delivery service ensures that you get freshly cooked meals, packed and delivered with care.
      </motion.p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">
        {/* Fresh & Hygienic */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Fresh & Hygienic</h2>
          <p className="text-gray-700 leading-relaxed">
            We prioritize hygiene and quality to ensure every meal is freshly prepared with the finest ingredients.
          </p>
        </motion.div>

        {/* Timely Delivery */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Timely Delivery</h2>
          <p className="text-gray-700 leading-relaxed">
            Our efficient delivery system ensures your order arrives on time, no matter the size of the event.
          </p>
        </motion.div>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">
        {/* Customizable Menus */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Customizable Menus</h2>
          <p className="text-gray-700 leading-relaxed">
            Choose from a variety of cuisines and dishes to create the perfect menu tailored to your event’s needs.
          </p>
        </motion.div>

        {/* Cost-Effective Packages */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Cost-Effective Packages</h2>
          <p className="text-gray-700 leading-relaxed">
            Enjoy bulk orders at discounted rates without compromising on taste and quality.
          </p>
        </motion.div>
      </div>

      {/* Large-Scale Catering Section */}
      <motion.div
        className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500 mt-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-orange-500 text-center mb-4">
          Large-Scale Catering & Meal Plans
        </h2>
        <p className="text-gray-700 text-center leading-relaxed">
          We handle bulk catering for offices, schools, hospitals, and events, ensuring delicious and well-balanced meals.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2 text-center">
          <li>Corporate Lunch & Dinner Plans</li>
          <li>Wedding & Engagement Catering</li>
          <li>Festival & Religious Event Catering</li>
          <li>Daily Meal Plans for Hostels & Offices</li>
          <li>Event Buffets & Large-Order Services</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default BulkFoodDelivery;
