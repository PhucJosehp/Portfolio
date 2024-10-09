import React from "react";
import "../sass/Home.scss";
import Infor from "../components/Home";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Project from "../components/Project";
import ContactMe from "../components/ContactMe";

function Home({
  homeRef,
  interestRef,
  educationRef,
  projectsRef,
  contactMeRef,
}) {
  return (
    <div className="cover">
      {/* Attach the passed refs to the corresponding sections */}
      <div ref={homeRef}>
        <Infor />
      </div>
      <div ref={interestRef}>
        <AboutMe />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={projectsRef}>
        <Project />
      </div>
      <div ref={contactMeRef}>
        <ContactMe />
      </div>
    </div>
  );
}

export default Home;
