import React from "react";
import NavTwo from "../components/NavTwo";
import Cloudy from "../assets/cloudyicon.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";


const Info = () => {
  return (
    <div className="Info">
      <NavTwo />
      <div className="info__container">
        <div className="info__top">
          <h1 className="info__search">Search Results: "New York"</h1>
          <div class="search__temp--change">
            <div class="temp__change--slider"></div>
            <button class="btn__temp-f click">°C</button>
            <button class="btn__temp-c click">°F</button>
          </div>
        </div>
        <div className="info__data">
          <div className="info__current">
            <div className="info__current--top">
              <div className="current__img">
                <img src={Cloudy} alt="" className="current__img--img" />
              </div>
              <div className="current__info">
                <h1 className="current__ammount">24°C</h1>
                <h1 className="current__feel">Partly cloudy</h1>
              </div>
            </div>
            <div className="info__current--bottom">
              <h1 className="current__bottom">Feels Like : 15.1°C</h1>
              <h1 className="current__bottom">Humidity : 0</h1>
            </div>
            <div className="see__more">
                <h1 className='see__text'>See More</h1>
                <FontAwesomeIcon className='arrow__more' icon={faArrowPointer} />
            </div>
          </div>
          <div className="info__air-quality"></div>
          <div className="info__alerts"></div>
          <div className="info__forecast"></div>
          <div className="info__riseset"></div>
        </div>
      </div>
    </div>
  );
};

export default Info;
