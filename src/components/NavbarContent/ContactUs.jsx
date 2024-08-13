import React from "react";
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <div>
      <div className="contact">
        <div className="contact-container">
          <div className="contact-main-title">Contact Us</div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1792.3896833201118!2d72.81935340373637!3d19.04683299525906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90047e198d7%3A0x37be239cf249c13f!2sMannat%20(Shah%20Rukh%20Khan&#39;s%20House)!5e1!3m2!1sen!2sus!4v1719137096017!5m2!1sen!2sus"
              width="1000"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              id="myFrame"
              title="myFrame"
            ></iframe>
          </div>

          <form action="https://formspree.io/f/myzggwvq" method="POST">
            <input
              type="text"
              placeholder="Name"
              name="userName"
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              id=""
              required
              autoComplete="off"
            />
            <textarea
              rows={5}
              cols={30}
              placeholder="Enter Your Meassage"
              name="Message"
              id="message"
              required
              autoComplete="off"
            />
            <input type="submit" value="Send" className="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
