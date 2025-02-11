/*import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data.js";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
    return (
        <div id="services" className="services">
            <div className="services-title">
                <h1>Services</h1>
                <img src={theme_pattern} alt="pattern" />
            </div>
            <div className="services-container">
                {Services_Data.map((service,index) => {
                    return <div key={index} className="services-format" >
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="pattern" />
                        </div>     
                    </div>
                })}
            </div>
        </div>
    );
};

export default Services;*/