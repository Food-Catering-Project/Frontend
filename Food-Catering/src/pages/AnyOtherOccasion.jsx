import React from "react";
import { motion } from "framer-motion";

const AnyOtherOccasion = () => {
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
        Catering for Any Occasion
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        No matter the occasion, we bring delicious food and exceptional service to make your event truly special. 
        From casual get-togethers to grand celebrations, we cater to all!
      </motion.p>

      {/* Section Title */}
      <motion.h2
        className="text-3xl font-semibold text-center text-orange-500 mt-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Whatever the Event, We’ve Got You Covered!
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-700 text-center max-w-4xl mx-auto mt-4 leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Whether it's a **family gathering, engagement party, festival feast, baby shower, farewell party**, 
        or any **special celebration**, our catering services provide the perfect menu tailored to your needs.  
        We offer a variety of **regional, continental, and fusion cuisines** to match the theme of your event.
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
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Personalized Menus</h2>
          <p className="text-gray-700 leading-relaxed">
            Our catering service offers **fully customizable menus** to match the theme and vibe of your event, 
            ensuring a delightful experience for all guests.  
            Choose from a **wide range of vegetarian and non-vegetarian dishes**, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Multi-cuisine Buffets</li>
            <li>Live Counters (Chaat, Barbecue, Pasta, etc.)</li>
            <li>Special Jain & Vegan Menu Options</li>
            <li>Signature Desserts & Beverages</li>
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
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">Hassle-Free Service</h2>
          <p className="text-gray-700 leading-relaxed">
            From **setup to cleanup**, we take care of everything, allowing you to enjoy the occasion stress-free.  
            Our **dedicated event managers** ensure timely service and perfect coordination.
          </p>

          <h2 className="text-2xl font-semibold text-orange-500 mt-6 mb-3">Event-Specific Catering</h2>
          <p className="text-gray-700 leading-relaxed">
            We specialize in catering for **all kinds of celebrations**, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Baby Showers & Naming Ceremonies</li>
            <li>Festivals & Religious Gatherings</li>
            <li>Farewell & Retirement Parties</li>
            <li>Private Dinners & Anniversary Celebrations</li>
          </ul>
        </motion.div>
      </div>

      {/* Additional Section: Themed Catering & Live Counters */}
      <motion.div
        className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-orange-500 mt-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-orange-500 text-center mb-4">
          Themed Catering & Live Counters
        </h2>
        <p className="text-gray-700 text-center leading-relaxed">
          Make your event unique with our themed catering services and live food counters.  
          We offer on-spot preparation of fresh dishes, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2 text-center">
          <li>Live Pasta & Pizza Counters</li>
          <li>Chaat & Golgappa Stations</li>
          <li>BBQ & Grill Counters</li>
          <li>Fresh Fruit & Dessert Stations</li>
          <li>Mocktail & Beverage Bars</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default AnyOtherOccasion;
