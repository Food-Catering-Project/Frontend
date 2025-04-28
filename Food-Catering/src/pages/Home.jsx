
import EventSection from "../components/EventSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
// import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
// import RestaurantList from "../components/RestaurantList";
import RestaurantFinalList from "../components/RestaurantsFetched/RestaurantFinalList";
import TasteDifference from "../components/TasteDifference";
import CustomerFeedback from "../components/CustomerFeedback";
import CateringOrder from "../components/CateringOrder";
import MapComponent from "../components/MapComponent";
import CartSidebar from "../components/RestaurantsFetched/CartSidebar";
// import FloatingCartButton from "../components/RestaurantsFetched/FloatingCartButton";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <EventSection />
      <TasteDifference />
      {/* <RestaurantList /> */}
       {/* <Menu/> */}
      <RestaurantFinalList/>
      <CartSidebar/>
      {/* <FloatingCartButton/> */}
       <CustomerFeedback/>
       <CateringOrder/>
       <MapComponent/>
      <Footer/>
    </div>
  );
};

export default Home;

