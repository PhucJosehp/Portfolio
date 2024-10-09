import React from "react";
import ContactIcons from "../components/ContactIcons";
import TypeWriterEffect from "./TypeWriterEffect";
import { motion } from "framer-motion";
import photo from "../assets/AboutMe.png";
import "../sass/Home.scss";

function Infor() {
  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="infor"
      >
        <div className="infor__cover">
          <div className="infor__name">
            {TypeWriterEffect("Hi, I am Joseph Tran ")}
          </div>
          <div className="infor__JOB text-flicker-in-glow">
            &lt;Frontend developer&gt;
          </div>
          <div className="infor__describe text-focus-in">
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product
          </div>
          <ContactIcons />
        </div>

        <motion.img
          src={photo}
          className="img__self bounce-in-right"
          alt="My self"
        />
      </motion.div>
    </>
  );
}

export default Infor;
