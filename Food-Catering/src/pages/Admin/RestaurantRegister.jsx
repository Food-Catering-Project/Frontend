import { useState, useEffect } from "react";
import FoodCateringLogo from "./FoodCateringLogo.png";

const changingTexts = [
  "Grow your business with us!",
  "Increase your restaurant's reach!",
  "Join thousands of successful partners!",
  "Serve more customers every day!",
  "Hassle-free onboarding process!"
];

const RestaurantRegister = () => {
  const [currentText, setCurrentText] = useState(changingTexts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = changingTexts.indexOf(prevText);
        return changingTexts[(currentIndex + 1) % changingTexts.length];
      });
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?restaurant,food')" }}>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
          {/* Left Side Content */}
          <div className="text-white space-y-5">
            <img src={FoodCateringLogo} alt="Food Catering Logo" className="h-20 w-auto" />
            <h2 className="text-3xl font-bold">Partner with Food-Catering</h2>
            
            {/* Changing Text Effect */}
            <p className=" sm:mb-3 text-lg font-semibold text-orange-400">{currentText}</p>
          </div>

          {/* Right Side Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-full mr-10 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Started</h3>
            <p className="text-gray-600 text-sm mb-4">
              Enter a mobile number or restaurant ID to continue
            </p>
            <input
              type="text"
              placeholder="Enter Mobile Number / Restaurant ID"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="w-full mt-4 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
              Continue
            </button>
            <p className="text-xs text-gray-500 mt-3">
              By logging in, I agree to Food-Catering's <span className="text-orange-500 cursor-pointer">Terms & Conditions</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Steps to Onboard */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">In just 3 easy steps</h2>
          <p className="text-gray-600 mb-4">Get your restaurant delivery-ready in 24hrs!</p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-orange-500">STEP 1</h3>
              <p>Install the Food Catering Owner App</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-500">STEP 2</h3>
              <p>Login/Register using your phone number</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-500">STEP 3</h3>
              <p>Enter restaurant details</p>
            </div>
          </div>
        </div>

        {/* Right Side: Required Documents */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Documents Required</h2>
          <p className="text-gray-600 mb-4">For an easy form filling process, you can keep these documents handy.</p>

          <ul className="space-y-3">
            <li className="text-gray-700">📜 FSSAI License copy <span className="text-orange-500 cursor-pointer">Apply Here</span></li>
            <li className="text-gray-700">📄 Your Restaurant Menu</li>
            <li className="text-gray-700">🏦 Bank Details</li>
            <li className="text-gray-700">🧾 GSTIN <span className="text-orange-500 cursor-pointer">Apply Here</span></li>
            <li className="text-gray-700">🆔 PAN Card Copy</li>
            <li className="text-gray-700">🆔 AADHAR Card Copy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantRegister;
