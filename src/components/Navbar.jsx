import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-left">
            Alberto Castellano Mora, PhD
        </div>

        <div className="navbar-right">
            <Link to="/" className="nav-link">
                Home
            </Link>
            <Link to="/about" className="nav-link">
                About Me
            </Link>
            <Link to="https://albertocastellanom.wixsite.com/alberto-castellano-m/research" className="nav-link">
                Research
            </Link>
            <Link to="https://albertocastellanom.wixsite.com/alberto-castellano-m/teaching" className="nav-link">
                Teaching
            </Link>
            <Link to="https://albertocastellanom.wixsite.com/alberto-castellano-m/scientific-outreach" className="nav-link">
                Scientific Outreach
            </Link>
            <Link to="https://albertocastellanom.wixsite.com/alberto-castellano-m/perks" className="nav-link">
                Perks
            </Link>

        </div>
    </nav>
  );
}

export default Navbar;