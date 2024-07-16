import React from "react";
import { Link } from "react-router-dom";
const ConsultationSection = () => {
  return (
    <div
      className="container-fluid appointment my-5 py-3 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
            <h1 className="display-6 text-white mb-5">
              Contact us for our freight forwarding services
            </h1>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div
              className=" d-flex align-items-center"
              style={{ height: "90%", width: "fit-content" }}
            >
              <Link to="/contact">
                <div className="bg-white p-3">
                  <h5 className="p-0 m-0" style={{ color: "#00318e" }}>
                    FREE CONSULTATION
                  </h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationSection;
