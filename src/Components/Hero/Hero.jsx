import React from "react";
import "./Hero.css";
import image from "../../assets/image.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={image} alt="profile" />
            <h1><span>Vedprakash Verma</span> <br /></h1><h2>Frontend Developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis itaque asperiores quo eaque perferendis, quia tenetur. Debitis dolorum impedit eligendi dicta excepturi qui possimus natus autem laborum omnis inventore aliquid tenetur, molestiae cum, ex enim ratione quos unde quas adipisci voluptatibus voluptate provident temporibus quis. Quod deleniti labore maxime?</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect With Me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    );
};

export default Hero;    