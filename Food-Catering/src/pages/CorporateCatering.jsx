import React from "react";
import { motion } from "framer-motion";

const CorporateCatering = () => {
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
        Corporate Catering
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Impress your clients and employees with our professional catering services. 
        From team lunches to grand corporate events, we serve excellence on every plate.
      </motion.p>

      {/* Section Title */}
      <motion.h2
        className="text-3xl font-semibold text-center text-orange-500 mt-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Elevate Your Business Meetings with Great Food
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-700 text-center max-w-4xl mx-auto mt-4 leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Good food leads to great conversations! Whether it's a conference, seminar, or office party, 
        our corporate catering ensures a seamless and delicious dining experience.
      </motion.p>

      {/* Grid Section */}
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
            We offer a variety of menus, including vegetarian, non-vegetarian, 
            and healthy options to cater to diverse corporate needs.
          </p>
        </motion.div>

        {/* Punctual & Professional Service */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Punctual & Professional Service</h2>
          <p className="text-gray-700 leading-relaxed">
            We value time just like you do! Our catering team ensures timely delivery and professional service, 
            so your events run smoothly without interruptions.
          </p>
        </motion.div>
      </div>

      {/* Additional Corporate Catering Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">
        {/* Executive Buffets */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Executive Buffets</h2>
          <p className="text-gray-700 leading-relaxed">
            Offer your executives and VIP clients a premium buffet experience with exquisite dishes and top-tier service.
          </p>
        </motion.div>

        {/* Corporate Party Catering */}
        <motion.div
          className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Corporate Party Catering</h2>
          <p className="text-gray-700 leading-relaxed">
            Planning a year-end celebration or a corporate milestone event? 
            Our catering service delivers an unforgettable experience with gourmet food and beverages.
          </p>
        </motion.div>
      </div>

      {/* Wellness Meals Section */}
      <motion.div
        className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500 mt-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-orange-500 text-center mb-4">
          Healthy & Wellness Meal Plans
        </h2>
        <p className="text-gray-700 text-center leading-relaxed">
          Provide your employees with balanced and nutritious meals to promote wellness and productivity in the workplace.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2 text-center">
          <li>Low-Calorie & High-Protein Meal Options</li>
          <li>Fresh & Organic Ingredients</li>
          <li>Daily & Weekly Subscription Plans</li>
          <li>Special Diet Catering (Keto, Vegan, Gluten-Free)</li>
          <li>Boost Employee Morale & Health</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default CorporateCatering;
