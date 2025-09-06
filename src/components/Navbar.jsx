import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

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
                <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
                <Link to="/about" className="nav-link" onClick={handleLinkClick}>About Me</Link>
                <Link to="/research" className="nav-link" onClick={handleLinkClick}>Research</Link>

                <a 
                    href="https://albertocastellanom.wixsite.com/alberto-castellano-m/teaching" 
                    className="nav-link" 
                    onClick={handleLinkClick}
                >
                    Teaching
                </a>
                <a 
                    href="https://albertocastellanom.wixsite.com/alberto-castellano-m/scientific-outreach" 
                    className="nav-link" 
                    onClick={handleLinkClick}
                >
                    Scientific Outreach
                </a>
                <a 
                    href="https://albertocastellanom.wixsite.com/alberto-castellano-m/perks" 
                    className="nav-link" 
                    onClick={handleLinkClick}
                >
                    Perks
                </a>
            </div>
        </nav>
    );
}

export default Navbar;