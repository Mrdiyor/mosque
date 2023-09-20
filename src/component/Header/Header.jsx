// import React from 'react'
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <div className="home">
        <div className="content">
          <h2>
            Plan <span>Pray</span>
          </h2>
          <h1>
            Pray <span>today</span>, tomorrow may be late
          </h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            aliquid odio. Nostrum, error sit! Laboriosam repudiandae
            perspiciatis optio nisi vel amet blanditiis deserunt! Placeat, ad
            et? Sunt nisi porro exercitationem.
          </p>
        </div>
        <div className="img-wrapper">
          <img src="../../../public/assets/mosque.png" alt="png" />
        </div>
      </div>
    </div>
  );
};

export default Header;
