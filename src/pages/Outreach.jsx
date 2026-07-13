import React from "react";
import "../styles/Outreach.css";
import outreach_cover from "../../public/outreach_cover.png";
import trivul_shirt from "../assets/trivulgando_shirt.avif";
import trivul_team from "../assets/trivulgando.avif";
import eu_night from "../assets/european_research_night.avif";
import hs_talk from "../assets/highschool_talk.avif";

function Outreach() {
  return (
    <div className="outreach">

      <div className="outreach-hero">
        <img src={outreach_cover} alt="" className="outreach-hero-img" aria-hidden="true" />
        <div className="outreach-hero-overlay">
          <div className="outreach-hero-card">
            <h1 className="outreach-title">Scientific Outreach</h1>
            <p className="outreach-intro-text">
              I really enjoy not only doing science, but also communicating it and
              helping to bring scientific knowledge to society, especially to younger audiences.
            </p>
          </div>
        </div>
      </div>

      {/* Trivulgando 2023 */}
      <div className="outreach-entry">
        <div className="outreach-entry-text">
          <div className="outreach-entry-date">June 2023</div>
          <h2 className="outreach-entry-name">Trivulgando 2023</h2>
          <p className="outreach-entry-desc">
            Organization and collaboration in this annual outreach activity at
            the Residencia de Estudiantes del CSIC.
          </p>
        </div>
        <div className="outreach-entry-visuals">
          <div className="outreach-placeholder">
            <img src={trivul_shirt} alt="trishirt" className="trivul_shirt" />
          </div>
          <div className="outreach-placeholder">
            <img src={trivul_team} alt="trivul_team" className="trivul_team" />
          </div>
        </div>
      </div>

      {/* European Researcher's Night */}
      <div className="outreach-entry alt">
        <div className="outreach-entry-text">
          <div className="outreach-entry-date">September 2022</div>
          <h2 className="outreach-entry-name">European Researcher's Night</h2>
          <p className="outreach-entry-desc">
            Organization and collaboration with the IFT in this annual outreach
            activity at the Campus of the Universidad Autónoma de Madrid.
          </p>
        </div>
        <div className="outreach-entry-visuals">
          <div className="outreach-placeholder">
            <img src={eu_night} alt="eu_researchers_night" className="eu_night" />
          </div>
        </div>
      </div>

      {/* Feynman Diagrams */}
      <div className="outreach-entry">
        <div className="outreach-entry-text">
          <div className="outreach-entry-date">November 2022</div>
          <h2 className="outreach-entry-name">Feynman Diagrams, from Scratch</h2>
          <p className="outreach-entry-desc">
            Video created for the IFT YouTube channel, accumulating
            over <strong>55K views</strong>.
          </p>
        </div>
        <div className="outreach-video-placeholder">
          <iframe className="feynman_diag_video"
                src="https://www.youtube.com/embed/wuU6vlI35nA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                ></iframe>
        </div>
      </div>

      {/* Quantum Animals */}
      <div className="outreach-entry alt">
        <div className="outreach-entry-text">
          <div className="outreach-entry-date">November 2021</div>
          <h2 className="outreach-entry-name">Quantum Animals &amp; Where to Find Them</h2>
          <p className="outreach-entry-desc">
            Educational presentation delivered at IES Arquitecto Ventura Rodríguez,
            a high school in Madrid.
          </p>
        </div>
        <div className="outreach-entry-visuals">
          <div className="outreach-placeholder">
            <img src={hs_talk} alt="highschool_talk" className="hs_talk" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Outreach;
