import "../sass/Navbar.scss";
import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth > 960);

  const navbarTabs = [
    {
      name: "Home",
      ref: homeRef,
    },
    {
      name: "About Me",
      ref: interestRef,
    },
    {
      name: "Education",
      ref: educationRef,
    },
    {
      name: "Projects",
      ref: projectsRef,
    },
    {
      name: "Contact Me",
      ref: contactMeRef,
    },
  ];

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

  useEffect(() => {
    // Function to handle screen resize
    const handleResize = () => {
      setIsMobile(window.innerWidth > 960);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <navbar className="navbarCustom navbar-expand-md">
      <div className="signature">JosephTran</div>

      <MenuToggle toggle={() => toggleOpen()} isOpen={!isMobile} />
      <MenuItem
        isOpen={isOpen}
        tabs={navbarTabs}
        handleNavbarClick={handleNavbarClick}
      />

      {isMobile && (
        <div className="navbar__tabs">
          {navbarTabs.map((item) => (
            <div
              onClick={() => handleNavbarClick(item.ref)}
              className="navlink"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </navbar>
  );
}

export default Navbar;
