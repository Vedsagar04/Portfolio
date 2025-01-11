import React from "react";
import "./Hero.css";
import image from "../../assets/image.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={image} alt="profile" />
            <h1><span>Vedprakash Verma</span> <br /></h1><h2>Frontend Developer</h2>
            <p>"Creative Frontend Developer proficient in HTML, CSS, and JavaScript, creating responsive, user-friendly interfaces that enhance user experience and engagement."</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect With Me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    );
};

export default Hero;    
