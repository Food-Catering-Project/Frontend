import React from "react";
import { motion } from "framer-motion";
import { FaTags, FaGift, FaUtensils, FaUsers, FaPercent, FaMoneyBillWave } from "react-icons/fa";

const offersData = [
  {
    icon: <FaTags className="text-5xl text-orange-600" />,
    title: "Seasonal Discounts",
    description: "Enjoy exclusive seasonal discounts on our catering packages for weddings, birthdays, and corporate events.",
  },
  {
    icon: <FaGift className="text-5xl text-orange-600" />,
    title: "Free Dessert on Bulk Orders",
    description: "Order for more than 100 guests and get a free dessert selection, including cakes, pastries, and sweets.",
  },
  {
    icon: <FaUtensils className="text-5xl text-orange-600" />,
    title: "Customized Menu Offers",
    description: "Tailor your menu as per your needs. We offer customized meal plans at the best prices.",
  },
  {
    icon: <FaUsers className="text-5xl text-orange-600" />,
    title: "Referral Benefits",
    description: "Refer our services to a friend and get a 10% discount on your next event catering order.",
  },
  {
    icon: <FaPercent className="text-5xl text-orange-600" />,
    title: "Exclusive Corporate Offers",
    description: "Special deals and discounts for corporate events, office parties, and company gatherings.",
  },
  {
    icon: <FaMoneyBillWave className="text-5xl text-orange-600" />,
    title: "Budget-Friendly Packages",
    description: "We provide affordable catering packages to suit every budget without compromising on quality.",
  },
];

const Offer = () => {
  return (
    <motion.div
      className="w-full py-16 px-6 sm:px-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h1
        className="text-5xl font-extrabold text-center text-orange-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Exclusive Offers
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed font-medium mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Check out our amazing catering offers to make your events even more special!
      </motion.p>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {offersData.map((offer, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{offer.icon}</div>
            <h2 className="text-2xl font-bold text-orange-600 mb-3">{offer.title}</h2>
            <p className="text-gray-700">{offer.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Offer;
