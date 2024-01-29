import React from "react";
import Navbar from "./../components/Navbar";
import In4 from "../components/In4";
import Proj from "../assets/project.png";
import SVGImg from "../components/SVGImg";
import dataProject from "../components/dataProject";
import { NavLink } from "react-router-dom";
import "../sass/Project.scss";

import { motion } from "framer-motion";

const dataIn4 = {
  Name: "PROJECTS",
  Des: "My projects in school and self-project include software and information system projects",
  Img: Proj,
};

function ProjectList({ data }) {
  const cardVariants = {
    offscreen: {
      y: 500,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };

  return (
    <div className="projectlist">
      {data.map((D, idx) => (
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.a
            variants={cardVariants}
            href={D.git}
            target="blank"
            className="projectlist__card"
            key={idx}
          >
            <div className="projectlist__card__name">{D.name}</div>
            <div className="projectlist__card__des">{D.des}</div>
            <div className="projectlist__card__date">{D.Date}</div>
            <div className="projectlist__card__icon">
              {D.langue.map((LG, idx1) => (
                <SVGImg data={LG} key={idx1} />
              ))}
            </div>
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
}

function Project() {
  return (
    <div>
      <Navbar />
      <In4 data={dataIn4} />
      <ProjectList data={dataProject} />
      <NavLink to="https://github.com/PhucJosehp" className="btn-view-more">
        Veiw more &gt;
      </NavLink>
    </div>
  );
}

export default Project;
