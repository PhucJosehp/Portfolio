import "../sass/Navbar.scss";
import { NavLink } from "react-router-dom";
import { Col } from "antd";
import { MenuToggle } from "./MenuToggle";
import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import MenuItem from "./MenuItem";

function Navbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      initial={false}
      ref={containerRef}
      className="navbar navbar-expand-md"
    >
      <Col span={12} offset={0} className="signature">
        JosephTran
      </Col>

      <MenuToggle toggle={() => toggleOpen()}> </MenuToggle>
      <MenuItem isOpen={isOpen} />

      <Col span={12} offset={0} className="collapse navbar-collapse">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/interest">
          Interest
        </NavLink>
        <NavLink className="navlink" to="/education">
          Education
        </NavLink>
        <NavLink className="navlink" to="/projects">
          Projects
        </NavLink>
        <NavLink className="navlink" to="/contact">
          Contact Me
        </NavLink>
      </Col>
    </motion.div>
  );
}

export default Navbar;
