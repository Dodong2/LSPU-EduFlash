import React from "react";

// importing components from api service
import { SampleFunction } from "../components/config/api-service";

const Home = () => {
  return(
    <>
      HOME PAGE
      <SampleFunction sampleParameter='hello, i am a parameter value!'/>
    </>
  );
}

export default Home;