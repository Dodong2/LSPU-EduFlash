import React from "react";
import Svg1 from "../../assets/svg/home-img1.svg";

const homeContent1 = () => {
  return (
    <>
      <div className="box-content1">
        <div className="content1-txt">
        <div>
          <h1>What would <br/>you like to learn <br/> today?</h1>
          <button>Get started</button>
        </div>
        </div>
        <div className="content1-img">
          <img src={Svg1} alt="home-svg1" />
        </div>
      </div>
    </>
  );
};

export default homeContent1;
