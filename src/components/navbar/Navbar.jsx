import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import LogoSvg from "../LogoSvg";
import "owl.carousel/dist/assets/owl.carousel.css";

const Navbar = () => {
  // const [active, setactive] = useState("/");

  // const handleSetactive = (path) => {
  //   setactive(path);
  // };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    // Sticky Navbar
    const handleScroll = () => {
      if ($(window).scrollTop() > 45) {
        $(".navbar").addClass("sticky-top shadow-sm");
      } else {
        $(".navbar").removeClass("sticky-top shadow-sm");
      }
    };
    $(window).on("scroll", handleScroll);

    // Back to top button
    const handleBackToTop = () => {
      if ($(window).scrollTop() > 300) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeIn("slow");
      }
    };
    $(window).on("scroll", handleBackToTop);

    // Cleanup
    return () => {
      $(window).off("scroll", handleScroll);
      $(window).off("scroll", handleBackToTop);
    };
  }, []);

  return (
    <nav className="navbar  navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
      <a href="index" className="navbar-brand d-flex align-items-center">
        <div style={{ display: "flex", alignItems: "center", height: "auto" }}>
          <LogoSvg />
        </div>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
          <a href="index" className="nav-item nav-link active">
            Home
          </a>
          <a href="about" className="nav-item nav-link">
            About Us
          </a>
          {/* <a href="service" class="nav-item nav-link">Our Services</a> */}
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Our Services
            </a>
            <div className="dropdown-menu bg-light border-0 m-0">
              <a href="feature" className="dropdown-item">
                Air Freight
              </a>
              <a href="appointment" className="dropdown-item">
                Sea Freight
              </a>
              <a href="team" className="dropdown-item">
                Inland Transportation
              </a>
              <a href="testimonial" className="dropdown-item">
                Warehouse &amp; Distribution
              </a>
              {/* <a href="404" class="dropdown-item">404 Page</a> */}
            </div>
          </div>
          <a href="contact" className="nav-item nav-link">
            Contact Us
          </a>
        </div>
      </div>
      <div className="btn btn-primary px-3 d-none d-lg-block">
        <p className="p-0 m-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="22px"
            viewBox="0 -960 960 960"
            width="22px"
            fill="#FFFFFF"
          >
            <path d="M795-120q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.29 12.86-32.14Q145.71-840 165-840h140q14 0 24 10t14 25l26.93 125.64Q372-665 369.5-653.5t-10.73 19.73L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.15-15 13.15-4 25.85-2l119 26q15 4 25 16.04 10 12.05 10 26.96v135q0 19.29-12.86 32.14Q814.29-120 795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z" />
          </svg>
          Call Any Time
        </p>
        <a href="" className="text-white p-0 m-0">
          +91 9988334335
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
