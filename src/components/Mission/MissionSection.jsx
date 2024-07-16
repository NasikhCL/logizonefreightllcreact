import React from "react";
import { Link } from "react-router-dom";
const MissionSection = () => {
  return (
    <div
      className="container-fluid  our-mission-container my-5 py-5 wow fadeIn"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/11555089/pexels-photo-11555089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div
            className="flex align-items-center justify-content-center fadeIn"
            data-wow-delay="0.3s"
          >
            <h1 className="display-6 text-white mb-5 our-mission">
              Our Mission is to Provide cost-effective and sustainable solutions
            </h1>
            {/* <p class="text-white mb-5">Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna.</p> */}
            {/* <div class="bg-white rounded our-mission"> */}
            <div
              className="d-flex align-items-center justify-content-center bg-primary rounded p-3"
              style={{
                width: "fit-content",
                margin: "auto",
                cursor: "pointer",
              }}
            >
              <Link to="/contact">
                <p className="text-white text-center mb-0">GET IN TOUCH</p>
              </Link>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
