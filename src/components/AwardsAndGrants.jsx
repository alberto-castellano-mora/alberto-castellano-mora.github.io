import React from "react";
import "../styles/About.css";

function AwardsAndGrants() {
  return (
    <div className="grants">
        <div className="respos-title">Academic Awards and Grants</div>
        <div className="grants-text">
            <strong>Residencia de Estudiantes del CSIC grant</strong> - 2022-2023
            <br /> 
            This highly competitive scholarship at national level is supported by the 
            Ministerio de Ciencia e Innovación and provides for a 1-year stay at the 
            prestegious and historic CSIC Students Residence in Madrid, Spain.
        </div>

        <div className="grants-text">
            <strong>Predoctoral FPI grant</strong> - 2020-2024
            <br /> 
            Awarded the predoctoral FPI grant by the Ministerio de Eduación for a 
            4-year training in research, in association with the Consejo Superior de 
            Investigaciones Científicas (CSIC).
        </div>

        <div className="grants-text">
            <strong>Honorary Degree Award</strong> - 2019
            <br /> 
            Awarded by the Universidad Autónoma de Madrid for attaining the 
            highest overall graduation grade in the Physics' B.Sc in 2019.
        </div>

        <div className="grants-text">
            <strong>Student Collaboration Scholarship</strong> - 2018-2019
            <br /> 
            This competitive scholarship at national level was awarded by the 
            Ministerio de Eduación for a 1-year training in research.
            <br />            
            Financial envelope: 2000 euros.
        </div>

        <div className="grants-text">
            <strong>Excelence Scholarship</strong> - 2015-2019
            <br /> 
            Awarded by the Comunidad de Madrid, in recognition of my academic 
            achievements during the Bachelor degree.
            <br />
            Financial envelope: 12000 euros.
        </div>

    </div>
    );
}

export default AwardsAndGrants;