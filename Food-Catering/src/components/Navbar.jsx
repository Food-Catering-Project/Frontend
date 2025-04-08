



import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart, FaGift, FaQuestionCircle, FaBuilding, FaBars, FaTimes } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { useState, useEffect } from "react";
import AuthSidebar from "./AuthSidebar";
// import FoodCateringLogo from "../assets/FoodCateringLogo.png";
import MainLogo from "../assets/MainLogo.png"; 

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setUser("User"); // Replace with actual API call to get username
        }
    }, []);

    return (
        <>
            <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Left Side: Logo & Search */}
                    <div className="flex items-center space-x-4">
                        <img src={MainLogo} alt="Food Catering Logo" className="h-15 w-auto rounded-lg" />
                        {/* <h1 className="text-2xl font-bold text-orange-500 font-serif">Food Catering</h1> */}
                    </div>

                    {/* Search Bar (Hidden on Small Screens)
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Search for food..."
                            className="px-4 py-2 w-64 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <FaSearch className="absolute right-3 top-3 text-gray-500" />
                    </div> */}

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-6 text-gray-700">

                        {/* <li className="flex items-center space-x-1 cursor-pointer hover:text-orange-500">
                            <FaUserShield />
                            <Link to="/restaurant-register" className="text-gray-700 hover:text-orange-500"> Admin</Link>
                        </li> */}

                        <li className="flex items-center space-x-1 cursor-pointer hover:text-orange-500">
                            <FaInfoCircle />
                            <Link to="/aboutus" className="text-gray-700 hover:text-orange-500">About Us</Link>
                        </li>

                        <li className="flex items-center space-x-1 cursor-pointer hover:text-orange-500">
                            <FaGift />
                            <Link to="/offer" className="text-gray-700 hover:text-orange-500">Offers</Link>
                        </li>

                        <li className="flex items-center space-x-1 hover:text-orange-500">
                            <FaQuestionCircle />
                            <Link to="/help" className="text-gray-700 hover:text-orange-500">Help</Link>
                        </li>

                        <li className="flex items-center space-x-1 cursor-pointer hover:text-orange-500" onClick={() => setSidebarOpen(true)}>
                            <FaUser />
                            <span>{user ? user : "Sign In"}</span>
                        </li>

                        {/* <li className="flex items-center space-x-1 cursor-pointer hover:text-orange-500"><FaShoppingCart /><span>Cart</span></li> */}

                        <li className="flex items-center space-x-1 cursor-pointer hover:text-orange-500"><FaPhoneAlt /><span>+912233445566</span></li>

                    </ul>
                </div>

                {/* {/* Mobile Menu (Visible on Small Screens) */}

                {menuOpen && (
                    <div className="md:hidden bg-white shadow-md p-4 absolute top-full left-0 w-full z-10">
                        <ul className="flex flex-col space-y-4 text-gray-700">
{/* 
                            <li className="flex items-center space-x-1 cursor-pointer hover:text-orange-500">
                                <FaUserShield />
                                <Link to="/restaurant-register" className="text-gray-700 hover:text-orange-500"> Admin</Link>
                            </li> */}


                            <li className="flex items-center space-x-2 cursor-pointer hover:text-orange-500">
                                <FaInfoCircle />
                                <Link to="/aboutus" className="text-gray-700 hover:text-orange-500">About Us</Link>
                            </li>

                            <li className="flex items-center space-x-2 cursor-pointer hover:text-orange-500">
                                <FaGift />
                                <Link to="/offer" className="text-gray-700 hover:text-orange-500">Offers</Link>
                            </li>

                            <li className="flex items-center space-x-2 hover:text-orange-500">
                                <FaQuestionCircle />
                                <Link to="/help" className="text-gray-700 hover:text-orange-500">Help</Link>
                            </li>

                            <li className="flex items-center space-x-2 cursor-pointer hover:text-orange-500" onClick={() => setSidebarOpen(true)}>
                                <FaUser />
                                <span>{user ? user : "Sign In"}</span>
                            </li>

                            {/* <li className="flex items-center space-x-2 cursor-pointer hover:text-orange-500">
                                <FaShoppingCart />
                                <span>Cart</span>
                            </li> */}

                            <li className="flex items-center space-x-2 cursor-pointer hover:text-orange-500">
                                <FaPhoneAlt />
                                <span>+912233445566</span>
                            </li>

                        </ul>
                    </div>
                )}

            </nav>

            {/* Sidebar Authentication Component */}
            <AuthSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
    );
};

export default Navbar;
