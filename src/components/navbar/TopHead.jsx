import React from "react";

const TopHead = () => {
  return (
    <div>
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0 align-items-center" style={{ height: 45 }}>
          <div className="col-lg-8 text-center text-lg-start mb-lg-0">
            <div className="d-flex flex-wrap">
              <a href="/" className="text-light me-4">
                <i className="fas fa-map-marker-alt text-primary me-2" />
                Find A Location
              </a>
              <a href="/" className="text-light me-4">
                <i className="fas fa-phone-alt text-primary me-2" />
                +01234567890
              </a>
              <a href="/" className="text-light me-0">
                <i className="fas fa-envelope text-primary me-2" />
                Example@gmail.com
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-flex align-items-center justify-content-end">
              <a
                href="/"
                className="btn btn-light btn-square border rounded-circle nav-fill me-3"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="/"
                className="btn btn-light btn-square border rounded-circle nav-fill me-3"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="/"
                className="btn btn-light btn-square border rounded-circle nav-fill me-3"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://www.linkedin.com"
                className="btn btn-light btn-square border rounded-circle nav-fill me-0"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHead;
