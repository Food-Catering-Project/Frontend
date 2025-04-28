

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart, toggleCart, clearCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react'; //( lucide-react )
import { FaTrash } from "react-icons/fa";


const CartSidebar = () => {
  const { cartItems, isCartOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  const handlePlaceOrder = () => {
    dispatch(clearCart());
    dispatch(toggleCart());
    navigate("/order-placed");
  };

  const handleCloseCart = () => {
    dispatch(clearCart());
    dispatch(toggleCart());
  };

  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-6 transition-transform duration-300 z-50 ${isCartOpen && cartItems.length > 0 ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={handleCloseCart} className="text-gray-700 hover:text-black text-2xl">
          <X /> 
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-col gap-4 mb-6 overflow-y-auto h-[70%]">
            {cartItems.map((item) => (
              <div key={item.menuId} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="font-semibold">{item.menuName}</h3>
                  <p className="text-sm text-gray-500">₹{item.price} x {item.quantity}</p>
                  <p className="text-sm font-semibold">₹{item.totalPrice}</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <button onClick={() => dispatch(increaseQuantity(item.menuId))} className="px-2 py-1 bg-green-500 text-white rounded">+</button>
                  <button onClick={() => dispatch(decreaseQuantity(item.menuId))} className="px-2 py-1 bg-red-500 text-white rounded">-</button>
                  <button onClick={() => dispatch(removeFromCart(item.menuId))} className="text-red-500 text-xs underline">remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Total: ₹{totalAmount}</h3>
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
