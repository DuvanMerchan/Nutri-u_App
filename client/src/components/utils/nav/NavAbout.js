import React from "react";
import "./nav.css";

export const NavAbout = () => {
  return (
    <>
      <li class="nav-item dropdown">
        {" "}
        <a
          class="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          About us
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a class="dropdown-item " href="/contact">
              Contact
            </a>
          </li>
          <li>
            <a class="dropdown-item " href="/service">
              Service
            </a>
          </li>
          <li>
            <a class="dropdown-item " href="/legal">
              Legal
            </a>
          </li>
        </ul>
      </li>
    </>
  );
};
