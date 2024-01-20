import "../sass/Navbar.scss";
import { NavLink } from "react-router-dom";
import { Col } from "antd";

function Navbar() {
  return (
    <div className="navbar">
      <Col span={12} offset={0} className="signature">
        JosephTran
      </Col>

      <Col span={12} offset={0}>
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
    </div>
  );
}

export default Navbar;
