import React from "react";

const FloatingIcons = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/12346576", "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+1234567890", "_self");
  };
  return (
    <div>
      <div className="d-flex justify-content-between ">
        <div
          className="whatsapp-button back-to-top"
          onClick={handleWhatsAppClick}
        >
          <img src="img/whatsapp.png" width={60} data-toggle="tooltip" data-placement="top" title="Let's Chat" alt="whatsapp"/>
        </div>
        <div className="phone-button back-to-top" onClick={handlePhoneClick}>
          <div className="btn  btn-lg-square " >
            {" "}
            <img src="img/phone.png" width={50} className="rounded-circle border border-white border-3" data-toggle="tooltip" data-placement="top" title="Talk to Us" alt="phone"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingIcons;
