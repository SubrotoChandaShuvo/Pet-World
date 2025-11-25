import React from "react";
import Slider from "../component/Slider";
import PopularSection from "../component/PopularSection";
import OurVets from "../component/OurVets";
import WinterCareTips from "../component/WinterCareTips";
import "animate.css";

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <h1
        className="
        animate__animated animate__zoomIn
         text-center
         text-2xl md:text-4xl lg:text-4xl font-bold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
        bg-clip-text text-transparent py-3"
      >
        Welcome to Pet World
      </h1>

      <Slider />
      <PopularSection></PopularSection>
      <OurVets></OurVets>
      <WinterCareTips></WinterCareTips>
    </div>
  );
};

export default Home;
