import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Restaurant</h1>
      <ul className="nav-links">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="menu" smooth={true} duration={500}>Menu</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;