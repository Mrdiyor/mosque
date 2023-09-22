// import React from 'react'
import "./Imams.scss";

const Imams = () => {
  return (
    <div>
      <div className="imams">
        <div className="imam">
          <div className="img">
            <img src="../../../public/assets/zair.webp" alt="zair naik" />
          </div>
          <div className="content">
            <h2 className="name">Dr Zair Naik</h2>
            <h3 className="sub">India</h3>
            <p className="des">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              earum, voluptas alias distinctio vero dolor?
            </p>
          </div>
        </div>

        <div className="imam">
          <div className="img">
            <img src="../../../public/assets/luyax.webp" alt="luyax" />
          </div>
          <div className="content">
            <h2 className="name">Muhammad Al Luhaidan</h2>
            <h3 className="sub">Saudi Arabia</h3>
            <p className="des">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              earum, voluptas alias distinctio vero dolor?
            </p>
          </div>
        </div>

        <div className="imam yusuf">
          <div className="img">
            <img src="../../../public/assets/yusuf.webp" alt="yusuf estes" />
          </div>
          <div className="content">
            <h2 className="name">Yusuf Estes</h2>
            <h3 className="sub">USA</h3>
            <p className="des">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              earum, voluptas alias distinctio vero dolor?
            </p>
          </div>
        </div>

        <div className="imam">
          <div className="img">
            <img src="../../../public/assets/mishari.webp" alt="mishari rashid" />
          </div>
          <div className="content">
            <h2 className="name">Mishari Rashid al Afasy</h2>
            <h3 className="sub">Saudi Arabia</h3>
            <p className="des">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              earum, voluptas alias distinctio vero dolor?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imams;
