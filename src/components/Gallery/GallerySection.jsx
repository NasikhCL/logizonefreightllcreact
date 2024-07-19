import React from "react";
import gal1 from "../../Images/gal1.jpeg";
import gal2 from "../../Images/gal2.jpeg";
import gal3 from "../../Images/gal3.jpeg";
import gal4 from "../../Images/gal4.jpeg";
export const GallerySection = () => {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
        <img
          src={gal1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
        <img
          src={gal2}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Wintry Mountain Landscape"
        />
      </div>
      <div className="col-lg-6 mb-4 mb-lg-0">
        <img
          src={gal3}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Mountains in the Clouds"
        />
        <img
          src={gal4}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>
      {/* <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Waves at Sea"
        />
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Yosemite National Park"
        />
      </div> */}
    </div>
  );
};
