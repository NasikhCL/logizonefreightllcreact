import React from "react";
import ServicesSection from "../components/Services/ServicesSection";
const Service = ({ serviceType }) => {
  const serviceImageObject = {
    "air-freight": [
      "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    "sea-freight": [
      "https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2231744/pexels-photo-2231744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2231743/pexels-photo-2231743.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/221322/pexels-photo-221322.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    "inland-transportation": [
      "https://images.pexels.com/photos/2449454/pexels-photo-2449454.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6169662/pexels-photo-6169662.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    "warehouse-distribution": [
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  };

  return (
    <div style={{ marginTop: "110px" }}>
      <div
        className="container-fluid  our-mission-container my-5 py-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/23221406/pexels-photo-23221406/free-photo-of-container-ship-on-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        }}
      >
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="flex align-items-center justify-content-center fadeIn"
              data-wow-delay="0.3s"
            >
              <h1 className="display-6 text-white mb-3 our-mission">
                {serviceType?.toUpperCase() || "Our Services"}
              </h1>
              <p
                className=" text-white mb-5"
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Logizone freight llc provides wide range of services
              </p>
            </div>
          </div>
        </div>
      </div>
      {!serviceType && <ServicesSection />}
    </div>
  );
};

export default Service;
