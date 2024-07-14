import React from "react";
const Service = ({ serviceType }) => {
  return (
    <div style={{ marginTop: "110px" }}>
      <div
        className="container-fluid  our-mission-container my-5 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="flex align-items-center justify-content-center fadeIn"
              data-wow-delay="0.3s"
            >
              <h1 className="display-6 text-white mb-5 our-mission">
                {serviceType?.toUpperCase()}
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
                <p className="text-white text-center mb-0">GET IN TOUCH</p>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
