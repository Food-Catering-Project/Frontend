
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurants }) => {
    const carouselRef = useRef(null);
  
    const scrollLeft = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
    };
  
    const scrollRight = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    };
  
    return (
      <div className="relative w-full">
  
        <div className="flex items-center  ">
          <button
            onClick={scrollLeft}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 mr-2"
          >
            <FaArrowLeft />
          </button>
  
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth"
          >
            {restaurants.map((restaurant) => (
              <Link
                to={`/restaurant-details/${restaurant.restaurantId}`}
                key={restaurant.restaurantId}
                className="min-w-[250px] bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
              >
                <img
                  src={restaurant.imgUrl}
                  alt={restaurant.name}
                  className="w-full h-40 object-cover rounded mb-2 hover:scale-110 transform transition duration-300"
                />
                <h3 className="text-lg font-bold  text-gray-800">{restaurant.name}</h3>
                <p className="text-sm text-gray-600">{restaurant.address}</p>
                <p className="text-orange-500 font-semibold">⭐{restaurant.rating}</p>
              </Link>
            ))}
          </div>
  
          <button
            onClick={scrollRight}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 ml-2"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    );
  };
  
  export default RestaurantCard;
