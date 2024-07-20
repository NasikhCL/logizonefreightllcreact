import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Navbar from "./components/navbar/Navbar";
import Spinner from "./components/Spinner";

import "animate.css";
import { useEffect, useState } from "react";
import ContactUs from "./routes/ContactUs";
import NotFound from "./routes/NotFound";
import { ScrollToTopOnPageChange } from "./components/ScrollToTopOnPageChange";
import WOW from "wowjs";
import Footer from "./components/Footer/Footer";
function App() {
  const [loading, setLoading] = useState(false); // Initially set to false
  const location = useLocation();
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  useEffect(() => {
    setLoading(true); // Set loading to true when location changes

    const spinnerTimeout = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(spinnerTimeout);
  }, [location]); // Re-trigger effect when location changes
  return (
    <div className="overflow-hidden">
      {loading && <Spinner />}

      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        {/* <Route
          path="/services/air-freight"
          element={<Service serviceType="air-freight" />}
        />
        <Route
          path="/services/sea-freight"
          element={<Service serviceType="sea-freight" />}
        />
        <Route
          path="/services/inland-transportation"
          element={<Service serviceType="inland-transportation" />}
        />
        <Route
          path="/services/warehouse-distribution"
          element={<Service serviceType="warehouse-distribution" />}
        /> */}
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/university" element=<University /> /> */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ScrollToTopOnPageChange />
      <Footer />
    </div>
  );
}

export default App;
