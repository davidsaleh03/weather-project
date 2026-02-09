import React from "react";
import NavTwo from "../components/NavTwo";
import Cloudy from "../assets/cloudyicon.gif";
import Humid from "../assets/raindrop.gif";
import Rainy2 from "../assets/rainy2.gif";
import Sunrise from "../assets/sunrise.gif";
import Sunset from "../assets/sunset.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const Forecast = () => {
  const { city } = useParams()
  return (
    <div className="Forecast">
      <NavTwo />
      <div className="info__container">
        <div className="info__top">
          <FontAwesomeIcon className="info__search" icon={faArrowLeft} />
          <div class="search__temp--change">
            <div class="temp__change--slider"></div>
            <button class="btn__temp-f click">°C</button>
            <button class="btn__temp-c click">°F</button>
          </div>
        </div>
        <div className="info__data">
          <div className="quality__more--module--1">
            <div className="forecast__dates">
              <h1 className="forecast__date-1">02-01</h1>
              <h1 className="forecast__date-1">02-02</h1>
              <h1 className="forecast__date-1">02-03</h1>
              <h1 className="forecast__date-1">02-04</h1>
              <h1 className="forecast__date-1">02-05</h1>
              <h1 className="forecast__date-1">02-06</h1>
              <h1 className="forecast__date-1">02-07</h1>
            </div>
          </div>
          <div className="quality__more--module--2">
            <div className="quality__more--module-top">
              <div className="quality__more--module-1">
                <img src={Cloudy} alt="" className="forecast__img22" />
                <div className="quality__more--container22">
                  <h1>High: <span className="less__bold">100°C</span></h1>
                  <h1>Low: <span className="less__bold">100°C</span></h1>
                </div>
              </div>
              <div className="quality__more--module-1">
                <div className="forecast__humid2">
                  <img src={Humid} alt="" />
                  <h1 className="humid2__data">100%</h1>
                </div>
                <div className="forecast__humid2">
                  <img src={Rainy2} alt="" />
                  <h1 className="humid2__data">100%</h1>
                </div>
              </div>
              <div className="quality__more--module-1">
                <div className="forecast__condition--container">
                  <h1 className="forecast__condition--h1">UV: <span className="less__bold">0.7</span></h1>
                  <h1 className="forecast__condition--h1">CO: <span className="less__bold">370</span></h1>
                  <h1 className="forecast__condition--h1">NO2: <span className="less__bold">55</span></h1>
                  <h1 className="forecast__condition--h1">O3: <span className="less__bold">29</span></h1>
                  <h1 className="forecast__condition--h1">SO2: <span className="less__bold">18</span></h1>
                </div>
              </div>
              <div className="quality__more--module-1">
                <div className="forecast__humid2">
                  <img src={Sunrise} alt="" />
                  <h1 className="humid2__data">06:43</h1>
                </div>
                <div className="forecast__humid2">
                  <img src={Sunset} alt="" />
                  <h1 className="humid2__data">06:43</h1>
                </div>
              </div>
            </div>
            <div className="quality__more--module-bottom">
              <div className="quality__more--module-2">
                <div className="forecast__hourly--container">
                  <div className="forecast__hourly">
                    <h1 className="forecast__hourly--title">10:00</h1>
                    <div className="forecast__hourly--data">
                      <img src={Cloudy} alt="" className="hourly__img" />
                      <h1>Partly Cloudy</h1>
                      <h1>100°C</h1>
                      <div className="hourly__inner"></div>
                    </div>
                  </div>
                  <div className="forecast__hourly">
                    <h1 className="forecast__hourly--title">10:00</h1>
                    <div className="forecast__hourly--data">
                      <img src={Cloudy} alt="" className="hourly__img" />
                      <h1>Partly Cloudy</h1>
                      <h1>100°C</h1>
                      <div className="hourly__inner"></div>
                    </div>
                  </div>
                  <div className="forecast__hourly">
                    <h1 className="forecast__hourly--title">10:00</h1>
                    <div className="forecast__hourly--data">
                      <img src={Cloudy} alt="" className="hourly__img" />
                      <h1>Partly Cloudy</h1>
                      <h1>100°C</h1>
                      <div className="hourly__inner"></div>
                    </div>
                  </div>
                  <div className="forecast__hourly">
                    <h1 className="forecast__hourly--title">10:00</h1>
                    <div className="forecast__hourly--data">
                      <img src={Cloudy} alt="" className="hourly__img" />
                      <h1>Partly Cloudy</h1>
                      <h1>100°C</h1>
                      <div className="hourly__inner"></div>
                    </div>
                  </div>
                  <div className="forecast__hourly">
                    <h1 className="forecast__hourly--title">10:00</h1>
                    <div className="forecast__hourly--data">
                      <img src={Cloudy} alt="" className="hourly__img" />
                      <h1>Partly Cloudy</h1>
                      <h1>100°C</h1>
                      <div className="hourly__inner"></div>
                    </div>
                  </div>
                  <div className="forecast__hourly">
                    <h1 className="forecast__hourly--title">10:00</h1>
                    <div className="forecast__hourly--data">
                      <img src={Cloudy} alt="" className="hourly__img" />
                      <h1>Partly Cloudy</h1>
                      <h1>100°C</h1>
                      <div className="hourly__inner"></div>
                    </div>
                  </div>
                  <div className="forecast__hourly">
                    <h1 className="forecast__hourly--title">10:00</h1>
                    <div className="forecast__hourly--data">
                      <img src={Cloudy} alt="" className="hourly__img" />
                      <h1>Partly Cloudy</h1>
                      <h1>100°C</h1>
                      <div className="hourly__inner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
