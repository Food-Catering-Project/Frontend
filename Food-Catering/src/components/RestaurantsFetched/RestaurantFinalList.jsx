

import { useEffect, useState } from "react";
import axios from "axios";
import RestaurantCard from "./RestaurantCard";

const RestaurantListPage = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8007/admin/api/OwnerRestaurant/getAllRestuarants")
      .then((res) => setRestaurants(res.data.data))
      .catch((err) => console.error("Error fetching restaurants", err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-6 ">
      {restaurants.length > 0 ? (
        <RestaurantCard restaurants={restaurants} />
      ) : (
        <p className="text-center text-gray-500">Loading Restaurants...</p>
      )}
    </div>
  );
};

export default RestaurantListPage;


