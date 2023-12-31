// import React from 'react'
import "./Navbar.scss";

const Navbar = () => {
  let icon = document.querySelector(".menu-icon");
  let menu = document.querySelector(".menu");

  icon.addEventListener("click", () => {
    menu.classList.add("open");
  });

  return (
    <div>
      <div className="navbar">
        <a href="/" className="logo">
          <img src="../../../public/assets/logo.png.crdownload" alt="png" />
        </a>
        <div className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Beautiful Mosques</a>
          </li>
          <li>
            <a href="/">Imams</a>
          </li>
        </div>

        <div className="menu-icon">
          <i className="ri-menu-line"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
