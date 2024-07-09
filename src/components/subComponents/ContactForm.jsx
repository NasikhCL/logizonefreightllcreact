import React, {  useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
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
    <div className="container-fluid appointment ">
      <div className="container py-5">
        <div className="row  align-items-center">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2">
            <div className="section-title text-start">
              <h2 className="sub-title pe-3 mb-4">Get Started Today</h2>
              <h4 className="text-muted">
                Ready to take the first step towards achieving your medical
                dreams? Contact us today to learn more about our services and
                how we can help you embark on your journey to success.
              </h4>
            </div>
          </div>

          <div className="col-lg-12 wow fadeInRight" data-wow-delay="0.4s">
            <div className="appointment-form rounded p-5">
              <p className="fs-4 text-uppercase text-primary">Get In Touch</p>
              <form autoComplete="off" ref={form} onSubmit={sendEmail}>
                <div className="row gy-3 gx-4">
                  <div className="col-xl-6">
                    <input
                      type="text"
                      className="form-control py-3 border-primary bg-transparent text-dark"
                      placeholder="First Name"
                      name="name"
                      required
                      id="name"
                    />
                  </div>
                  
                  <div className="col-xl-6">
                   
                    <input
                      type="phone"
                      className="form-control py-3 border-primary bg-transparent"
                      placeholder="Phone"
                      name="phone"
                      id="phone"
                      required
                    />
                  </div>
                   <div className="col-xl-12">
                   <input
                   type="email"
                   className="form-control py-3 border-primary bg-transparent text-dark"
                   placeholder="Email"
                   name="email"
                   required
                   id="email"
                 />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-primary bg-transparent text-dark"
                      id="message"
                      cols={30}
                      rows={5}
                      placeholder="Message"
                      name="message"
                      defaultValue={""}
                
            
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary text-white w-100 py-3 px-5"
                    >
                      SUBMIT NOW
                    </button>
                  </div>
                 
                </div> 
                {isSubmitted && (
                  <p className="col-12 text-center text-success fw-bold my-2 p-3 border bg-white rounded">
                    Form submitted successfully!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
