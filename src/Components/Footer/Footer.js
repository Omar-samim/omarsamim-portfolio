import React from "react";
import "./Footer.css";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import logo from "../../assets/logo.PNG";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          {/* <h1 className="logo">Omar Samim</h1> */}
          <p>
            I am a frontend developer from Afghanistan with 2+ years of
            experience{" "}
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-right">
          <div>
            <h3>Term of Services</h3>
            <p>Frontend web development</p>
            <p>Freelancing</p>
            <p>UI Developing</p>
            <p>Digital Marketing</p>
            <p>Web Hosting</p>
          </div>
          <div>
            <h3>Connect with me</h3>
            <div className="contact-detail">
              <img src={mail_icon} alt="" style={{ width: "23px" }} />{" "}
              <p>
                <a href="mailto:omarsamim640@gmail.com">
                  omarsamim640@gmail.com
                </a>
              </p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="" style={{ width: "23px" }} />
              <p>
                <a href="callto:0093772503243">0093-772503243</a>
              </p>
            </div>
            <div className="contact-detail">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                style={{
                  width: "30px",
                  height: "30px",
                  marginTop: "10px",
                }}
              />
              <a
                href="https://wa.me/93772503243"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with me on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-bottom-left">
        &copy; 2024 Omar Smim. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
