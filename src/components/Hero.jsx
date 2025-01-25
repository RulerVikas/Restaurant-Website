import React from "react";
import { motion } from "framer-motion";
import restaurantBg from "../assets/restaurant-bg.jpg"; // Import the background image

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero"
      style={{ background: `url(${restaurantBg}) no-repeat center center/cover` }}
    >
      <div className="hero-overlay"></div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to Our Restaurant</h1>
        <p>Delicious food, cozy ambiance</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Explore Menu
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;