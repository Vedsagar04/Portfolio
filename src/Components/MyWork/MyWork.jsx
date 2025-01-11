import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import project1 from "../../assets/Calculator.png";
import project2 from "../../assets/ToDolist.png";

const MyWork = () => { 
    return (
        
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="pattern" />
            </div>
            <div className="mywork-container">
                <a href="https://calculator-xi-nine-42.vercel.app/" ><img src={project1} alt="project" /></a>
                <a href="https://to-do-list-jade-sigma.vercel.app/" ><img src={project2} alt="project" /></a>
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="pattern" />
            </div>
        </div>
    );    
};

export default MyWork
