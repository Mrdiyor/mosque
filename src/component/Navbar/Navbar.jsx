// import React from 'react'
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <a href="/" className="logo">
          <img src="../../../public/assets/logo.png.crdownload" alt="png" />
        </a>
        <div className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/">Beautiful Mosques</a></li>
          <li><a href="/">Locations</a></li>
          <li><a href="/">Imams</a></li>
          <li><a href="/">Time Prayers</a></li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
