import React from "react";
import featureImage from "../../Images/feature.jpg";
const JoinOurTeamSection = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="display-6 mb-5">- JOIN OUR TEAM -</h1>
            <p className="mb-4">
              Grassier global freight llc, 100 employees make their expertise a
              lever of excellence in serving customers the most demanding. They
              are ambassadors of the employer brand on land and Grassier global
              freight Under the flag of excellence. Earn customer trust by
              delivering operational excellence in complete safety: our
              employees and all our stakeholders.
              <br /> If you are interested? please share your CV.
            </p>
            <div className="row g-5">
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="bg-light rounded h-100 p-0">
                  <div className="bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-2 px-3">
                    <img
                      className="align-self-center mb-3 rounded"
                      style={{ width: "100%", height: "100%" }}
                      src="https://images.pexels.com/photos/7363096/pexels-photo-7363096.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="bg-light rounded h-100 p-0">
                  <div className="bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-2 px-3">
                    <img
                      className="align-self-center mb-3 rounded"
                      style={{ width: "100%", height: "100%" }}
                      src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="bg-light rounded h-100 p-0">
                  <div className="bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-2 px-3">
                    <img
                      className="align-self-center mb-3 rounded"
                      style={{ width: "100%", height: "auto" }}
                      src="https://images.pexels.com/photos/6392045/pexels-photo-6392045.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="bg-light rounded h-100 p-0">
                  <div className="bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-2 px-3">
                    <img
                      className="align-self-center mb-3 rounded"
                      style={{ width: "100%", height: "100%" }}
                      src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div
              className="position-relative rounded overflow-hidden h-100"
              style={{ minHeight: 400 }}
            >
              <img
                className="position-absolute w-100 h-100"
                src={featureImage}
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

export default JoinOurTeamSection;
