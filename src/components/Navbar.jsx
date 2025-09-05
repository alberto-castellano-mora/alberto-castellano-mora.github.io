import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                Alberto Castellano Mora, PhD
            </div>

            <button 
                className="menu-toggle"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About Me</Link>
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