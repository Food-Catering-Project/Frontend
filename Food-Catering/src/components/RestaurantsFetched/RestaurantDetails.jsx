

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

const RestaurantDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [restaurant, setRestaurant] = useState(null);
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("veg");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [resRes, menuRes] = await Promise.all([
                    fetch("http://localhost:8007/admin/api/OwnerRestaurant/getAllRestuarants"),
                    fetch(`http://localhost:8007/admin/api/RestaurantMenu/getMenus/${id}`)
                ]);
                const restaurantData = await resRes.json();
                const menuData = await menuRes.json();

                const selected = restaurantData.data.find((r) => r.restaurantId === parseInt(id));
                setRestaurant(selected);
                setMenus(menuData.data || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const vegMenus = menus.filter((m) => m.category.toLowerCase() === "veg");
    const nonVegMenus = menus.filter((m) => m.category.toLowerCase() === "non-veg");

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-solid"></div>
            </div>
        );
    }

    if (!restaurant) {
        return (
            <div className="text-center py-10 text-lg font-medium text-red-600">
                Restaurant not found.
            </div>
        );
    }

    return (
        <motion.div
            className="w-full py-16 px-4 sm:px-16 bg-gray-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 mb-6 text-orange-600 hover:text-orange-800 transition ml-2"
            >
                <FiArrowLeft className="text-lg" />
                Back
            </button>

        
            {/* Tabs */}
            <div className="flex justify-center gap-8 mt-10 mb-8 flex-wrap">
                {["veg", "non-veg"].map((type) => (
                    <button
                        key={type}
                        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeTab === type
                            ? type === "veg"
                                ? "bg-green-600 text-white shadow-md"
                                : "bg-red-600 text-white shadow-md"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        onClick={() => setActiveTab(type)}
                    >
                        {type === "veg" ? "Veg Items" : "Non-Veg Items"}
                    </button>
                ))}
            </div>

            {/* Menu Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {(activeTab === "veg" ? vegMenus : nonVegMenus).length === 0 ? (
                    <div className="col-span-full text-center text-gray-500 text-lg">
                        No {activeTab === "veg" ? "Veg" : "Non-Veg"} items available.
                    </div>
                ) : (
                    (activeTab === "veg" ? vegMenus : nonVegMenus).map((item) => (
                        <motion.div
                            key={item.menuId}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-4 border-t-4 border-orange-500"
                            whileHover={{ scale: 1.03 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={item.imgUrl}
                                alt={item.menuName}
                                className="w-full h-40 object-cover rounded-md mb-3"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.menuName}</h3>
                            <span
                                className={`inline-block px-3 py-1 text-xs rounded-full font-semibold mb-2 ${item.category.toLowerCase() === "veg"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                    }`}
                            >
                                {item.category}
                            </span>
                            <p className="text-lg font-bold text-orange-600">₹ {item.price}</p>
                        </motion.div>
                    ))
                )}
            </motion.div>
        </motion.div>
    );
};

export default RestaurantDetails;
