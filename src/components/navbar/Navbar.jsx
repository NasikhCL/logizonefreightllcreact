import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import $ from "jquery";
import LogoSvg from "../LogoSvg";
import "owl.carousel/dist/assets/owl.carousel.css";

const Navbar = () => {
  const [active, setactive] = useState("/");

  const handleSetactive = (path) => {
    setactive(path);
  };
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    handleSetactive(location.pathname);
  }, []);
  const location = useLocation();

  return (
    <nav className="navbar  navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
      <Link to="/home" className="navbar-brand d-flex align-items-center">
        <div style={{ display: "flex", alignItems: "center", height: "auto" }}>
          <LogoSvg height={100} width={120} />
        </div>
      </Link>
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
          <Link
            to="/"
            onClick={() => handleSetactive("/")}
            className={`nav-item nav-link ${active === "/" && "active"}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => handleSetactive("/about")}
            className={`nav-item nav-link ${active === "/about" && "active"}`}
          >
            About Us
          </Link>
          {/* <a href="service" class="nav-item nav-link">Our Services</a> */}
          <Link
            to="/services"
            onClick={() => handleSetactive("/services")}
            className={`nav-item nav-link ${
              active === "/services" && "active"
            }`}
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => handleSetactive("/contact")}
            className={`nav-item nav-link ${active === "/contact" && "active"}`}
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="btn btn-primary px-3 d-none d-lg-block add-hover-color">
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
          Call Any Time {` `}
        </p>
        <a href="tel:+971-4-8325501" className="text-white p-0 m-0">
          +971-4-8325501
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
