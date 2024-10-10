import React from "react";
import data from "./dataProject";
import { motion } from "framer-motion";
import SVGImg from "./SVGImg";
import "../sass/Project.scss";

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
            <div class="circle-cover">
              <div class="circle-deco circle-red"></div>
              <div class="circle-deco circle-yellow"></div>
              <div class="circle-deco circle-green"></div>
            </div>

            <div className="projectlist__card__name">$ {D.name}</div>
            <div className="projectlist__card__des">
              <p className="text-project">Description:</p>
              <p>{D.des}</p>
            </div>
            <div className="projectlist__card__des">
              <p className="text-project">Role:</p> <p>{D.role}</p>
            </div>
            <div className="projectlist__card__date">
              <p className="text-project">Date:</p>
              <p>{D.Date}</p>
            </div>
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

export default function Project() {
  return (
    <div className="projects">
      <div className="projects__title">Projects</div>
      <div className="projects__dot"></div>
      <ProjectList data={data} />
    </div>
  );
}
