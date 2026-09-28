import React from "react";
import "../styles/About.css";
import uchilogo2 from "../assets/uchicagologo2.png";
import harvardlogo from "../assets/Harvard-logo.png";

function ResearchPositions() {
  return (
    <div className="researchpos">
        <div className="respos-title">Research Positions</div>
        <div className="respos1">
            <div className="respos1-left">
                <div className="respos1-date">2026-Present</div>
                <div className="respos1-title">Postdoctoral Researcher</div>
                <div className="respos1-text">
                    Jefferson Physical Laboratory
                    <br />
                    Harvard University, USA
                </div>
            </div>
            <div className="respos1-mid">
                <div className="respos1-title">Postdoctoral Fellow at C. Vafa´s Group</div>
                <div className="respos1-text">
                    Keep up with my latest work in my {' '}
                    <a href="https://inspirehep.net/authors/1926078?ui-citation-summary=true" target="_blank" rel="noopener noreferrer">
                        Inspire page
                    </a>.
                </div>
            </div>
            <div className="respos1-right">
                <img src={harvardlogo} alt="HarvardUniversityLogo" className="harvardlogo" />
            </div>
        </div>
        <div className="respos1">
            <div className="respos1-left">
                <div className="respos1-date">2024-2026</div>
                <div className="respos1-title">Postdoctoral Researcher</div>
                <div className="respos1-text">
                    EFI and KICP
                    <br />
                    University of Chicago, USA
                </div>
            </div>
            <div className="respos1-mid">
                <div className="respos1-title">Kadanoff fellow at EFI and KICP Associate fellow</div>
                <div className="respos1-text">
                    Keep up with my latest work in my {' '}
                    <a href="https://inspirehep.net/authors/1926078?ui-citation-summary=true" target="_blank" rel="noopener noreferrer">
                        Inspire page
                    </a>.
                </div>
            </div>
            <div className="respos1-right">
                <img src={uchilogo2} alt="UniversityChicagoLogo" className="uchilogo2" />
            </div>
        </div>
    </div>
    );
}

export default ResearchPositions;