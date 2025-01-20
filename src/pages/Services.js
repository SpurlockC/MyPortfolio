import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "../Styles/Projects.css";

const Services = () => {
  const skillList = [
    {
      id: 1,
      name: "JavaScript",
      description: "Experienced in modern JavaScript, including ES6+ features.",
    },
    {
      id: 2,
      name: "React",
      description: "Proficient in building SPAs using React, React Router, and hooks.",
    },
    {
      id: 3,
      name: "Node.js",
      description: "Skilled in building RESTful APIs using Node.js and Express.",
    },
    {
      id: 4,
      name: "CSS/Sass",
      description: "Expert in CSS, responsive design, and preprocessors like Sass.",
    },
    {
      id: 5,
      name: "Git",
      description: "Experienced with version control using Git and GitHub.",
    },
  ];

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <div className="services">
        <h2>Skills</h2>
        <div className="wrapper">
          {skillList.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <Card>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
