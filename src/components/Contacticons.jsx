import React from "react";
import inspire from "../assets/inspire-icon.jpg";
import ytb from "../assets/youtubered-icon.png";
import email from "../assets/email-icon.png";
import "../styles/ContactIcons.css";

function ContactIcons() {
  return (
    <div className="contact">
        <a href="https://inspirehep.net/authors/1926078?ui-citation-summary=true" target="_blank" rel="noopener noreferrer">
            <img src={inspire} alt="Inspire" className="iconlink" />
        </a>
        <a href="https://www.youtube.com/@albertocastellano97" target="_blank" rel="noopener noreferrer">
            <img src={ytb} alt="Youtube" className="iconlink" />
        </a>
        <a href="mailto:alberto.castellano.mora@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={email} alt="Email" className="iconlink" />
        </a>
    </div>
    );
}

export default ContactIcons;