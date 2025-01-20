import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "../styles/About.css";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div style={{ scaleX }} className="progress-bar-animate" />
      <div className="about">
        <h2>About</h2>
            <div>
              <p>
                I'm a passionate front-end developer with an AS degree from Full
                Sail University. I love crafting dynamic, user-friendly web
                experiences, and I enjoy using the latest web technologies to
                bring ideas to life. I'm always looking to push the boundaries
                of design and functionality while ensuring clean, efficient
                code.
              </p>
            </div>
      </div>
    </>
  );
};

export default About;
