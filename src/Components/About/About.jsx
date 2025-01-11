import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import image from "../../assets/image.jpg";


const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="pattern" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={image} alt="profile" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Passionate web developer with expertise in JavaScript, React, and responsive design. Dedicated to creating user-friendly applications that enhance user experiences.</p>
                        <p>Lifelong learner committed to continuous growth and innovation.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>CSS</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}}/></div> 
                    </div>
                </div>
            </div>        
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>Months of Experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>Happy Clients</p>
                </div>
                
            </div>
        </div>
    );
}

export default About;