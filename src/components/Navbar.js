import "../sass/Navbar.scss";
import React from "react";
import { Col } from "antd";
import { MenuToggle } from "./MenuToggle";
import { useCycle } from "framer-motion";
import MenuItem from "./MenuItem";

function Navbar({
  homeRef,
  interestRef,
  educationRef,
  projectsRef,
  contactMeRef,
}) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  // Function to scroll to the section based on the ref passed
  function handleNavbarClick(ref) {
    const offset = 100; // Define the offset in pixels
    const element = ref.current;

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  }

  return (
    <navbar className="navbarCustom navbar-expand-md">
      <Col span={12} offset={0} className="signature">
        JosephTran
      </Col>

      <MenuToggle toggle={() => toggleOpen()} />
      <MenuItem isOpen={isOpen} />

      <Col span={12} offset={0} className="collapse navbar-collapse">
        {/* Link the navbar items to the corresponding refs */}
        <div onClick={() => handleNavbarClick(homeRef)} className="navlink">
          Home
        </div>
        <div onClick={() => handleNavbarClick(interestRef)} className="navlink">
          About Me
        </div>
        <div
          onClick={() => handleNavbarClick(educationRef)}
          className="navlink"
        >
          Education
        </div>
        <div onClick={() => handleNavbarClick(projectsRef)} className="navlink">
          Projects
        </div>
        <div
          onClick={() => handleNavbarClick(contactMeRef)}
          className="navlink"
        >
          Contact Me
        </div>
      </Col>
    </navbar>
  );
}

export default Navbar;
