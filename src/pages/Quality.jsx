import React from "react";
import NavTwo from "../components/NavTwo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Quality = () => {
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
        setLoading(false);
      }
    };
    getWeather();
  }, [city]);

  if (loading) {
    return (
      <div className="loading-screen">
        <h2>Loading weather for {city}...</h2>
      </div>
    );
  }

  return (
    <div className="Quality">
      <NavTwo />
      <div className="info__container">
        <div className="info__top">
          <div className="info__top--left">
            <FontAwesomeIcon className="info__search1" icon={faArrowLeft} onClick={()=>{navigate(-1)}} />
            <h1>Air Quality for "{weatherData.location.name},{" "}
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
            <div className="quality__more--top-1">
              <div className="quality__interior margin-30">
                <h1 className="quality__title">Carbon Monoxide (CO) Level</h1>
                <h1 className="quality__title__data">{Math.round(weatherData.current.air_quality.co)} PPB</h1>
              </div>
              <div className="quality__interior margin-30">
                <h1 className="quality__title">Nitrogen Dioxide (NO2) Level</h1>
                <h1 className="quality__title__data">{Math.round(weatherData.current.air_quality.no2)} PPB</h1>
              </div>
              <div className="quality__interior margin-30">
                <h1 className="quality__title">Ozone (O3) Level</h1>
                <h1 className="quality__title__data">{Math.round(weatherData.current.air_quality.o3)} PPB</h1>
              </div>
              <div className="quality__interior">
                <h1 className="quality__title">Sulfur Dioxide (SO2)</h1>
                <h1 className="quality__title__data">{Math.round(weatherData.current.air_quality.so2)} PPB</h1>
              </div>
            </div>
            <div className="quality__more--bottom-1">
              <div className="quality__interior margin-30">
                <h1 className="quality__title">US EPA Index</h1>
                <h1 className="quality__title__data">{Math.round(weatherData.current.air_quality["us-epa-index"])}</h1>
              </div>
              <div className="quality__interior margin-30">
                <h1 className="quality__title">GB Defra Index</h1>
                <h1 className="quality__title__data">{Math.round(weatherData.current.air_quality["gb-defra-index"])}</h1>
              </div>
              <div className="quality__interior margin-30">
                <h1 className="quality__title">PM 2.5</h1>
                <h1 className="quality__title__data">{Math.round(weatherData.current.air_quality.pm2_5)}</h1>
              </div>
              <div className="quality__interior">
                <h1 className="quality__title">PM 10</h1>
                <h1 className="quality__title__data">{Math.round(weatherData.current.air_quality.pm10)}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
