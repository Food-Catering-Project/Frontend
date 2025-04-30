// import React from 'react';
// import { Link } from 'react-router-dom';

// const OrderPlaced = () => {
//   return (
//     <div className="h-screen flex flex-col items-center justify-center text-center px-4">
//       <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 Order Placed Successfully!</h1>
//       <p className="text-lg text-gray-600 mb-6">Thank you for ordering. Your food will arrive soon. 
//         <span className='text-lg text-black mb-6 font-bold '> Cash on Delivery! </span></p>
//       <Link to="/" className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
//         Go to Home
//       </Link>
//     </div>
//   );
// };

// export default OrderPlaced;


import React from 'react';
import { Link } from 'react-router-dom';

const OrderPlaced = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50 space-y-6">
      {/* Bounce once on mount */}
      <h1 className="text-4xl font-bold text-green-600 animate-bounce">
        🎉 Order Placed Successfully!
      </h1>

      {/* Gentle pulse */}
      <p className="text-lg text-gray-600 animate-pulse">
        Thank you for ordering. Your food will arrive soon.&nbsp;
        <span className="text-lg text-black font-bold">Cash on Delivery!</span>
      </p>

      {/* Button with scale-on-hover + ping */}
      <Link
        to="/"
        className="relative inline-block px-6 py-2 bg-orange-500 text-white rounded-lg 
                   transform transition-transform duration-200 hover:scale-105"
      >
        Go to Home
        {/* ping dot */}
        <span className="absolute top-0 right-0 block w-3 h-3 bg-white rounded-full animate-ping" />
      </Link>
    </div>
  );
};

export default OrderPlaced;
