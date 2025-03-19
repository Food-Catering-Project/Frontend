

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import RestaurantPhoto from "../assets/restaurant photo.jpg";
import { FcRating } from "react-icons/fc";

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const scrollRef = useRef(null);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get("http://localhost:8003/query/api/restaurant/getAll");
                if (response.data && Array.isArray(response.data.data)) {
                    setRestaurants(response.data.data);
                } else {
                    console.error("Unexpected API response format:", response.data);
                    setRestaurants([]);
                }
            } catch (error) {
                console.error("Error fetching restaurants:", error);
                setRestaurants([]);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurants();
    }, []);

    // Scroll Functions
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    if (loading) {
        return <p className="text-center text-gray-500">Loading restaurants...</p>;
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-orange-600 text-center mb-6">Top Restaurants</h2>

            {/* Scroll Buttons */}
            <div className="relative">
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition z-10"
                >
                    <FaChevronLeft />
                </button>

                <div ref={scrollRef} className="flex space-x-6 overflow-x-auto scrollbar-hide p-4">
                    {restaurants.length > 0 ? (
                        restaurants.map((restaurant) => (
                            <div
                                key={restaurant.restaurantId}
                                className="bg-white shadow-md rounded-lg overflow-hidden min-w-[280px] flex flex-col h-[320px] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                {/* Restaurant Image */}
                                <img
                                    src={RestaurantPhoto}
                                    alt="Restaurant"
                                    className="w-full h-44 object-cover"
                                />

                                {/* Card Content */}
                                <div className="p-4 flex flex-col flex-grow justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">{restaurant.name}</h3>
                                        <p className="text-gray-600 text-sm">{restaurant.address}</p>
                                    </div>

                                    {/* Rating Stick to Bottom */}
                                    <div className="mt-auto text-orange-500 font-bold flex p-2 rounded-b-lg text-left">
                                    <FcRating className="text-xl mr-1" /> {restaurant.rating}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No restaurants found.</p>
                    )}
                </div>

                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default RestaurantList;
