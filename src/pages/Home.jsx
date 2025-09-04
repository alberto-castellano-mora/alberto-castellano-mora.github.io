import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";
import cover_img from "../assets/home-cover.jpg";
import ContactIcons from "../components/Contacticons.jsx";

function Home() {  
  return (
    <div className="home">
        <div className="image-container">
            <img src={cover_img} alt="CoverImg" className="cover_img" />
            <img src={profile} alt="ProfilePic" className="profile" />
        </div>
        <div className="self_intro">
            <div className="home_title">Alberto Castellano, PhD</div>
            <div className="home_subtitle">Postdoctoral Researcher - EFI, Chicago</div>
            <ContactIcons />
            <div className="self_intro_text">
                Hello there! I am Alberto, a theoretical physicist currently based in Chicago, United States, where I work at the Enrico Fermi Institute (University of Chicago).
                <br />
                <br />
                In this website you will find some information about my research, education, and contact details.
                <br />
                <br />
                I hope you find it useful!
                <br />
            </div>
            <button className="button_home">
                <Link to="/about" className="button_link">
                    Read More
                </Link>                
            </button>
        </div>
    </div>
  );
}

export default Home;