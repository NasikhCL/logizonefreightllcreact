import React from "react";
import { Link } from "react-router-dom";

const Brudcrubs = ({ PageName }) => {
  return (
    <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: 900 }}>
        <h3
          className="text-white display-3 mb-4 wow fadeInDown"
          data-wow-delay="0.1s"
        >
          {PageName}
        </h3>
        <ol
          className="breadcrumb justify-content-center mb-0 wow fadeInDown"
          data-wow-delay="0.3s"
        >
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active text-primary">{PageName}</li>
        </ol>
      </div>
    </div>
  );
};

export default Brudcrubs;
