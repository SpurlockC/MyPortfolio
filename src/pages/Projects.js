import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import Bowling_Avg_Calculator from "../images/Bowling_Avg_Calculator.png";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Calculator For Bowling Avg",
      imageUrl: Bowling_Avg_Calculator,
      link: "https://bowlingavgcalculator.netlify.app/",
      text: "This is a simple calculator to calculate bowling average made using HTML, CSS and JavaScript.",
    },
    {
      id: 2,
      name: "3-column-preview",
      imageUrl: project2,
      link: "https://3-column-preview-csdesign.netlify.app",
      text: "This is a simple 3-column preview card component made using HTML and CSS.",
    },
    {
      id: 3,
      name: "stats-preview",
      imageUrl: project1,
      link: "https://stats-preview-csdesigns.netlify.app",
      text: "This is a simple stats preview card component made using HTML and CSS.",
    },
    {
      id: 4,
      name: "profile-card-component",
      imageUrl: project3,
      link: "https://profile-card-component-csdesigns.netlify.app",
      text: "This is a simple profile card component made using HTML and CSS.",
    },
  ];

  return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {projectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.id}
            >
              <Card>
                
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
                
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;