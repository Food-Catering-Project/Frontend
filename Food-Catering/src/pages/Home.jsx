
import EventSection from "../components/EventSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import RestaurantList from "../components/RestaurantList";
import TasteDifference from "../components/TasteDifference";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <EventSection />
      <TasteDifference />
      <RestaurantList />
       <Menu/>
      {/* <Footer/> */}

    </div>
  );
};

export default Home;

