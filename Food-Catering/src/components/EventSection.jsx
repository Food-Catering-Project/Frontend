import React from "react";
import Anyotheroccasion from "../assets/Any-Other-Occasion.jpg";
import Birthdayparty from "../assets/Birthday-Party-Catering.jpg";
import bulkfood from "../assets/bulkFood.jpg";
import Corporate from "../assets/Corporate-Catering.jpg";
import Houseparty from "../assets/HousePartyCatering.jpg";
import WeddingParty from "../assets/Wedding-Catering.jpg";

const services = [
  { title: "Bulk Food Delivery", image: bulkfood },
  { title: "House Party Catering", image: Houseparty },
  { title: "Wedding Catering", image: WeddingParty },
  { title: "Birthday Party Catering", image: Birthdayparty },
  { title: "Corporate Catering", image: Corporate },
  { title: "Any Other Occasion", image: Anyotheroccasion },
];

const EventSection = () => {
  return (
    <div className="w-full py-16 bg-gray-100 text-center px-4 sm:px-10">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
        Big or Small, We Bring the Best to Your Next Event
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        Whether you’re hosting an intimate gathering or a grand celebration, trust us to serve fresh, flavorful dishes that delight every guest.
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSection;
