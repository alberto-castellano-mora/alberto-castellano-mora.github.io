import React from "react";
import "../styles/About.css";
import pic_at_cern from "../assets/pic_at_cern.jpg";
import ResearchPositions from "../components/ResearchPositions.jsx";
import Education from "../components/Education.jsx";
import AwardsAndGrants from "../components/AwardsAndGrants.jsx";

function About() {
  return (
    <div className="aboutme">
      <div className="aboutme_1">
        <div className="aboutme_left">
          <div className="aboutme_title">About Me</div>
          <div className="aboutme_text">
              ​I am a fellow at the Kadanoff Center for Theoretical Physics and an associate fellow at the Kavli Institute for Cosmological Physics (KICP). I completed my Ph.D. at the Institute for Theoretical Physics (IFT - UAM-CSIC) in Madrid under the supervision of Professor Luis Ibáñez. During my doctoral studies, I also spent three months as a visiting researcher at CERN.
              <br />
              My work focuses on String Theory, String Phenomenology and Quantum Gravity. I am also interested in (supersymmetric) Quantum Field Theories, as well as the interplay between String Theory, Holography and Mathematics.
          </div>
          <button className="button_aboutme">
              <a
                href="/Alberto-CV-Sept-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button_link"
              >
                Download full CV
              </a>                
          </button>
        </div>
        <div className="aboutme_right">
          <img src={pic_at_cern} alt="CernPic" className="pic_at_cern" />
        </div>
      </div>
      <ResearchPositions />
      <Education />
      <AwardsAndGrants />
    </div>
  );
}

export default About;