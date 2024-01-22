import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Interest",
    link: "/interest",
  },
  {
    name: "Education",
    link: "/education",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact Me",
    link: "/contact",
  },
];

function MenuItem({ isOpen }) {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const variants1 = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return isOpen ? (
    <motion.div
      data-bs-toggle="collapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
      variants={variants}
      className=" row-cols-auto menu navbar-toggler"
    >
      {data.map((D, idx) => (
        <motion.a
          variants={variants1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          key={idx}
          className={
            D.name === "Contact Me"
              ? "col navlink-collapse toggler"
              : "col navlink-collapse toggler"
          }
          href={`http://localhost:3000${D.link}`}
        >
          {D.name}
        </motion.a>
      ))}
    </motion.div>
  ) : (
    ""
  );
}

export default MenuItem;
