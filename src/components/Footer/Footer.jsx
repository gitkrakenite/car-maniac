import React, { useState } from "react";
import "./footer.css";

const Footer = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };
  return (
    <div>
      {/* contact */}
      <div className="footerWrapperContact">
        {success ? (
          <>
            <div className="flex flex-col bg-red-600 flex-1 rounded-lg pt-[3em] pl-[4em] text-white">
              <h1 className="text-4xl mb-[1em]">Thank you for reaching out</h1>
              <p className="text-lg">Check your email for feedback</p>
            </div>
          </>
        ) : (
          <div className="footerContactForm">
            <h1>Contact Us Here</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Title of inquiry" />
              <textarea type="text" placeholder="Enter your message" />
              <button onClick={handleSubmit}>Send</button>
            </form>
          </div>
        )}
        {/* maps */}
        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.830874665455!2d36.77897851526517!3d-1.2747547359745068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19fd9b65c0ef%3A0xbac0db1b9cbf73e!2sArchives%20Tower%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1673620337852!5m2!1sen!2ske"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* Useful links */}
      <div className="footerWrapper">
        <div className="footerWrapperItem">
          <ul>
            <li>RACES</li>
            <li>Customization</li>
            <li>Purchase</li>
            <li>Imports</li>
            <li>Refurbished</li>
          </ul>
        </div>
        <div className="footerWrapperItem">
          <ul>
            <li>Careers</li>
            <li>Portfolio</li>
            <li>FAQ</li>
            <li>Fines</li>
            <li>Inquires</li>
          </ul>
        </div>
        <div className="footerWrapperItem">
          <ul>
            <li>Models</li>
            <li>Rent your car</li>
            <li>Terms & Conditions</li>
            <li>Partnerships</li>
            <li>Our Articles</li>
          </ul>
        </div>
        <div className="footerWrapperItem">
          <ul>
            <li>Contribute</li>
            <li>Insights</li>
            <li>Community</li>
            <li>Events</li>
            <li>Accounts</li>
          </ul>
        </div>
      </div>
      <div className="footerSeparator"></div>
      <div className="flex flex-wrap gap-[20px] mb-[1em] items-center">
        <a href="#">
          <img
            src="https://www.hulu.com/static/hitch/static/icons/facebook.svg"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src="https://www.hulu.com/static/hitch/static/icons/twitter.svg"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src="https://www.hulu.com/static/hitch/static/icons/youtube.svg"
            alt=""
          />
        </a>
        <p>Copyright &copy; 2023. All rights reserved.</p>
      </div>
      {/*  */}
    </div>
  );
};

export default Footer;
