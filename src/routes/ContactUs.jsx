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
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ paddingTop: "120px" }}
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
                  LOGIZONE FREIGHT LLC, 4th Floor, Office No: 53, Al Musallah
                  Tower, Bur Dubai, Dubai, UAE
                </p>
                <p>
                  <i className="fa fa-phone-alt me-3" />
                  <a
                    href="tel:+971-4-8325501"
                    className="text-gray p-0 m-0"
                    style={{
                      color: "#696E77",
                      "&:hover": { background: "blue !important" },
                    }}
                  >
                    +971-4-8325501
                  </a>
                </p>
                <p>
                  <i className="fa fa-envelope me-3" />
                  info@logizonefreight.com
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.373861967431!2d55.29592547538376!3d25.258005977671843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433b903adf3b%3A0x9fb693268cbdbce1!2sAl%20Musallah%20Tower!5e0!3m2!1sen!2sin!4v1721143064198!5m2!1sen!2sin"
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
