import React from "react";
import "../styles/About.css";
import iftlogo from "../assets/iftlogo.jpg";
import cambridgelogo from "../assets/cambridgelogo.png";
import uamlogo from "../assets/uamlogo.jpg";

function Education() {
  return (
    <div className="education">
        <div className="respos-title">Education</div>
        <div className="respos1">
            <div className="respos1-left">
                <div className="respos1-date">2020-2024</div>
                <div className="respos1-title">PhD in Theoretical Physics</div>
                <div className="respos1-text">
                    IFT-CSIC
                    <br />
                    Universidad Autónoma de Madrid, Spain
                </div>
            </div>
            <div className="respos1-mid">
                <div className="respos1-text">
                    Conducted my PhD studies under the supervision of Prof. Luis Ibáñez on the topic
                    of <strong>String Theory, String Phenomenology and the Swampland Program</strong>.
                    <br />
                    You can find my thesis manuscript here: {' '}
                    <a href="https://arxiv.org/pdf/2409.10003" target="_blank" rel="noopener noreferrer">
                        The Quantum Gravity Scale and the Swampland
                    </a>.
                </div>
            </div>
            <div className="respos1-right">
                <img src={iftlogo} alt="IFTLogo" className="iftlogo" />
            </div>
        </div>

        <div className="respos1">
            <div className="respos1-left">
                <div className="respos1-date">2019-2020</div>
                <div className="respos1-title">MAST in Applied Mathematics and Theoretical Physics</div>
                <div className="respos1-text">
                    Cambridge University, UK
                </div>
            </div>
            <div className="respos1-mid">
                <div className="respos1-text">
                    Studied a 1-year masters degree in Theoretical Physics and Mathematics, with 
                    specialization in <strong>High Energy Physics and Gravitation</strong>.
                </div>
            </div>
            <div className="respos1-right">
                <img src={cambridgelogo} alt="CambridgeLogo" className="cambridgelogo" />
            </div>
        </div>

        <div className="respos1">
            <div className="respos1-left">
                <div className="respos1-date">2015-2019</div>
                <div className="respos1-title">B.Sc Physics</div>
                <div className="respos1-text">
                    Universidad Autónoma de Madrid, Spain
                </div>
            </div>
            <div className="respos1-mid">
                <div className="respos1-text">
                    Studied a 4-year degree on Physical Sciences with <strong>specialization in 
                    Theoretical Physics</strong>. I combined my studies with a research collaboration at 
                    the Institute for Theoretical Physics in Madrid. Finished top of my class.
                </div>
            </div>
            <div className="respos1-right">
                <img src={uamlogo} alt="UAMLogo" className="uamlogo" />
            </div>
        </div>
    </div>
    );
}

export default Education;