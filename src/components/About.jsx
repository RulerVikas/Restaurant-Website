import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Our Sweet Journey</h2>
          <p>
            At Restaurant, we blend culinary artistry with heartfelt hospitality. 
            Founded in 2010 by master chef Elena Marquez, our kitchen crafts 
            unforgettable experiences on every plate. From farm-fresh ingredients 
            to innovative flavor combinations, we celebrate both tradition and 
            modernity in every bite.
          </p>
          <p>
            Our team of passionate chefs transforms simple meals into edible 
            masterpieces, with desserts that dance between nostalgia and 
            contemporary flair. That chocolate cake you see? It's just a glimpse 
            of our commitment to creating moments worth savoring.
          </p>
        </motion.div>

        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://img.freepik.com/free-photo/3d-delicious-cartoon-chocolate-cake_23-2151447469.jpg" 
            alt="Signature Chocolate Cake" 
          />
          <div className="image-glow"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;