import React from "react";
/***** svg *****/
import Svg1 from "../../assets/svg/home-img1.svg";

const homeContent1 = () => {
  return (
    <>
    {/***** Home Content 1 *****/}
      <div className="box-content1">
        <div className="content1-txt">
        <div>
          <h1>What would you like to learn today?</h1>
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
