
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavTwo from "../components/NavTwo";
import Cloudy from "../assets/cloudyicon.gif";
import Humid from "../assets/raindrop.gif";
import Rainy2 from "../assets/rainy2.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingCurrent from "../components/LoadingCurrent";

const Current = ( ) => {
    const { city } = useParams()
    const [weatherData, setWeatherData] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=af0baaec05d9499b85f41128250111&q=${city}&days=7&aqi=yes&alerts=yes`,
        );
        setWeatherData(data);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    getWeather();
  }, [city]);

  if (loading) {
    return (
      <div className="Current">
      <NavTwo />
      <div className="info__container">
        <div className="info__top">
          <div className="info__top--left">
            <FontAwesomeIcon className="info__search1" icon={faArrowLeft} onClick={()=>{navigate(-1)}} />
            <h1>Current Conditions for " "</h1>
          </div>
          <div class="search__temp--change">
            <div class="temp__change--slider"></div>
            <button class="btn__temp-f click">°C</button>
            <button class="btn__temp-c click">°F</button>
          </div>
        </div>
        <LoadingCurrent />
      </div>
    </div>
    );
  }

  return (
    <div className="Current">
      <NavTwo />
      <div className="info__container">
        <div className="info__top">
          <div className="info__top--left">
            <FontAwesomeIcon className="info__search1" icon={faArrowLeft} onClick={()=>{navigate(-1)}} />
            <h1>Current Conditions for "{weatherData.location.name},{" "}
            {weatherData.location.country}"</h1>
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
                  <h1 className="current__temp">{Math.round(weatherData.current.temp_f)}°F</h1>
                  <h1 className="current__temp--text">{weatherData.current.condition.text}</h1>
                </div>
              </div>
              <div className="current-1">
                <img src={Rainy2} alt="" className="current__img--1" />
                <div className="current__prehum--descr">
                  <div className="current__precipitation">Precipitation</div>
                  <div className="current__precipitation--data">{weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%</div>
                </div>
              </div>
              <div className="current-1 margin-no">
                <img src={Humid} alt="" className="current__img--1" />
                <div className="current__prehum--descr">
                  <div className="current__precipitation">Humidity</div>
                  <div className="current__precipitation--data">{weatherData.current.humidity}%</div>
                </div>
              </div>
            </div>
            <div className="current__middle">
              <div className="current-1">
                <div className="current__more">
                  <div className="current__text-1">Feels Like: {Math.round(weatherData.current.feelslike_f)}°F</div>
                  <div className="current__text-1">Heat Index: {Math.round(weatherData.current.heatindex_f)}°F</div>
                  <div className="current__text-1">Dewpoint: {Math.round(weatherData.current.dewpoint_f)}°F</div>
                  <div className="current__text-1">GTI: {Math.round(weatherData.current.gti)}</div>
                </div>
              </div>
              <div className="current-1">
                <div className="current__more">
                  <div className="current__text-1">Wind: {Math.round(weatherData.current.wind_kph)}</div>
                  <div className="current__text-1">Wind Direction: {weatherData.current.wind_dir}</div>
                  <div className="current__text-1">Wind Chill: {Math.round(weatherData.current.windchill_f)}°F</div>
                  <div className="current__text-1">Visibility: {Math.round(weatherData.current.vis_km)} km</div>
                </div>
              </div>
              <div className="current-1 current-1-2 margin-no">
                <div className="current__text-12">UV: {Math.round(weatherData.current.uv)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
