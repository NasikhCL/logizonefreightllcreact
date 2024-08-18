import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import $ from "jquery";
import LogoSvg from "../LogoSvg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Make sure Bootstrap's JS is imported

const Navbar = () => {
  const [active, setActive] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  const collapseRef = useRef(null);

  const handleSetActive = (path) => {
    setActive(path);
    if (collapseRef.current && isOpen) {
      $(collapseRef.current).collapse("hide"); // Collapse the menu
      setIsOpen(false);
    }
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  useEffect(() => {
    handleSetActive(location.pathname);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <div style={{ display: "flex", alignItems: "center", height: "auto" }}>
          <LogoSvg height={80} width={120} />
        </div>
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        onClick={toggleNavbar}
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarCollapse"
        ref={collapseRef}
      >
        <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
          <Link
            to="/"
            onClick={() => handleSetActive("/")}
            className={`nav-item nav-link ${active === "/" && "active"}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => handleSetActive("/about")}
            className={`nav-item nav-link ${active === "/about" && "active"}`}
          >
            About Us
          </Link>
          <Link
            to="/services"
            onClick={() => handleSetActive("/services")}
            className={`nav-item nav-link ${
              active === "/services" && "active"
            }`}
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => handleSetActive("/contact")}
            className={`nav-item nav-link ${active === "/contact" && "active"}`}
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="btn btn-primary px-3 d-none d-lg-block add-hover-color">
        <a href="tel:+971-4-8325501" className="text-white p-0 m-0">
          <p className="p-0 m-0">Call Any Time {` `}</p>
          +971-4-8325501
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
