import React from "react";
import Footer from "../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import Brudcrubs from "../components/Brudcrubs";

const About = () => {
  return (
    <div>
     <Brudcrubs PageName='About'/>
      {/* Header End */}
      {/* top section */}
      <div className="container-fluid team py-5">
        <div className="container py-5">
          <div className="section-title  wow fadeInUp" data-wow-delay="0.1s">
            <div className="sub-style">
              <h4 className="sub-title px-3 mb-0">Introduction</h4>
            </div>
            <h1 className="display-3 ">
              Empowering Future Doctors through knowledge
            </h1>
            <p className="mb-0">
              At logizone, we believe that the journey of a healthcare professional
              is marked by continuous learning, growth, and excellence. As
              doctors ourselves, we understand the challenges and opportunities
              inherent in the pursuit of medical education and career
              advancement. That's why we are passionate about providing
              comprehensive guidance and support to aspiring medical students at
              every stage of their journey.
            </p>
          </div>
        </div>
      </div>
      {/* end top section */}
      <div className="container-fluid pb-2">
        <div className="container py-2">
          <div className="row gx-0 mb-3 mb-lg-0">
            <div className="col-lg-6 my-lg-5 py-lg-5">
              <div className="about-start bg-primary p-5">
                <h1 className="display-5 mb-4">Our Approach</h1>
                <p className="text-light">
                  Driven by a commitment to excellence and a deep understanding
                  of the healthcare landscape, logizone offers a unique blend of
                  medical expertise, personalized support, and innovative
                  solutions. With our team of experienced doctors leading the
                  way, we aim to empower medical professionals to reach their
                  full potential, achieve their career aspirations, and make a
                  meaningful impact in the field of healthcare.
                </p>
                <NavLink to={"/contact"}>
                  <div className="btn btn-primary bg-dark rounded-pill text-white py-3 px-5">
                  Contact Now
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6" style={{ minHeight: 400 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src="img/bbb.jpg"
                  alt='logizone'
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
          <div className="row gx-0">
            <div className="col-lg-6" style={{ minHeight: 400 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src="img/about2.jpg"
                  alt='logizone'
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 my-lg-5 py-lg-5">
              <div className="about-end bg-primary p-5">
                <h1 className="display-5 mb-4">What Sets Us Apart</h1>
                <p className="text-light">
                  At logizone , we recognize that each individual's path in
                  medicine is unique. That's why we take a personalized approach
                  to every client, tailoring our services to meet their specific
                  needs, goals, and aspirations.We are a group of doctors who
                  were once in your shoes , here to guide you every step of the
                  way.
                </p>
                <NavLink to={"/contact"}>
                  <div className="btn btn-primary bg-dark rounded-pill text-white py-3 px-5">
                    Contact Now
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service Start */}

      <div
        className="container-fluid testimonial py-4 wow zoomInDown"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="section-title mb-2">
            <div className="sub-style">
              <h2 className="sub-title text-white px-3 mb-0">Our Services</h2>
            </div>
          </div>
          <div className="testimonial-carousel ">
            <div className="testimonial-item">
              <div className="testimonial-inner p-3">
                <p className="text-white fs-7">
                  From career counseling to university selection and academic
                  advising to exam preparation, logizone offers a comprehensive
                  range of services designed to support medical students at
                  every stage of their career journey. With a focus on
                  excellence, integrity, and professionalism, we are committed
                  to providing the highest quality of support and guidance to
                  help you succeed in your medical education and beyond.
                </p>

                <div className="text-center">
                  <NavLink to={"/service"}>
                    <div className="btn btn-primary rounded-pill text-white py-3 px-5 bg-dark">
                      More Services
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
