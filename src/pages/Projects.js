import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import Bowling_Avg_Calculator from "../images/Bowling_Avg_Calculator.png";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Marketing site design & build",
      imageUrl: Bowling_Avg_Calculator,
    },
    {
      id: 2,
      name: "Glide Utilities",
      imageUrl: project2,
    },
    {
      id: 3,
      name: "Noton High Street Product",
      imageUrl: project1,
    },
    {
      id: 4,
      name: "Gifts and Voucher Today",
      imageUrl: project3,
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