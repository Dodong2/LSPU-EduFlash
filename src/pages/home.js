import React from "react";

// importing components from api service
// import { SampleFunction } from "../components/config/api-service";

import  MainContainer from '../components/maincontainer/container'
import HomeHeader from "../components/HomeComponents/homeHeader";
import HomeContent1 from "../components/HomeComponents/homeContent1";
import HomeContent2 from "../components/HomeComponents/homeContent2";
const Home = () => {
  return(
    <>
    <MainContainer container={<>
      <HomeHeader />
      <br/>
      <HomeContent1 />
      <HomeContent2 />
      </>} />
    </>
  );
}

export default Home;