import React from "react";
import "../styles/Research.css";
import blackhole from "../assets/blackhole.jpg";
import rcover_img from "../assets/home-cover.jpg";

function ResearchIn() {
  return (
    <div className="ResearchIn">
        <div className="ResearchIn_1">
            <img src={rcover_img} alt="CoverImg" className="rcover_img" />
            <div className="research_interests">
                <h1 className="RI_title">Reseatch Interests</h1>
                <div className="RI_text">
                    My research lies at the intersection between <u>Quantum 
                    Gravity, String Theory and Particle Physics</u>.
                    <br /><br />
                    I am interested in essentially all aspects of high energy 
                    physics. Lately, I have been focusing on trying to 
                    understand several criteria that any Effective Quantum 
                    Field Theory (EFT) must satisfy in order to be compatible 
                    with Quantum Gravity at high energies. To do so, I mainly 
                    study and look for certain universal features that all 
                    consistent string theory constructions share, as well as 
                    try to understand the underlying physical principles behind 
                    them.
                    <br /><br />
                    I am also extremely interested in <u>black hole physics</u> and 
                    what it can teach us about Quantum Gravity, regardless 
                    of String Theory.
                    <br /><br />
                    For a <strong>list of my publications</strong>, check out 
                    my <strong>INSPIRE</strong> page:
                </div>
                <button className="button_research">
                    <a
                        href="https://inspirehep.net/authors/1926078?ui-citation-summary=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button_link"
                    >
                        See Publications list
                    </a>                
                </button>
                <img src={blackhole} alt="BlackHole" className="blackhole" />
            </div>
        </div>
        <div className="SeminarTalks">
            <h1 className="ST_title">Seminar and Talks</h1>
            <b className="ST_text">
                In this section you will find a selection of recorded talks. You 
                can find the resto of recorded talks in my {' '}
                    <a href="https://www.youtube.com/@albertocastellano97" target="_blank" rel="noopener noreferrer">
                        YouTube page
                    </a>.
            </b>
            <div className="ST_component">
                <div className="ST_text">
                    <em>Nov 2023</em>
                    <br />
                    <strong>"A Universal Pattern in Quantum Gravity"</strong>
                    <br />
                    Invited Talk, (Online) Seminal Series on String Phenomenology.
                </div>
                <iframe className="ST_video"
                src="https://www.youtube.com/embed/aVO3kLqwXAw?si=pU0dGCMUYibdnJ_3"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                ></iframe>
            </div>

            <div className="ST_component">
                <div className="ST_text">
                    <em>Feb 2023</em>
                    <br />
                    <strong>"How Can Gravity Emerge?"</strong>
                    <br />
                    Invited Talk, (Online) Seminar Series on String Phenomenology.
                </div>
                <iframe className="ST_video"
                src="https://www.youtube.com/embed/6eV5i4HZBvY?si=KKZ7Zd5CmCcUtjLy"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                ></iframe>
            </div>

            <div className="ST_component">
                <div className="ST_text">
                    <em>Feb 2022</em>
                    <br />
                    <strong>"IR/UV Mixing and the Swampland"</strong>
                    <br />
                    Invited Talk, (Online) Seminar Series on String Phenomenology.
                </div>
                <iframe className="ST_video"
                src="https://www.youtube.com/embed/6Ox3NHDb_CI?si=TZCnBJufjha_tK0S"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                ></iframe>
            </div>

            <div className="ST_final_component">
                You can find the complete list of talks and seminars 
                (recorded and unrecorded) in my CV.
                <br />

                <button className="button_research">
                    <a
                        href="/Alberto-CV-Sept-2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button_link"
                    >
                        See CV
                    </a>                
                </button>

            </div>
            


        </div>
    </div>
  );
}

export default ResearchIn;