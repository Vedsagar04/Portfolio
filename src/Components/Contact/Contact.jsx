import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
        const onSubmit = async (event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
      
          formData.append("access_key", "61f6c70a-fd19-4e7d-a124-9a783c318830");
      
          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);
      
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
          }).then((res) => res.json());
      
          if (res.success) {
            alert(res.message);
          }
        };

    return (
        <div id="contact" className="contact">
            <div className="contact-title"> 
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'm currently to take on new projects, so feel free to send me message about anything that you want me to work on.You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="mail" /><p>vedprakashverma2603@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="call" /><p>+91 9770965379</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="mail" /><p>Indore India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Your Name" name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Your Email" name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message"  rows="8" placeholder="Your Message"></textarea>
                    <button className="contact-submit" type="submit">Send Message</button>
                </form>
            </div>  
        </div>
    )
}

export default Contact;