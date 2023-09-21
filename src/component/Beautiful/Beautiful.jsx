// import React from 'react'
import "./Beautiful.scss";

const Beautiful = () => {
  return (
    <div>
      <div className="mosques">
        <div className="mosque1 card">
          <div className="img">
            <img src="../../../public/assets/image-37.webp" alt="mosque" />
          </div>
          <div className="content">
            <h2 className="title">Sultan Salahuddin Abdul Aziz Mosque</h2>
            <h3 className="country">Malaysia</h3>
            <p className="des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              suscipit quas et porro, ratione reprehenderit?
            </p>
          </div>
        </div>

        <div className="mosque2 card">
          <div className="img">
            <img src="../../../public/assets/turk.webp" alt="mosque" />
          </div>
          <div className="content">
            <h2 className="title">Blue Mosque</h2>
            <h3 className="country">Turkey</h3>
            <p className="des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              suscipit quas et porro, ratione reprehenderit?
            </p>
          </div>
        </div>

        <div className="mosque3 card">
          <div className="img">
            <img src="../../../public/assets/uae.webp" alt="mosque" />
          </div>
          <div className="content">
            <h2 className="title">Sheikh Zayed Grand Mosque</h2>
            <h3 className="country">UAE</h3>
            <p className="des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              suscipit quas et porro, ratione reprehenderit?
            </p>
          </div>
        </div>

        <div className="mosque4 card">
          <div className="img">
            <img src="../../../public/assets/singapore.jpg" alt="mosque" />
          </div>
          <div className="content">
            <h2 className="title">Shaik Abdul Gafoor bin Shaik Hyder</h2>
            <h3 className="country">Singapore</h3>
            <p className="des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              suscipit quas et porro, ratione reprehenderit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beautiful;
