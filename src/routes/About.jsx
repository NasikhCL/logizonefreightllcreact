import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import Brudcrubs from "../components/Brudcrubs";
import aboutImage from "../Images/feature.jpg";
import testimonial1 from "../Images/testimonial-1.jpg";
import testimonial2 from "../Images/testimonial-2.jpg";
import testimonial3 from "../Images/testimonial-3.jpg";
import WOW from "wowjs";
const About = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  return (
    <div>
      <Brudcrubs PageName="About" />
      {/* Header End */}
      {/* top section */}
      <div
        className="container-fluid team"
        style={{
          paddingTop: "3rem !important",
          paddingBottom: "2rem !important",
        }}
      >
        <div className="container">
          <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
            <div className="sub-style">
              <h4 className="sub-title px-3 mb-0" style={{ fontSize: "10px" }}>
                GET TO KNOW US
              </h4>
            </div>
            <h1 className="display-3 ">About US</h1>
            <p className="mb-0">
              We introduce ourselves as one of the aggressive and unique entry
              in freight forwarding industry in DUBAI, established in the United
              Arab Emirates having own office in Dubai, and having reliable
              network with our business partners in the world especially in FAR
              EAST REGION. We have specialized in container movements having
              efficient infrastructure & staff to serve with outmost
              satisfaction, promptness and reliability to meet our customer
              requirements for all kind of cargo movements all over the world.
            </p>
          </div>
        </div>
      </div>
      {/* end top section */}
      <div className="container-fluid pb-2">
        <div className="container py-2">
          <div className="row gx-0 mb-3 mb-lg-0">
            <div className="col-lg-6 my-lg-5 py-lg-5">
              <div className="about-start bg-primary p-4">
                <h1 className="display-5 mb-4">Who we are</h1>
                <p className="text-light">
                  LOGIZONE FREIGHT LLC is launched with precise aim and vision
                  which is managed by well experienced and dedicated team of
                  professionals with extensive knowledge in all aspects of
                  shipping industry. We are committed to personalized services
                  to its customers. Choice on us will provide tailor made
                  service meeting the expected level from top to bottom customer
                  line. We offer a wide range of shipping and cargo related
                  services to a diverse regional and international clientele
                  through a network of agent offices worldwide
                </p>
                {/* <NavLink to={"/contact"}>
                  <div className="btn btn-primary bg-dark rounded-pill text-white py-3 px-5">
                    Contact Now
                  </div>
                </NavLink> */}
              </div>
            </div>
            <div className="col-lg-6" style={{ minHeight: 200 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src="https://images.pexels.com/photos/4391478/pexels-photo-4391478.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="logizone"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <div className="row gx-0">
            <div className="col-lg-6" style={{ minHeight: 200 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="logizone"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="col-lg-6 my-lg-5 py-lg-5">
              <div className="about-end bg-primary p-5">
                <h1 className="display-5 mb-4">Our Mission</h1>
                <p className="text-light">
                  We aim to be positively unique in the service industry by
                  delivering customized support. LOGIZONE FREIGHT LLC will take
                  every service as an accomplishment of satisfaction rather than
                  handling it as a process.
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-0 mb-3 mb-lg-0">
            <div className="col-lg-6 my-lg-5 py-lg-5">
              <div className="about-start bg-primary p-5">
                <h1 className="display-5 mb-4">Our Vision</h1>
                <p className="text-light">
                  Our vision is to make LOGIZONE FREIGHT LLC , the name our
                  customers demand to associate with. We look forward to engrave
                  ourselves in this industry within shortest span of time
                  keeping our valuable policies.
                </p>
                {/* <NavLink to={"/contact"}>
                  <div className="btn btn-primary bg-dark rounded-pill text-white py-3 px-5">
                    Contact Now
                  </div>
                </NavLink> */}
              </div>
            </div>
            <div className="col-lg-6" style={{ minHeight: 200 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src="https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="logizone"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service Start */}

      <>
        {/* Testimonial Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center mx-auto" style={{ maxWidth: 500 }}>
              <h1 className="display-6 mb-5">Experienced Team</h1>
            </div>
            <div className="row g-5">
              <div className="col-lg-3 d-none d-lg-block">
                <div className="testimonial-left h-100">
                  <img
                    className="img-fluid animated pulse infinite"
                    src={testimonial1}
                    alt="logizone-about"
                  />
                  <img
                    className="img-fluid animated pulse infinite"
                    src={testimonial2}
                    alt="logizone-about"
                  />
                  <img
                    className="img-fluid animated pulse infinite"
                    src={testimonial3}
                    alt="logizone-about"
                  />
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn">
                <div className="">
                  <div className="testimonial-carousel text-center">
                    <p className="fs-5" style={{ color: "white !important" }}>
                      LOGIZONE FREIGHT LLC is managed by most experienced and
                      dedicated team of professionals with extensive knowledge
                      in all aspects of shipping industry. Our operation staffs
                      are experienced in handling over large volume container
                      movements, especially cross trade movements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 d-none d-lg-block">
                <div className="testimonial-right h-100">
                  <img
                    className="img-fluid animated pulse "
                    src={testimonial1}
                    alt="logizone-about"
                  />
                  <img
                    className="img-fluid animated pulse "
                    src={testimonial2}
                    alt="logizone-about"
                  />
                  <img
                    className="img-fluid animated pulse"
                    src={testimonial3}
                    alt="logizone-about"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
      </>
    </div>
  );
};

export default About;
