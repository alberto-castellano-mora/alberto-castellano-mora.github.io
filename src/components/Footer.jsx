import React from "react";
import "../styles/Footer.css";
import f_logo from "../assets/Harvard_University_footer.webp";
import ContactIcons from "./Contacticons.jsx";

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-up">
            <div className="footer-left">
                <div className="footer-title">Contact Information</div>
                <br />
                Jefferson Physical Laboratory <br /> Harvard University
                <br /><br />
                Office 456 <br /> 17 Oxford St. <br /> Cambridge, MA, 02138
                <br />
                <ContactIcons />
            </div>
            <img src={f_logo} alt="Logo" className="f_logo" />
        </div>

        <div className="footer-low">
            © {new Date().getFullYear()} Powered by T. Lobo
        </div>
    </footer>
  );
}

export default Footer;