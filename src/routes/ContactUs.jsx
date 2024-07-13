import React, { useRef, useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WOW from "wowjs";
const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_iu3ydqt", "template_0ymjouh", form.current, {
        publicKey: "ZXq_lBWloeMwMFr5o",
      })
      .then(
        (result) => {
          // console.log("SUCCESS!", result.text);
          // Reset the form fields after successful submission
          form.current.reset();
          // Update state to indicate submission success
          setIsSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-4 animated slideInDown mb-4">Contact Us</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
      {/* Contact Start */}
      <div className="container-xxl">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <h1 className="display-6 mb-5">
                If You Have Any Query, Please Contact Us
              </h1>
              <p className="mb-4">
                We are here to help you with everything you need.
              </p>
              <div className="col-lg-6 col-md-6">
                <h2>Address</h2>
                <p>
                  <i className="fa fa-map-marker-alt me-3" />
                  LOGIZONE FREIGHT LLC 107, AL FAHAD 4, DAMASCUS STREET, AL
                  QUSAIS, DUBAI, UNITED ARAB EMIRATES PO BOX- 121170
                </p>
                <p>
                  <i className="fa fa-phone-alt me-3" />
                  <a
                    href="tel:048325821"
                    className="text-gray p-0 m-0"
                    style={{ color: "#696E77" }}
                  >
                    04-8325821
                  </a>
                </p>
                <p>
                  <i className="fa fa-envelope me-3" />
                  admin@logizonefreight.com
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: 450 }}
            >
              <div className="position-relative rounded overflow-hidden h-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31161.94696388662!2d74.98400649999999!3d12.50002155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba482155de6aad1%3A0x3a07d5464844020a!2sKasaragod%2C%20Kerala!5e0!3m2!1sen!2sin!4v1720362781839!5m2!1sen!2sin"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
};

export default ContactUs;
