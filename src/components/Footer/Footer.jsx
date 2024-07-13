import React from "react";
import LogoSvg from "../LogoSvg";

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
                <a className="btn btn-square me-1" href="www.twitter.com">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square me-1" href="www.facebook.com">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square me-1" href="www.youtube.com">
                  <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-square me-0" href="www.linkedin.com">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Address</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3" />
                LOGIZONE FREIGHT LLC 107, AL FAHAD 4, DAMASCUS STREET, AL
                QUSAIS, DUBAI, UNITED ARAB EMIRATES PO BOX- 121170
              </p>
              <p>
                <i className="fa fa-phone-alt me-3" />
                <a
                  href="tel:048325821"
                  className="p-0 m-0"
                  style={{ color: "#A7A8B4" }}
                >
                  04 8325821
                </a>
              </p>
              <p>
                <i className="fa fa-envelope me-3" />
                admin@logizonefreight.com
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Our Services
              </a>
              <a className="btn btn-link" href="">
                Terms &amp; Condition
              </a>
              <a className="btn btn-link" href="">
                Support
              </a>
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
