import * as React from "react";
import "../sass/Navbar.scss";

export function MenuToggle({ toggle, children, isOpen }) {
  function handleClick() {
    setTimeout(() => {
      toggle();
    }, 500);
  }
  return (
    isOpen && (
      <button
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="btn-toggle"
      >
        <input type="checkbox" id="checkbox" onClick={() => handleClick()} />
        <label for="checkbox" class="toggle">
          <div class="bar bar--top"></div>
          <div class="bar bar--middle"></div>
          <div class="bar bar--bottom"></div>
        </label>
        {children}
      </button>
    )
  );
}
