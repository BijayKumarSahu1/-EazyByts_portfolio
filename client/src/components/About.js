import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div
        className="container mb-3 about_container"
        style={{ minHeight: "100%" }}
      >
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet Bijay Kumar Sahu</h2>
            <p
              style={{
                color: "#666",
                letterSpacing: ".5px",
                marginTop: 2,
                lineHeight: 2,
              }}
            >
              I am a motivated and ambitious learner in the software industry,
              equipped with a strong foundation in software development, a
              passion for technology, and a commitment to ongoing growth. I am
              confident that my skills, combined with my dedication to
              excellence, make me a valuable asset to any organization in the
              software industry.
            </p>
          </div>
          <div className="right_container mt-3">
            <img src="bijay.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
