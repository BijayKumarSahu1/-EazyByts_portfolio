import React from "react";
import Button from "react-bootstrap/Button";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>
              Welcome to <span style={{ color: "#6c63ff" }}>Bijay's</span>{" "}
              Portfolio
            </h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>
              I am a motivated and ambitious learner in the software industry,
              equipped with a strong foundation in software development, a
              passion for technology, and a commitment to ongoing growth. I am
              confident that my skills, combined with my dedication to
              excellence, make me a valuable asset to any organization in the
              software industry.
            </p>
            <div>
              <Button variant="primary">
                <a
                  href="/BijayResume.pdf"
                  download={"BijayKumar_resume"}
                  className="resume"
                >
                  Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="right_div">
            <img src="hp.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
