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
    },
    {
      id: 2,
      name: "3-column-preview",
      imageUrl: project2,
      link: "https://3-column-preview-csdesign.netlify.app",
    },
    {
      id: 3,
      name: "stats-preview",
      imageUrl: project1,
      link: "https://stats-preview-csdesigns.netlify.app",
    },
    {
      id: 4,
      name: "profile-card-component",
      imageUrl: project3,
      link: "https://profile-card-component-csdesigns.netlify.app",
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
                <Card.Link href={item.link} />
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
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