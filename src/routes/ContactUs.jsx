import React, { useRef, useState } from "react";
import Footer from "../components/Footer/Footer";
import emailjs from "@emailjs/browser";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

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
    <div>
      <div>
        <div className="container-fluid contact py-5 mt-5">
          <div className="container py-5">
            <div
              className="section-title mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="sub-style mb-4">
                <h4 className="sub-title text-white px-3 mb-0">Contact Us</h4>
              </div>
              <h4 className="text-black fs-2">
                Embark on your Journey towards a Medical Education with Us. Your
                Gateway to a Brighter Future Starts Here.
              </h4>
            </div>

            {/*-------------------------form starts---------------------*/}
            <ToastContainer />
            <div className="row g-4 align-items-center">
              <div
                className="col-lg-5 col-xl-5 contact-form wow fadeInLeft"
                data-wow-delay="0.1s"
              >
                <h2 className="display-5 text-white mb-2">Get in Touch</h2>
                <p className="mb-4 text-white"></p>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row g-3">
                    <div className="col-lg-12 ">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent border border-white"
                          id="name"
                          placeholder="Your Name"
                          name="name"
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-lg-12 ">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control bg-transparent border border-white"
                          id="email"
                          placeholder="Your Email"
                          name="email"
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-lg-12 ">
                      <div className="form-floating">
                        <input
                          type="phone"
                          className="form-control bg-transparent border border-white"
                          id="phone"
                          placeholder="Phone"
                          name="phone"
                          required
                        />
                        <label htmlFor="phone">Your Phone</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control bg-transparent border border-white"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: 160 }}
                          defaultValue={""}
                          name="message"
                        />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-light text-primary w-100 py-3">
                        Send Message
                      </button>

                      {isSubmitted && (
                        <p className="col-12 text-center text-success fw-bold my-2 p-3 border bg-white rounded">
                          Form submitted successfully!
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              </div>

              <div
                className="col-lg-2 col-xl-2 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="bg-transparent rounded">
                  <div className="d-flex flex-column align-items-center text-center mb-4">
                    <div
                      className="bg-white d-flex align-items-center justify-content-center mb-3"
                      style={{ width: 90, height: 90, borderRadius: 50 }}
                    >
                      <i className="fa fa-map-marker-alt fa-2x text-primary" />
                    </div>
                    <h4 className="text-dark">Addresses</h4>
                    <p className="mb-0 text-white">Georgia</p>
                  </div>
                  <div className="d-flex flex-column align-items-center text-center mb-4">
                    <div
                      className="bg-white d-flex align-items-center justify-content-center mb-3"
                      style={{ width: 90, height: 90, borderRadius: 50 }}
                    >
                      <i className="fa fa-phone-alt fa-2x text-primary" />
                    </div>
                    <h4 className="text-dark">Mobile</h4>
                    <p className="mb-0 text-white">+012 345 67890</p>
                    <p className="mb-0 text-white">+012 345 67890</p>
                  </div>
                  <div className="d-flex flex-column align-items-center text-center">
                    <div
                      className="bg-white d-flex align-items-center justify-content-center mb-3"
                      style={{ width: 90, height: 90, borderRadius: 50 }}
                    >
                      <i className="fa fa-envelope-open fa-2x text-primary" />
                    </div>
                    <h4 className="text-dark">Email</h4>
                    <p className="mb-0 text-white">info@example.com</p>
                    <p className="mb-0 text-white">info@example.com</p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5 col-xl-5 wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <div className="d-flex justify-content-center mb-4">
                  <a
                    className="btn btn-lg-square btn-light rounded-circle mx-2"
                    href="/"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-lg-square btn-light rounded-circle mx-2"
                    href="/"
                  >
                    <i className="fab fa-whatsapp" />
                  </a>
                  <a
                    className="btn btn-lg-square btn-light rounded-circle mx-2"
                    href="/"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    className="btn btn-lg-square btn-light rounded-circle mx-2"
                    href="/"
                  >
                    <i className="fab fa-youtube" />
                  </a>
                </div>
                <div className="rounded h-100">
                  <iframe 
                  title="GEORGIA"
                    className="rounded w-100"
                    style={{ height: 500 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1205173.724319335!2d-83.61361889999999!3d32.641824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f55a5e4c048e81%3A0xe19e7b1b5a05fc3d!2sGeorgia%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/*-------------------------form ends---------------------*/}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
