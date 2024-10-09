import React from "react";
import "../sass/AboutMe.scss";

export default function AboutMe() {
  const skills = [
    "Figma",
    "HTML",
    "CSS",
    "React",
    "JavaScript",
    "SASS",
    "MSSQL",
    "MySQL",
    "Github",
    "Responsive Design",
    "Redux",
    "RESTful  API",
  ];
  return (
    <div className="about-me">
      <div className="about-me__title">About Me</div>
      <div className="about-me__dot"></div>
      <div className="about-me__description">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </div>

      <div className="about-me__detail">
        <div className="about-me__detail__infor">
          <p className="about-me__detail__title">Get to know about me</p>
          <p className="about-me__detail__description">
            My name is Tran Hong Minh Phuc, final year student at University of
            Science (HCMUS), Major in Computer Science.
          </p>
          <p className="about-me__detail__description">
            I'm a Frontend Focused Web Developer building and managing the
            Front-end of Websites and Web Applications that leads to the success
            of the overall product.
          </p>
          <p className="about-me__detail__description">
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>
        <div className="about-me__detail__infor">
          <p className="about-me__detail__title">My Skills</p>
          <div className="about-me__detail__skills">
            {skills.map((item) => (
              <div className="about-me__detail__skills__item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
