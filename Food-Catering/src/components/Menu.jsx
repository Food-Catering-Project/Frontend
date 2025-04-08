// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import vaggieBurger from "../assets/DeliciousMenu/VeggieBurger.jpg"
// import VeggiePizza from "../assets/DeliciousMenu/VeggiePizza.jpg"
// import ChickenBiryani from "../assets/DeliciousMenu/ChickenBiryani.jpg"
// import GrilledChickenSalad from "../assets/DeliciousMenu/GrilledChickenSalad.jpg" 
// import Cheeseburger from "../assets/DeliciousMenu/Cheeseburger.jpg"
// import ButterNaan from "../assets/DeliciousMenu/ButterNaan.png"
// import TandooriChicken from "../assets/DeliciousMenu/TandooriChicken.jpg"
// import ChocolateBrownie from "../assets/DeliciousMenu/ChocolateBrownie.jpg"
// import ColdCoffee from "../assets/DeliciousMenu/ColdCoffee.jpeg"

// const menuImages = {
//     1: vaggieBurger,
//     2: VeggiePizza,
//     4: ChickenBiryani,
//     5: GrilledChickenSalad,
//     6: Cheeseburger,
//     7: ButterNaan,
//     8: TandooriChicken,
//     9: ChocolateBrownie,
//     10: ColdCoffee
// };

// const Menu = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log("Fetching menu data...");
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     try {
//       const response = await axios.get("http://localhost:8003/query/api/menu/getAllMenu");
//       console.log("API Response:", response.data);
//       if (response.data?.data && Array.isArray(response.data.data)) {
//         setMenuItems(response.data.data);
//       } else {
//         console.error("Unexpected API response format:", response.data);
//         setMenuItems([]);
//       }
//     } catch (error) {
//       console.error("Error fetching menu:", error);
//       setError("Failed to load menu items. Please try again later.");
//       setMenuItems([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <p className="text-center text-gray-500">Loading Menus...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-red-500">{error}</p>;
//   }

//   return (
//     <div className="w-full py-16 bg-gray-100 px-4 sm:px-10">
//       <h1 className="text-4xl sm:text-5xl font-bold text-orange-600 text-center mb-10">
//         Our Delicious Menu
//       </h1>

//       {menuItems.length === 0 ? (
//         <p className="text-center text-red-500">No menu items available.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//           {menuItems.map((item) => (
//             <div
//               key={item.menuId}
//               className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
//             >
//               <img
//                 src={menuImages[item.menuId]}
//                 alt={item.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
//                 <p className="text-gray-500 text-sm mb-2">{item.category}</p>
//                 <p className="text-gray-700 text-sm">{item.description}</p>
//                 <div className="mt-3 flex justify-between items-center">
//                   <span className="text-lg font-bold text-green-600">
//                     ₹{item.price?.toFixed(2)}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Menu;
