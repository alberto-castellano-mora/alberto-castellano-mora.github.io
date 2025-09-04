import React from "react";
import f_logo from "../assets/uchicagologo.png";
import ContactIcons from "./Contacticons.jsx";

function Footer() {
  return (
    <foot className="footer">
        <div className="footer-up">
            <div className="footer-left">
                <div className="footer-title">Contact Information</div>
                <br />
                Kadanoff Center for Theoretical Physics
                <br /><br />
                Fourth Floor <br /> 933 E 56th St. <br /> Chicago, IL, 60637
                <br />
                <ContactIcons />
            </div>
            <img src={f_logo} alt="Logo" className="f_logo" />
        </div>

        <div className="footer-low">
            © {new Date().getFullYear()} Powered by T. Lobo 
        </div>
    </foot>
  );
}

export default Footer;