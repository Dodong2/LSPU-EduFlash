import React from "react";
// import NoProfile from "../../assets/img/no-profile.png";
import NoProfile from "../../assets/img/bruh.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className='profile-info'>
          <span>25 Aug</span>
          <h1>Hi, kathryn</h1>
        </div>
        <div className='profile-img'>
          <img src={NoProfile} alt="profile" />
        </div>
      </div>
    </>
  );
};

export default Header;
