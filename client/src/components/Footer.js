import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Bijay Kumar Sahu</h4>
            <p>© {year} Bijay All rights reserved</p>
            <p className="d-flex">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook mx-3"></i>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>Contact me for any type of service regarding web development.</p>
            <p>ku.bijaybpd@gmail.com</p>
            <p>+91 9861948792</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <a
              href="/BijayResume.pdf"
              download={"BijayKumar_resume"}
              className="resume"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
