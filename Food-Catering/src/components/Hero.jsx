// import React from 'react'

// const Hero = () => {
//   return (
//     <div>
//         {/* Hero Section */}
//       <div className="relative  bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: "url('/banner.jpg')" }}>
//         <div className="bg-black bg-opacity-50 p-6 rounded-md">
//           <h1 className="text-4xl text-white font-bold">Pure Vegetarian Food, Catered with Love & Excellence✨</h1>
//           <p className="text-white mt-2">Choose from a variety of restaurants near you.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero


import React from "react";

const Hero = () => {
  return (
    <div 
      className="relative w-full h-[500px] sm:h-[600px] bg-cover bg-center flex items-center justify-center text-white pt-20"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-12">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          DELICIOUS FOOD FOR YOUR NEXT BIG GATHERING
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          One-Step Solution for All Your Requirements
        </p>

        <div className="grid grid-cols-2 gap-4 sm:flex sm:justify-center sm:gap-6 text-lg">
          <p className="flex items-center"><span className="text-green-500 text-2xl mr-2">✔</span> Housewarming</p>
          <p className="flex items-center"><span className="text-green-500 text-2xl mr-2">✔</span> Wedding</p>
          <p className="flex items-center"><span className="text-green-500 text-2xl mr-2">✔</span> Event</p>
          <p className="flex items-center"><span className="text-green-500 text-2xl mr-2">✔</span> Birthday Party</p>
          <p className="flex items-center"><span className="text-green-500 text-2xl mr-2">✔</span> Corporate</p>
          <p className="flex items-center"><span className="text-green-500 text-2xl mr-2">✔</span> Private Party</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
