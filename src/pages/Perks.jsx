import React from "react";
import "../styles/Perks.css";
import perksCover from "../../public/calabiyau_C.png";
import koreaImg from "../assets/korea.avif";
import chicagoImg from "../assets/visits_chicago.png";
import caltechImg from "../assets/caltech_and_LA.png";
import beachImg from "../assets/talk_in_the_beach_simons.jpg";

const photos = [
  {
    src: beachImg,
    alt: "Talk at Simons workshop by the beach",
    year: "2026",
    caption: "Attended a talk by the beach during the Simons Summer Workshop — Long Island, NY",
  },
  {
    src: caltechImg,
    alt: "Caltech and Los Angeles",
    year: "2025",
    caption: "Two-week stay at Caltech — Pasadema & Los Angeles, CA",
  },
  {
    src: chicagoImg,
    alt: "Visits to Chicago",
    year: "2024 - 2026",
    caption: "Colleages visiting Chicago, IL",
  },
  {
    src: koreaImg,
    alt: "Seoul, South Korea",
    year: "2023",
    caption: "String Phenomenology Conference — Daejeon, South Korea",
  },
];

function Perks() {
  return (
    <div className="PerksPage">
      <div className="perks-cover-wrapper">
        <img src={perksCover} alt="Calabi-Yau manifold" className="perks-cover-img" />
      </div>

      <div className="perks-intro-card">
        <h1 className="perks-title">Perks of Being a Scientist</h1>
        <p className="perks-description">
          One of the best things about my job is the opportunity to travel around
          the world. I get to meet new people and learn from their research and
          culture.
        </p>
      </div>

      <div className="perks-gallery">
        {photos.map((photo) => (
          <div key={photo.year} className="perks-photo-card">
            <div className="perks-photo-wrapper">
              <img src={photo.src} alt={photo.alt} className="perks-photo" />
            </div>
            <div className="perks-caption">
              <span className="perks-year">{photo.year}</span>
              <span className="perks-caption-text">{photo.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Perks;
