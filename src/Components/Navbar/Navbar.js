import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import logo from "../../assets/logo.PNG";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <div className="logo">
        <a href="#home">
          {/* <p onClick={() => setMenu("home")}>Omar<span> Samim</span></p> */}
          <p onClick={() => setMenu("home")}>
            {" "}
            <img src={logo} className="logo-img" alt="logo"></img>{" "}
          </p>
        </a>
      </div>
      <img src={menu_open} alt="" onClick={openMenu} className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt=""
          onClick={closeMenu}
          className="nav-mob-close"
        />
        <li>
          {" "}
          <a href="#home" offset={50}>
            {" "}
            <p onClick={() => setMenu("home")}>Home</p>{" "}
            {menu === "home" ? <img src={underline} alt="" /> : <></>}
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#about" offset={50}>
            {" "}
            <p onClick={() => setMenu("about")}>About Me</p>{" "}
            {menu === "about" ? <img src={underline} alt="" /> : <></>}
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#services" offset={50}>
            <p onClick={() => setMenu("services")}>Services</p>{" "}
            {menu === "services" ? <img src={underline} alt="" /> : <></>}{" "}
          </a>{" "}
        </li>
        <li>
          <a href="#work" offset={50}>
            <p onClick={() => setMenu("work")}>Projects</p>{" "}
            {menu === "work" ? <img src={underline} alt="" /> : <></>}
          </a>{" "}
        </li>
        <li>
          <a href="#contact" offset={50}>
            <p onClick={() => setMenu("contact")}>Contact</p>{" "}
            {menu === "contact" ? <img src={underline} alt="" /> : <></>}
          </a>{" "}
        </li>
      </ul>
      {/* <div className="nav-connect"><a href="#contact" offset={50}>Connect With Me</a></div> */}
    </div>
  );
}

export default Navbar;
