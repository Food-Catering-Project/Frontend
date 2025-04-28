import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../redux/cartSlice';

const FloatingCartButton = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <button
      onClick={() => dispatch(toggleCart())}
      className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 z-50 flex items-center justify-center relative"
    >
      🛒
      {cartItems.length > 0 && (
        <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {cartItems.length}
        </span>
      )}
    </button>
  );
};

export default FloatingCartButton;
