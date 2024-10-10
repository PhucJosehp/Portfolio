import React from "react";
import "../sass/Navbar.scss";

function MenuItem({ isOpen, tabs, handleNavbarClick }) {
  return isOpen ? (
    <div
      data-bs-toggle="collapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className="menu-item-toggle"
    >
      {tabs.map((D, idx) => (
        <div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          key={idx}
          onClick={() => handleNavbarClick(D.ref)}
          className={"menu-items"}
        >
          {D.name}
        </div>
      ))}
    </div>
  ) : (
    ""
  );
}

export default MenuItem;
