import React from "react";
import Header from "../components/home-components/header";
import Introduction from "../components/home-components/introduction";
import Categories from "../components/home-components/categories";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <Introduction />
        <Categories/>
      </div>
    </>
  );
};

export default Home;
