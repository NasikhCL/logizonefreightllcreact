import React from "react";
import LogoSvg from "../LogoSvg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div
        className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <LogoSvg height={140} width={170} />
              <p>
                LOGIZONE FREIGHT LLC is a 2024 launched dynamic freight
                forwarding company based in Dubai, backed by people experienced
                with years in freight and logistics industry.
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-square me-1"
                  href="https://x.com/logizonefreight"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-square me-1"
                  href="https://www.facebook.com/logisol"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-square me-1"
                  href="https://www.instagram.com/logizone_freight/"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="btn btn-square me-0"
                  href="www.linkedin.com"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Address</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3" />
                LOGIZONE FREIGHT LLC, 4th Floor, Office No: 53, Al Musallah
                Tower, Bur Dubai, Dubai, UAE
              </p>
              <p>
                <i className="fa fa-phone-alt me-3" />
                <a
                  href="tel:+971-4-8325501"
                  className="p-0 m-0"
                  style={{ color: "#A7A8B4" }}
                >
                  +971-4-8325501
                </a>
              </p>
              <p>
                <i className="fa fa-envelope me-3" />
                info@logizonefreight.com
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <Link className="btn btn-link" to="/about">
                About Us
              </Link>
              <Link className="btn btn-link" to="/contact">
                Contact Us
              </Link>
              <Link className="btn btn-link" to="/services">
                Our Services
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <a href="#">Logizone Freight LLC</a>, All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end designedBy">
                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                Designed By <a href="https://htmlcodex.com">HTML Codex</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Start */}

      {/* Copyright End */}
    </div>
  );
};

export default Footer;
