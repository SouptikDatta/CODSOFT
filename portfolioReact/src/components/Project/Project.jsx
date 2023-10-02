import React, { useContext } from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Social from "../../img/socialMedia.png";
import Ecommerce from "../../img/ecommerce.png";
import GymApp from "../../img/gymapp.png";
import TravelPage from "../../img/travelpage.png";
import { themeContext } from "../../Context";
const Project = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="project" id="project">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Made</span>
      <span>Projects</span>
      <span>Click on below projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="project-slider"
      >
        <SwiperSlide>
          <a href="https://socialoo-suchi-soup.netlify.app/" target="_blank"><img src={Social} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://souptik-golds-gym.netlify.app/" target="_blank"><img src={GymApp} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <a href=""><img src={TravelPage} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project;