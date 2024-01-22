import React from "react";
import "../sass/Home.scss";
import Navbar from "../components/Navbar";

import photo from "../assets/Self_1.jpg";
import FE from "../assets/Frontend.png";
import DB from "../assets/Database.png";
import DS from "../assets/Design.png";

import { motion } from "framer-motion";
import { FloatButton } from "antd";

const techdata = [
  {
    Name: "Frontend",
    Des: [
      {
        des: "Building app with HTML/CSS(SCSS) and Reactjs.",
      },
      { des: "Experience in building react native app." },
      {
        des: "HTML/CSS(SCSS), ReactJS, Reducx.",
      },
    ],
    img: FE,
  },
  {
    Name: "Database",
    Des: [
      {
        des: "Have experience working with RDBs such as SQL and MySQL along with Oracle such as MongoDB.",
      },
      { des: "Building small data warehouse with SSIS." },
      { des: "Designing database." },
    ],
    img: DB,
  },
  {
    Name: "Designing",
    Des: [
      {
        des: "Design user interface template with figma.",
      },
      {
        des: "Experience in building react native app.",
      },
    ],
    img: DS,
  },
];

function In4() {
  const cardVariants = {
    offscreen: {
      y: 300,
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
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="infor"
    >
      <motion.div variants={cardVariants}>
        <div className="infor__name">Tran Hong Minh Phuc (Joseph)</div>
        <div className="infor__JOB">&lt;Frontend developer&gt;</div>
        <div className="infor__describe">
          Final year student at University of Science (HCMUS), Major in
          Information system. Passionate with building application, enjoy design
          user interface and becoming a fullstack developer.
        </div>
      </motion.div>
      <motion.img
        variants={cardVariants}
        src={photo}
        className="img__self"
        alt="My self"
      />
    </motion.div>
  );
}

function TechSkill() {
  const moveLeft = {
    offscreen: {
      x: -120,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };

  const moveRight = {
    offscreen: {
      x: 120,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.5,
      },
    },
  };

  return (
    <div className="tech">
      <div className="tech__title">Technical Skills</div>
      {techdata.map((data, idx) => (
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="tech__skill"
          key={idx}
        >
          <motion.img
            variants={moveLeft}
            className="tech__skill__img"
            src={data.img}
            alt={data.Name}
          />
          <motion.div variants={moveRight} className="tech__skill__coverdata">
            <span className="tech__skill__name">{data.Name}</span>
            {data.Des.map((describe, idx) => (
              <div className="tech__skill__des" key={idx}>
                💪{describe.des}
              </div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      <Navbar />
      <In4 />
      <TechSkill />
      <FloatButton.BackTop />
    </div>
  );
}

export default Home;
