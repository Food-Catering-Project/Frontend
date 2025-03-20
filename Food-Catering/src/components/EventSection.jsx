


// import React from "react";
// import { Link } from "react-router-dom";
// import Anyotheroccasion from "../assets/Any-Other-Occasion.jpg";
// import Birthdayparty from "../assets/Birthday-Party-Catering.jpg";
// import bulkfood from "../assets/bulkFood.jpg";
// import Corporate from "../assets/Corporate-Catering.jpg";
// import Houseparty from "../assets/HousePartyCatering.jpg";
// import WeddingParty from "../assets/Wedding-Catering.jpg";

// const services = [
//   { title: "Bulk Food Delivery", image: bulkfood },
//   { title: "House Party Catering", image: Houseparty },
//   { title: "Wedding Catering", image: WeddingParty, link: "/wedding-catering" },
//   { title: "Birthday Party Catering", image: Birthdayparty },
//   { title: "Corporate Catering", image: Corporate },
//   { title: "Any Other Occasion", image: Anyotheroccasion },
// ];

// const EventSection = () => {
//   return (
//     <div className="w-full py-16 bg-gray-100 text-center px-4 sm:px-10">
//       <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
//         Big or Small, We Bring the Best to Your Next Event
//       </h1>

//       <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
//         Whether you’re hosting an intimate gathering or a grand celebration, trust us to serve fresh, flavorful dishes that delight every guest.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//         {services.map((service, index) => (
//           <Link key={index} to={service.link || "#"} className="block">
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
//               <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventSection;

import React from "react";
import { Link } from "react-router-dom";
import Anyotheroccasion from "../assets/Any-Other-Occasion.jpg";
import Birthdayparty from "../assets/Birthday-Party-Catering.jpg";
import bulkfood from "../assets/bulkFood.jpg";
import Corporate from "../assets/Corporate-Catering.jpg";
import Houseparty from "../assets/HousePartyCatering.jpg";
import WeddingParty from "../assets/Wedding-Catering.jpg";

const services = [
  { title: "Bulk Food Delivery", image: bulkfood, link: "/bulk-food-delivery" },
  { title: "House Party Catering", image: Houseparty, link: "/house-party-catering" },
  { title: "Wedding Catering", image: WeddingParty, link: "/wedding-catering" },
  { title: "Birthday Party Catering", image: Birthdayparty, link: "/birthday-party-catering" },
  { title: "Corporate Catering", image: Corporate, link: "/corporate-catering" },
  { title: "Any Other Occasion", image: Anyotheroccasion, link: "/any-other-occasion" },
];

const EventSection = () => {
  return (
    <div className="w-full py-16 bg-gray-100 text-center px-4 sm:px-10">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
        Big or Small, We Bring the Best to Your Next Event
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        Whether you’re hosting an intimate gathering or a grand celebration, trust us to serve fresh, flavorful dishes that delight every guest.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <Link key={index} to={service.link} className="block">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventSection;

