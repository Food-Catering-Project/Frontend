// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { FiTrash2 } from "react-icons/fi";
// import { updateQuantity, removeItem } from "../redux/CartSlice";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const cart = useSelector((state) => state.cart.items);

//     // const handleUpdateQuantity = (menuId, change) => {
//     //     const item = cart.find((item) => item.menuId === menuId);
//     //     if (item) {
//     //         dispatch(updateQuantity({ menuId, quantity: item.quantity + change }));
//     //     }
//     // };
//     const handleUpdateQuantity = (menuId, change) => {
//         const item = cart.find((item) => item.menuId === menuId);
//         if (item) {
//             const updatedQuantity = item.quantity + change;
//             if (updatedQuantity <= 0) {
//                 dispatch(removeItem(menuId));  // Remove item if quantity is 0 or less
//             } else {
//                 dispatch(updateQuantity({ menuId, quantity: updatedQuantity }));
//             }
//         }
//     };


//     const handleRemoveItem = (menuId) => {
//         dispatch(removeItem(menuId));
//     };

//     const getTotalPrice = () => {
//         return cart.reduce((total, item) => total + item.totalPrice, 0);
//     };

//     const handleCheckout = () => {
//         if (cart.length === 0) {
//             alert("Your cart is empty. Please add items before proceeding.");
//             return;
//         }
//         navigate("/checkout");
//     }

//     if (cart.length === 0) {
//         return (
//             <div className="text-center py-10 text-lg font-medium text-gray-600">
//                 Your cart is empty.
//             </div>
//         );
//     }

//     return (
//         <motion.div
//             className="w-full py-16 px-4 sm:px-16 bg-gray-50"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//         >
//             <div className="max-w-6xl mx-auto">
//                 <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">Your Cart</h2>

//                 <div className="space-y-4">
//                     {cart.map((item) => (
//                         <motion.div
//                             key={item.menuId}
//                             className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-between"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                         >
//                             <div className="flex items-center space-x-4">
//                                 <img
//                                     src={item.imgUrl}
//                                     alt={item.menuName}
//                                     className="w-20 h-20 object-cover rounded-md"
//                                 />
//                                 <div>
//                                     <h3 className="text-xl font-semibold text-gray-800">{item.menuName}</h3>
//                                     <p className="text-sm text-gray-500">{item.category}</p>
//                                     <div className="mt-2 flex items-center gap-4">
//                                         <button
//                                             onClick={() => handleUpdateQuantity(item.menuId, -1)}
//                                             className="text-xl text-gray-600 hover:text-gray-800"
//                                         >
//                                             -
//                                         </button>
//                                         <span className="text-lg font-semibold">{item.quantity}</span>
//                                         <button
//                                             onClick={() => handleUpdateQuantity(item.menuId, 1)}
//                                             className="text-xl text-gray-600 hover:text-gray-800"
//                                         >
//                                             +
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="flex items-center space-x-6">
//                                 <p className="text-lg font-bold text-orange-600">₹ {item.totalPrice}</p>
//                                 <button
//                                     onClick={() => handleRemoveItem(item.menuId)}
//                                     className="text-red-600 hover:text-red-800"
//                                 >
//                                     <FiTrash2 className="text-2xl" />
//                                 </button>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>

              
//                 <div className="mt-8 flex justify-between items-center">
//                     <p className="text-xl font-semibold">Total: ₹ {getTotalPrice()}</p>
//                     <button
//                         onClick={handleCheckout}  // Use handleCheckout function here
//                         className="px-8 py-3 bg-orange-600 text-white text-lg rounded-lg hover:bg-orange-700 transition duration-300"
//                     >
//                         Proceed to Checkout
//                     </button>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default Cart;
