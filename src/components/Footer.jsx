import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
      </div>
      <p>&copy; 2023 Restaurant. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;