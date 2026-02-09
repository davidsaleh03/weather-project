import React from "react";
import NavTwo from "../components/NavTwo";
import Cloudy from "../assets/cloudyicon.gif";
import Humid from "../assets/raindrop.gif";
import Rainy2 from "../assets/rainy2.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const Current = () => {
    const { city } = useParams()
  return (
    <div className="Current">
      <NavTwo />
      <div className="info__container">
        <div className="info__top">
          <div className="info__top--left">
            <FontAwesomeIcon className="info__search" icon={faArrowLeft} />
            <h1>Current Conditions for "New York"</h1>
          </div>
          <div class="search__temp--change">
            <div class="temp__change--slider"></div>
            <button class="btn__temp-f click">°C</button>
            <button class="btn__temp-c click">°F</button>
          </div>
        </div>
        <div className="info__data">
          <div className="quality__more--module">
            <div className="current__top">
              <div className="current-1">
                <img src={Cloudy} alt="" className="current__img--1" />
                <div className="current__description">
                  <h1 className="current__temp">101°C</h1>
                  <h1 className="current__temp--text">Partly Cloudy</h1>
                </div>
              </div>
              <div className="current-1">
                <img src={Rainy2} alt="" className="current__img--1" />
                <div className="current__prehum--descr">
                  <div className="current__precipitation">Precipitation</div>
                  <div className="current__precipitation--data">100%</div>
                </div>
              </div>
              <div className="current-1 margin-no">
                <img src={Humid} alt="" className="current__img--1" />
                <div className="current__prehum--descr">
                  <div className="current__precipitation">Humidity</div>
                  <div className="current__precipitation--data">100%</div>
                </div>
              </div>
            </div>
            <div className="current__middle">
              <div className="current-1">
                <div className="current__more">
                  <div className="current__text-1">Feels Like: 101°C</div>
                  <div className="current__text-1">Heat Index: 101°C</div>
                  <div className="current__text-1">Dewpoint: 101°C</div>
                  <div className="current__text-1">GTI: 0</div>
                </div>
              </div>
              <div className="current-1">
                <div className="current__more">
                  <div className="current__text-1">Wind: 4kph</div>
                  <div className="current__text-1">Wind Direction: SW</div>
                  <div className="current__text-1">Wind Chill: 60°C</div>
                  <div className="current__text-1">Visibility: 16 km</div>
                </div>
              </div>
              <div className="current-1 current-1-2 margin-no">
                <div className="current__text-12">UV: 0</div>
                {/* <div className="current__text-1">0</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
