import React from "react";
import "../sass/In4.scss";
import { motion } from "framer-motion";

function In4({ data }) {
  const moveLeft = {
    offscreen: {
      x: -1000,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };

  const moveRight = {
    offscreen: {
      x: 1000,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.5,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="in4"
    >
      <motion.div variants={moveLeft} className="in4__inf4">
        <span className="in4__inf4__name">{data.Name}</span>
        <span className="in4__inf4__des">{data.Des}</span>
      </motion.div>
      <motion.img
        variants={moveRight}
        className="in4__img"
        src={data.Img}
        alt={data.Name}
      />
    </motion.div>
  );
}

export default In4;
