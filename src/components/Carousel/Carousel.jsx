import React from "react";
import service1 from "../../Images/carousel-1.jpeg";
import service2 from "../../Images/carousel-2.jpeg";
import service3 from "../../Images/carousel-3.jpeg";
import service4 from "../../Images/carousel-4.jpeg";
import service5 from "../../Images/carousel-5.jpeg";
import { Link } from "react-router-dom";
const Carousel = () => {
  return (
    <div className="container-fluid p-0" style={{ marginTop: "96px" }}>
      <div
        id="header-carousel"
        className="carousel slide carousel-container"
        data-bs-ride="carousel"
        data-bs-interval={5000}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              rel="preload"
              className="w-100 carousel-image"
              src={service1}
              alt="carousel"
            />
            <div className="carousel-caption">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-6 margin-top-laptop-screen">
                    <h1
                      className="display-3 mb-3  animated slideInDown text-e-one"
                      style={{
                        color: "white !important",
                        background: "rgba(0, 0, 0, 0.5)",
                        padding: "3px",
                      }}
                    >
                      LOGIZONE FREIGHT LLC
                    </h1>
                    <p
                      className="mb-5"
                      style={{
                        background: "rgba(0, 0, 0, 0.5)",
                        padding: "3px",
                      }}
                    >
                      We introduce ourselves as one of the aggressive and unique
                      entry in freight forwarding industry in DUBAI, established
                      in the United Arab Emirates having own office in Dubai,
                      and having reliable network with our business partners in
                      the world especially in FAR EAST REGION.
                    </p>
                    <Link to="/contact" className="btn btn-primary py-3 px-5">
                      ENQUIRE NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              rel="preload"
              loading="eager"
              className="w-100 carousel-image"
              src={service2}
              alt="carousel"
            />
            <div className="carousel-caption">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-6 margin-top-laptop-screen">
                    <h1
                      className="display-3 mb-3 animated slideInDown text-e-one"
                      style={{
                        color: "white !important",
                        background: "rgba(0, 0, 0, 0.5)",
                        padding: "3px",
                      }}
                    >
                      LOGIZONE FREIGHT LLC
                    </h1>
                    <p
                      className=" mb-5"
                      style={{
                        background: "rgba(0, 0, 0, 0.5)",
                        padding: "3px",
                      }}
                    >
                      We introduce ourselves as one of the aggressive and unique
                      entry in freight forwarding industry in DUBAI, established
                      in the United Arab Emirates having own office in Dubai,
                      and having reliable network with our business partners in
                      the world especially in FAR EAST REGION.
                    </p>
                    <Link to="/contact" className="btn btn-primary py-3 px-5">
                      ENQUIRE NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              rel="preload"
              loading="eager"
              className="w-100 carousel-image"
              src={service3}
              alt="carousel"
            />
            <div className="carousel-caption">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-6 margin-top-laptop-screen">
                    <h1
                      className="display-3 mb-3 animated slideInDown text-e-one "
                      style={{
                        color: "white !important",
                        background: "rgba(0, 0, 0, 0.5)",
                        padding: "3px",
                      }}
                    >
                      LOGIZONE FREIGHT LLC
                    </h1>
                    <p
                      className=" mb-5"
                      style={{
                        color: "white !important",
                        background: "rgba(0, 0, 0, 0.5)",
                        padding: "3px",
                      }}
                    >
                      We introduce ourselves as one of the aggressive and unique
                      entry in freight forwarding industry in DUBAI, established
                      in the United Arab Emirates having own office in Dubai,
                      and having reliable network with our business partners in
                      the world especially in FAR EAST REGION.
                    </p>
                    <Link to="/contact" className="btn btn-primary py-3 px-5">
                      ENQUIRE NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              rel="preload"
              loading="eager"
              className="w-100 carousel-image"
              src={service4}
              alt="carousel"
            />
            <div className="carousel-caption">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-6 margin-top-laptop-screen">
                    <h1
                      className="display-3 mb-3 animated slideInDown text-e-one"
                      style={{
                        color: "white !important",
                        background: "rgba(0, 0, 0, 0.5)",
                        padding: "3px",
                      }}
                    >
                      LOGIZONE FREIGHT LLC
                    </h1>
                    <p
                      className=" mb-5"
                      style={{
                        background: "rgba(0, 0, 0, 0.5)",
                        padding: "3px",
                      }}
                    >
                      We introduce ourselves as one of the aggressive and unique
                      entry in freight forwarding industry in DUBAI, established
                      in the United Arab Emirates having own office in Dubai,
                      and having reliable network with our business partners in
                      the world especially in FAR EAST REGION.
                    </p>
                    <Link to="/contact" className="btn btn-primary py-3 px-5">
                      ENQUIRE NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              rel="preload"
              className="w-100 carousel-image"
              src={service5}
              alt="caorusel"
            />
            <div className="carousel-caption">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-6 margin-top-laptop-screen">
                    <h1
                      className="display-3 mb-3 animated slideInDown text-e-one"
                      style={{
                        color: "white !important",
                        background: "rgba(0, 0, 0, 0.5)",
                        padding: "3px",
                      }}
                    >
                      LOGIZONE FREIGHT LLC
                    </h1>
                    <p
                      className="mb-5"
                      style={{
                        background: "rgba(0, 0, 0, 0.5)",
                        padding: "3px",
                      }}
                    >
                      We introduce ourselves as one of the aggressive and unique
                      entry in freight forwarding industry in DUBAI, established
                      in the United Arab Emirates having own office in Dubai,
                      and having reliable network with our business partners in
                      the world especially in FAR EAST REGION.
                    </p>
                    <Link to="/contact" className="btn btn-primary py-3 px-5">
                      ENQUIRE NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
