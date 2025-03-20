import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import WeddingCatering from "./pages/WeddingCatering";
import BulkFoodDelivery from "./pages/BulkFoodDelivery";
import HousePartyCatering from "./pages/HousePartyCatering";
import BirthdayPartyCatering from "./pages/BirthdayPartyCatering";
import CorporateCatering from "./pages/CorporateCatering";
import AnyOtherOccasion from "./pages/AnyOtherOccasion";
import AboutUs from "./pages/AboutUs";
import Offer from "./pages/Offer";
import RestaurantRegister from "./pages/Admin/RestaurantRegister";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path="/offer" element={<Offer />} />
        <Route path="/restaurant-register" element={<RestaurantRegister/>}/>
        <Route path="/wedding-catering" element={<WeddingCatering />} />
        <Route path="/bulk-food-delivery" element={<BulkFoodDelivery />} />
        <Route path="/house-party-catering" element={<HousePartyCatering />} />
        <Route path="/birthday-party-catering" element={<BirthdayPartyCatering />} />
        <Route path="/corporate-catering" element={<CorporateCatering />} />
        <Route path="/any-other-occasion" element={<AnyOtherOccasion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
