import React from "react";
import Cloudy from "../assets/cloudyicon.gif";
import Rainy from "../assets/rainyicon.gif";
import Snow from "../assets/snowicon.gif";
import Sunny from "../assets/sunny.gif";
import Windy from "../assets/windyicon.gif";

const icons = [Cloudy, Rainy, Snow, Sunny, Windy];
const gridIcons = Array.from({ length: 36 }, (_, i) => icons[i % icons.length]);

const HomeDescription = () => {
  return (
    <div>
      {gridIcons.map((icon, i) => (
        <img src={icon} alt="" className="icons__img" />
      ))}
    </div>
  );
};

export default HomeDescription;
