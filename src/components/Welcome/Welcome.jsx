import React from "react";

const WelcomeSection = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <p className="">WELCOME TO</p>
              <h2 className="display-6 text-primary mb-4">
                Logizone Freight LLC
              </h2>
              {/* <div class="row g-4 mb-4">
                      <div class="col-sm-6">
                          <div class="d-flex align-items-center">
                              <img class="flex-shrink-0 me-3" src="img/icon/icon-04-primary.png" alt="">
                              <h5 class="mb-0">Flexible Insurance Plans</h5>
                          </div>
                      </div>
                      <div class="col-sm-6">
                          <div class="d-flex align-items-center">
                              <img class="flex-shrink-0 me-3" src="img/icon/icon-03-primary.png" alt="">
                              <h5 class="mb-0">Money Back Guarantee</h5>
                          </div>
                      </div>
                  </div> */}
              <p className="mb-4">
                Logizone Freight LLC is a 2024 launched dynamic freight
                forwarding company based in Dubai, backed by people experienced
                with years in freight and logistics industry. We offer a
                comprehensive package of freight services, such as air, sea,
                road freight and multimodal transport with our vast network. We
                have a network reach spanning Africa, Far East, Middle East,
                USA, Europe, and the Indian Sub Continent. We can arrange
                warehousing and value-added services for various products
                through our outsourced and well connected network in UAE and the
                rest of world.
              </p>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex align-items-center">
                  <img
                    className="flex-shrink-0 rounded-circle me-3"
                    src="img/profile.jpg"
                    alt=""
                  />
                  <h5 className="mb-0">Call Us: +012 345 6789</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div
              className="position-relative overflow-hidden rounded h-100"
              style={{ minHeight: 400 }}
            >
              <img
                className="w-100 h-100"
                src="https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
