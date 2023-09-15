import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { lip_care } from "../Data/Lips/lip_care";
import { eye_care } from "../Data/Eyes/eye_care";
import { face_care } from "../Data/Face/face_care";
import {nail_care} from "../Data/Nails/nail_care";
const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
      <HomeProductSection data={lip_care} section={"Lip Care"} />
        <HomeProductSection data={eye_care} section={"Eye Care"} />
        <HomeProductSection data={face_care} section={"Face Care"} />
        <HomeProductSection data={nail_care} section={"nail care"} />
      </div>

      
    </div>
  );
};

export default Homepage;
