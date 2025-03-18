import React, { useEffect, useState } from "react";
import axios from "axios";


const menuImages = {
    1: "../assets/DeliciousMenu/ButterNaan.png",
    2: "../assets/DeliciousMenu/Cheeseburger.jpg",
    4: "../assets/DeliciousMenu/ChickenBiryani.jpg",
    5: "../assets/DeliciousMenu/ChocolateBrownie.jpg",
    6: "../assets/DeliciousMenu/ColdCoffee.jpeg",
    7: "../assets/DeliciousMenu/GrilledChickenSalad.jpg",
    8: "../assets/DeliciousMenu/TandooriChicken.jpg",
    9: "../assets/DeliciousMenu/VeggieBurger.jpg",
    10: "../assets/DeliciousMenu/VeggiePizza.jpg"
  };

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching menu data...");
    fetchMenu();
  }, []);

const fetchMenu = async () => {
    try {
      const response = await axios.get("http://localhost:8003/query/api/menu/getAllMenu");
  
      console.log("API Response:", response.data); // Log only response.data
  
      // ✅ Fix: Ensure we correctly extract the menu items array
      if (response.data?.data && Array.isArray(response.data.data)) {
        setMenuItems(response.data.data);
      } else {
        console.error("Unexpected API response format:", response.data);
        setMenuItems([]); // Empty list to prevent crash
      }
    } catch (error) {
      console.error("Error fetching menu:", error);
      setMenuItems([]); // Prevent crashing if API fails
    } finally {
      setLoading(false);
    }
  };
  

  if (loading) {
    return <p className="text-center text-gray-500">Loading Menus...</p>;
  }

  return (
    <div className="w-full py-16 bg-gray-100 px-4 sm:px-10">
      <h1 className="text-4xl sm:text-5xl font-bold text-orange-600 text-center mb-10">
        Our Delicious Menu
      </h1>

      {menuItems.length === 0 ? (
        <p className="text-center text-red-500">No menu items available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {menuItems.map((item) => (
            <div
              key={item.menuId}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                <p className="text-gray-500 text-sm mb-2">{item.category}</p>
                <p className="text-gray-700 text-sm">{item.description}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">
                  ₹{item.price?.toFixed(2)}
                  </span>
                  <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default Menu;
