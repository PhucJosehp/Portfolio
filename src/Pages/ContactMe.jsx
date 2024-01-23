import React from "react";
import Navbar from "./../components/Navbar";
import "../sass/Contact.scss";
import {
  FacebookFilled,
  LinkedinFilled,
  InstagramFilled,
  GithubFilled,
} from "@ant-design/icons";

import { motion } from "framer-motion";

import me from "../assets/z4736801566112_18e16899287926daf164b148a4061633.jpg";
import tiktok from "../assets/TikTok.png";
function In4() {
  const Moveup = {
    offscreen: {
      y: 500,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };

  const MoveRight = {
    offscreen: {
      x: 500,
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

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="in4"
    >
      <motion.div variants={Moveup} className="in4__inf4">
        <span className="in4__inf4__name">CONTACT ME</span>
        <span className="in4__inf4__des">
          If you want to connect with me then,
        </span>
        <div className="fingerdown">👇</div>
        <div className="contact">
          <div className="contact__inf phone">
            <span>📞 (+84) 886 017 400</span>
            <span>✉ thmphuc0805@gmail.com</span>
          </div>
          <div className="contact__inf social">
            <a
              className="contact__link"
              href="https://www.facebook.com/tranhongminhphuc.vn/"
            >
              <FacebookFilled className="contact__icon" />
            </a>
            <a
              className="contact__link"
              href="https://www.linkedin.com/in/tran-phuc-139685252/"
            >
              <LinkedinFilled className="contact__icon" />
            </a>
            <a
              className="contact__link"
              href="https://www.tiktok.com/@dy9er3xi124k?_t=8jAOuyseoq2&_r=1"
            >
              <img src={tiktok} alt="tiktok img" className="imgTikTok" />
            </a>

            <a
              className="contact__link"
              href="https://www.instagram.com/tran_phuc_0805"
            >
              <InstagramFilled className="contact__icon" />
            </a>

            <a className="contact__link" href="https://github.com/PhucJosehp">
              <GithubFilled className="contact__icon" />
            </a>
          </div>
        </div>
      </motion.div>
      <motion.img
        variants={MoveRight}
        className="in4__img-contact"
        src={me}
        alt="cool me"
      />
    </motion.div>
  );
}

function ContactMe() {
  return (
    <div>
      <Navbar />
      <In4 />
    </div>
  );
}

export default ContactMe;
